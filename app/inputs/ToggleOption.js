import { useState } from "react"
import { Stack, Button, TextField, Switch, Typography } from "@mui/material"

const ToggleOption = ({show, inputName, setInputObj}) => {
    const [value, setValue] = useState(false)


    return (
        <div>
            {show ? 
                (<Stack direction="row" alignItems="center" spacing = {2}>
                    <Typography>{inputName}</Typography>
                    <Switch
                        checked={value}
                        onChange={(e) => {
                            setValue(e.target.checked)
                            setInputObj((prev) => {
                                return {...prev, [inputName]: e.target.checked}
                            })
                        }}
                    />
                </Stack>)
                : 
                (<div/>)
            }
        </div>
    )
}

export default ToggleOption