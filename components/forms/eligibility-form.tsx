"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation" // Use from next/navigation in App Router
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SpeechInput } from "@/components/speech-input"
import { eligibilitySchema, EligibilityFormData } from "@/lib/schemas"

export function EligibilityForm() {
    const t = useTranslations("Index") // Using Index for now, should likely split
    // Need to add form translations to messages
    const router = useRouter()

    const form = useForm<EligibilityFormData>({
        resolver: zodResolver(eligibilitySchema),
        defaultValues: {
            income: 0,
            occupation: "",
            age: 0,
        },
    })

    function onSubmit(data: EligibilityFormData) {
        // In a real app, we might construct query params or save to state
        // For now, let's pass as query params to results page
        const params = new URLSearchParams()
        params.set("income", data.income.toString())
        params.set("occupation", data.occupation)
        params.set("age", data.age.toString())

        router.push(`/results?${params.toString()}`)
    }

    const handleSpeech = (field: keyof EligibilityFormData, text: string) => {
        // Basic logic to parse numbers from text if field is numeric
        if (field === 'income' || field === 'age') {
            const num = parseFloat(text.replace(/[^0-9.]/g, ''))
            if (!isNaN(num)) {
                form.setValue(field, num)
            }
        } else {
            form.setValue(field, text)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="income"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Annual Income (₹)</FormLabel>
                            <div className="flex gap-2">
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="e.g. 500000"
                                        {...field}
                                        onChange={e => field.onChange(e.target.valueAsNumber)}
                                    />
                                </FormControl>
                                <SpeechInput onTranscript={(text) => handleSpeech('income', text)} />
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="occupation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Occupation</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select occupation" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="salaried">Salaried</SelectItem>
                                    <SelectItem value="self_employed">Self Employed</SelectItem>
                                    <SelectItem value="farmer">Farmer</SelectItem>
                                    <SelectItem value="student">Student</SelectItem>
                                    <SelectItem value="unemployed">Unemployed</SelectItem>
                                    <SelectItem value="homemaker">Homemaker</SelectItem>
                                    <SelectItem value="retired">Retired</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Age</FormLabel>
                            <div className="flex gap-2">
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="e.g. 25"
                                        {...field}
                                        onChange={e => field.onChange(e.target.valueAsNumber)}
                                    />
                                </FormControl>
                                <SpeechInput onTranscript={(text) => handleSpeech('age', text)} />
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Check Eligibility
                </Button>
            </form>
        </Form>
    )
}
