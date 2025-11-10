'use client';

import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Fade-in-on-scroll hook – reusable across pages                           */
/* -------------------------------------------------------------------------- */
function useFadeInOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');

    if (!els.length) return;

    // Set initial hidden state
    els.forEach((el) => {
      el.classList.add(
        'opacity-0',
        'translate-y-8',
        'transition-all',
        'duration-700',
        'ease-out'
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target); // Animate once
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* -------------------------------------------------------------------------- */
/*  Teacher Contact Page with Fade-in Animations                              */
/* -------------------------------------------------------------------------- */
export default function TeacherContactPage() {
  useFadeInOnScroll();

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* ====================== HERO SECTION ====================== */}
        <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text & Contact Info */}
            <div className="space-y-8">
              {/* Title & Description */}
              <div className="fade-in space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
                  CONTACT US
                </h1>
                <p className="text-gray-600 text-lg max-w-md">
                  We are here to meet any business need and to promote your company online!
                </p>
                <div className="h-px bg-blue-600 w-24"></div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+94 77 123 4567',
                    href: 'tel:+94771234567',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'No. 45, School Lane, Colombo 07',
                  },
                  {
                    icon: Mail,
                    label: 'Mail',
                    value: 'teacher@school.lk',
                    href: 'mailto:teacher@school.lk',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="fade-in flex items-center gap-3 text-gray-700"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{item.label}:</span>{' '}
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-blue-600 hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            
            </div>

            {/* Right: Circular Image */}
            <div className="fade-in flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full opacity-40 blur-3xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="/assets/images/contact.jpg"
                    alt="Teacher's office"
                    className="w-full h-full object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== BOTTOM CONTACT CARDS ====================== */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'CALL US',
                line1: '+94 77 123 4567',
                line2: '+94 11 987 6543',
              },
              {
                icon: MapPin,
                title: 'LOCATION',
                line1: 'No. 45, School Lane,',
                line2: 'Colombo 07, Sri Lanka',
              },
              {
                icon: Clock,
                title: 'HOURS',
                line1: 'Mon – Fri: 7:30 am – 3:30 pm',
                line2: 'Sat: 8:00 am – 12:00 pm',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="fade-in bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.line1}
                  <br />
                  {card.line2}
                </p>
              </div>
            ))}
          </div>

       
        </section>

     
      </div>
    </>
  );
}