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

// ...existing code...
export function Popup({
  yearId: propYearId,
  categoryId: propCategoryId,
  yearName: propYearName,
  categoryName: propCategoryName,
}) {
  const [createContent, { isLoading }] = useCreateContentMutation()
  const { data: years } = useGetAllYearsQuery()
  const { data: categories } = useGetAllCategoriesQuery()

  // controlled form state
  const [yearId, setYearId] = useState(propYearId ?? "")
  const [categoryId, setCategoryId] = useState(propCategoryId ?? "")
  const [topic, setTopic] = useState("2026-Theory")
  const [link, setLink] = useState("https://example.com")
  const [assignment, setAssignment] = useState("Assignment")
  const [description, setDescription] = useState("Description of the content")
  const [paymentStatus, setPaymentStatus] = useState("Free")

  // labels for display (read-only). start from passed names if provided
  const [yearLabel, setYearLabel] = useState(propYearName ?? "")
  const [categoryLabel, setCategoryLabel] = useState(propCategoryName ?? "")

  useEffect(() => {
    // if caller passed ids, initialize them
    if (propYearId) setYearId(propYearId)
    if (propCategoryId) setCategoryId(propCategoryId)

    // if caller passed names, show them immediately (ids will be resolved once data loads)
    if (propYearName) setYearLabel(propYearName)
    if (propCategoryName) setCategoryLabel(propCategoryName)
  }, [propYearId, propCategoryId, propYearName, propCategoryName])

  useEffect(() => {
    // resolve yearName -> yearId OR ensure label matches resolved name when yearId provided
    if (years) {
      if (propYearName) {
        const found = years.find((yy) => Number(yy.year).toString().toLowerCase() === String(propYearName).toLowerCase())
        if (found) {
          setYearId(found.id)
          setYearLabel(found.name)
        }
      } else if (yearId) {
        const y = years.find((yy) => String(yy.id) === String(yearId))
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
          setCategoryId(found.id)
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
    try {
      // ensure we submit ids (not names). If ids are not resolved yet, try to resolve from loaded data.
      let finalYearId = yearId
      let finalCategoryId = categoryId

      if ((!finalYearId || !finalCategoryId) && years && categories) {
        if (!finalYearId && yearLabel) {
          const y = years.find((yy) => Number(yy.year).toString().toLowerCase() === String(yearLabel).toLowerCase())
          if (y) finalYearId = y.id
        }
        if (!finalCategoryId && categoryLabel) {
          const c = categories.find((cc) => String(cc.name).toLowerCase() === String(categoryLabel).toLowerCase())
          if (c) finalCategoryId = c.id
        }
      }

      const content = {
        yearId: finalYearId,
        categoryId: finalCategoryId,
        topic,
        link,
        assignment,
        description,
        paymentStatus,
      }

      console.log("create payload:", content)
      await createContent(content).unwrap()
      // optionally reset fields here
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog>
      <form onSubmit={onSubmit}>
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
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
              >
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
export default Popup