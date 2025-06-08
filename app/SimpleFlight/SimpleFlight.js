import { useEffect, useState } from "react"
import EnvInput from "./Components/EnvInput"
import MotorInput from "./Components/MotorInput"
import RocketInput from "./Components/RocketInput"
import { Stack } from "@mui/material"

const SimpleFlight = () => {
    const [envInput, setEnvInput] = useState({})
    const [motorInput, setMotorInput] = useState({})
    const [rocketInput, setRocketInput] = useState({})

    
    return (
        <Stack direction="column" alignItems="center" spacing = {1}>
            <EnvInput setInput={setEnvInput}/>
            <MotorInput setInput={setMotorInput}/>
            <RocketInput setInput={setRocketInput}/>
        </Stack>
    )
}

export default SimpleFlight