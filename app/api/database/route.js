import { NextResponse } from "next/server"
import { verifyToken } from "@clerk/backend"

export async function POST(req)
{
    const {id, token} = await req.json()

    try
    {
       const session = await verifyToken(token, {
        secretKey: process.env.CLERK_SECRET_KEY
       })


    }
    catch(e)
    {
        return NextResponse.json("Error trying to get user data: " + e)
    }

    return NextResponse.json(id)
}