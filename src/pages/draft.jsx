import Footer from "@/components/Footer";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/SideBar";
import SimpleCards from "@/components/SimpleCards";

function AdvancedLevelPage() {
  return (

    
<div className="min-h-screen bg-white">
      <section className="content-center grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 mb-20">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
        <SimpleCards  
        topic="Physics" 
        image="al.jpg" 
        path="physics-2026" 
        />
       
        <SimpleCards  
        topic="Combined Mathematics" 
        image="al.jpg" 
        path="combined-mathematics" />
        </div>
      </section>
   
    
    </div>
  );
}
export default AdvancedLevelPage;