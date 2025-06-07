import { useState } from "react"
import { Stack, Button, TextField } from "@mui/material"

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