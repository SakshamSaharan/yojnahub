"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (locale: string) => {
        // Split pathname to get segments
        const segments = pathname.split("/");
        // Replace the locale segment (index 1)
        segments[1] = locale;
        const newPath = segments.join("/");
        router.push(newPath);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Switch Language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("hi")}>
                    हिंदी (Hindi)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("ta")}>
                    தமிழ் (Tamil)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
