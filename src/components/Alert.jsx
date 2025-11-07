
import { toast } from "sonner"

import { Button } from "./ui/button"
import { e } from "@clerk/clerk-react/dist/useAuth-DEP6m3So"

function Alert() {
  return (
    <Button
      type="submit" disabled={isLoading}
      onClick={() =>
        toast("Content has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      {isLoading ? "Saving..." : "Save changes"}
    </Button>
  )
}

export default Alert

