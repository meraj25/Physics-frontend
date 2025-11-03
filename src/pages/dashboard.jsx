import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Users, Zap, Award, CheckCircle2, Menu, X, MessageSquare, Calendar, FileText } from 'lucide-react';
import { useState } from 'react';
import { SignedOut } from '@clerk/clerk-react';
import { 
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

function Dashboard() {
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

          <main className="content-center grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        <div>

       <Card className="w-full max-w-md ml-15">
      <CardHeader>
        <CardTitle className="text-center mb-5">Advance Level</CardTitle>
        <img src="/assets/images/al.jpg" alt="Advance Level" />
        <CardDescription>Explore the Adavance Level package.</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to="/advanced-level">
        <Button className="w-full">Explore</Button>
      </Link>
      </CardContent>
      </Card>
        </div>

        <div>
    <Card className="w-full max-w-md ml-7">
      <CardHeader>
        <CardTitle className="text-center mb-5">Pre Engineering</CardTitle>
        <img src="/assets/images/pe.jpg" alt="Pre Engineering" />
        <CardDescription>Explore the Pre Engineering package.</CardDescription>
      </CardHeader>
      <CardContent>
        
       <Link to="/pre-engineering">
        <Button className="w-full">Explore</Button>
      </Link>

      </CardContent>
    </Card>
        </div>

        <div>
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center mb-3">Other Courses</CardTitle>
        <img src="/assets/images/other.jpg" alt="Other Courses" />
        <CardDescription>Explore the Other packages.</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to="/other-courses">
        <Button className="w-full">Explore</Button>
      </Link>
      </CardContent>
    </Card>
        </div>

      </main>
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

    </div>
  );
}

export default Dashboard;
