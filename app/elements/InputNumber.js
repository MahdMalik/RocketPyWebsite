import { useState } from "react"
import { Stack, Button, TextField } from "@mui/material"

const InputNumber = ({inputName, inputValue}) => {
    const [name, setName] = useState(inputName)
    const [value, setValue] = useState(0)

    return (
        <Stack direction="row" spacing = {2}>
        <div></div>
        <p>{name}</p>
        <TextField
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            inputValue = value
          }}>
        </TextField>
      </Stack>
    )
}

export default InputNumber