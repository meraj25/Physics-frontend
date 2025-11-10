import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Users, Zap, Award, CheckCircle2, Menu, X, MessageSquare, Calendar, FileText } from 'lucide-react';
import { useState, useEffect } from 'react'; // ...existing code... (added useEffect)
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

// ...existing code...
function Dashboard() {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in-on-scroll');
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out');
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
     
      <section className="bg-gradient-to-br from-white to-blue-50 py-20 fade-in-on-scroll ">
        <div className="container mx-auto px-6 ">
    <div className="grid md:grid-cols-2 gap-16 items-center min-h-[480px]">
      <div className="pl-4 md:pl-12 mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
          Master New Skills, Achieve Your Goals
        </h1>
        <p className="text-lg md:text-2xl text-slate-600 mb-8 leading-relaxed">
          Learn from an experienced instructor in a structured, interactive environment designed for your success. Get personalized guidance every step of the way.
        </p>
        <div className="hidden md:block">
         <SignedOut>
         <Link to="/sign-in">
        <Button
           variant="outline"
           className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-6 text-lg rounded-xl cursor-pointer"
        >
        Sign In
        </Button>
        </Link>
        </SignedOut>
        </div>
      </div>

          
            <div className="relative flex justify-end">
              <img
                src="/assets/images/s.png"
                alt="Hero"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg object-cover translate-x-6 md:translate-x-12 mr-25"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 fade-in-on-scroll">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">Learn Directly From Your Instructor</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">Experience personalized education with direct access to your teacher</p>

          <main className="content-center grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        <div>

       <Card className="w-full max-w-md ml-15 fade-in-on-scroll hover:scale-105 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-center mb-5">Advance Level</CardTitle>
        <img src="/assets/images/al.jpg" alt="Advance Level" />
        <CardDescription>Explore the Adavance Level package.</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to="/advanced-level">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Explore</Button>
      </Link>
      </CardContent>
      </Card>
        </div>

        <div>
    <Card className="w-full max-w-md ml-7 fade-in-on-scroll hover:scale-105 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-center mb-5">Pre Engineering</CardTitle>
        <img src="/assets/images/pe.jpg" alt="Pre Engineering" />
        <CardDescription>Explore the Pre Engineering package.</CardDescription>
      </CardHeader>
      <CardContent>
        
       <Link to="/pre-engineering">
        <Button className="w-full  bg-blue-600  hover:bg-blue-700 transition-colors duration-300">Explore</Button>
      </Link>

      </CardContent>
    </Card>
        </div>

        <div>
    <Card className="w-full max-w-md fade-in-on-scroll hover:scale-105 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-center mb-3">Other Courses</CardTitle>
        <img src="/assets/images/other.jpg" alt="Other Courses" />
        <CardDescription>Explore the Other packages.</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to="/other-courses ">
        <Button className="w-full  bg-blue-600  hover:bg-blue-700 transition-colors duration-300">Explore</Button>
      </Link>
      </CardContent>
    </Card>
        </div>

      </main>
        </div>
      </section>

      <section className="py-20 bg-slate-50 fade-in-on-scroll">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">What You'll Get</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {['Lifetime access to course materials', 'Personalized feedback on assignments', 'Direct communication with instructor', 'Community support and networking', 'Resources and Guides', 'Critical Thinking Ability'].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Dashboard;
// ...existing code...