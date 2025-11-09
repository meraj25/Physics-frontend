import { SignedIn } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";


function Navigation() {
  const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false)

  

  return (
    
      <div className=" bg-gradient-to-r from-blue-600 to-cyan-600 text-primary-foreground shadow-md rounded-2xl mt-4 mx-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
           <Link to="/" className="font-bold text-2xl m-8 ">
            Sanjaya
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
             {[
              {
                path: "/",
                label: "Home",
              },
              {
                path: "/studypack",
                label: "Physics Study Pack",
              },
              {
                path: "/contact",
                label: "Contact",
              },
              {
                path: "/about",
                label: "About",
              },
             
            ].map((item) => {
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-medium hover:text-gray-600 "
                >
                  {item.label}
                </Link>
              );
            })}
            </nav>

            {/* User Menu Desktop */}
            <SignedIn>
              
                <UserButton size={36} />
              
            </SignedIn>
            <div className="hidden md:block">
              <SignedOut>
                <div className="flex items-center gap-4">
                  <Link to="/sign-in">Sign In</Link>
                  <Link to="/sign-up">Sign Up</Link>
                </div>
              </SignedOut>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {[
              {
                path: "/home",
                label: "Home",
              },
              {
                path: "/physics-study-pack",
                label: "Physics Study Pack",
              },
              {
                path: "/contact",
                label: "Contact",
              },
              {
                path: "/about",
                label: "About",
              },
             
            ].map((item) => {
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-medium hover:text-gray-600 "
                >
                  {item.label}
                </Link>
              );
            })}
               <SignedIn>
              
                <UserButton size={36} />
              
            </SignedIn>
            <div className="hidden md:block">
              <SignedOut>
                <div className="flex items-center gap-4">
                  <Link to="/sign-in">Sign In</Link>
                  <Link to="/sign-up">Sign Up</Link>
                </div>
              </SignedOut>
            </div>
            </div>
          )}
        </div>
      </div>
    
  )
}

export default Navigation;