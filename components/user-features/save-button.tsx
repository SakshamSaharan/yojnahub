"use client"

import { Button } from "@/components/ui/button"
import { Bookmark, Loader2 } from "lucide-react"
import { useState } from "react"
import { saveResult } from "@/app/actions"

interface SaveButtonProps {
    schemeId: string
    status: string
    data: any
}

export function SaveButton({ schemeId, status, data }: SaveButtonProps) {
    const [loading, setLoading] = useState(false)
    const [saved, setSaved] = useState(false)
    // const { toast } = useToast() // simplified for now

    const handleSave = async () => {
        setLoading(true)
        const result = await saveResult(schemeId, status, data)
        setLoading(false)

        if (result.success) {
            setSaved(true)
            alert("Result saved successfully!")
        } else {
            alert(result.error || "Failed to save.")
        }
    }

    return (
        <Button
            variant={saved ? "secondary" : "default"}
            size="sm"
            onClick={handleSave}
            disabled={loading || saved}
            className={saved ? "text-green-600" : ""}
        >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bookmark className={`mr-2 h-4 w-4 ${saved ? "fill-current" : ""}`} />}
            {saved ? "Saved" : "Save Result"}
        </Button>
    )
}
