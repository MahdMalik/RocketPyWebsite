'use client'

import { Button } from "@mui/material"
import { useRouting } from "../../elements/routing"
import { SignedIn, SignUp } from "@clerk/nextjs"

export default function Register()
{    
    const {goToLandingPage, goToLogin, goToMain} = useRouting()

    return (
        <div>
            {/* If they're signed in, don't want them on this page, so send them back */}
            <SignedIn>
            {() => {
                goToMain()
                return null
            }}
            </SignedIn>

            {/* Otherwise, display sign uup prompt and such. */}
            <Button variant="contained" onClick={goToLandingPage}>Home</Button>
            <Button variant="contained" onClick={goToLogin}>Log In</Button>
            <SignUp signInForceRedirectUrl="/main"/>
        </div>
    )
}