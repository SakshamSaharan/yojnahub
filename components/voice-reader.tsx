"use client"

import { Button } from "@/components/ui/button"
import { Volume2, StopCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useLocale } from "next-intl"

interface VoiceReaderProps {
    text: string
    label?: string
}

export function VoiceReader({ text, label = "Read Aloud" }: VoiceReaderProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const locale = useLocale() // 'en', 'hi', 'ta'

    const handleSpeak = () => {
        if (typeof window === "undefined") return

        if (isPlaying) {
            window.speechSynthesis.cancel()
            setIsPlaying(false)
            return
        }

        const utterance = new SpeechSynthesisUtterance(text)

        // Attempt to set voice based on locale
        // Note: Browser support for 'hi-IN' or 'ta-IN' varies
        if (locale === 'hi') utterance.lang = 'hi-IN'
        else if (locale === 'ta') utterance.lang = 'ta-IN'
        else utterance.lang = 'en-IN'

        utterance.onend = () => setIsPlaying(false)

        window.speechSynthesis.cancel() // Stop any previous
        window.speechSynthesis.speak(utterance)
        setIsPlaying(true)
    }

    useEffect(() => {
        // Cleanup on unmount
        return () => {
            if (typeof window !== "undefined") window.speechSynthesis.cancel()
        }
    }, [])

    return (
        <Button
            variant={isPlaying ? "destructive" : "secondary"}
            size="sm"
            onClick={handleSpeak}
            className="w-full gap-2"
        >
            {isPlaying ? <StopCircle className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            {isPlaying ? "Stop" : label}
        </Button>
    )
}
