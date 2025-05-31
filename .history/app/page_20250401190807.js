'use client'
import Image from "next/image";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [latitude, setLat] = useState(0)
  const [longitude, setLong] = useState(0)
  async function runFlight() {
    const response =  
  }
  
  return (
    <Stack spacing = {5}>
      <Stack direction="row" spacing = {2}>
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
      </Stack>
      <Button onClick={runFlight}>Click to run sim</Button>
    </Stack>
  );
}
