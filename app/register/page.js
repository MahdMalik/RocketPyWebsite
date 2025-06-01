'use client'

import { Button } from "@mui/material"
import { useRouting } from "../elements/routing"

export default function Register()
{    
    const {goToLandingPage, goToLogin} = useRouting()

    return (
        <div>
            <Button variant="contained" onClick={goToLandingPage}>Home</Button>
            <Button variant="contained" onClick={goToLogin}>Log In</Button>
            <p>I LOVE THE KANYE ALBUM MY BEAUTIFUL DARK TWISTED FANTASY GRAHH</p>
        </div>
    )
}