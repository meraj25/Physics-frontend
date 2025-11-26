import React, { useState } from "react"
import { useDeleteContentMutation, useInitiatePaymentMutation } from "@/lib/api"
import { useUser } from "@clerk/clerk-react"
import { Trash2, Lock, CheckCircle } from "lucide-react"
import { initiatePayHerePayment } from "@/utils/payhere"

function ContentCards({ contents, error, isLoading }) {
  const [removedMap, setRemovedMap] = useState({})
  const [processingPayment, setProcessingPayment] = useState({})
  const [deleteContent, { isLoading: deleting }] = useDeleteContentMutation()
  const [initiatePayment] = useInitiatePaymentMutation()
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

  const handlePayment = async (contentId, contentTopic, price) => {
    if (!user) {
      alert("Please sign in to purchase content")
      return
    }

    setProcessingPayment((prev) => ({ ...prev, [contentId]: true }))

    try {
      // Initiate payment on backend
      const response = await initiatePayment(contentId).unwrap()

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
        onCompleted: (orderId) => {
          console.log("Payment completed:", orderId)
          alert("Payment successful! You can now access the content.")
          // Reload to fetch updated purchase status
          window.location.reload()
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {contents.map((c) => {
        const id = c._id ?? c.id ?? String(Math.random())
        if (removedMap[id]) return null

        const topic = c.topic ?? "Untitled"
        const description = c.description ?? ""
        const link = c.link ?? ""
        const assignment = c.assignment ?? ""
        const paymentstatus = (c.paymentstatus ?? "Free").toLowerCase()
        const price = c.price ?? 1000
        const isFree = paymentstatus === "free"
        const isPaid = paymentstatus === "paid"
        const isPurchased = c.isPurchased || false
        const isProcessing = processingPayment[id] || false

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
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
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
                        Assignment
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
                        Assignment
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
                    {assignment && (
                      <button
                        type="button"
                        onClick={() => openUrl(assignment)}
                        className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                      >
                        Assignment
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

export default ContentCards