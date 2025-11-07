import React, { useEffect, useState } from "react"
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
import { useCreateContentMutation, useGetAllCategoriesQuery,useGetAllYearsQuery } from "../lib/api"
import { Alert,AlertDescription,AlertTitle } from "./ui/alert"
import { CheckCircle2Icon } from "lucide-react"

// ...existing code...
export function CreateContent({
  yearId: propYearId,
  categoryId: propCategoryId,
  yearName: propYearName,    // now expecting a string prop for year name
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

  // labels for display (read-only). start from passed values if provided
  const [yearLabel, setYearLabel] = useState(propYearName ?? "")
  const [categoryLabel, setCategoryLabel] = useState(propCategoryName ?? "")

  const [showSuccess, setShowSuccess] = useState(false)


  useEffect(() => {
    // if caller passed a year name or category name, show them immediately
    if (propYearName) setYearLabel(String(propYearName))
    if (propCategoryName) setCategoryLabel(propCategoryName)
  }, [propYearName, propCategoryName])

  useEffect(() => {
    // resolve yearName -> yearId OR ensure label matches resolved name when yearId provided
    if (years) {
      if (propYearName) {
        const found = years.find((yy) => String(yy.name).toLowerCase() === String(propYearName).toLowerCase())
        if (found) {
          setYearId(found._id)
          setYearLabel(found.name)
        }
      } else if (yearId) {
        const y = years.find((yy) => String(yy.id) === String(yearId))
        // show the year's name if available, fall back to id
        setYearLabel(y?.name ?? String(yearId))
      } else {
        setYearLabel(String(yearId ?? ""))
      }
    }
  }, [years, propYearName, yearId])

  useEffect(() => {
    // resolve categoryName -> categoryId OR ensure label matches resolved name when categoryId provided
    if (categories) {
      if (propCategoryName) {
        const found = categories.find((cc) => String(cc.name).toLowerCase() === String(propCategoryName).toLowerCase())
        if (found) {
          setCategoryId(found._id)
          setCategoryLabel(found.name)
        }
      } else if (categoryId) {
        const c = categories.find((cc) => String(cc.id) === String(categoryId))
        setCategoryLabel(c?.name ?? String(categoryId))
      } else {
        setCategoryLabel(String(categoryId ?? ""))
      }
    }
  }, [categories, propCategoryName, categoryId])

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log("Submit triggered")
    try {
      // ensure we submit ids (not names). If ids are not resolved yet, try to resolve from loaded data.
     
      const content = {
        yearId,
        categoryId,
        topic,
        link,
        assignment,
        description,
        paymentstatus,
      }

      console.log("create payload:", content)
      await createContent(content).unwrap()
      
  
    setTopic("")
    setLink("")
    setAssignment("")
    setDescription("")
    setPaymentstatus("Free")

    console.log("✅ Content created successfully")
      
    setShowSuccess(true)

    // Optionally auto-hide after a few seconds
    setTimeout(() => setShowSuccess(false), 4000)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog>
      
        <DialogTrigger asChild>
          {/* big rectangle with a plus mark and "Add Content" text */}
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
            </div>

            {/* Category (read-only) */}
            <div className="grid gap-3">
              <Label htmlFor="category">Category</Label>
              <Input id="category" name="category" value={categoryLabel} readOnly disabled />
              <input type="hidden" name="categoryId" value={categoryId} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="topic">Topic</Label>
              <Input id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="link">Link</Label>
              <Input id="link" name="link" value={link} onChange={(e) => setLink(e.target.value)} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="assignment">Assignment</Label>
              <Input id="assignment" name="assignment" value={assignment} onChange={(e) => setAssignment(e.target.value)} />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
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
            </div>
          </div>

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
// ...existing code...