'use client'

import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import { useRouting } from "./elements/routing"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
export default function LandingPage()
{
  const {goToLogin, goToRegister, goToMain} = useRouting()
  
  return (
        <div>
            <SignedIn>
              <UserButton/>
              <Button variant="contained" onClick={goToMain}>To Dashboard</Button>
              </SignedIn>
            <SignedOut>
            <Button variant="contained" onClick={goToLogin}>Login</Button>
            <Button variant="contained" onClick={goToRegister}>Register</Button>
            </SignedOut>
        </div>
  )
}
