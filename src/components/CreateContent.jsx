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
import {
  Select as UiSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useCreateContentMutation, useGetAllCategoriesQuery, useGetAllYearsQuery } from "../lib/api"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { CheckCircle2Icon } from "lucide-react"

export function CreateContent({
  yearId: propYearId,
  categoryId: propCategoryId,
  yearName: propYearName,
  categoryName: propCategoryName,
}) {
  const [createContent, { isLoading }] = useCreateContentMutation()
  const { data: years } = useGetAllYearsQuery()
  const { data: categories } = useGetAllCategoriesQuery()

  console.log(years, categories)

  // controlled form state
  const [yearId, setYearId] = useState(propYearId ?? "")
  const [categoryId, setCategoryId] = useState(propCategoryId ?? "")
  const [topic, setTopic] = useState("2026-Theory")
  const [link, setLink] = useState("https://example.com")
  const [assignment, setAssignment] = useState("Assignment")
  const [description, setDescription] = useState("Description of the content")
  const [paymentstatus, setPaymentstatus] = useState("Free")
  const [price, setPrice] = useState(0) // ADD THIS - default price is 0

  // labels for display (read-only)
  const [yearLabel, setYearLabel] = useState(propYearName ?? "")
  const [categoryLabel, setCategoryLabel] = useState(propCategoryName ?? "")

  const [showSuccess, setShowSuccess] = useState(false)

  // validation errors map
  const [errors, setErrors] = useState({})

  // Zod schema - ADD PRICE VALIDATION
  const schema = z.object({
    yearId: z.string().min(1, "Year is required"),
    categoryId: z.string().min(1, "Category is required"),
    topic: z.string().min(1, "Topic is required"),
    link: z.string().url("Link must be a valid URL").optional(),
    assignment: z.string().min(1, "Assignment is required"),
    description: z.string().min(1, "Description is required"),
    paymentstatus: z.string().min(1, "Payment status is required"),
    price: z.number().min(0, "Price must be 0 or greater"), // ADD THIS
  })

  useEffect(() => {
    if (propYearName) setYearLabel(String(propYearName))
    if (propCategoryName) setCategoryLabel(propCategoryName)
  }, [propYearName, propCategoryName])

  useEffect(() => {
    if (years) {
      if (propYearName) {
        const found = years.find((yy) => String(yy.name).toLowerCase() === String(propYearName).toLowerCase())
        if (found) {
          setYearId(found._id ?? found.id ?? "")
          setYearLabel(found.name)
        }
      } else if (yearId) {
        const y = years.find((yy) => String(yy.id) === String(yearId) || String(yy._id) === String(yearId))
        setYearLabel(y?.name ?? String(yearId))
      } else {
        setYearLabel(String(yearId ?? ""))
      }
    }
  }, [years, propYearName, yearId])

  useEffect(() => {
    if (categories) {
      if (propCategoryName) {
        const found = categories.find((cc) => String(cc.name).toLowerCase() === String(propCategoryName).toLowerCase())
        if (found) {
          setCategoryId(found._id ?? found.id ?? "")
          setCategoryLabel(found.name)
        }
      } else if (categoryId) {
        const c = categories.find((cc) => String(cc.id) === String(categoryId) || String(cc._id) === String(categoryId))
        setCategoryLabel(c?.name ?? String(categoryId))
      } else {
        setCategoryLabel(String(categoryId ?? ""))
      }
    }
  }, [categories, propCategoryName, categoryId])

  const onSubmit = async (e) => {
    e.preventDefault()
    setErrors({})

    const linkForValidation = link?.trim() === "" ? undefined : link?.trim()

    const toValidate = {
      yearId: String(yearId ?? "").trim(),
      categoryId: String(categoryId ?? "").trim(),
      topic: String(topic ?? "").trim(),
      link: linkForValidation,
      assignment: String(assignment ?? "").trim(),
      description: String(description ?? "").trim(),
      paymentstatus: String(paymentstatus ?? "").trim(),
      price: Number(price), // ADD THIS - convert to number
    }

    const result = schema.safeParse(toValidate)
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
      const content = {
        yearId: toValidate.yearId,
        categoryId: toValidate.categoryId,
        topic: toValidate.topic,
        link: toValidate.link,
        assignment: toValidate.assignment,
        description: toValidate.description,
        paymentstatus: toValidate.paymentstatus,
        price: toValidate.price, // ADD THIS
      }

      console.log("create payload:", content)
      await createContent(content).unwrap()

      setTopic("")
      setLink("")
      setAssignment("")
      setDescription("")
      setPaymentstatus("Free")
      setPrice(0) // ADD THIS - reset price

      console.log("✅ Content created successfully")

      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 4000)
    } catch (error) {
      console.error(error)
      setErrors({ form: "Failed to create content. Try again." })
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
          <span className="text-xl font-medium">Add Content</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Add content</DialogTitle>
          <DialogDescription>
            Make changes to your content here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            {/* Year (read-only) */}
            <div className="grid gap-3">
              <Label htmlFor="year">Year</Label>
              <Input id="year" name="year" value={yearLabel} readOnly disabled />
              <input type="hidden" name="yearId" value={yearId} />
              {errors.yearId && <p className="text-sm text-red-600">{errors.yearId}</p>}
            </div>

            {/* Category (read-only) */}
            <div className="grid gap-3">
              <Label htmlFor="category">Category</Label>
              <Input id="category" name="category" value={categoryLabel} readOnly disabled />
              <input type="hidden" name="categoryId" value={categoryId} />
              {errors.categoryId && <p className="text-sm text-red-600">{errors.categoryId}</p>}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="topic">Topic</Label>
              <Input id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
              {errors.topic && <p className="text-sm text-red-600">{errors.topic}</p>}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="link">Link</Label>
              <Input id="link" name="link" value={link} onChange={(e) => setLink(e.target.value)} />
              {errors.link && <p className="text-sm text-red-600">{errors.link}</p>}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="assignment">Assignment</Label>
              <Input id="assignment" name="assignment" value={assignment} onChange={(e) => setAssignment(e.target.value)} />
              {errors.assignment && <p className="text-sm text-red-600">{errors.assignment}</p>}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
              {errors.description && <p className="text-sm text-red-600">{errors.description}</p>}
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

            {/* ADD THIS - PRICE FIELD (only show when Paid is selected) */}
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
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                The new content has been successfully added.
              </AlertDescription>
            </Alert>
          )}

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateContent