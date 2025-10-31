import { SignedIn } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router";

function Navigation(prop) {
  const navigate = useNavigate();

    return (

    <nav className="bg-white rounded-2xl shadow-sm px-2 py-2 flex items-center justify-between w-[80%] mx-auto mt-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
      Back
      </button>

    <div className="text-lg font-semibold text-gray-900">
      <Link to="/home">
      Physics by Sanjaya
      </Link>
    </div>

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
      
    </nav>
    );
};


export default Navigation;