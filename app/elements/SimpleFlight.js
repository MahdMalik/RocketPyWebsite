import { useEffect, useState } from "react"
import EnvInput from "./EnvInput"
import MotorInput from "./MotorInput"
import { Stack } from "@mui/material"

const SimpleFlight = () => {
    const [envInput, setEnvInput] = useState({})
    const [motorInput, setMotorInput] = useState({})

    
    return (
        <Stack direction="column" alignItems="center" spacing = {1}>
            <EnvInput setInput={setEnvInput}/>
            <MotorInput setInput={setMotorInput}/>
        </Stack>
    )
}

export default SimpleFlight