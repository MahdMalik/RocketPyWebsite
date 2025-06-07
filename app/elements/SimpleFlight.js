import { useEffect, useState } from "react"
import EnvInput from "./EnvInput"

const SimpleFlight = () => {
    const [envInput, setEnvInput] = useState({})

    
    return (
        <div>
            <EnvInput setInput={setEnvInput}/>
        </div>
    )
}

export default SimpleFlight