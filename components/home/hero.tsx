"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    const t = useTranslations("Index")

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-serif text-primary">
                            {t("title")}
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            {t("subtitle")}
                        </p>
                    </div>
                    <div className="space-x-4 pt-4">
                        <Link href="/check-eligibility">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                                {t("getStarted")}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative localized elements or pattern could go here */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-white to-green-600 opacity-80" />
        </section>
    )
}
