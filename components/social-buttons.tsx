import Link from "next/link"
import { Instagram, Twitter, Music2, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialButtonsProps {
  instagram?: string
  twitter?: string
  tiktok?: string
  youtube?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "secondary" | "outline" | "ghost"
  showLabels?: boolean
  className?: string
}

export default function SocialButtons({
  instagram = "https://instagram.com/loganledger1",
  twitter = "https://twitter.com/loganledger1",
  tiktok = "https://tiktok.com/@loganledger1",
  youtube = "https://youtube.com/@loganledger",
  size = "md",
  variant = "default",
  showLabels = false,
  className = "",
}: SocialButtonsProps) {
  const buttonSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "default"
  const iconSize = size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5"

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {instagram && (
        <Button
          variant={variant}
          size={buttonSize}
          asChild
          className="social-button bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
        >
          <Link href={instagram} target="_blank" rel="noreferrer">
            <Instagram className={`${iconSize} ${showLabels ? "mr-2" : ""}`} />
            {showLabels && "Instagram"}
          </Link>
        </Button>
      )}

      {twitter && (
        <Button
          variant={variant}
          size={buttonSize}
          asChild
          className="social-button bg-blue-500 text-white hover:bg-blue-600"
        >
          <Link href={twitter} target="_blank" rel="noreferrer">
            <Twitter className={`${iconSize} ${showLabels ? "mr-2" : ""}`} />
            {showLabels && "Twitter"}
          </Link>
        </Button>
      )}

      {tiktok && (
        <Button
          variant={variant}
          size={buttonSize}
          asChild
          className="social-button bg-black text-white hover:bg-gray-800"
        >
          <Link href={tiktok} target="_blank" rel="noreferrer">
            <Music2 className={`${iconSize} ${showLabels ? "mr-2" : ""}`} />
            {showLabels && "TikTok"}
          </Link>
        </Button>
      )}

      {youtube && (
        <Button
          variant={variant}
          size={buttonSize}
          asChild
          className="social-button bg-red-600 text-white hover:bg-red-700"
        >
          <Link href={youtube} target="_blank" rel="noreferrer">
            <Youtube className={`${iconSize} ${showLabels ? "mr-2" : ""}`} />
            {showLabels && "YouTube"}
          </Link>
        </Button>
      )}
    </div>
  )
}
