import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';



const topics = [
  { 
    id: '1',
    title: '01. මිනුම් - Measurement',
    subtitle: 'Measurement',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    links: [
      { label: 'Introduction to Measurement', url: '/measurement/intro' },
      { label: 'Units and Standards', url: '/measurement/units' },
      { label: 'Practice Problems', url: '/measurement/practice' },
    ],
  },
  {
    id: '2',
    title: '02. යාන්ත්‍රික විද්‍යාව - Mechanics',
    subtitle: 'Mechanics',
    content: 'Study of motion and forces.',
    links: [
      { label: "Newton's Laws", url: '/mechanics/newtons-laws' },
      { label: 'Kinematics', url: '/mechanics/kinematics' },
      { label: 'Dynamics', url: '/mechanics/dynamics' },
    ],
  },
  {
    id: '3',
    title: '03. දෝලන හා තරංග - Oscillations and Waves',
    subtitle: 'Oscillations and Waves',
    content: 'Study of periodic motion and wave phenomena.',
    links: [
      { label: 'Simple Harmonic Motion', url: '/waves/shm' },
      { label: 'Wave Properties', url: '/waves/properties' },
      { label: 'Sound Waves', url: '/waves/sound' },
    ],
  },
  {
    id: '4',
    title: '04. තාප භෞතිකය - Thermal Physics',
    subtitle: 'Thermal Physics',
    content: 'Study of heat and temperature.',
    links: [
      { label: 'Temperature Scales', url: '/thermal/temperature' },
      { label: 'Heat Transfer', url: '/thermal/transfer' },
      { label: 'Thermodynamics', url: '/thermal/thermodynamics' },
    ],
  },
  {
    id: '5',
    title: '05. ගුරුත්වීය ස්ථිතීය - Measurement',
    subtitle: 'Measurement',
    content: 'Advanced measurement concepts.',
    links: [
      { label: 'Gravitational Fields', url: '/gravity/fields' },
      { label: 'Orbital Motion', url: '/gravity/orbital' },
      { label: 'Gravitational Potential', url: '/gravity/potential' },
    ],
  },
  {
    id: '6',
    title: '06. ස්ථිති විද්‍යුත් ක්ෂේත්‍රය- Mechanics',
    subtitle: 'Mechanics',
    content: 'Advanced mechanics concepts.',
    links: [
      { label: 'Gravitational Fields', url: '/gravity/fields' },
      { label: 'Orbital Motion', url: '/gravity/orbital' },
      { label: 'Gravitational Potential', url: '/gravity/potential' },
    ],
  },
  {
    id: '7',
    title: '07. - චුම්භක ක්ෂේත්‍රය - Magnetic Fields',
    subtitle: 'Magnetic Fields',
    content: 'Advanced magnetic fields concepts.',
    links: [
      { label: 'Gravitational Fields', url: '/gravity/fields' },
      { label: 'Orbital Motion', url: '/gravity/orbital' },
      { label: 'Gravitational Potential', url: '/gravity/potential' },
    ],
  },
  {
    id: '8',
    title: '08. ධාරා විද්‍යුතය - Current Electricity',
    subtitle: 'Current Electricity',
    content: 'Advanced current electricity concepts.',
    links: [
      { label: 'Gravitational Fields', url: '/gravity/fields' },
      { label: 'Orbital Motion', url: '/gravity/orbital' },
      { label: 'Gravitational Potential', url: '/gravity/potential' },
    ],
  },
  {
    id: '9',
    title: '09. ඉලෙක්ට්‍රොනික විද්‍යාව- Electronics',
    subtitle: 'Electronics',
    content: 'Advanced electronics concepts.',
    links: [
      { label: 'Gravitational Fields', url: '/gravity/fields' },
      { label: 'Orbital Motion', url: '/gravity/orbital' },
      { label: 'Gravitational Potential', url: '/gravity/potential' },
    ],
  },
  {
    id: '10',
    title: '10. පදාර්ථයේ යාන්ත්‍රික ගුණ- Mechanical Properties of Matter',
    subtitle: 'Mechanical Properties of Matter',
    content: 'Advanced mechanical properties concepts.',
    links: [
      { label: 'Gravitational Fields', url: '/gravity/fields' },
      { label: 'Orbital Motion', url: '/gravity/orbital' },
      { label: 'Gravitational Potential', url: '/gravity/potential' },
    ],
  },
  {
    id: '11',
    title: '11. පදාර්ථ හා විකිරණ- Matter and Radiation',
    subtitle: 'Matter and Radiation',
    content: 'Advanced concepts in matter and radiation.',
    links: [
      { label: 'Gravitational Fields', url: '/gravity/fields' },
      { label: 'Orbital Motion', url: '/gravity/orbital' },
      { label: 'Gravitational Potential', url: '/gravity/potential' },
    ],
  },
  
];

function App() {
  
  const [expandedId, setExpandedId] = useState('1');

  

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore the exclusive Physics Study Pack</h1>

        <div className="space-y-4">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
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
