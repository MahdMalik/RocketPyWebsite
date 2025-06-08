import { useEffect, useState } from "react"
import InputNumber from "@/app/inputs/InputNumber";
import ToggleOption from "@/app/inputs/ToggleOption";
import DateGetter from "@/app/inputs/DateGetter";
import { Stack } from "@mui/material";

const EnvInput = ({setInput}) => {
    const [inputObj, setInputObj] = useState({})

    useEffect(() => {
        setInput(inputObj)
    }, inputObj)
    
    return (
        <Stack direction="column" alignItems="center" spacing = {1}>
            {/* Lets us choose if we want environment or not */}
            <ToggleOption show = {true} inputName="Set Environment" setInputObj={setInputObj}/>
            {/* Only show this stuff if environment variable set */}
            <InputNumber show={inputObj["Set Environment"]} inputName="Latitude" setInputObj={setInputObj}/>
            <InputNumber show={inputObj["Set Environment"]} inputName="Longitude" setInputObj={setInputObj}/>
            <InputNumber show={inputObj["Set Environment"]} inputName="Elevation" setInputObj={setInputObj}/>
            <ToggleOption show={inputObj["Set Environment"]} inputName="Set Temp" setInputObj={setInputObj}/>
            <InputNumber show={inputObj["Set Temp"] && inputObj["Set Environment"]} inputName="Temperature" setInputObj={setInputObj}/>
            <ToggleOption show={inputObj["Set Environment"]} inputName="Set Pressure" setInputObj={setInputObj}/>
            <InputNumber show={inputObj["Set Pressure"]  && inputObj["Set Environment"]} inputName="Pressure" setInputObj={setInputObj}/>
            <ToggleOption show={inputObj["Set Environment"]} inputName="Set Date" setInputObj={setInputObj}/>
            <DateGetter show={inputObj["Set Environment"] && inputObj["Set Date"]} inputName="Date" setInputObj={setInputObj}/>
        </Stack>
    )
}

export default EnvInput