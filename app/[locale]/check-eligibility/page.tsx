import { EligibilityForm } from "@/components/forms/eligibility-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckEligibilityPage() {
    return (
        <div className="container mx-auto py-10 px-4 md:px-0 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-serif text-primary text-center">Check Your Eligibility</CardTitle>
                    <CardDescription className="text-center">
                        Answer a few simple questions to find schemes tailored for you.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <EligibilityForm />
                </CardContent>
            </Card>
        </div>
    )
}
