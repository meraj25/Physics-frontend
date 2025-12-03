
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"



export function TopicCard({ title, description}) {
  return (
    <Card className="group cursor-pointer border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
