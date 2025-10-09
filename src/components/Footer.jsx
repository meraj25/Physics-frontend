import { BookOpen } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto absolute bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Section */}
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-accent" />
            <h3 className="text-xl font-bold">Physics by Sanjaya</h3>
          </div>

          {/* Simple Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/about" className="text-muted-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
            <a href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </a>
          </div>
        </div>

        <p className="text-muted-foreground text-sm text-center mt-6">
          © {new Date().getFullYear()} Physics by Sanjaya. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
export default Footer;