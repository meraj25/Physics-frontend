import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';



const topics = [
  { 
    id: '1',
    title: '01. මිනුම් - Measurements',
    subtitle: 'studypack',
    content: '',
    links: [
      { label: 'භෞතික විද්‍යාව හැඳින්වීම', url: '/studypack/භෞතික-විද්‍යාව-හැඳින්වීම' },
      { label: 'ඒකක', url: '/studypack/ඒකක' },
      { label: 'මාන ', url: '/studypack/මාන' },
      { label: 'මිනුම හැඳින්වීම ', url: '/studypack/මිනුම-හැඳින්වීම' },
      { label: 'භාගික දෝෂය හා ප්‍රතිශත දෝෂය ', url: '/studypack/භාගික-දෝෂය-හා-ප්‍රතිශත-දෝෂය' },
      { label: 'වර්නියර් කැලිපරය ', url: '/studypack/වර්නියර්-කැලිපරය' },
      { label: 'චල අන්වීක්ෂය ', url: '/studypack/චල-අන්වීක්ෂය' },
      { label: 'මයික්‍රෝමීටර ඉස්කුරුප්පු ආමානය ', url: '/studypack/මයික්‍රෝමීටර-ඉස්කුරුප්පු-ආමානය' },
      { label: 'ගෝලමානය ', url: '/studypack/ගෝලමානය' },
      { label: 'දෛශික', url: '/studypack/දෛශික' },
    ],
  },
  {
    id: '2',
    title: '02. යාන්ත්‍ර විද්‍යාව - Meachanics',
    subtitle: 'studypack',
    content: '.',
    links: [
      { label: "චලිතය", url: '/studypack/චලිතය' },
      { label: 'නිවුටන් නියම', url: '/studypack/නිවුටන්-නියම' },
      { label: 'ආවේගය සහ ගම්‍යතාව', url: '/studypack/ආවේගය-සහ-ගම්‍යතාව' },
      { label: 'කාර්‍යය හා ශක්තිය', url: '/studypack/කාර්‍යය-හා-ශක්තිය' },
      { label: 'දෛශික , ස්ථිති විද්‍යාව', url: '/studypack/දෛශික-ස්ථිති-විද්‍යාව' },
      { label: 'ඝර්ෂණය', url: '/studypack/ඝර්ෂණය' },
      { label: 'ගුරුත්ව කේන්ද්‍රය', url: '/studypack/ගුරුත්ව-කේන්ද්‍රය' },
      { label: 'භ්‍රමණ චලිතය', url: '/studypack/භ්‍රමණ-චලිතය' },
      { label: 'ද්‍රවස්ථිති විද්‍යාව', url: '/studypack/ද්‍රවස්ථිති-විද්‍යාව' },
      { label: 'ද්‍රව ගති විද්‍යාව', url: '/studypack/ද්‍රව-ගති-විද්‍යාව' },
      
      
    ],
  },
  {
    id: '3',
    title: '03. දෝලන හා තරංග - Oscillations and Waves',
    subtitle: 'Oscillations and Waves',
    content: '',
    links: [
      
    ],
  },
  {
    id: '4',
    title: '04. තාප භෞතිකය - Thermal Physics',
    subtitle: 'Thermal Physics',
    content: 'Study of heat and temperature.',
    links: [
  
    ],
  },
  {
    id: '5',
    title: '05. ගුරුත්වීය ස්ථිතීය - studypack',
    subtitle: 'studypack',
    content: '.',
    links: [
    
    ],
  },
  {
    id: '6',
    title: '06. ස්ථිති විද්‍යුත් ක්ෂේත්‍රය- studypack',
    subtitle: 'studypack',
    content: '.',
    links: [
     
    ],
  },
  {
    id: '7',
    title: '07. - චුම්භක ක්ෂේත්‍රය - Magnetic Fields',
    subtitle: 'Magnetic Fields',
    content: '',
    links: [
     
    ],
  },
  {
    id: '8',
    title: '08. ධාරා විද්‍යුතය - Current Electricity',
    subtitle: 'Current Electricity',
    content: '',
    links: [
     
    ],
  },
  {
    id: '9',
    title: '09. ඉලෙක්ට්‍රොනික විද්‍යාව- Electronics',
    subtitle: 'Electronics',
    content: '',
    links: [
    
    ],
  },
  {
    id: '10',
    title: '10. පදාර්ථයේ යාන්ත්‍රික ගුණ- Mechanical Properties of Matter',
    subtitle: 'Mechanical Properties of Matter',
    content: '',
    links: [
    
    ],
  },
  {
    id: '11',
    title: '11. පදාර්ථ හා විකිරණ- Matter and Radiation',
    subtitle: 'Matter and Radiation',
    content: '',
    links: [

    ],
  },
  
];

function App() {
  

  
  const [expandedId, setExpandedId] = useState('1');

  

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore the exclusive Physics Study Pack</h1>

        <div className="space-y-4">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 fade-in-on-scroll"
            >
              <button
                onClick={() => toggleExpand(topic.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-xl"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{topic.title}</h3>
                </div>
                {expandedId === topic.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {expandedId === topic.id && (
                <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                  <p className="text-gray-600 mb-4">{topic.content}</p>
                  {topic.links && topic.links.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Related Topics:</h4>
                      <div className="grid gap-2">
                        {topic.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            className="flex items-center px-4 py-2.5 bg-gray-100 hover:bg-blue-500 rounded-lg transition-colors duration-200 group"
                          >
                            <span className="text-gray-700 group-hover:text-black font-medium text-sm">
                              {link.label}
                            </span>
                            <ChevronDown className="w-4 h-4 text-gray-400 ml-auto transform -rotate-90 group-hover:translate-x-1 transition-transform duration-200" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;