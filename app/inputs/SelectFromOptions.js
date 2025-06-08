import { useState } from "react"
import { Stack, Button, TextField, Typography } from "@mui/material"

const SelectFromOptions = ({show, inputName, setInputObj, options}) => {
    const [value, setValue] = useState(0)

    return (
        <div>
          {show ? (
            <Stack direction="row" alignItems="center" spacing = {2}>
              <Typography>{inputName}</Typography>
              <select value={value} 
                onChange={(e) => 
                {
                    setValue(e.target.value)
                    setInputObj((prev) => 
                    {
                        return{...prev, [inputName]: e.target.value}
                    })
                }}
                >
                {/* This is a way we can put out all of the options */}
                {options.map((name) => {
                    return (<option value={name} key={name}>{name}</option>)
                })}
              </select>
            </Stack>
            ) : (<div/>)}
          
      </div>
    )
}

export default SelectFromOptions