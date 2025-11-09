import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useGetAllHeadingsQuery } from "@/lib/api"
import CreateSP from "@/components/CreateSP"
import StudyPackCards from "@/components/StudypackCard"
import { useGetAllStudyPacksQuery } from "@/lib/api"
import { useUser } from "@clerk/clerk-react"

function StudyPackContentPage() {
  const { subheading } = useParams() // this will receive the slug from the URL: /studypack/:subheading
  const { data: headings, isLoading, error } = useGetAllHeadingsQuery()
  const { data: studyPacks } = useGetAllStudyPacksQuery()
  const [selectedHeading, setSelectedHeading] = useState(null)

  const { user, isLoaded } = useUser();
  const isAdmin = user?.publicMetadata?.role === "admin";
  useEffect(() => {
    if (!headings || !subheading) return

    const slug = String(subheading).toLowerCase()

    const found = headings.find((h) => {
      const name = String(h.name ?? "")
      const maybeSlug = String(h.slug ?? name).toLowerCase()
      // match explicit slug, normalized name, or exact name
      const normalizedName = name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
      return maybeSlug === slug || normalizedName === slug || name.toLowerCase() === slug
    })

    if (found) setSelectedHeading(found)
  }, [headings, subheading])

  if (isLoading) return <div className="p-6">Loading heading...</div>
  if (error) return <div className="p-6 text-red-600">Failed to load headings</div>
  if (!selectedHeading) return <div className="p-6">Heading not found</div>
 
  const filteredContents = studyPacks?.filter((sp) =>
    sp.heading === (selectedHeading._id ?? selectedHeading.id)
  )
  // pass resolved id and name into CreateSP (heading input will be read-only inside CreateSP)
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <main className="flex-grow container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">{selectedHeading.main} — {selectedHeading.name}</h2>
      

      {isLoaded && isAdmin && (
                    <div className="flex justify-center">
                      <CreateSP
                       
                       heading={selectedHeading}
                       />
                    </div>
                  )}


      <div className="mb-8">
       <StudyPackCards contents={filteredContents} error={error} isLoading={isLoading} />
       </div>

      </main>
    </div>
  )
}

export default StudyPackContentPage