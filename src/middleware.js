import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {
    const token = await getToken({ req })
    console.log(token);
    if (token) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL('/login', req.url))
}

export const config = {
    matcher: [
        '/myBookings',
        '/myBookings/:path*',
        '/checkout/:path*',
    ],
}