import { evaluateEligibility, MatchResult, UserProfile } from "@/lib/matching"
import { MOCK_SCHEMES } from "@/lib/data/schemes"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, AlertTriangle, XCircle, ExternalLink, Download } from "lucide-react"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { VoiceReader } from "@/components/voice-reader"
import { SaveButton } from "@/components/user-features/save-button"
import { ShareResults } from "@/components/user-features/share-results"

export default async function ResultsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await searchParams
    const t = await getTranslations("Results")

    const userProfile: UserProfile = {
        income: Number(params.income) || 0,
        age: Number(params.age) || 0,
        occupation: String(params.occupation || ""),
        gender: "any",
        state: "any"
    }

    const results: MatchResult[] = MOCK_SCHEMES.map(scheme =>
        evaluateEligibility(userProfile, scheme)
    )

    results.sort((a, b) => {
        const order = { "ELIGIBLE": 0, "PARTIAL": 1, "NOT_ELIGIBLE": 2 }
        return order[a.status] - order[b.status]
    })

    return (
        <div className="container mx-auto py-10 px-4 md:px-0">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold font-serif text-primary mb-2">{t("title")}</h1>
                <p className="text-muted-foreground">
                    {t("basedOn")} {t("why")} Age {userProfile.age}, {userProfile.occupation}, Income ₹{userProfile.income}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {results.map((result) => (
                    <SchemeCard key={result.scheme.id} result={result} t={t} />
                ))}
            </div>
        </div>
    )
}

function SchemeCard({ result, t }: { result: MatchResult, t: any }) {
    const { scheme, status, missingCriteria } = result

    let statusColor = "border-l-green-600"
    let statusBadge = <Badge className="bg-green-600 hover:bg-green-700">{t("eligible")}</Badge>
    let statusIcon = <CheckCircle2 className="h-5 w-5 text-green-600" />

    if (status === "PARTIAL") {
        statusColor = "border-l-yellow-500"
        statusBadge = <Badge className="bg-yellow-500 hover:bg-yellow-600">{t("partial")}</Badge>
        statusIcon = <AlertTriangle className="h-5 w-5 text-yellow-500" />
    } else if (status === "NOT_ELIGIBLE") {
        statusColor = "border-l-red-500"
        statusBadge = <Badge className="bg-red-500 hover:bg-red-600">{t("notEligible")}</Badge>
        statusIcon = <XCircle className="h-5 w-5 text-red-500" />
    }

    const docs = scheme.documentsRequired ? JSON.parse(scheme.documentsRequired as string) : []
    const ttsText = `${scheme.name}. ${scheme.description}`

    return (
        <Card className={`border-l-4 ${statusColor} shadow-md`}>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{scheme.category}</div>
                    {statusIcon}
                </div>
                <CardTitle className="leading-snug text-lg">{scheme.name}</CardTitle>
                <CardDescription>{scheme.ministry}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
                <div className="flex justify-between items-center mb-4">
                    {statusBadge}
                </div>

                {status === "NOT_ELIGIBLE" && (
                    <div className="mb-4 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 p-2 rounded">
                        <strong>{t("why")}</strong>
                        <ul className="list-disc list-inside mt-1">
                            {missingCriteria.map((c, i) => <li key={i}>{c}</li>)}
                        </ul>
                    </div>
                )}

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details">
                        <AccordionTrigger>{t("schemeDetails")}</AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm text-muted-foreground mb-2">{scheme.description}</p>
                            {scheme.applicationProcess && (
                                <div className="mt-2 text-sm">
                                    <strong>{t("howToApply")}</strong> {scheme.applicationProcess}
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="documents">
                        <AccordionTrigger>{t("documentsRequired")}</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc list-inside text-sm text-muted-foreground">
                                {docs.map((d: string, i: number) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                            <Button variant="outline" size="sm" className="mt-2 w-full">
                                <Download className="mr-2 h-4 w-4" /> {t("downloadChecklist")}
                            </Button>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            <CardFooter className="pt-2 flex flex-col gap-2">
                <div className="flex w-full gap-2">
                    <VoiceReader text={ttsText} label={t("voice")} />
                    {scheme.officialLink && (
                        <Link href={scheme.officialLink} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button size="sm" className="w-full gap-2">
                                {t("apply")} <ExternalLink className="h-3 w-3" />
                            </Button>
                        </Link>
                    )}
                </div>
                <div className="flex w-full gap-2">
                    <div className="w-full">
                        <SaveButton schemeId={scheme.id} status={status} data={{}} />
                    </div>
                    <div className="w-full">
                        <ShareResults title={scheme.name} text={scheme.description} />
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
