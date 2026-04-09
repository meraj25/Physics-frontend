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
import { useCreateMathsContentMutation,useGetAllMathsHeadingsQuery } from "../lib/api"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { CheckCircle2Icon } from "lucide-react"
// ...existing code...

export function CreateMathsContent({ heading: propHeading, headingName: propHeadingName, headingId: propHeadingId }) {
  const [createMathsContent, { isLoading }] = useCreateMathsContentMutation()
  const { data: headings } = useGetAllMathsHeadingsQuery()

  // controlled form state
  
  // headingId holds the id string; headingLabel holds display name
  const [headingId, setHeadingId] = useState(
    propHeading ? String(propHeading._id ?? propHeading.id ?? "") : (propHeadingId ?? "")
  )
  const [headingLabel, setHeadingLabel] = useState(
    propHeading ? String(propHeading.name ?? "") : (propHeadingName ?? "")
  )
  const [link, setLink] = useState("https://example.com")
  const [assignment, setAssignment] = useState("Assignment")
  const [topic, setTopic] = useState("Topic")
  const [pre_content, setPre_content] = useState("Pre-content")
  const [paymentstatus, setPaymentstatus] = useState("Free")
  const [price, setPrice] = useState(0)

  // UI state
  const [showSuccess, setShowSuccess] = useState(false)

  // validation errors map: { fieldName: message }
  const [errors, setErrors] = useState({})

  // Zod schema (validation)
  const schema = z.object({
    heading: z.string().min(1, "Heading is required"),
    link: z.string().url("Link must be a valid URL").optional(),
    assignment: z.string().min(1, "Assignment is required"),
    topic: z.string().min(1, "Topic is required"),
    pre_content: z.string().min(1, "Pre-content is required"),
    paymentstatus: z.string().min(1, "Payment status is required"),
    price: z.number().min(0, "Price must be 0 or greater"),
  })

  useEffect(() => {
    // prefer explicit object prop if provided
    if (propHeading) {
      setHeadingId(String(propHeading._id ?? propHeading.id ?? ""))
      setHeadingLabel(String(propHeading.name ?? ""))
      return
    }

    // otherwise prefer explicit id/name props
    if (propHeadingId) {
      setHeadingId(propHeadingId)
    }
    if (propHeadingName) setHeadingLabel(propHeadingName)
  }, [propHeading, propHeadingId, propHeadingName])

  useEffect(() => {
    if (!headings) return

    // if we don't yet have an id but a name prop was provided, try to resolve it
    if (!headingId && propHeadingName) {
      const found = headings.find((h) => String(h.name).toLowerCase() === String(propHeadingName).toLowerCase())
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

    // prepare link for validation: pass undefined when empty so schema.optional() accepts it
    const linkForValidation = link?.trim() === "" ? undefined : link?.trim()

    const toValidate = {
      heading: String(headingId ?? "").trim(),
      link: linkForValidation,
      topic: String(topic ?? "").trim(),
      pre_content: String(pre_content ?? "").trim(),
      assignment: String(assignment ?? "").trim(),
      paymentstatus: String(paymentstatus ?? "").trim(),
      price: Number(price),
    }

    const result = schema.safeParse(toValidate)
    if (!result.success) {
      // map zod issues to a simple object for the UI
      const errObj = {}
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] ?? "form"
        errObj[key] = issue.message
      })
      setErrors(errObj)
      return
    }

    try {
      const mathsContent = {
        heading: toValidate.heading,
        link: toValidate.link,
        assignment: toValidate.assignment,
        topic: toValidate.topic,
        pre_content: toValidate.pre_content,
        paymentstatus: toValidate.paymentstatus,
        price: toValidate.price,
      }

      console.log("create payload:", mathsContent)
      await createMathsContent(mathsContent).unwrap()

      // reset inputs
      setLink("https://example.com")
      setAssignment("Assignment")
      setTopic("Topic")
      setPre_content("Pre-content")
      setPaymentstatus("Free")
      setPrice(0)

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
          <span className="text-xl font-medium">Add Maths content</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Create Maths content</DialogTitle>
          <DialogDescription>
            Add a new maths content. The heading is preselected and read-only.
          </DialogDescription>
        </DialogHeader>

       
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="heading">Heading</Label>
              {/* display label but submit the id */}
              <Input id="heading" name="headingLabel" value={headingLabel} readOnly disabled />
              <input type="hidden" name="heading" value={headingId} />
              {errors.heading && <p className="text-sm text-red-600">{errors.heading}</p>}
            </div>


             <div className="grid gap-3">
               <Label htmlFor="topic">Topic</Label>
               <Input id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
               {errors.topic && <p className="text-sm text-red-600">{errors.topic}</p>}
             </div>

       

             <div className="grid gap-3">
               <Label htmlFor="pre_content">Pre-content</Label>
                <Textarea
                  id="pre_content"
                  name="pre_content"
                  value={pre_content}
                  onChange={(e) => setPre_content(e.target.value)}
                  rows={4}
                  placeholder="Enter descriptive text here..."
                  className="resize-y"
                />
                {errors.pre_content && <p className="text-sm text-red-600">{errors.pre_content}</p>}
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

            {paymentstatus === "Paid" && (
              <div className="grid gap-3">
                <Label htmlFor="price">Price (LKR)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  placeholder="Enter price in LKR"
                />
                {errors.price && <p className="text-sm text-red-600">{errors.price}</p>}
              </div>
            )}
          </div>


          {errors.form && <p className="mt-3 text-sm text-red-600">{errors.form}</p>}

          {showSuccess && (
            <Alert className="mt-4 border-green-500 text-green-700 bg-green-50">
              <CheckCircle2Icon className="h-5 w-5" />
              <AlertTitle>Success! maths content created</AlertTitle>
              <AlertDescription>The new maths content has been added.</AlertDescription>
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

export default CreateMathsContent