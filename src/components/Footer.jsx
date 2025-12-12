
import React, { useEffect } from 'react';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function useFadeIn() {
  useEffect(() => {
    const el = document.querySelector('.fade-in-footer');
    if (!el) return;

    el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'ease-out');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
}




function Footer() {
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
        <div className="fade-in-footer text-center space-y-4">
          {/* Logo & Title */}
          <div className="flex items-center justify-center gap-2 mb-3">
            
            <h3 className="text-xl font-bold">Sanajaya<span className="text-cyan-300">suriya</span>
            </h3>
          </div>

          {/* Tagline */}
          <p className="text-blue-200 text-sm">
            සරලව • පැහැදිලිව • සිංහලෙන්
          </p>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-blue-300">
            <a href="mailto:sanjayasuriya@gmail.com" className="flex items-center gap-2 hover:text-white transition">
              <Mail className="w-4 h-4" />
              sanjayasuriya@gmail.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+94713610592" className="flex items-center gap-2 hover:text-white transition">
              <Phone className="w-4 h-4" />
              +94 71 361 0592
            </a>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              නුවර, ශ්‍රී ලංකා
            </span>
          </div>

          {/* Policies */}
          <div className="pt-6 border-t border-blue-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <Link
                to="/privacy-policy"
                className="text-xs text-blue-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/return-policy"
                className="text-xs text-blue-300 hover:text-white transition-colors duration-200"
              >
                Refund Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-xs text-blue-300 hover:text-white transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Copyright */}
          
        </div>
      </div>
            
    </footer>
  )
}
export default Footer;