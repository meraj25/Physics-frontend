import { 
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader,
    CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

function HomePage() {
  return (
    <div className="relative bg-[url('/assets/images/bg1.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen">
      <div className="absolute inset-0 bg-white/90">
      
      <main className="content-center grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        <div>
       <Card className="w-full max-w-md ml-15">
      <CardHeader>
        <CardTitle className="text-center mb-5">Advance Level</CardTitle>
        <img src="/assets/images/al.jpg" alt="Advance Level" />
        <CardDescription>Explore the Adavance Level package.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Explore</Button>
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
        <Button className="w-full">Explore</Button>
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
        <Button className="w-full">Explore</Button>
      </CardContent>
    </Card>
        </div>
      </main>

       <footer className="bg-primary text-primary-foreground mt-auto absolute bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Section */}
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-accent" />
            <h3 className="text-xl font-bold">Physics by Sanjaya</h3>
          </div>

          {/* Simple Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/about" className="text-muted-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
            <a href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </a>
          </div>
        </div>

        <p className="text-muted-foreground text-sm text-center mt-6">
          © {new Date().getFullYear()} Physics by Sanjaya. All rights reserved.
        </p>
      </div>
    </footer>
      </div>
    </div>
  );
}

export default HomePage;