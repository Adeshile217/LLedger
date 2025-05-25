import { Button } from "@/components/ui/button"
import { AirplayIcon as Spotify, Music, Youtube, Radio, Headphones } from "lucide-react"

interface AlbumStreamingProps {
  title: string
  links: {
    spotify?: string
    appleMusic?: string
    amazonMusic?: string
    youtubeMusic?: string
    pandora?: string
  }
}

export default function AlbumStreaming({ title, links }: AlbumStreamingProps) {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium mb-2 text-amber-800">Listen to "{title}" on:</h4>
      <div className="flex flex-wrap gap-2">
        {links.spotify && (
          <Button variant="ghost" size="sm" asChild className="text-green-600 hover:text-green-700 hover:bg-green-50">
            <a
              href={links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Listen to ${title} on Spotify`}
            >
              <Spotify className="h-4 w-4" />
            </a>
          </Button>
        )}

        {links.appleMusic && (
          <Button variant="ghost" size="sm" asChild className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
            <a
              href={links.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Listen to ${title} on Apple Music`}
            >
              <Music className="h-4 w-4" />
            </a>
          </Button>
        )}

        {links.amazonMusic && (
          <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            <a
              href={links.amazonMusic}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Listen to ${title} on Amazon Music`}
            >
              <Headphones className="h-4 w-4" />
            </a>
          </Button>
        )}

        {links.youtubeMusic && (
          <Button variant="ghost" size="sm" asChild className="text-red-600 hover:text-red-700 hover:bg-red-50">
            <a
              href={links.youtubeMusic}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Listen to ${title} on YouTube Music`}
            >
              <Youtube className="h-4 w-4" />
            </a>
          </Button>
        )}

        {links.pandora && (
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
          >
            <a
              href={links.pandora}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Listen to ${title} on Pandora`}
            >
              <Radio className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
