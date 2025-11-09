// ...existing code...
import React, { useEffect, useState } from "react"
import { z } from "zod"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useCreateStudyPackMutation, useGetAllHeadingsQuery } from "../lib/api"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { CheckCircle2Icon } from "lucide-react"

export function CreateSP({ headingName: propHeadingName, headingId: propHeadingId }) {
  const [createStudyPack, { isLoading }] = useCreateStudyPackMutation()
  const { data: headings } = useGetAllHeadingsQuery()

  // form state
  const [headingId, setHeadingId] = useState(propHeadingId ?? "")
  const [headingLabel, setHeadingLabel] = useState(propHeadingName ?? "")
  const [link, setLink] = useState("")
  const [assignment, setAssignment] = useState("")
  const [paymentstatus, setPaymentstatus] = useState("Free")

  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const schema = z.object({
    headingId: z.string().min(1, "Heading is required"),
    link: z.string().url("Link must be a valid URL").optional(),
    assignment: z.string().min(1, "Assignment is required"),
    paymentstatus: z.string().min(1, "Payment status is required"),
  })

  useEffect(() => {
    // prefer explicit id prop if provided
    if (propHeadingId) {
      setHeadingId(propHeadingId)
    }
    if (propHeadingName) setHeadingLabel(propHeadingName)
  }, [propHeadingId, propHeadingName])

  useEffect(() => {
    if (!headings) return

    // if we don't yet have an id but a name prop was provided, try to resolve it
    if (!headingId && propHeadingName) {
      const found = headings.find(
        (h) => String(h.name).toLowerCase() === String(propHeadingName).toLowerCase()
      )
      if (found) {
        setHeadingId(found._id ?? found.id ?? "")
        setHeadingLabel(found.name)
      }
    }

    // if we have a headingId (from prop or resolved), ensure label is set from headings
    if (headingId) {
      const h = headings.find((x) => String(x._id) === String(headingId) || String(x.id) === String(headingId))
      if (h) setHeadingLabel(h.name ?? headingLabel)
    }
  }, [headings, propHeadingName, headingId])

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrors({})

    const linkForValidation = link?.trim() === "" ? undefined : link?.trim()
    const payloadForValidation = {
      headingId: String(headingId ?? "").trim(),
      link: linkForValidation,
      assignment: String(assignment ?? "").trim(),
      paymentstatus: String(paymentstatus ?? "").trim(),
    }

    const result = schema.safeParse(payloadForValidation)
    if (!result.success) {
      const errObj = {}
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] ?? "form"
        errObj[key] = issue.message
      })
      setErrors(errObj)
      return
    }

    try {
      const payload = {
        headingId: payloadForValidation.headingId,
        link: payloadForValidation.link,
        assignment: payloadForValidation.assignment,
        paymentstatus: payloadForValidation.paymentstatus,
      }

      await createStudyPack(payload).unwrap()

      setLink("")
      setAssignment("")
      setPaymentstatus("Free")
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3500)
    } catch (err) {
      console.error(err)
      setErrors({ form: "Failed to create study pack. Try again." })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-center gap-4 h-28 w-80 rounded-lg border-2 border-dashed border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
        >
          <span className="text-6xl leading-none">+</span>
          <span className="text-xl font-medium">Add Study Pack</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Create Study Pack</DialogTitle>
          <DialogDescription>
            Add a new study pack. The heading is preselected and read-only.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="heading">Heading</Label>
              <Input id="heading" name="heading" value={headingLabel} readOnly disabled />
              <input type="hidden" name="headingId" value={headingId} />
              {errors.headingId && <p className="text-sm text-red-600">{errors.headingId}</p>}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="link">Link</Label>
              <Input id="link" name="link" value={link} onChange={(e) => setLink(e.target.value)} />
              {errors.link && <p className="text-sm text-red-600">{errors.link}</p>}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="assignment">Assignment Link</Label>
              <Input id="assignment" name="assignment" value={assignment} onChange={(e) => setAssignment(e.target.value)} />
              {errors.assignment && <p className="text-sm text-red-600">{errors.assignment}</p>}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="paymentStatus">Payment status</Label>
              <select
                id="paymentStatus"
                name="paymentStatus"
                className="w-[180px] rounded border px-2 py-1"
                value={paymentstatus}
                onChange={(e) => setPaymentstatus(e.target.value)}
              >
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
              {errors.paymentstatus && <p className="text-sm text-red-600">{errors.paymentstatus}</p>}
            </div>
          </div>

          {errors.form && <p className="mt-3 text-sm text-red-600">{errors.form}</p>}

          {showSuccess && (
            <Alert className="mt-4 border-green-500 text-green-700 bg-green-50">
              <CheckCircle2Icon className="h-5 w-5" />
              <AlertTitle>Success! Study pack created</AlertTitle>
              <AlertDescription>The new study pack has been added.</AlertDescription>
            </Alert>
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateSP
// ...existing code...