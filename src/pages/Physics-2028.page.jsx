import { useState, useEffect } from "react";
import { CreateContent } from "@/components/CreateContent";
import ContentCards from "@/components/ContentCard";
import { useGetAllContentQuery } from "@/lib/api";
import { useGetAllCategoriesQuery } from "@/lib/api";
import { useGetAllYearsQuery } from "@/lib/api";
import { useUser } from "@clerk/clerk-react";

function AdvancedLevelPage() {
  const { user, isLoaded } = useUser();

  const [selectedOption, setSelectedOption] = useState('Theory');
  const options = ['Theory', 'Revision', 'Papers'];

  const { data : contents, error, isLoading } = useGetAllContentQuery();
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: years } = useGetAllYearsQuery();

  console.log("categories:", categories);
  console.log("years:", years); 

  const filteredCategory = categories?.find((cat) => cat.name === selectedOption);
  const filteredYear = years?.find((yr) => yr.name === '2028');
  const filteredContents = contents?.filter((content) =>
    filteredCategory && filteredYear
      ? content.categoryId === filteredCategory._id &&
        content.yearId === filteredYear._id
      : false
  );

  console.log("Filtered Contents:", filteredContents);

  const isAdmin = user?.publicMetadata?.role === "admin";

  // scroll to top when page mounts (fixes landing mid-page after navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in-on-scroll')
    if (!els.length) return

    els.forEach((el) =>
      el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out')
    )

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
            {/* ✅ Show CreateContent only for admins */}
            {isLoaded && isAdmin && (
              <div className="flex justify-center">
                <CreateContent
                  yearName={"2028"}
                  categoryName={selectedOption}
                />
              </div>
            )}

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