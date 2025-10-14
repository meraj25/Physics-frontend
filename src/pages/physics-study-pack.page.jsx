import { useState } from "react";
import DataButton from "../components/DataButton";
import Navigation from "@/components/Navigation";

function PhysicsStudyPackPage() {

    const Physics = [

        {
            id: 1,
            topic: "Physics-2026",
            
        },
        {
            id: 2,
            topic: "Physics-2027",    
           
        },
        {
            id: 3,
            topic: "Physics-2028",
           
        }
     
    ]

    const [selectedDataId, setselectedDataId] = useState("");
  return (
    <div className="relative bg-[url('/assets/images/bg1.jpg')] bg-cover bg-center bg-no-repeat h-screen w-screen">
      <div className="absolute inset-0 bg-white/90">

       <Navigation back="&larr; Back" Type="Physics Study Pack" />
       <br />
        <div className="flex flex-wrap items-center gap-2 sm:gap-x-4 max-w-full overflow-x-auto pb-2 ml-6">
          {Physics.map((data) => (
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

export default PhysicsStudyPackPage;