'use client'

import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import { useRouting } from "./elements/routing"
export default function LandingPage()
{
  const {goToLogin, goToRegister} = useRouting()
  
  return (
        <div>
            <Button variant="contained" onClick={goToLogin}>Login</Button>
            <Button variant="contained" onClick={goToRegister}>Register</Button>
            <p>I LOVE KANYE</p>
        </div>
  )
}
