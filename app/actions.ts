"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function saveResult(schemeId: string, status: string, data: any) {
    const session = await auth()
    if (!session?.user?.id) {
        return { error: "You must be logged in to save results." }
    }

    try {
        // Check if scheme exists (it might be a mock scheme not in DB)
        // For demo/hackathon, if schemeId starts with "scheme-", it's likely mock.
        // We should upsert the scheme if it doesn't exist?
        // Or just try to save.

        // For now, let's assume we can save.
        // If DB is offline, this will throw.

        await prisma.savedResult.create({
            data: {
                userId: session.user.id,
                schemeId: schemeId,
                status: status,
                submittedData: data
            }
        })

        revalidatePath("/results")
        return { success: true }
    } catch (error) {
        console.error("Failed to save result:", error)
        return { error: "Failed to save result. Database might be unavailable." }
    }
}
