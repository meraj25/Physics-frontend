import { useState } from "react";
import DataButton from "../components/DataButton";
import Navigation from "@/components/Navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,} from "@/components/ui/select"

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

        <div className="flex flex-col pt-20 items-center h-screen ">
          <Select className="w-20">
          <SelectTrigger className="w-[1000px] h-[64px] border-2 border-black rounded-lg text-lg font-medium focus:ring-2 focus:ring-black focus:outline-none py-10 ">
          <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent className="w-[1000px] border-2 border-black rounded-lg text-base">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          </SelectContent>
          </Select>


          <Select className="w-20">
          <SelectTrigger className="w-[1000px] h-[100px] border-2 border-black rounded-lg text-lg font-medium focus:ring-2 focus:ring-black focus:outline-none py-10 mt-5 ">
          <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent className="w-[1000px] border-2 border-black rounded-lg text-base">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          </SelectContent>
          </Select>


          <Select className="w-20">
          <SelectTrigger className="w-[1000px] h-[100px] border-2 border-black rounded-lg text-lg font-medium focus:ring-2 focus:ring-black focus:outline-none py-10 mt-5 ">
          <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent className="w-[1000px] border-2 border-black rounded-lg text-base">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          </SelectContent>
          </Select>


          <Select className="w-20">
          <SelectTrigger className="w-[1000px] h-[100px] border-2 border-black rounded-lg text-lg font-medium focus:ring-2 focus:ring-black focus:outline-none py-10 mt-5 ">
          <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent className="w-[1000px] border-2 border-black rounded-lg text-base">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          </SelectContent>
          </Select>


          <Select className="w-20">
          <SelectTrigger className="w-[1000px] h-[100px] border-2 border-black rounded-lg text-lg font-medium focus:ring-2 focus:ring-black focus:outline-none py-10 mt-5 ">
          <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent className="w-[1000px] border-2 border-black rounded-lg text-base">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          </SelectContent>
          </Select>


          <Select className="w-20">
          <SelectTrigger className="w-[1000px] h-[100px] border-2 border-black rounded-lg text-lg font-medium focus:ring-2 focus:ring-black focus:outline-none py-10 mt-5 ">
          <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent className="w-[1000px] border-2 border-black rounded-lg text-base">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          </SelectContent>
          </Select>


          <Select className="w-20">
          <SelectTrigger className="w-[1000px] h-[100px] border-2 border-black rounded-lg text-lg font-medium focus:ring-2 focus:ring-black focus:outline-none py-10 mt-5 ">
          <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent className="w-[1000px] border-2 border-black rounded-lg text-base">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
          </SelectContent>
          </Select>

        </div>
        






      </div>
    </div>
  );
}

export default PhysicsStudyPackPage;