import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        // If logged in and trying to access "/" or "/login", redirect to dashboard
        if (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/login") {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ req, token }) => {
                // Return true to allow access without authentication (only for root page and login page)
                if (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/login") {
                    return true;
                }
                // All other pages require authentication
                return !!token;
            },
        },
        pages: {
            signIn: '/login',
        }
    }
);

export const config = {
    // Matcher protects all routes except api routes, start page ('/'), next static files, and login page
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|$).*)"],
};
