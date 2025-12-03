"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calculator,

  BookOpen,

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
const topics = [
  {
    title: "AutoCAD",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/pre-engineering/AutoCAD",
  },
  {
    title: "Engineering Drawing",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/pre-engineering/Engineering-Drawing",
  },
  {
    title: "Engineering Mechanics",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/pre-engineering/Engineering-Mechanics",
  },
  {
    title: "Fluid Mechanics",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/pre-engineering/Fluid-Mechanics",
  },
  {
    title: "Engineering Mathematics",
    description: "Polynomials, equations, inequalities, and algebraic expressions",
    icon: <Calculator className="h-6 w-6" />,
    link: "/pre-engineering/Engineering-Mathematics",
  }

]



export default function PreEngPage() {
  

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-sky-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Pre-Engineering
          </h1>
          <p className="mt-3 text-muted-foreground">
            Select a Topic to explore 
          </p>
        </div>

        
        {/* SECTION TITLE */}
        <div className="mb-6 flex items-center justify-between">
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
