"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function SuccessStories() {
    // Mock data - in real app, fetch from DB or use translations
    const stories = [
        {
            name: "Ramesh Kumar",
            role: "Farmer, Bihar",
            scheme: "PM-KISAN",
            story: "Receiving ₹6000 annually helped me buy quality seeds on time.",
            initial: "R"
        },
        {
            name: "Lakshmi Devi",
            role: "Homemaker, Tamil Nadu",
            scheme: "Ujjwala Yojana",
            story: "Cooking is smoke-free now. My health has improved significantly.",
            initial: "L"
        },
        {
            name: "Amit Singh",
            role: "Student, Delhi",
            scheme: "PM-SSS",
            story: "The scholarship covered my tuition fees completely.",
            initial: "A"
        }
    ]

    return (
        <section className="py-16 bg-muted/50">
            <div className="container px-4 md:px-6">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8 font-serif text-primary">
                    Real Stories, Real Impact
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {stories.map((story, index) => (
                        <Card key={index} className="border-l-4 border-l-primary/50">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                <Avatar className="h-10 w-10 border-2 border-primary">
                                    <AvatarFallback>{story.initial}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-base">{story.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{story.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-2 inline-block rounded-full bg-secondary/10 px-2 py-1 text-xs font-semibold text-secondary-foreground border border-secondary/20">
                                    {story.scheme}
                                </div>
                                <p className="text-sm text-muted-foreground italic">
                                    "{story.story}"
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
