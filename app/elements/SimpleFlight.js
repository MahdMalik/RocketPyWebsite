import { useEffect, useState } from "react"
import InputNumber from "./InputNumber"

const FlightInput = () => {
    const [inputObj, setInputObj] = useState({})
    
    return (
        <div>
            <InputNumber inputName="latitude" setInputObj={setInputObj}/>
            <InputNumber inputName="longitude" setInputObj={setInputObj}/>
        </div>
    )
}

export default FlightInput