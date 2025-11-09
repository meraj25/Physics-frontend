import React, { useState } from "react"

export default function StudyPackCards({ contents, error, isLoading }) {
  const [unlockedMap, setUnlockedMap] = useState({}) // { [id]: true }

  if (isLoading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-600">Error loading study packs.</div>
  if (!contents || contents.length === 0) return <div className="p-4">No study packs available.</div>

  const openUrl = (url) => {
    if (!url) return
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handlePay = (id) => {
    // replace with real payment flow if needed
    if (confirm("Pay to unlock this study pack?")) {
      setUnlockedMap((m) => ({ ...m, [id]: true }))
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {contents.map((sp) => {
        const id = sp._id ?? sp.id ?? String(Math.random())
        // normalize heading field (could be object or string)
        const heading =
          sp.heading?.name ?? sp.headingName ?? sp.heading ?? sp.headingLabel ?? sp.headingId ?? "Untitled"
        const link = sp.link ?? ""
        const assignment = sp.assignment ?? ""
        const image = sp.image ?? sp.cover ?? "" // optional image fields
        const paymentstatus = (sp.paymentstatus ?? "Free").toLowerCase()
        const isFree = paymentstatus === "free"
        const isPaid = paymentstatus === "paid"
        const unlocked = !!unlockedMap[id]

        return (
          <article key={id} className="rounded-lg overflow-hidden border shadow-sm bg-white">
            <div className="h-44 bg-gray-100 flex items-center justify-center">
              <img
                src={image || "https://via.placeholder.com/640x360?text=No+Image"}
                alt={heading}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-lg font-semibold text-gray-900">{heading}</h4>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    isFree ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {isFree ? "Free" : "Paid"}
                </span>
              </div>

              {description && <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>}

              <div className="mt-4 flex flex-wrap gap-2">
                {isFree && link && (
                  <button
                    type="button"
                    onClick={() => openUrl(link)}
                    className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    View Content
                  </button>
                )}

                {isFree && assignment && (
                  <button
                    type="button"
                    onClick={() => openUrl(assignment)}
                    className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                  >
                    Assignment
                  </button>
                )}

                {isPaid && (
                  <>
                    <button
                      type="button"
                      onClick={() => handlePay(id)}
                      className={`inline-flex items-center px-3 py-2 text-white text-sm rounded ${
                        unlocked ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      {unlocked ? "Unlocked" : "Pay to unlock"}
                    </button>

                    {assignment && (
                      <button
                        type="button"
                        onClick={() => openUrl(assignment)}
                        className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                      >
                        Assignment
                      </button>
                    )}

                    {unlocked && link && (
                      <button
                        type="button"
                        onClick={() => openUrl(link)}
                        className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                      >
                        View Content
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}