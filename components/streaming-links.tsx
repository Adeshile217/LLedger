import { Button } from "@/components/ui/button"
import { AirplayIcon as Spotify, Music, Youtube, Radio, Headphones } from "lucide-react"

interface StreamingLinksProps {
  spotify?: string
  appleMusic?: string
  amazonMusic?: string
  youtubeMusic?: string
  pandora?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline" | "ghost"
  className?: string
}

export default function StreamingLinks({
  spotify,
  appleMusic,
  amazonMusic,
  youtubeMusic,
  pandora,
  size = "md",
  variant = "outline",
  className = "",
}: StreamingLinksProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5"
  const buttonSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "default"

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {spotify && (
        <Button
          variant={variant}
          size={buttonSize}
          asChild
          className="bg-green-100 text-green-700 border-green-300 hover:bg-green-200 hover:text-green-800"
        >
          <a href={spotify} target="_blank" rel="noopener noreferrer" aria-label="Listen on Spotify">
            <Spotify className={`${iconSize} ${size !== "sm" ? "mr-2" : ""}`} />
            {size !== "sm" && "Spotify"}
          </a>
        </Button>
      )}

      {appleMusic && (
        <Button
          variant={variant}
          size={buttonSize}
          asChild
          className="bg-pink-100 text-pink-700 border-pink-300 hover:bg-pink-200 hover:text-pink-800"
        >
          <a href={appleMusic} target="_blank" rel="noopener noreferrer" aria-label="Listen on Apple Music">
            <Music className={`${iconSize} ${size !== "sm" ? "mr-2" : ""}`} />
            {size !== "sm" && "Apple Music"}
          </a>
        </Button>
      )}

      {amazonMusic && (
        <Button
          variant={variant}
          size={buttonSize}
          asChild
          className="bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200 hover:text-blue-800"
        >
          <a href={amazonMusic} target="_blank" rel="noopener noreferrer" aria-label="Listen on Amazon Music">
            <Headphones className={`${iconSize} ${size !== "sm" ? "mr-2" : ""}`} />
            {size !== "sm" && "Amazon Music"}
          </a>
        </Button>
      )}

      {youtubeMusic && (
        <Button
          variant={variant}
          size={buttonSize}
          asChild
          className="bg-red-100 text-red-700 border-red-300 hover:bg-red-200 hover:text-red-800"
        >
          <a href={youtubeMusic} target="_blank" rel="noopener noreferrer" aria-label="Listen on YouTube Music">
            <Youtube className={`${iconSize} ${size !== "sm" ? "mr-2" : ""}`} />
            {size !== "sm" && "YouTube Music"}
          </a>
        </Button>
      )}

      {pandora && (
        <Button
          variant={variant}
          size={buttonSize}
          asChild
          className="bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200 hover:text-purple-800"
        >
          <a href={pandora} target="_blank" rel="noopener noreferrer" aria-label="Listen on Pandora">
            <Radio className={`${iconSize} ${size !== "sm" ? "mr-2" : ""}`} />
            {size !== "sm" && "Pandora"}
          </a>
        </Button>
      )}
    </div>
  )
}
