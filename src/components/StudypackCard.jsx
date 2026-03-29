import React, { useState } from "react"
import {
  useGetAllHeadingsQuery,
  useDeleteStudyPackMutation,
  useGetSPResultsQuery,
  useAddSPResultMutation,
  useInitiatePaymentMutation,
  useCreatePurchaseMutation,
  useGetAllPurchasesQuery,
} from "@/lib/api"
import { Unlock, Trash2, Lock, CheckCircle } from "lucide-react"
import { useUser } from "@clerk/clerk-react"
import { initiatePayHerePayment } from "@/utils/payhere"

export default function StudyPackCards({ contents, error, isLoading }) {
  const [unlockedMap, setUnlockedMap] = useState({})
  const [removedMap, setRemovedMap] = useState({})
  const [processingPayment, setProcessingPayment] = useState({})
  const [showAddResultMap, setShowAddResultMap] = useState({})
  const [addResultForm, setAddResultForm] = useState({})
  const [adminUnlockInputs, setAdminUnlockInputs] = useState({})
  const [adminUnlockLoading, setAdminUnlockLoading] = useState({})
  const { data: headings } = useGetAllHeadingsQuery()
  const { data: results = [] } = useGetSPResultsQuery()
  const [deleteStudyPack, { isLoading: deleting }] = useDeleteStudyPackMutation()
  const [addResult, { isLoading: addingResult }] = useAddSPResultMutation()
  const [initiatePayment] = useInitiatePaymentMutation()
  const [createPurchase] = useCreatePurchaseMutation()
  const { data: purchases = [] } = useGetAllPurchasesQuery()
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

  const currentUsername =
    user?.username ||
    user?.primaryEmailAddress?.emailAddress ||
    user?.emailAddresses?.[0]?.emailAddress ||
    `${user?.firstName ?? ""}${user?.lastName ?? ""}`.trim() ||
    "unknown"

  const handlePayment = async (contentId, contentTopic, price) => {
    if (!user) {
      alert("Please sign in to purchase content")
      return
    }

    setProcessingPayment((prev) => ({ ...prev, [contentId]: true }))

    try {
      const response = await initiatePayment(contentId).unwrap()

      if (response.alreadyPurchased) {
        alert("You have already purchased this content!")
        setProcessingPayment((prev) => ({ ...prev, [contentId]: false }))
        return
      }

      const firstName = user.firstName || "User"
      const lastName = user.lastName || "Name"
      const email = user.primaryEmailAddress?.emailAddress || "user@example.com"
      const phone = user.primaryPhoneNumber?.phoneNumber || ""

      await initiatePayHerePayment({
        orderId: response.orderId,
        amount: response.amount,
        currency: response.currency,
        hash: response.hash,
        merchantId: response.merchantId,
        contentTopic,
        userInfo: { firstName, lastName, email, phone },
        onCompleted: async (orderId) => {
          try {
            await createPurchase({ userId: user.id, contentId, amount: response.amount }).unwrap()
            await new Promise((r) => setTimeout(r, 1200))

            const purchaseExists = purchases.some(
              (p) => String(p.userId) === String(user.id) && String(p.contentId) === String(contentId)
            )

            if (purchaseExists) {
              setUnlockedMap((m) => ({ ...m, [contentId]: true }))
              alert("Payment successful! Content unlocked.")
            } else {
              setUnlockedMap((m) => ({ ...m, [contentId]: true }))
              alert("Payment successful — content unlocked (local)")
            }
          } catch (err) {
            console.error("Failed to create purchase record:", err)
            alert("Payment processed but failed to save purchase. Reloading...")
            window.location.reload()
          } finally {
            setProcessingPayment((prev) => ({ ...prev, [contentId]: false }))
          }
        },
        onDismissed: () => setProcessingPayment((prev) => ({ ...prev, [contentId]: false })),
        onError: (err) => {
          console.error("Payment error:", err)
          alert("Payment failed. Please try again.")
          setProcessingPayment((prev) => ({ ...prev, [contentId]: false }))
        },
      })
    } catch (err) {
      console.error("Payment initiation failed:", err)
      alert("Failed to initiate payment. Please try again.")
      setProcessingPayment((prev) => ({ ...prev, [contentId]: false }))
    }
  }

  const handleDelete = async (id) => {
    if (!confirm("Delete this study pack? This cannot be undone.")) return
    try {
      await deleteStudyPack(id).unwrap()
      console.log("Deleted:", id)
      setRemovedMap((m) => ({ ...m, [id]: true }))
    } catch (err) {
      console.error("Delete failed", err)
      alert("Failed to delete study pack.")
    }
  }

  const handleViewResult = (contentId) => {
    if (!isLoaded || !user) {
      alert("Please sign in to view results.")
      return
    }

    const match = results.find(
      (r) => String(r.contentId) === String(contentId) && String(r.username) === String(currentUsername)
    )

    if (match && match.url) {
      openUrl(match.url)
    } else {
      alert("No result found for this study pack and your username.")
    }
  }

  const toggleAddResult = (contentId) => {
    setShowAddResultMap((m) => ({ ...m, [contentId]: !m[contentId] }))
    setAddResultForm((f) => ({
      ...f,
      [contentId]: {
        contentId,
        username: currentUsername,
        url: "",
      },
    }))
  }

  const handleAddResultChange = (contentId, field, value) => {
    setAddResultForm((f) => ({
      ...f,
      [contentId]: {
        ...(f[contentId] || {}),
        [field]: value,
      },
    }))
  }

  const submitAddResult = async (contentId) => {
    const form = addResultForm[contentId] || {}
    if (!form.contentId || !form.username || !form.url) {
      alert("Please fill contentId, username and URL.")
      return
    }

    try {
      await addResult({ contentId: form.contentId, username: form.username, url: form.url }).unwrap()
      alert("Result added.")
      setShowAddResultMap((m) => ({ ...m, [contentId]: false }))
    } catch (err) {
      console.error("Add result failed", err)
      alert("Failed to add result.")
    }
  }

  const handleAdminUnlockChange = (contentId, value) => {
    setAdminUnlockInputs((s) => ({ ...s, [contentId]: value }))
  }

  const handleAdminUnlock = async (contentId, price) => {
    const username = (adminUnlockInputs[contentId] || "").trim()
    if (!username) {
      alert("Please enter a username to unlock for.")
      return
    }

    setAdminUnlockLoading((s) => ({ ...s, [contentId]: true }))

    try {
      await createPurchase({ username, contentId, amount: price, currency: "LKR" }).unwrap()
      alert(`Content unlocked for ${username}`)
      window.location.reload()
    } catch (err) {
      console.error("Admin unlock failed", err)
      alert("Failed to unlock content for the user. See console.")
      setAdminUnlockLoading((s) => ({ ...s, [contentId]: false }))
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
        const price = sp.price ?? 1000
        const isFree = paymentstatus === "free"
        const isPaid = paymentstatus === "paid"
        const unlocked = !!unlockedMap[id]
        const isPurchased = unlocked || purchases.some((p) => String(p.userId) === String(user?.id) && String(p.contentId) === String(id)) || false
        const showAddForm = showAddResultMap[id] || false
        const formValues = addResultForm[id] || { contentId: id, username: currentUsername, url: "" }

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

              {/* Purchased badge */}
              {isPaid && isPurchased && (
                <div className="absolute top-2 left-2 z-20 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500 text-white text-xs font-medium shadow-sm">
                  <CheckCircle className="w-3 h-3" />
                  Purchased
                </div>
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
                <h4 className="text-lg font-semibold text-gray-900">
                  {topic}
                </h4>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                    isFree ? "bg-green-100 text-green-800" : isPurchased ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {isFree ? "Free" : isPurchased ? "Owned" : `LKR ${price}`}
                </span>
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
                (isPaid && isPurchased && assignment) ? (
                  <button
                    type="button"
                    onClick={() => openUrl(assignment)}
                    className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                  >
                    Assignment
                  </button>
                ) : null}

                {isPaid && !isPurchased && (
                  <button
                    type="button"
                    onClick={() => handlePayment(id, topic, price)}
                    disabled={processingPayment[id]}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm rounded font-medium hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {processingPayment[id] ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        Unlock for LKR {price}
                      </>
                    )}
                  </button>
                )}

                {isPaid && isPurchased && link && (
                  <button
                    type="button"
                    onClick={() => openUrl(link)}
                    className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    View Content
                  </button>
                   
                  
                )}

                {/* View Results button for all users */}
                {(isFree || (isPaid && isPurchased)) && (
                  <button
                    type="button"
                    onClick={() => handleViewResult(id)}
                    className="inline-flex items-center px-3 py-2 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700"
                  >
                    View Results
                  </button>
                )}

                {/* Add Results (admin only) */}
                {isAdmin && (
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => toggleAddResult(id)}
                      className="inline-flex items-center px-3 py-2 bg-sky-600 text-white text-sm rounded hover:bg-sky-700"
                    >
                      {showAddForm ? "Close Add Result" : "Add Results"}
                    </button>

                    {showAddForm && (
                      <div className="mt-2 p-3 bg-gray-50 border rounded w-80 shadow-sm">
                        <label className="block text-xs text-gray-600">Content ID</label>
                        <input
                          type="text"
                          value={formValues.contentId}
                          readOnly
                          className="mt-1 w-full px-2 py-1 border rounded bg-white text-sm"
                        />

                        <label className="block text-xs text-gray-600 mt-2">Username</label>
                        <input
                          type="text"
                          value={formValues.username}
                          onChange={(e) => handleAddResultChange(id, "username", e.target.value)}
                          className="mt-1 w-full px-2 py-1 border rounded text-sm"
                        />

                        <label className="block text-xs text-gray-600 mt-2">Result URL</label>
                        <input
                          type="text"
                          value={formValues.url}
                          onChange={(e) => handleAddResultChange(id, "url", e.target.value)}
                          placeholder="https://..."
                          className="mt-1 w-full px-2 py-1 border rounded text-sm"
                        />

                        <div className="mt-3 flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setShowAddResultMap((m) => ({ ...m, [id]: false }))}
                            className="px-3 py-1 text-sm rounded bg-white border"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => submitAddResult(id)}
                            disabled={addingResult}
                            className="px-3 py-1 text-sm rounded bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50"
                          >
                            {addingResult ? "Adding..." : "Add"}
                          </button>
                        </div>
                      </div>
                    )}
                    {/* Admin unlock user UI */}
                    <div className="mt-2 p-3 bg-gray-50 border rounded w-80 shadow-sm">
                      <label className="block text-xs text-gray-600">Unlock for Username</label>
                      <input
                        type="text"
                        value={adminUnlockInputs[id] || ""}
                        onChange={(e) => handleAdminUnlockChange(id, e.target.value)}
                        placeholder="username or email"
                        className="mt-1 w-full px-2 py-1 border rounded text-sm"
                      />

                      <div className="mt-3 flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleAdminUnlock(id, price)}
                          disabled={adminUnlockLoading[id]}
                          className="px-3 py-1 text-sm rounded bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
                        >
                          {adminUnlockLoading[id] ? "Unlocking..." : "Unlock"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}