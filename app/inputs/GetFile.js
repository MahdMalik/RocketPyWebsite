import { useState } from "react"
import { Stack, Button, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useRef } from "react"

const GetFile = ({inputName, setUploaded}) => {
    const fileRef = useRef(null)

    function setParentComponent(bool, fileName) {
        setUploaded((prev) => {
            return {...prev, [inputName]: [bool, fileName]}
        })
    }
    
    const storeFile = async(event) => {
        const file = event.target.files[0]

        //if unable to open the file, say it's not uploaded and return false
        if(!file)
        {
            alert("Unable to open file.")
            setParentComponent(false, null)
            fileRef.current.value = ""
            return
        }

        const extension = file.name.split(".").pop().toLowerCase()
        console.log(extension)
        if(extension != "csv" && extension != "eng")
        {
            alert("Provided incorrect file type. Only give .env or .csv files")
            setParentComponent(false, null)
            fileRef.current.value = ""
            return
        }

        //have to do this apparently and encode it this way before sending it
        const fileData = new FormData()
        fileData.append("file", file)

        const response = await axios.post("/api/file-upload", fileData)
        const result = response.data
        //if response failed, notify them and make sure clear that it failed
        if(!result.success)
        {
            alert("Reading the file failed!")
            setParentComponent(false, null)
            fileRef.current.value = ""
            return
        }

        console.log("File upload success! Stored at: " + result.path)
        setParentComponent(true, file.name)
    }

    return (
        <div>
            <Stack direction="row" alignItems="center" spacing = {2}>
                <Typography>{inputName}</Typography>
                <input type="file" accept=".csv, .eng" onChange={storeFile} ref={fileRef}/>
            </Stack>
        </div>
    )
}

export default GetFile