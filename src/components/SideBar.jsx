import { SignedIn } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navigation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/physics-study-pack", label: "Physics Study Pack" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className=" sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-primary-foreground shadow-md rounded-2xl mt-4 mx-12">
      <div className="container mx-auto px-4  relative ">
        <div className="flex items-center h-16">
          {/* Left: Logo (far left) */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="font-bold text-2xl m-8">
              Physics by <span className="text-cyan-300">Sanjaya</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation (centered) */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-8 pointer-events-auto">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} className="font-medium hover:text-gray-600">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: User menu / auth links (far right) */}
          <div className="ml-auto flex items-center gap-4">
            <SignedIn>
              <UserButton size={36} />
            </SignedIn>

            <div className="hidden md:flex items-center gap-4">
              <SignedOut>
                <Link to="/sign-in" className="font-medium">
                  Sign In
                </Link>
                <Link to="/sign-up" className="font-medium">
                  Sign Up
                </Link>
              </SignedOut>
            </div>

            {/* Mobile Menu Button (keeps at far right on small screens) */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (dropdown under header when open) */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 mt-2 border-t border-white/10">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path} className="block px-4 py-2 font-medium hover:text-gray-600">
                {item.label}
              </Link>
            ))}

            <div className="pt-2 px-4">
              <SignedIn>
                <UserButton size={36} />
              </SignedIn>

              <SignedOut>
                <div className="flex items-center gap-4 mt-2">
                  <Link to="/sign-in" className="font-medium">
                    Sign In
                  </Link>
                  <Link to="/sign-up" className="font-medium">
                    Sign Up
                  </Link>
                </div>
              </SignedOut>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navigation;