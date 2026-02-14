import createMiddleware from 'next-intl/middleware';
import { auth } from "@/auth";

const intlMiddleware = createMiddleware({
    locales: ['en', 'hi', 'ta'],
    defaultLocale: 'en'
});

export default auth((req) => {
    return intlMiddleware(req);
});

export const config = {
    matcher: ['/((?!api|_next|static|favicon.ico).*)']
};
