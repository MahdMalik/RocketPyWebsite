import { useState } from "react"
import { Stack, Button, TextField, Switch } from "@mui/material"

const ToggleOption = ({inputName, setInputObj}) => {
    const [value, setValue] = useState(false)


    return (
        <Stack direction="row" spacing = {2}>
            <p>{inputName}</p>
            <Switch
                checked={value}
                onChange={(e) => {
                    setValue(e.target.checked)
                    setInputObj((prev) => {
                        return {...prev, [inputName]: e.target.checked}
                    })
                }}
            />
        </Stack>
    )
}

export default ToggleOption