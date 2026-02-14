import { z } from "zod"

export const eligibilitySchema = z.object({
    income: z.number().min(0, "Income must be a positive number"),
    occupation: z.string().min(1, "Please select an occupation"),
    age: z.number().min(0, "Age must be valid").max(120, "Age must be realistic"),
    gender: z.string().optional(),
    caste: z.string().optional(),
    state: z.string().optional(),
})

export type EligibilityFormData = z.infer<typeof eligibilitySchema>
