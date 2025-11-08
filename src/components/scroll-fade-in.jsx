



import { useEffect, useRef, ReactNode } from "react"


 function ScrollFadeIn({ children, delay = 0, duration = 600, className = "" }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
      style={
        {
          "--animation-delay": `${delay}ms`,
          "--animation-duration": `${duration}ms`,
        } 
      }
    >
      {children}
    </div>
  )
}

export { ScrollFadeIn }