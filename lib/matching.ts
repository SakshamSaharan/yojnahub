import { Scheme } from "@prisma/client"

export interface UserProfile {
    income: number
    occupation: string
    age: number
    gender?: string
    caste?: string
    state?: string
}

export interface MatchResult {
    scheme: Scheme
    status: "ELIGIBLE" | "PARTIAL" | "NOT_ELIGIBLE"
    missingCriteria: string[]
}

export function evaluateEligibility(user: UserProfile, scheme: Scheme): MatchResult {
    const rules = scheme.eligibilityRules as any
    const missing: string[] = []

    // Basic Rule Engine
    // Expect rules in format: { "age": { "min": 18, "max": 35 }, "income": { "max": 300000 }, "occupation": ["student"] }

    if (rules.age) {
        if (rules.age.min && user.age < rules.age.min) {
            missing.push(`Minimum age required is ${rules.age.min} (You are ${user.age})`)
        }
        if (rules.age.max && user.age > rules.age.max) {
            missing.push(`Maximum age allowed is ${rules.age.max} (You are ${user.age})`)
        }
    }

    if (rules.income) {
        if (rules.income.max && user.income > rules.income.max) {
            missing.push(`Income must be less than ₹${rules.income.max} (Yours is ₹${user.income})`)
        }
    }

    if (rules.occupation) {
        if (Array.isArray(rules.occupation) && !rules.occupation.includes(user.occupation.toLowerCase())) {
            missing.push(`Occupation must be one of: ${rules.occupation.join(', ')}`)
        }
    }

    if (rules.gender && user.gender) {
        if (rules.gender !== user.gender) {
            missing.push(`Gender criteria not met`) // Simplification
        }
    }

    let status: MatchResult["status"] = "ELIGIBLE"
    if (missing.length > 0) {
        status = "NOT_ELIGIBLE" // Or PARTIAL if we define partial rules
    }

    // TODO: Add document check logic for PARTIAL status

    return { scheme, status, missingCriteria: missing }
}
