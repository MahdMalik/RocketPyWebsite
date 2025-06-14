'use client'
import Image from "next/image";
import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { SignedIn, UserButton, SignedOut, useUser, getToken, useAuth } from "@clerk/nextjs";
import { Logout, useRouting } from "../elements/routing";
import FlightInput from "../SimpleFlight/SimpleFlight";

export default function Home() {
  const [latitude, setLat] = useState(0)
  const [longitude, setLong] = useState(0)
  const {goToLandingPage, logout} = useRouting()
  const {user} = useUser()
  const {getToken} = useAuth()

  useEffect(() => {
    if(!user)
    {
      return
    }
    
    //first send token to backend, from there get the username, and save that into local storage
    const getUserData = async() => {
      const token = await getToken();
      //if they already have data, don't call the database
      if(!token || localStorage.getItem("user-data") != null)
      {
        return
      }

      console.log(user)

      //going to then send the user id to a database with axios.post
      const response = await axios.post("/api/database", {
        user: user,
        token: token
      })

      const username = response.data

      localStorage.setItem("user-data", JSON.stringify({name: username}))
    }
    
    getUserData()

  }, [user])

  //for now, just checks to see if the python communication works
  async function runFlight() {
    const response =  await axios.post("http://localhost:" + process.env.NEXT_PUBLIC_PYTHON_PORT + "/python/test", {
      input: "AAAA"
    })
    const data = response.data
    if(data.success)
    {
      alert(data.message)
    }
    
  }
  
  return (
    <Stack spacing = {5}>
      {/* if signed in, have the user button displayed and button to go to landing page */}
      <SignedIn>
        <UserButton/>
        <Button variant="contained" onClick={goToLandingPage}>Home</Button>
        </SignedIn>
      {/* If signed out, don't want user here, send them back.*/}
      <SignedOut><Logout/></SignedOut>
      <FlightInput />
      
      {/* <Stack direction="row" spacing = {2}>
        <div></div>
        <Button sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkRed' } }}>
          DISABLE
        </Button>
        <Button sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'darkGreen' } }}>
          ENABLE
        </Button>
        <p>Latitude:</p>
        <TextField
          value={latitude}
          onChange={(e) => setLat(e.target.value)}>
        </TextField>
      </Stack>
      
      <Stack direction="row" spacing = {2}>
        <div></div>
        <Button sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkRed' } }}>
          DISABLE
        </Button>
        <Button sx={{ backgroundColor: 'green', color: 'white', '&:hover': { backgroundColor: 'darkGreen' } }}>
          ENABLE
        </Button>
        <p>Longitude:</p>
        <TextField
          value={longitude}
          onChange={(e) => setLong(e.target.value)}>
        </TextField>
      </Stack> */}
      <Button onClick={runFlight}>Click to run sim</Button>
    </Stack>
  );
}