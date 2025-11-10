'use client';

import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navigation() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/physics-study-pack', label: 'Physics Study Pack' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' },
  ];

  // Close mobile menu on link click
  const handleLinkClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg rounded-2xl mt-4 mx-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <Link
              to="/"
              className="flex items-center font-bold text-xl md:text-2xl transition-transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Physics by <span className="text-cyan-300 ml-1">Sanjaya</span>
            </Link>

            {/* Desktop Nav - Center */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-medium hover:text-cyan-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: Auth + Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Desktop Auth */}
              <div className="hidden md:flex items-center gap-3">
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <Link to="/sign-in" className="font-medium hover:text-cyan-200">
                    Sign In
                  </Link>
                  <Link to="/sign-up" className="font-medium bg-cyan-500 hover:bg-cyan-400 text-blue-900 px-4 py-1.5 rounded-lg transition">
                    Sign Up
                  </Link>
                </SignedOut>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-1.5 rounded-lg hover:bg-white/10 transition"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-blue-700 border-t border-blue-500">
            <nav className="container mx-auto px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 font-medium hover:text-cyan-200"
                  onClick={() => handleLinkClick(item.path)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-blue-600">
                <SignedIn>
                  <div className="flex items-center gap-2 py-2">
                    <UserButton />
                    <span className="font-medium">My Account</span>
                  </div>
                </SignedIn>
                <SignedOut>
                  <div className="flex flex-col gap-2 mt-2">
                    <Link
                      to="/sign-in"
                      className="font-medium text-center py-2 hover:text-cyan-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/sign-up"
                      className="font-medium text-center bg-cyan-500 hover:bg-cyan-400 text-blue-900 py-2 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                </SignedOut>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Add padding to main content to prevent overlap */}
      <div className="pt-20 md:pt-24">
        {/* Your page content goes here */}
      </div>
    </>
  );
}

export default Navigation;