'use client'

import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import { useRouting, Logout } from "./elements/routing"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
export default function LandingPage()
{
  const {goToLogin, goToRegister, goToMain} = useRouting()
  
  return (
        <div>
            {/* If signed in, give them access to the dashboard page to run sims */}
            <SignedIn>
              <UserButton/>
              <Button variant="contained" onClick={goToMain}>To Dashboard</Button>
            </SignedIn>
            {/* If signed out, give them ability to go login or register*/}
            <SignedOut>
            <Logout/>
            <Button variant="contained" onClick={goToLogin}>Login</Button>
            <Button variant="contained" onClick={goToRegister}>Register</Button>
            </SignedOut>
        </div>
  )
}
