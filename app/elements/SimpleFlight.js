import { useState } from "react"
import InputNumber from "./InputNumber"

const FlightInput = () => {
    const [inputObj, setInputObj] = useState({})
    
    return (
        <div>
            <InputNumber inputName={"latitude"} inputValue={inputObj.latitude}/>
        </div>
    )
}

export default FlightInput