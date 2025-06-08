import { useEffect, useState } from "react"
import InputNumber from "@/app/inputs/InputNumber";
import ToggleOption from "@/app/inputs/ToggleOption";
import DateGetter from "@/app/inputs/DateGetter";
import { Stack } from "@mui/material";
import GetFile from "@/app/inputs/GetFile";
import SelectFromOptions from "@/app/inputs/SelectFromOptions";

const RocketInput = ({setInput}) => {
    const [inputObj, setInputObj] = useState({})

    useEffect(() => {
        setInput(inputObj)
    }, inputObj)
    
    return (
        <Stack direction="column" alignItems="center" spacing = {1}>
            <InputNumber show={true} inputName="Rocket Radius" setInputObj={setInputObj}/>
            <InputNumber show={true} inputName="Rocket Mass (Without Motor)" setInputObj={setInputObj}/>
            <InputNumber show={true} inputName="Rocket Inertia I11" setInputObj={setInputObj}/>
            <InputNumber show={true} inputName="Rocket Inertia I22" setInputObj={setInputObj}/>
            <InputNumber show={true} inputName="Rocket Inertia I33" setInputObj={setInputObj}/>
            <GetFile inputName="Motor-Off Drag" setInputObj={setInputObj}/>
            <GetFile inputName="Motor-On Drag" setInputObj={setInputObj}/>
            <InputNumber show={true} inputName="Rocket Center of Mass (Without Motor)" setInputObj={setInputObj}/>
            <SelectFromOptions show={true} inputName="Rocket Coordinate System" setInputObj={setInputObj} options={["tail_to_nose", "nose_to_tail"]}/>
            <InputNumber show={true} inputName="Motor Position (Relative to Rocket)" setInputObj={setInputObj}/>
        </Stack>
    )
}

export default RocketInput