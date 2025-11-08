
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/SideBar";
import SimpleCards from "@/components/SimpleCards";
import CreateContent from "@/components/CreateContent";
import ContentCards from "@/components/contentCard";
import { useGetAllContentQuery } from "@/lib/api";
import { useGetAllCategoriesQuery } from "@/lib/api";
import { useGetAllYearsQuery } from "@/lib/api";

function AdvancedLevelPage() {

 const [selectedOption, setSelectedOption] = useState('Theory');
  const options = ['Theory', 'Revision', 'Papers'];

 const { data : contents, error, isLoading } = useGetAllContentQuery();
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: years } = useGetAllYearsQuery();

const filteredCategory = categories?.find((cat) => cat.name === selectedOption);
const filteredYear = years?.find((yr) => yr.name === '2026');
const filteredContents = contents?.filter((content) => content.categoryId === filteredCategory._id && content.yearId === filteredYear._id);


   return (
     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">


      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">2028 Physics</h2>
              
               <br/>
              <div className="flex justify-center gap-4 flex-wrap">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedOption === option
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-white text-gray-700 border-2 border-blue-200 hover:border-blue-400'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Place CreateContent at the bottom */}
            <div className="flex justify-center">
            <CreateContent  
             yearName={'2028'}
             categoryName={selectedOption}
             />
            </div>

        
             <div className="mb-8">
             <ContentCards contents={filteredContents} error={error} isLoading={isLoading} />
             </div>
          </section>
          
        </div>
      </main>

      
    </div>
 
  );
}
export default AdvancedLevelPage;