"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, FileCheck, IndianRupee } from "lucide-react"

export function ImpactStats() {
    const stats = [
        {
            label: "Beneficiaries",
            value: "1.2 Lakh+",
            icon: Users,
            color: "text-blue-600"
        },
        {
            label: "Schemes Listed",
            value: "500+",
            icon: FileCheck,
            color: "text-green-600"
        },
        {
            label: "Benefits Disbursed",
            value: "₹50 Cr+",
            icon: IndianRupee,
            color: "text-orange-600"
        }
    ]

    return (
        <section className="py-12 bg-background border-t">
            <div className="container px-4 md:px-6">
                <div className="grid gap-4 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <Card key={index} className="bg-card">
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                                <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                                    <stat.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold tracking-tighter">{stat.value}</h3>
                                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
