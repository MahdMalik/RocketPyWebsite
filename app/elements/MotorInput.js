import { useEffect, useState } from "react"
import InputNumber from "./InputNumber"
import ToggleOption from "./ToggleOption"
import DateGetter from "./DateGetter";
import GetFile from "./GetFile";
import { Stack } from "@mui/material";

const MotorInput = ({setInput}) => {
    const [inputObj, setInputObj] = useState({})

    useEffect(() => {
        setInput(inputObj)
    }, inputObj)
    
    return (
        <Stack direction="column" alignItems="center" spacing = {1}>
            <GetFile inputName="Thrust Curve" setUploaded={setInputObj}/>
            <InputNumber show={true} inputName="Motor Dry Mass" setInputObj={setInputObj}/>
            <InputNumber show={true} inputName="Inertia I11 + I22" setInputObj={setInputObj}></InputNumber>
        </Stack>
    )
}

export default MotorInput