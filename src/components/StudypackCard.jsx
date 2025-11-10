import React, { useState } from "react"
import { useGetAllHeadingsQuery, useDeleteStudyPackMutation } from "@/lib/api"
import { Unlock, Trash2 } from "lucide-react"
import { useUser } from "@clerk/clerk-react"

export default function StudyPackCards({ contents, error, isLoading }) {
  const [unlockedMap, setUnlockedMap] = useState({}) // { [id]: true }
  const [removedMap, setRemovedMap] = useState({}) // { [id]: true } to hide deleted items locally
  const { data: headings } = useGetAllHeadingsQuery()
  const [deleteStudyPack, { isLoading: deleting }] = useDeleteStudyPackMutation()
  const { user, isLoaded } = useUser()
  const isAdmin = isLoaded && user?.publicMetadata?.role === "admin"

  if (isLoading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-600">Error loading study packs.</div>
  if (!contents || contents.length === 0)
    return <div className="p-4">No study packs available.</div>

  const openUrl = (url) => {
    if (!url) return
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handlePay = (id) => {
    if (confirm("Pay to unlock this study pack?")) {
      setUnlockedMap((m) => ({ ...m, [id]: true }))
    }
  }

  const handleDelete = async (id) => {
    if (!confirm("Delete this study pack? This cannot be undone.")) return
    try {
      await deleteStudyPack(id).unwrap()
      console.log("Deleted:", id)
      setRemovedMap((m) => ({ ...m, [id]: true })) // hide locally
    } catch (err) {
      console.error("Delete failed", err)
      alert("Failed to delete study pack.")
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {contents.map((sp) => {
        const id = sp._id ?? sp.id ?? String(Math.random())
        if (removedMap[id]) return null

        const rawHeadingId = String(
          sp.heading?._id ?? sp.heading ?? sp.headingId ?? ""
        )
        const headingObj = headings?.find(
          (h) => String(h._id) === rawHeadingId || String(h.id) === rawHeadingId
        )

        const headingName =
          headingObj?.name ??
          sp.heading?.name ??
          sp.headingName ??
          "Untitled"
        const topic = sp.topic ?? ""
        const link = sp.link ?? ""
        const assignment = sp.assignment ?? ""
        const paymentstatus = (sp.paymentstatus ?? "Free").toLowerCase()
        const isFree = paymentstatus === "free"
        const isPaid = paymentstatus === "paid"
        const unlocked = !!unlockedMap[id]

        return (
          <article
            key={id}
            className="rounded-lg overflow-hidden border shadow-sm bg-white hover:scale-105 hover:shadow-2xl transition-transform"
          >
            {/* Image section with delete icon overlay */}
            <div className="h-44 bg-gray-100 relative flex items-center justify-center">
              {isAdmin && (
                <button
                  onClick={() => handleDelete(id)}
                  disabled={deleting}
                  aria-label="Delete study pack"
                  title="Delete study pack"
                  className="absolute top-2 right-2 z-20 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 hover:bg-red-50 border border-red-200 text-red-600 shadow-sm"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <img
                src={`/assets/images/sp.jpg`}
                alt={headingName}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Card content */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {topic}
                  </h4>
                </div>

                {/* Status badge */}
                {isFree ? (
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                    Free
                  </span>
                ) : isPaid && unlocked ? (
                  <div
                    title="Unlocked"
                    className="flex items-center gap-1 text-green-700"
                  >
                    <Unlock className="w-5 h-5" />
                    <span className="text-xs font-medium">Unlocked</span>
                  </div>
                ) : (
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                    Paid
                  </span>
                )}
              </div>

              {/* Buttons section */}
              <div className="mt-4 flex flex-wrap gap-2">
                {/* Free: show view + assignment */}
                {isFree && link && (
                  <button
                    type="button"
                    onClick={() => openUrl(link)}
                    className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    View Content
                  </button>
                )}

                {(isFree && assignment) ||
                (isPaid && unlocked && assignment) ? (
                  <button
                    type="button"
                    onClick={() => openUrl(assignment)}
                    className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                  >
                    Assignment
                  </button>
                ) : null}

                {isPaid && !unlocked && (
                  <button
                    type="button"
                    onClick={() => handlePay(id)}
                    className="inline-flex items-center px-3 py-2 text-white text-sm rounded bg-red-600 hover:bg-red-700"
                  >
                    Pay to unlock
                  </button>
                )}

                {isPaid && unlocked && link && (
                  <button
                    type="button"
                    onClick={() => openUrl(link)}
                    className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    View Content
                  </button>
                )}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
