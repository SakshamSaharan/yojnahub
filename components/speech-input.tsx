"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"

interface SpeechInputProps {
    onTranscript: (text: string) => void
    language?: string // 'en-IN', 'hi-IN', 'ta-IN'
}

export function SpeechInput({ onTranscript, language = 'en-IN' }: SpeechInputProps) {
    const [isListening, setIsListening] = useState(false)
    const [isSupported, setIsSupported] = useState(false)
    const [recognition, setRecognition] = useState<any>(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // @ts-ignore
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
            if (SpeechRecognition) {
                setIsSupported(true)
                const recognitionInstance = new SpeechRecognition()
                recognitionInstance.continuous = false
                recognitionInstance.interimResults = false
                recognitionInstance.lang = language

                recognitionInstance.onresult = (event: any) => {
                    const transcript = event.results[0][0].transcript
                    onTranscript(transcript)
                    setIsListening(false)
                }

                recognitionInstance.onerror = (event: any) => {
                    console.error("Speech recognition error", event.error)
                    setIsListening(false)
                }

                recognitionInstance.onend = () => {
                    setIsListening(false)
                }

                setRecognition(recognitionInstance)
            }
        }
    }, [language, onTranscript])

    const toggleListening = () => {
        if (!isSupported || !recognition) return

        if (isListening) {
            recognition.stop()
            setIsListening(false)
        } else {
            recognition.start()
            setIsListening(true)
        }
    }

    if (!isSupported) return null

    return (
        <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggleListening}
            className={isListening ? "text-red-500 animate-pulse" : "text-muted-foreground"}
            title={isListening ? "Stop Listening" : "Start Speaking"}
        >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
        </Button>
    )
}
