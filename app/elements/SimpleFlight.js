import { useEffect, useState } from "react"
import InputNumber from "./InputNumber"
import ToggleOption from "./ToggleOption"

const FlightInput = () => {
    const [inputObj, setInputObj] = useState({})
    
    return (
        <div>
            <ToggleOption inputName="Set Environment" setInputObj={setInputObj}/>
            {/* If going to use environment that's not standard, enable that here */}
            {inputObj["Set Environment"] && ( 
                <div>
                    <InputNumber inputName="latitude" setInputObj={setInputObj}/>
                    <InputNumber inputName="longitude" setInputObj={setInputObj}/>
                    <InputNumber inputName="Elevation" setInputObj={setInputObj}/>
                </div>
            )}
        </div>
    )
}

export default FlightInput