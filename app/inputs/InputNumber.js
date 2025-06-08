import { useState } from "react"
import { Stack, Button, TextField, Typography } from "@mui/material"

const InputNumber = ({show, inputName, setInputObj}) => {
    const [value, setValue] = useState(0)

    return (
        <div>
          {show ? (
            <Stack direction="row" alignItems="center" spacing = {2}>
              <Typography>{inputName}</Typography>
              <TextField
                value={value}
                size="small"
                onChange={(e) => {
                  setValue(e.target.value)
                  //changing the new value of it
                  setInputObj((prev) => {
                    return {...prev, [inputName]: e.target.value}
                  })
                }}>
              </TextField>
            </Stack>
            ) : (<div/>)}
          
      </div>
    )
}

export default InputNumber