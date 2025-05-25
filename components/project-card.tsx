import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface AlbumCardProps {
  title: string
  description: string
  tags: string[]
  image: string
}

export default function ProjectCard({ title, description, tags, image }: AlbumCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-amber-200 shadow-md">
      <div className="aspect-video w-full overflow-hidden bg-amber-100">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader className="bg-gradient-to-r from-amber-50 to-white">
        <h3 className="text-xl font-bold text-amber-800">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 bg-amber-50/50">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
