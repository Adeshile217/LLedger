import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PressQuoteProps {
  publication: string
  quote: string
  source: string
  rating?: string
}

export default function PressQuote({ publication, quote, source, rating }: PressQuoteProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{publication}</div>
          {rating && <div className="text-sm text-muted-foreground">{rating}</div>}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="border-l-4 border-primary pl-4 italic">"{quote}"</blockquote>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">{source}</div>
      </CardFooter>
    </Card>
  )
}
