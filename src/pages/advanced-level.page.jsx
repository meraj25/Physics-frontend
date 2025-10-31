import Footer from "@/components/Footer";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/SideBar";
import SimpleCards from "@/components/SimpleCards";

function AdvancedLevelPage() {
  return (
<div className="relative bg-[url('/assets/images/bg1.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen">
      <div className="absolute inset-0 bg-white/90">

       
   
      <main className="content-center grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 ">
        <div className="ml-65">
        <SimpleCards  topic="Physics" image="al.jpg" />
        </div>
        <div className="ml-15">
        <SimpleCards  topic="Combined Mathematics" image="al.jpg" />
        </div>
      </main>
      <Footer />
    </div>
    </div>
  );
}
export default AdvancedLevelPage;