import { NextResponse } from "next/server"
import { verifyToken } from "@clerk/backend"

const { MongoClient } = require('mongodb');

export async function POST(req)
{
    const {user, token} = await req.json()

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

    //from here on we're verified. We have the id, we now can get the username and return that.
    const client = new MongoClient(process.env.MONGO_DB_DRIVER)
    try
    {
        await client.connect()
        const database = client.db("rocket-data")
        const users = database.collection("Users")

        const userDoc = await users.findOne({id: user.id})
        //if they don't exist, create them.
        if(!userDoc)
        {
            await users.insertOne({id: user.id, name: user.username})
            return NextResponse.json(user.username)
        }
        //otherwise, return their username
        else
        {
            const name = userDoc.name
            return NextResponse.json(userDoc.name)
        }
    }
    catch(e)
    {
        return NextResponse.json("Error trying to connect to database: " + e)
    }
    finally
    {
        await client.close()
    }
}