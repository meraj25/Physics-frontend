"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calculator,
  TrendingUp,
  Infinity,
  Triangle,
  CircleDot,
  Sigma,
  BarChart3,
  Compass,
  Atom,
  Cog,
  BookOpen,
  Wrench,
  ChevronRight,
} from "lucide-react"

// ---------------------------------------------------
// TopicCard Component
// ---------------------------------------------------
function TopicCard({ title, description, icon, link }) {
  return (
    <Card
      onClick={() => (window.location.href = link)}
      className="group cursor-pointer overflow-hidden border-0 bg-white shadow-md shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <CardContent className="p-0">
        <div className="flex items-center gap-4 p-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
            {icon || <BookOpen className="h-6 w-6" />}
          </div>

          <div className="flex-1 space-y-1">
            <p className="font-semibold text-foreground">{title}</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>

          <ChevronRight className="h-5 w-5 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500" />
        </div>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------
// Topics Data
// ---------------------------------------------------
const pureMathsTopics = [
  {
    title: "වර්ගජ සමීකරණ",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/වර්ගජ-සමීකරණ ",
  },
  {
    title: "අසමානතා",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/අසමානතා",
  },
  {
    title: "ලඝු",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/ලඝු",
  },
  {
    title: "බහුපද ශ්‍රිත ",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/බහුපද-ශ්‍රිත",
  },
  {
    title: "ත්‍රිකෝණමිතිය",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/ත්‍රිකෝණමිතිය",
  },
  {
    title: "සරල රේඛාව",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/සරල-රේඛාව",
  },
  {
    title: "වෘත්තය",
    description: "Trigonometric functions, identities, and equations",
    icon: <Triangle className="h-6 w-6" />,
    link: "/mathematics/pure/වෘත්තය",
  },
  {
    title: "සීමා,අවකලනය",
    description: "Lines, circles, parabolas, and conic sections",
    icon: <Compass className="h-6 w-6" />,
    link: "/mathematics/pure/සීමා-අවකලනය",
  },
  {
    title: "අනුකලනය",
    description: "Arithmetic, geometric progressions, and summation",
    icon: <Sigma className="h-6 w-6" />,
    link: "/mathematics/pure/අනුකලනය",
  },
  {
    title: "ශ්‍රේණි",
    description: "Argand diagrams, operations, and polar form",
    icon: <Infinity className="h-6 w-6" />,
    link: "/mathematics/pure/ශ්‍රේණි",
  },
  {
    title: "සංකීර්ණ සංඛ්‍යා",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/සංකීර්ණ-සංඛ්‍යා",
  },
  {
    title: "සංකරණ සහ සංයෝජන",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/සංකරණ-සහ-සංයෝජන",
  },
  {
    title: "න්‍යාස",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/න්‍යාස",
  },
  {
    title: "ද්විපද ප්‍රමේයය",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/ද්විපද-ප්‍රමේයය",
  },
  {
    title: "ගණිත අභ්‍යූහනය",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/mathematics/pure/ගණිත-අභ්‍යූහනය",
  },
]

const appliedMathsTopics = [
  {
    title: "චලිතය හා චලිත ප්‍රස්තාර",
    description: "Differentiation, integration, limits, and their applications",
    icon: <TrendingUp className="h-6 w-6" />,
    link: "/mathematics/applied/චලිතය-හා-චලිත-ප්‍රස්තාර",
  },
  {
    title: "සාපේක්ෂ ප්‍රවේගය",
    description: "Probability, distributions, and statistical inference",
    icon: <BarChart3 className="h-6 w-6" />,
    link: "/mathematics/applied/සාපේක්ෂ-ප්‍රවේගය",
  },
  {
    title: "සාපේක්ෂ ත්වරණය",
    description: "Vector algebra, scalar and vector products, applications",
    icon: <CircleDot className="h-6 w-6" />,
    link: "/mathematics/applied/සාපේක්ෂ-ත්වරණය",
  },
  {
    title: "වෘත්ත චලිතය",
    description: "Forces, motion, momentum, and energy principles",
    icon: <Cog className="h-6 w-6" />,
    link: "/mathematics/applied/වෘත්ත-චලිතය",
  },
  {
    title: "සරල අනුවර්තීය චලිතය",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/සරල-අනුවර්තීය-චලිතය",
  },
    {
    title: "ගුරුත්ව කේන්ද්‍රය",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/ගුරුත්ව-කේන්ද්‍රය",
  },
    {
    title: "දෛශික",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/දෛශික",
  },
    {
    title: "බල සමතුලිතතාව",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/බල-සමතුලිතතාව",
  },
    {
    title: "ඒක තල බල",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/ඒක-තල-බල",
  },
    {
    title: "සන්ධිකළ ඳඩු",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/සන්ධිකළ-ඳඩු",
  },
    {
    title: "බෝ අංකනය සහ රාමු සැකිලි",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/බෝ-අංකනය-සහ-රාමු-සැකිලි",
  },
    {
    title: "සම්භාවිතාව",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/සම්භාවිතාව",
  },
    {
    title: "සංඛ්‍යානය",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/සංඛ්‍යානය",
  },
    {
    title: "ගෝල ගැටුම්",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/ගෝල-ගැටුම්",
  },
  
    {
    title: "ප්‍රක්ෂිප්ත",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/ප්‍රක්ෂිප්ත",
  },
    {
    title: "කාර්‍යය , ශක්තිය හා ක්ෂමතාවය",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/කාර්‍යය-ශක්තිය-හා-ක්ෂමතාවය",
  },
    {
    title: "නිවුටන් නියම",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/නිවුටන්-නියම",
  },
  {
    title: "ආවේග ආතති",
    description: "Kinematics, projectile motion, and circular motion",
    icon: <Atom className="h-6 w-6" />,
    link: "/mathematics/applied/ආවේග-ආතති",
  },
]

// ---------------------------------------------------
// Main Page Component
// ---------------------------------------------------
export default function MathsPage() {
  const [selectedCategory, setSelectedCategory] = useState("pure")

  const topics =
    selectedCategory === "pure" ? pureMathsTopics : appliedMathsTopics

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-sky-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Combined Mathematics
          </h1>
          <p className="mt-3 text-muted-foreground">
            Select a category to explore topics
          </p>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="mb-10 flex justify-center gap-6">
          <button
            onClick={() => setSelectedCategory("pure")}
            className={`group flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-300 ${
              selectedCategory === "pure"
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl shadow-blue-500/30 scale-105"
                : "bg-white text-muted-foreground ring-1 ring-border hover:ring-blue-300 hover:text-blue-600 hover:shadow-lg"
            }`}
          >
            <BookOpen className="h-5 w-5" />
            Pure Maths
          </button>

          <button
            onClick={() => setSelectedCategory("applied")}
            className={`group flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold transition-all duration-300 ${
              selectedCategory === "applied"
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl shadow-blue-500/30 scale-105"
                : "bg-white text-muted-foreground ring-1 ring-border hover:ring-blue-300 hover:text-blue-600 hover:shadow-lg"
            }`}
          >
            <Wrench className="h-5 w-5" />
            Applied Maths
          </button>
        </div>

        {/* SECTION TITLE */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            {selectedCategory === "pure"
              ? "Pure Mathematics"
              : "Applied Mathematics"}
          </h2>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {topics.length} topics
          </span>
        </div>

        {/* TOPIC CARDS GRID */}
        <div className="grid gap-4 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className="animate-in fade-in slide-in-from-bottom-4 duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <TopicCard
                title={topic.title}
                description={topic.description}
                icon={topic.icon}
                link={topic.link}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
