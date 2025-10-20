import { useState } from "react";
import DataButton from "../components/DataButton";
import Navigation from "@/components/Navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,} from "@/components/ui/select"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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

        <div className="flex flex-col pt-16 items-center h-screen gap-6">

          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>01. මිනුම - Measurement</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>

          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>02. යාන්ත්‍ර විද්‍යාව - Mechanics</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>


          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>03. දෝලන හා තරංග- Oscillations and Waves</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>


          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>04. තාප භෞතිකය - Thermal Physics</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>


          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>05. ගුරුත්වජ ක්ෂේත්‍රය - Measurement</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>

          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>06. ස්ථිති විද්‍යුත් ක්ෂේත්‍රය- Mechanics</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>


         <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>07. - චුම්භක ක්ෂේත්‍රය - Magnetic Fields</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>


          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>08. ධාරා විද්‍යුතය - Current Electricity</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>

        

          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>09. ඉලෙක්ට්‍රොනික විද්‍යාව- Electronics</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>

          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>10. පදාර්ථයේ යාන්ත්‍රික ගුණ- Mechanical Properties of Matter</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>


          <div className="border-2 border-black rounded-lg p-2 w-[850px] mx-auto mt-5 shadow-md">
          <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
          <AccordionTrigger>11. පදාර්ථ හා විකිරණ- Matter and Radiation</AccordionTrigger>
          <AccordionContent>
               Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
          </AccordionItem>
          </Accordion>
          </div>

        </div>
        






      </div>
    </div>
  );
}

export default PhysicsStudyPackPage;