import Link from "next/link"
import {
  ArrowRight,
  Mail,
  AirplayIcon as Spotify,
  Instagram,
  Twitter,
  Music2,
  Youtube,
  Calendar,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"
import StreamingLinks from "@/components/streaming-links"
import AlbumStreaming from "@/components/album-streaming"
import SocialButtons from "@/components/social-buttons"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-primary">Logan Ledger</span>
            </Link>
            <nav className="flex gap-6">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#music"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Music
              </Link>
              <Link
                href="#press"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Press
              </Link>
              <Link
                href="#shows"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Shows
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="https://instagram.com/loganledger" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="text-accent hover:text-accent hover:bg-accent/10">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://twitter.com/loganledger" target="_blank" rel="noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-secondary hover:text-secondary hover:bg-secondary/10"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://tiktok.com/@loganledger" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" className="text-accent hover:text-accent hover:bg-accent/10">
                  <Music2 className="h-4 w-4" />
                  <span className="sr-only">TikTok</span>
                </Button>
              </Link>
              <Link href="https://youtube.com/@loganledger" target="_blank" rel="noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-rustic-600 hover:text-rustic-600 hover:bg-rustic-600/10"
                >
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="hero-gradient space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Logan Ledger</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Country musician blending traditional sounds with modern sensibilities
            </p>
            <div className="space-x-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="#music">
                  Listen to My Music <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                <Link href="#shows">Upcoming Shows</Link>
              </Button>
            </div>

            <div className="mt-2">
              <p className="text-sm text-muted-foreground mb-2">Listen on your favorite platform:</p>
              <StreamingLinks
                spotify="https://open.spotify.com/artist/example"
                appleMusic="https://music.apple.com/artist/example"
                amazonMusic="https://music.amazon.com/artists/example"
                youtubeMusic="https://music.youtube.com/channel/example"
                pandora="https://www.pandora.com/artist/example"
              />
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="about" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-[58rem] gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">About Me</h2>
              <p className="text-muted-foreground">
                I'm a country musician with a passion for blending traditional country sounds with contemporary
                influences. My music draws from the rich heritage of classic country while exploring new sonic
                territories.
              </p>
              <p className="text-muted-foreground">
                My journey in music began in the small town where I grew up, listening to the legends of country music.
                I've been writing songs and performing since I was a teenager, and I've been fortunate to work with some
                incredible musicians along the way.
              </p>
              <p className="text-muted-foreground">
                When I'm not on stage or in the studio, you can find me exploring vintage guitar shops, writing new
                material, or enjoying the great outdoors.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg bg-amber-100 w-full max-w-sm aspect-square shadow-md border-2 border-amber-200">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Logan Ledger"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="music" className="music-gradient py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-[58rem] space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-primary">My Music</h2>
              <p className="text-muted-foreground">
                Explore my discography and latest releases. Each album represents a chapter in my musical journey.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <div className="album-card">
                  <ProjectCard
                    title="Logan Ledger"
                    description="My self-titled debut album produced by T Bone Burnett, featuring 11 original tracks that blend classic country with psychedelic influences."
                    tags={["2020", "T Bone Burnett", "Americana"]}
                    image="/placeholder.svg?height=300&width=300"
                  />
                </div>
                <AlbumStreaming
                  title="Logan Ledger"
                  links={{
                    spotify: "https://open.spotify.com/album/example1",
                    appleMusic: "https://music.apple.com/album/example1",
                    amazonMusic: "https://music.amazon.com/albums/example1",
                    youtubeMusic: "https://music.youtube.com/playlist/example1",
                  }}
                />
              </div>
              <div className="space-y-2">
                <div className="album-card">
                  <ProjectCard
                    title="Starlight EP"
                    description="A collection of songs exploring themes of longing and the open road, with nods to traditional country and western swing."
                    tags={["2018", "EP", "Western Swing"]}
                    image="/placeholder.svg?height=300&width=300"
                  />
                </div>
                <AlbumStreaming
                  title="Starlight EP"
                  links={{
                    spotify: "https://open.spotify.com/album/example2",
                    appleMusic: "https://music.apple.com/album/example2",
                    amazonMusic: "https://music.amazon.com/albums/example2",
                    youtubeMusic: "https://music.youtube.com/playlist/example2",
                  }}
                />
              </div>
              <div className="space-y-2">
                <div className="album-card">
                  <ProjectCard
                    title="Imaginary Lines"
                    description="My latest album featuring collaborations with renowned Nashville musicians, delving deeper into the cosmic side of country music."
                    tags={["2023", "Nashville", "Cosmic Country"]}
                    image="/placeholder.svg?height=300&width=300"
                  />
                </div>
                <AlbumStreaming
                  title="Imaginary Lines"
                  links={{
                    spotify: "https://open.spotify.com/album/example3",
                    appleMusic: "https://music.apple.com/album/example3",
                    amazonMusic: "https://music.amazon.com/albums/example3",
                    youtubeMusic: "https://music.youtube.com/playlist/example3",
                    pandora: "https://www.pandora.com/album/example3",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="press" className="press-gradient py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-[58rem] space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-secondary">Press & Media</h2>
              <p className="text-muted-foreground">What critics and media are saying about Logan Ledger's music.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="quote-card rounded-lg border-2 border-denim-200 bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center gap-2">
                  <div className="font-semibold text-denim-700">Rolling Stone</div>
                  <div className="text-sm text-denim-500">★★★★☆</div>
                </div>
                <blockquote className="border-l-4 border-denim-400 pl-4 italic text-denim-900">
                  "Logan Ledger's haunting vocals and timeless songwriting evoke the ghosts of country music's past
                  while charting a bold course for its future."
                </blockquote>
                <div className="mt-4 text-sm text-denim-600">- Album Review, 2023</div>
              </div>
              <div className="quote-card rounded-lg border-2 border-denim-200 bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center gap-2">
                  <div className="font-semibold text-denim-700">NPR Music</div>
                </div>
                <blockquote className="border-l-4 border-denim-400 pl-4 italic text-denim-900">
                  "A mesmerizing blend of traditional country and psychedelic textures, Ledger's music feels both
                  familiar and entirely new."
                </blockquote>
                <div className="mt-4 text-sm text-denim-600">- First Listen Feature, 2022</div>
              </div>
              <div className="quote-card rounded-lg border-2 border-denim-200 bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center gap-2">
                  <div className="font-semibold text-denim-700">American Songwriter</div>
                  <div className="text-sm text-denim-500">9/10</div>
                </div>
                <blockquote className="border-l-4 border-denim-400 pl-4 italic text-denim-900">
                  "Ledger's songwriting prowess shines through on every track, delivering stories that are as
                  emotionally resonant as they are melodically captivating."
                </blockquote>
                <div className="mt-4 text-sm text-denim-600">- Album Review, 2023</div>
              </div>
              <div className="quote-card rounded-lg border-2 border-denim-200 bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center gap-2">
                  <div className="font-semibold text-denim-700">No Depression</div>
                </div>
                <blockquote className="border-l-4 border-denim-400 pl-4 italic text-denim-900">
                  "In a sea of country artists trying to sound authentic, Logan Ledger simply is. His music carries the
                  weight of tradition without being burdened by it."
                </blockquote>
                <div className="mt-4 text-sm text-denim-600">- Feature Article, 2022</div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center text-secondary">Featured In</h3>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                <div className="flex h-12 items-center justify-center">
                  <img
                    src="/placeholder.svg?height=48&width=120"
                    alt="Rolling Stone Logo"
                    className="h-full object-contain"
                  />
                </div>
                <div className="flex h-12 items-center justify-center">
                  <img
                    src="/placeholder.svg?height=48&width=120"
                    alt="NPR Music Logo"
                    className="h-full object-contain"
                  />
                </div>
                <div className="flex h-12 items-center justify-center">
                  <img
                    src="/placeholder.svg?height=48&width=120"
                    alt="Billboard Logo"
                    className="h-full object-contain"
                  />
                </div>
                <div className="flex h-12 items-center justify-center">
                  <img
                    src="/placeholder.svg?height=48&width=120"
                    alt="American Songwriter Logo"
                    className="h-full object-contain"
                  />
                </div>
                <div className="flex h-12 items-center justify-center">
                  <img
                    src="/placeholder.svg?height=48&width=120"
                    alt="No Depression Logo"
                    className="h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="shows" className="shows-gradient py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-[58rem] space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-forest-600">Upcoming Shows</h2>
              <p className="text-muted-foreground">
                Catch me live at these upcoming performances. I can't wait to share my music with you.
              </p>
            </div>
            <div className="space-y-4">
              <div className="show-card rounded-lg border-2 border-forest-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex gap-3">
                    <div className="hidden md:flex flex-col items-center justify-center bg-forest-100 p-3 rounded-md text-forest-700">
                      <Calendar className="h-5 w-5 mb-1" />
                      <span className="text-sm font-bold">JUN</span>
                      <span className="text-lg font-bold">15</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-forest-800">The Bluebird Cafe</h3>
                      <p className="text-forest-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> Nashville, TN
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="font-medium text-forest-800">June 15, 2024</p>
                    <p className="text-forest-600">8:00 PM</p>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-forest-600 hover:bg-forest-700 text-white" asChild>
                    <Link href="https://tickets.example.com" target="_blank">
                      Get Tickets
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="show-card rounded-lg border-2 border-forest-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex gap-3">
                    <div className="hidden md:flex flex-col items-center justify-center bg-forest-100 p-3 rounded-md text-forest-700">
                      <Calendar className="h-5 w-5 mb-1" />
                      <span className="text-sm font-bold">JUL</span>
                      <span className="text-lg font-bold">08</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-forest-800">The Troubadour</h3>
                      <p className="text-forest-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> Los Angeles, CA
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="font-medium text-forest-800">July 8, 2024</p>
                    <p className="text-forest-600">9:00 PM</p>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-forest-600 hover:bg-forest-700 text-white" asChild>
                    <Link href="https://tickets.example.com" target="_blank">
                      Get Tickets
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="show-card rounded-lg border-2 border-forest-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex gap-3">
                    <div className="hidden md:flex flex-col items-center justify-center bg-forest-100 p-3 rounded-md text-forest-700">
                      <Calendar className="h-5 w-5 mb-1" />
                      <span className="text-sm font-bold">AUG</span>
                      <span className="text-lg font-bold">22</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-forest-800">Americana Music Festival</h3>
                      <p className="text-forest-600 flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> Austin, TX
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="font-medium text-forest-800">August 22-25, 2024</p>
                    <p className="text-forest-600">Schedule TBA</p>
                  </div>
                  <Button className="mt-4 md:mt-0 bg-forest-600 hover:bg-forest-700 text-white" asChild>
                    <Link href="https://tickets.example.com" target="_blank">
                      Festival Info
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="contact" className="contact-gradient py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid max-w-[58rem] gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-rustic-600">Get In Touch</h2>
              <p className="text-muted-foreground">
                For booking inquiries, press, or just to say hello, feel free to reach out. I'd love to hear from you!
              </p>
              <div className="space-y-2 bg-white p-6 rounded-lg border-2 border-rustic-200 shadow-md">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-rustic-500" />
                  <span className="text-rustic-700">booking@loganledger.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-accent" />
                  <span className="text-rustic-700">instagram.com/loganledger</span>
                </div>
                <div className="flex items-center gap-2">
                  <Twitter className="h-5 w-5 text-secondary" />
                  <span className="text-rustic-700">twitter.com/loganledger</span>
                </div>
                <div className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-accent" />
                  <span className="text-rustic-700">tiktok.com/@loganledger</span>
                </div>
                <div className="flex items-center gap-2">
                  <Youtube className="h-5 w-5 text-rustic-600" />
                  <span className="text-rustic-700">youtube.com/@loganledger</span>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-lg font-medium mb-2 text-rustic-700">Follow me:</h3>
                <SocialButtons variant="default" showLabels={true} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border-2 border-rustic-200 shadow-md">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 bg-amber-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Logan Ledger. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com/loganledger" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="text-accent hover:text-accent hover:bg-accent/10">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://twitter.com/loganledger" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="text-secondary hover:text-secondary hover:bg-secondary/10">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="https://tiktok.com/@loganledger" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="text-accent hover:text-accent hover:bg-accent/10">
                <Music2 className="h-4 w-4" />
                <span className="sr-only">TikTok</span>
              </Button>
            </Link>
            <Link href="https://youtube.com/@loganledger" target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="text-rustic-600 hover:text-rustic-600 hover:bg-rustic-600/10"
              >
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </Link>
            <Link href="https://spotify.com/artist/example" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-primary/10">
                <Spotify className="h-4 w-4" />
                <span className="sr-only">Spotify</span>
              </Button>
            </Link>
            <Link href="mailto:booking@loganledger.com">
              <Button
                variant="ghost"
                size="icon"
                className="text-rustic-600 hover:text-rustic-600 hover:bg-rustic-600/10"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
