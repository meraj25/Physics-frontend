import { useState } from "react";
import DataButton from "../components/DataButton";
import Navigation from "@/components/Navigation";

function Physics2026Page() {

    const Physics2026 = [

        {
            id: 1,
            topic: "2026-Theory",
            
        },
        {
            id: 2,
            topic: "2026-Revision",    
           
        },
        {
            id: 3,
            topic: "2026-Papers",
           
        },
        {
            id: 4,
            topic: "Study Pack - Lesson wise Revision",
            
        }
    ]

    const [selectedDataId, setselectedDataId] = useState("");
  return (
    <div className="relative bg-[url('/assets/images/bg1.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen">
      <div className="absolute inset-0 bg-white/90">
       
       <Navigation back="&larr; Back" Type="Advance Level Physics 2026" />
       <br />
        <div className="flex flex-wrap items-center gap-2 sm:gap-x-4 max-w-full overflow-x-auto pb-2 ml-6">
          {Physics2026.map((data) => (
            <DataButton
              key={data.id}
              data={data}
              selectedDataId={selectedDataId}
              onClick={() => setselectedDataId(data.id)}
            />
          ))}
        </div>





      </div>
    </div>
  );
}

export default Physics2026Page;