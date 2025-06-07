import { useState } from "react"
import { Stack, Button, TextField } from "@mui/material"
import axios from "axios"

const GetFile = ({inputName, setUploaded}) => {

    function setParentComponent(bool) {
        setUploaded((prev) => {
            return {...prev, [inputName]: bool}
        })
    }
    
    const storeFile = async(event) => {
        const file = event.target.files[0]

        //if unable to open the file, say it's not uploaded and return false
        if(!file)
        {
            alert("Unable to open file.")
            setParentComponent(false)
            return
        }

        const extension = file.name.split(".").pop().toLowerCase()
        console.log(extension)
        if(extension != "csv" && extension != "eng")
        {
            alert("Provided incorrect file type. Only give .env or .csv files")
            setParentComponent(false)
            return
        }

        const fileData = new FormData()
        fileData.append("file", file)

        const response = await axios.post("/api/file-upload", fileData)
        const result = response.data
        if(!result.success)
        {
            alert("Reading the file failed!")
            setParentComponent(false)
            return
        }

        console.log("File upload success! Stored at: " + result.path)
        setParentComponent(true)
    }

    return (
        <div>
            <p>{inputName}</p>
            <label>Upload File
                <input type="file" accept=".csv, .eng" onChange={storeFile}/>
            </label>
        </div>
    )
}

export default GetFile