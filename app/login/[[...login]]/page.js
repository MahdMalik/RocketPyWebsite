'use client'

import { useRouting } from "../../elements/routing"
import { Button } from "@mui/material"
import { SignIn, SignedIn } from "@clerk/nextjs"

export default function Login()
{
    const {goToLandingPage, goToRegister, goToMain} = useRouting()
    
    return (
        <div>
            <SignedIn>
            {() => {
                goToMain()
                return null
            }}
            </SignedIn>

            <Button variant="contained" onClick={goToLandingPage}>Home</Button>
            <Button variant="contained" onClick={goToRegister}>Register</Button>
            <SignIn signInForceRedirectUrl="/main"/>
        </div>
    )
}