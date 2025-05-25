"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface MusicPlayerProps {
  tracks: {
    title: string
    src: string
    duration: string
  }[]
}

export default function MusicPlayer({ tracks }: MusicPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(80)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio(tracks[currentTrack].src)

    const updateProgress = () => {
      if (audioRef.current) {
        const duration = audioRef.current.duration || 1
        setProgress((audioRef.current.currentTime / duration) * 100)
      }
    }

    const handleEnded = () => {
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack(currentTrack + 1)
      } else {
        setIsPlaying(false)
        setProgress(0)
      }
    }

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress)
      audioRef.current.addEventListener("ended", handleEnded)
      audioRef.current.volume = volume / 100
      audioRef.current.muted = isMuted

      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error)
          setIsPlaying(false)
        })
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.removeEventListener("timeupdate", updateProgress)
        audioRef.current.removeEventListener("ended", handleEnded)
      }
    }
  }, [currentTrack, tracks])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
    }
  }, [isMuted])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handlePrevious = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1)
    }
  }

  const handleNext = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1)
    }
  }

  const handleProgressChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = (value[0] / 100) * (audioRef.current.duration || 0)
      audioRef.current.currentTime = newTime
      setProgress(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="w-full rounded-lg border bg-card p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{tracks[currentTrack].title}</h3>
        <p className="text-sm text-muted-foreground">Sample Track</p>
      </div>

      <div className="mb-4">
        <Slider value={[progress]} max={100} step={0.1} onValueChange={handleProgressChange} className="w-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
          <span>{tracks[currentTrack].duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handlePrevious} disabled={currentTrack === 0}>
            <SkipBack className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button variant="default" size="icon" onClick={handlePlayPause}>
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
          </Button>

          <Button variant="ghost" size="icon" onClick={handleNext} disabled={currentTrack === tracks.length - 1}>
            <SkipForward className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleMute}>
            {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
          </Button>

          <Slider value={[volume]} max={100} step={1} onValueChange={handleVolumeChange} className="w-24" />
        </div>
      </div>
    </div>
  )
}
