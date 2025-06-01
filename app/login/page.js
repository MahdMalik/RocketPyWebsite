'use client'

import { useRouting } from "../elements/routing"
import { Button } from "@mui/material"

export default function Login()
{
    const {goToLandingPage, goToRegister} = useRouting()
    
    return (
        <div>
            <Button variant="contained" onClick={goToLandingPage}>Home</Button>
            <Button variant="contained" onClick={goToRegister}>Register</Button>
            <p>HAHAHA</p>
        </div>
    )
}