'use client';

import React, { useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Users,
  Globe,
  Star,
  Quote,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Fade-in-on-scroll hook – adds the classes only once per element          */
/* -------------------------------------------------------------------------- */
function useFadeInOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');

    if (!els.length) return;

    // initial hidden state
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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* -------------------------------------------------------------------------- */
/*  Main About component                                                      */
/* -------------------------------------------------------------------------- */
export default function About() {
  useFadeInOnScroll();

  return (
    <div className="mt-10">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* ====================== HERO SECTION ====================== */}
        <section className="fade-in relative overflow-hidden rounded-4xl bg-gradient-to-r from-blue-600 to-blue-800 text-white mx-8">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-16 left-8 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-16 right-8 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left – Text */}
            <div className="relative container mx-auto px-4 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-blue-700 bg-opacity-50 rounded-full px-5 py-2 text-sm mb-6">
                  <Star className="w-4 h-4" />
                  <span>Master Educator • 5+ Years Experience</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Mr. Sanjaya <span className="text-cyan-300">Jayasooriya</span>
                </h1>

                <p className="text-xl text-blue-100 mb-6">
                  Advanced Level Lecturer & Educational Innovator
                </p>

                <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
                  Dedicated to transforming complex concepts into
                  accessible, engaging learning experiences. Committed to
                  fostering analytical thinking and academic excellence in every
                  student.
                </p>
              </div>
            </div>

            {/* Right – Stats */}
            <div className="space-y-8 px-4 md:px-0">
              {[
                { num: '500+', label: 'Students Helped' },
                { num: '10+ Years', label: 'Teaching Experience' },
                { num: '95%', label: 'Student Satisfaction Rate' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="fade-in bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition max-w-xl mx-auto"
                >
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    {stat.num}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== ACADEMIC & EXPERIENCE ====================== */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* ----- Qualifications ----- */}
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Academic <span className="text-blue-600">Qualifications</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    degree: 'Ph.D in Applied Mathematics',
                    institution: 'University of Colombo',
                    year: '2018',
                  },
                  {
                    degree: 'M.Sc in Mathematics Education',
                    institution: 'University of Peradeniya',
                    year: '2012',
                  },
                  {
                    degree: 'B.Sc (Hons) Mathematics',
                    institution: 'University of Kelaniya',
                    year: '2009',
                  },
                  {
                    degree: 'CTHE Certification',
                    institution: 'Staff Development Centre',
                    year: '2010',
                  },
                ].map((q, i) => (
                  <div
                    key={i}
                    className="fade-in group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-l-4 border-blue-600"
                  >
                    <div className="bg-blue-100 p-3 rounded-xl group-hover:bg-blue-600 transition-colors">
                      <Award className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {q.degree}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {q.institution}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{q.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ----- Teaching Experience ----- */}
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Teaching <span className="text-blue-600">Experience</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    role: 'Senior Lecturer',
                    place: 'National Institute of Education',
                    period: '2018 – Present',
                  },
                  {
                    role: 'Mathematics Coordinator',
                    place: 'Royal College, Colombo',
                    period: '2014 – 2018',
                  },
                  {
                    role: 'Visiting Lecturer',
                    place: 'University of Colombo',
                    period: '2012 – 2014',
                  },
                  {
                    role: 'Mathematics Teacher',
                    place: 'Visakha Vidyalaya',
                    period: '2009 – 2012',
                  },
                ].map((e, i) => (
                  <div
                    key={i}
                    className="fade-in group flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:from-blue-100 hover:to-cyan-100 transition-all border border-blue-200"
                  >
                    <div className="bg-blue-600 p-3 rounded-xl">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {e.role}
                      </h3>
                      <p className="text-blue-700 font-medium">{e.place}</p>
                      <p className="text-sm text-gray-600 mt-1">{e.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}