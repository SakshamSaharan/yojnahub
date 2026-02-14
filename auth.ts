import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Google,
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                // Add logic here to look up the user from the credentials supplied
                // This is a placeholder for demo purposes
                if (credentials.email === "demo@example.com" && credentials.password === "demo") {
                    return {
                        id: "1",
                        name: "Demo User",
                        email: "demo@example.com",
                    }
                }
                return null
            },
        }),
    ],
})
