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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"


// ...existing code...
export function Popup() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          {/* big rectangle with a plus mark and "Add Content" text */}
          <button
            type="button"
            className="flex items-center justify-center gap-4 h-20 w-64 rounded-lg border-2 border-dashed border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
          >
            <span className="text-5xl leading-none">+</span>
            <span className="text-lg font-medium">Add Content</span>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add content</DialogTitle>
            <DialogDescription>
              Make changes to your content here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="year">Year</Label>
              <Input id="year" name="year" defaultValue="2026"  />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="category">Category</Label>
              <Input id="category" name="category" defaultValue="Theory" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="topic">Topic</Label>
              <Input id="topic" name="topic" defaultValue="2026-Theory" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="link">Link</Label>
              <Input id="link" name="link" defaultValue="https://example.com" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="assignment">Assignment</Label>
              <Input id="assignment" name="assignment" defaultValue="Assignment" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" defaultValue="Description of the content" />
            </div>
            <div className="grid gap-3">
               <Label htmlFor="payment status">Payment status</Label>
              <Select>
              <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
              <SelectGroup>
              <SelectItem value="apple">Free</SelectItem>
              <SelectItem value="banana">Paid</SelectItem>
              </SelectGroup>
              </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
export default Popup
// ...existing code...