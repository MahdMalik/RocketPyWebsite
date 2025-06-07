import { useEffect, useState } from "react"
import EnvInput from "./EnvInput"
import MotorInput from "./MotorInput"

const SimpleFlight = () => {
    const [envInput, setEnvInput] = useState({})
    const [motorInput, setMotorInput] = useState({})

    
    return (
        <div>
            <EnvInput setInput={setEnvInput}/>
            <MotorInput setInput={setMotorInput}/>
        </div>
    )
}

export default SimpleFlight