import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Users, Zap, Award, CheckCircle2, Menu, X, MessageSquare, Calendar, FileText } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
     
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Master New Skills, Achieve Your Goals
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Learn from an experienced instructor in a structured, interactive environment designed for your success. Get personalized guidance every step of the way.
              </p>
          <div className="hidden md:block">
              <SignedOut>
                <Button variant="outline">
                  Sign In
                </Button>
              </SignedOut>
            </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-16 h-16 text-white mx-auto mb-4" />
                    <p className="text-white font-semibold">Start Learning Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-6">Learn Directly From Your Instructor</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">Experience personalized education with direct access to your teacher</p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Communication</h3>
                  <p className="text-slate-600">Get instant feedback and ask questions directly to your instructor anytime</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Scheduling</h3>
                  <p className="text-slate-600">Learn at your own pace with structured courses designed specifically for your needs</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Curated Content</h3>
                  <p className="text-slate-600">Access handpicked materials, assignments, and resources tailored to your learning journey</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex items-start gap-4">
                <div className="bg-rose-100 p-3 rounded-xl flex-shrink-0">
                  <Users className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Guidance</h3>
                  <p className="text-slate-600">Benefit from one-on-one attention and customized learning strategies for your success</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex items-start gap-4">
                <div className="bg-violet-100 p-3 rounded-xl flex-shrink-0">
                  <Award className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Recognized Credentials</h3>
                  <p className="text-slate-600">Complete courses and earn certificates that validate your learning and achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">What You'll Get</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {['Lifetime access to course materials', 'Personalized feedback on assignments', 'Direct communication with instructor', 'Community support and networking', 'Downloadable resources and guides', 'Certificate of completion'].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have already started their learning journey with us.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mx-auto hover:bg-blue-50">
            Start Learning Free
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Courses</a></li>
                <li><a href="#" className="hover:text-white transition">Teachers</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Follow</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center">
            <p>&copy; 2024 EduHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
