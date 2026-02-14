"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ModeToggle } from "@/components/mode-toggle"
import { Notifications } from "@/components/user-features/notifications"
import { usePathname } from "next/navigation"

export function SiteHeader() {
    const t = useTranslations("Navigation")
    const pathname = usePathname()
    // Extract locale from pathname for links (simple approach)
    const locale = pathname.split('/')[1] || 'en'

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-1 m-0 p-0 bg-primary"></div> {/* Saffron Top Stripe */}
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href={`/${locale}`} className="mr-6 flex items-center space-x-2">
                        {/* Ashoka Chakra Icon Placeholder - using simple circle for now */}
                        <div className="h-6 w-6 rounded-full border-2 border-blue-700 flex items-center justify-center">
                            <span className="text-blue-700 text-[10px] font-bold">☸</span>
                        </div>
                        <span className="hidden font-bold sm:inline-block font-serif text-xl text-primary">
                            YojnaHub
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href={`/${locale}`} className="transition-colors hover:text-foreground/80 text-foreground/60">
                            {t("home")}
                        </Link>
                        <Link href={`/${locale}/schemes`} className="transition-colors hover:text-foreground/80 text-foreground/60">
                            {t("schemes")}
                        </Link>
                        <Link href={`/${locale}/about`} className="transition-colors hover:text-foreground/80 text-foreground/60">
                            {t("about")}
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search if needed */}
                    </div>
                    <nav className="flex items-center space-x-2">
                        <LanguageSwitcher />
                        <ModeToggle />
                        <Link href="/api/auth/signin">
                            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90">
                                {t("login")}
                            </Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
