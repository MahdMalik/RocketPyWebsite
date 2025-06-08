import { useEffect, useState } from "react"
import InputNumber from "./InputNumber"
import SelectFromOptions from "./SelectFromOptions";
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
            <InputNumber show={true} inputName="Inertia I33" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Nozzle Radius" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Grain Number" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Grain Density" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Grain Outer Radius" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Grain Inner Radius (Initial)" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Grain Height (Initial)" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Grain Separation" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Position of Center of Mass (For Grains)" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Position of Center of Mass (No Propellant)" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Nozzle Outlet Position (Relative to Motor)" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Burn Time" setInputObj={setInputObj}></InputNumber>
            <InputNumber show={true} inputName="Nozzle Throat Radius" setInputObj={setInputObj}></InputNumber>
            <SelectFromOptions show={true} inputName="Coordinate System Orientation" setInputObj={setInputObj} options={["nozzle_to_combustion_chamber", "combustion_chamber_to_nozzle"]}></SelectFromOptions>
        </Stack>
    )
}

export default MotorInput