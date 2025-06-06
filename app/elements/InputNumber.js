import { useState } from "react"
import { Stack, Button, TextField } from "@mui/material"

const InputNumber = ({show, inputName, setInputObj}) => {
    const [value, setValue] = useState(0)

    return (
        <div>
          {show ? (
            <Stack direction="row" spacing = {2}>
              <p>{inputName}</p>
              <TextField
                value={value}
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