import { NextResponse } from "next/server"

export async function POST(req)
{
    const {id, token} = await req.json()
    return NextResponse.json(id)
}