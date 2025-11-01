import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function LoadingPage() {
 return (
    <div className="flex h-screen">
      {/* Left side with background image */}
      <div className="w-2/5 bg-[url('/assets/images/bg.jpg')] bg-cover bg-center"></div>

      {/* Right side with content */}
      <div className="w-3/5 flex items-center justify-center bg-white">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-16">
            Lets start your physics journey with us!
          </h1>
          <br />
          <br />
          <p className="text-gray-600 mb-25 ">
            "If I have seen further than others, it is by standing upon the shoulders of giants.": - Isaac Newton 
          </p>
          <Link to="/dashboard">
          <Button className="mt-26 ml-10 cursor-pointer">Get Started</Button>
          </Link>

        </div>
      </div>
    </div>
  );
}
export default LoadingPage;
//className="absolute inset-0 bg-white/60"
//className="relative bg-[url('/assets/images/bg.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen "