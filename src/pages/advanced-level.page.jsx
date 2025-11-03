
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/SideBar";
import SimpleCards from "@/components/SimpleCards";

function AdvancedLevelPage() {

 const [selectedYear, setSelectedYear] = useState('2026');
  const years = ['2026', '2027', '2028'];



   return (
     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">


      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Sanjaya</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Your comprehensive platform for mastering academic excellence with expertly curated study materials
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedYear === year
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 border-2 border-blue-200 hover:border-blue-400'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <SimpleCards
                topic="Physics"
                path={`physics-${selectedYear}`}
                image="al.jpg"
              />
              <SimpleCards
                topic="Combined Mathematics"
                path={`combined-mathematics-${selectedYear}`}
                image="al.jpg"
              />
            </div>
          </section>
          
        </div>
      </main>

      
    </div>
 
  );
}
export default AdvancedLevelPage;