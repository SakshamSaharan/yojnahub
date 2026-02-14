"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { useTranslations } from "next-intl"

interface ShareResultsProps {
    title: string
    text: string
    url?: string
}

export function ShareResults({ title, text, url }: ShareResultsProps) {
    const t = useTranslations("Common") // Assuming we add a 'share' key

    const handleShare = async () => {
        const shareData = {
            title,
            text,
            url: url || window.location.href,
        }

        if (navigator.share) {
            try {
                await navigator.share(shareData)
            } catch (err) {
                console.error("Error sharing:", err)
            }
        } else {
            // Fallback: Copy to clipboard
            try {
                await navigator.clipboard.writeText(`${title}\n${text}\n${shareData.url}`)
                alert("Link copied to clipboard!")
            } catch (err) {
                console.error("Error copying:", err)
            }
        }
    }

    return (
        <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
        </Button>
    )
}
