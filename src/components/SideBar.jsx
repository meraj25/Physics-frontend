
import { Home, BookOpen, Users, Settings, FileText } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-6">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-foreground">Menu</h2>
      </div>

      <nav className="space-y-2">
        <a
          href="/"
          className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </a>

        <a
          href="/courses"
          className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          <BookOpen className="h-4 w-4" />
          <span>Courses</span>
        </a>

        <a
          href="/students"
          className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          <Users className="h-4 w-4" />
          <span>Students</span>
        </a>

        <a
          href="/materials"
          className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          <FileText className="h-4 w-4" />
          <span>Materials</span>
        </a>

        <a
          href="/settings"
          className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  )
};

export default Sidebar;
