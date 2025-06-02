'use client'

import { useRouting } from "../../elements/routing"
import { Button } from "@mui/material"
import { SignIn, SignedIn } from "@clerk/nextjs"

export default function Login()
{
    const {goToLandingPage, goToRegister, goToMain} = useRouting()
    
    return (
        <div>
            {/**if signed in,don't want them to access this page, send them to main */}
            <SignedIn>
            {() => {
                goToMain()
                return null
            }}
            </SignedIn>

            {/* Otherwise, give them objeccts to go to different pages, and then also have the sign in embedded in */}
            <Button variant="contained" onClick={goToLandingPage}>Home</Button>
            <Button variant="contained" onClick={goToRegister}>Register</Button>
            <SignIn signInForceRedirectUrl="/main"/>
        </div>
    )
}