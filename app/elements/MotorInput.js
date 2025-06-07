import { useEffect, useState } from "react"
import InputNumber from "./InputNumber"
import ToggleOption from "./ToggleOption"
import DateGetter from "./DateGetter";
import GetFile from "./GetFile";

const MotorInput = ({setInput}) => {
    const [inputObj, setInputObj] = useState({})

    useEffect(() => {
        setInput(inputObj)
    }, inputObj)
    
    return (
        <div>
            <GetFile inputName="Thrust Curve" setUploaded={setInputObj}/>
        </div>
    )
}

export default MotorInput