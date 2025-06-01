'use client'

import { Button } from "@mui/material"
import { useRouting } from "../../elements/routing"
import { SignedIn, SignUp } from "@clerk/nextjs"

export default function Register()
{    
    const {goToLandingPage, goToLogin, goToMain} = useRouting()

    return (
        <div>
            <SignedIn>
            {() => {
                goToMain()
                return null
            }}
            </SignedIn>

            <Button variant="contained" onClick={goToLandingPage}>Home</Button>
            <Button variant="contained" onClick={goToLogin}>Log In</Button>
            <SignUp signInForceRedirectUrl="/main"/>
        </div>
    )
}