import React, { useState } from "react"
import {
  useDeleteMcontentMutation,
  useInitiatePaymentMutation,
  useGetMathsResultsQuery,
  useAddMathsResultMutation,
  useCreatePurchaseMutation,
  useGetAllPurchasesQuery,
} from "@/lib/api"
import { useUser } from "@clerk/clerk-react"
import { Trash2, Lock, CheckCircle } from "lucide-react"
import { initiatePayHerePayment } from "@/utils/payhere"

function McontentCards({ contents, error, isLoading }) {
  const [removedMap, setRemovedMap] = useState({})
  const [unlockedMap, setUnlockedMap] = useState({})
  const [processingPayment, setProcessingPayment] = useState({})
  const [showAddResultMap, setShowAddResultMap] = useState({})
  const [addResultForm, setAddResultForm] = useState({})
  const [deleteContent, { isLoading: deleting }] = useDeleteMcontentMutation()
  const [initiatePayment] = useInitiatePaymentMutation()
  const [addResult, { isLoading: addingResult }] = useAddMathsResultMutation()
  const [createPurchase] = useCreatePurchaseMutation()
  const { data: results = [] } = useGetMathsResultsQuery()
  const { data: purchases = [] } = useGetAllPurchasesQuery()
  const { user, isLoaded } = useUser()
  const isAdmin = isLoaded && user?.publicMetadata?.role === "admin"

  if (isLoading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-600">Error loading content.</div>
  if (!contents || contents.length === 0)
    return <div className="p-4">No content available.</div>

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

     console.log("🔵 Attempting payment for Math Content")
  console.log("Content ID:", contentId)
  console.log("Content ID type:", typeof contentId)
  console.log("User ID:", user?.id)
  console.log("Content Topic:", contentTopic)

    setProcessingPayment((prev) => ({ ...prev, [contentId]: true }))

    try {
      const response = await initiatePayment(contentId).unwrap()

      // ADD THESE CONSOLE LOGS
      console.log("🟢 Backend Response:", response)
      console.log("Merchant ID:", response.merchantId)
      console.log("Hash:", response.hash)
      console.log("Order ID:", response.orderId)
      console.log("Amount:", response.amount)

      if (response.alreadyPurchased) {
        alert("You have already purchased this content!")
        setProcessingPayment((prev) => ({ ...prev, [contentId]: false }))
        return
      }

      // Get user info for PayHere
      const firstName = user.firstName || "User"
      const lastName = user.lastName || "Name"
      const email = user.primaryEmailAddress?.emailAddress || "user@example.com"
      const phone = user.primaryPhoneNumber?.phoneNumber || ""

      // Start PayHere payment
      await initiatePayHerePayment({
        orderId: response.orderId,
        amount: response.amount,
        currency: response.currency,
        hash: response.hash,
        merchantId: response.merchantId,
        contentTopic: contentTopic,
        userInfo: {
          firstName,
          lastName,
          email,
          phone,
        },
        onCompleted: async (orderId) => {
          console.log("Payment completed:", orderId)
          try {
            // create purchase record in backend
            await createPurchase({ userId: user.id, contentId, amount: response.amount }).unwrap()
            // allow backend to settle
            await new Promise((r) => setTimeout(r, 1200))

            const purchaseExists = purchases.some(
              (p) => String(p.userId) === String(user.id) && String(p.contentId) === String(contentId)
            )

            if (purchaseExists) {
              setProcessingPayment((prev) => ({ ...prev, [contentId]: false }))
              // mark unlocked locally
              setUnlockedMap((m) => ({ ...m, [contentId]: true }))
              alert("Payment successful! Content unlocked.")
            } else {
              // fallback: still mark unlocked locally
              setProcessingPayment((prev) => ({ ...prev, [contentId]: false }))
              setUnlockedMap((m) => ({ ...m, [contentId]: true }))
              alert("Payment successful — content unlocked (local). Refresh if needed.")
            }
          } catch (purchaseErr) {
            console.error("Failed to create purchase record:", purchaseErr)
            alert("Payment processed but failed to save purchase. Reloading...")
            window.location.reload()
          }
        },
        onDismissed: () => {
          console.log("Payment dismissed")
          setProcessingPayment((prev) => ({ ...prev, [contentId]: false }))
        },
        onError: (error) => {
          console.error("Payment error:", error)
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
    if (!confirm("Delete this content? This cannot be undone.")) return
    try {
      await deleteContent(id).unwrap()
      setRemovedMap((m) => ({ ...m, [id]: true }))
    } catch (err) {
      console.error("Delete failed", err)
      alert("Failed to delete content.")
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
      alert("No result found for this content and your username.")
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {contents.map((c) => {
        const id = c._id ?? c.id ?? String(Math.random())
        if (removedMap[id]) return null

        const topic = c.topic ?? "Untitled"
        const description = c.description ?? ""
        const link = c.link ?? ""
        const assignment = c.assignment ?? ""
        const contentType = c.contentType ?? "theory"
        const paymentstatus = (c.paymentstatus ?? "Free").toLowerCase()
        const price = c.price ?? 1000
        const isFree = paymentstatus === "free"
        const isPaid = paymentstatus === "paid"
        const isPurchased = !!unlockedMap[id] || purchases.some(
          (p) => String(p.userId) === String(user?.id) && String(p.contentId) === String(id)
        ) || false
        const isProcessing = processingPayment[id] || false
        const showAddForm = showAddResultMap[id] || false
        const formValues = addResultForm[id] || { contentId: id, username: currentUsername, url: "" }

        const getAssignmentButtonLabel = () => {
          if (contentType === "papers") return "Papers"
          return "Assignment"
        }

        return (
          <article
            key={id}
            className="rounded-lg overflow-hidden border shadow-sm bg-white hover:scale-105 hover:shadow-2xl transition-all duration-200"
          >
            <div className="h-44 bg-gray-100 relative flex items-center justify-center">
              {/* Admin delete button overlay */}
              {isAdmin && (
                <button
                  onClick={() => handleDelete(id)}
                  disabled={deleting}
                  aria-label="Delete content"
                  title="Delete content"
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
                src={`/assets/images/cc.jpg`}
                alt={topic}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-lg font-semibold text-gray-900">{topic}</h4>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                    isFree
                      ? "bg-green-100 text-green-800"
                      : isPurchased
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {isFree ? "Free" : isPurchased ? "Owned" : `LKR ${price}`}
                </span>
              </div>

              {description && (
                <p className="mt-2 text-sm text-gray-600 ">
                  {description}
                </p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {/* Free content - show all buttons */}
                {isFree && (
                  <>
                    {link && (
                      <button
                        type="button"
                        onClick={() => openUrl(link)}
                        className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                      >
                        View Content
                      </button>
                    )}
                    {assignment && (
                      <button
                        type="button"
                        onClick={() => openUrl(assignment)}
                        className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                      >
                        {getAssignmentButtonLabel()}
                      </button>
                    )}
                  </>
                )}

                {/* Paid content - purchased */}
                {isPaid && isPurchased && (
                  <>
                    {link && (
                      <button
                        type="button"
                        onClick={() => openUrl(link)}
                        className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                      >
                        View Content
                      </button>
                    )}
                    {assignment && (
                      <button
                        type="button"
                        onClick={() => openUrl(assignment)}
                        className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                      >
                        {getAssignmentButtonLabel()}
                      </button>
                    )}
                  </>
                )}

                {/* Paid content - not purchased */}
                {isPaid && !isPurchased && (
                  <>
                    <button
                      type="button"
                      onClick={() => handlePayment(id, topic, price)}
                      disabled={isProcessing}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm rounded font-medium hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
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
                  </>
                )}

                {/* View Results button - show only for free or purchased */}
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

export default McontentCards