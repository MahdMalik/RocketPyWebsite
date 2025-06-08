import { useEffect, useState } from "react"
import InputNumber from "@/app/inputs/InputNumber";
import ToggleOption from "@/app/inputs/ToggleOption";
import DateGetter from "@/app/inputs/DateGetter";
import { Stack } from "@mui/material";

const RocketInput = ({setInput}) => {
    const [inputObj, setInputObj] = useState({})

    useEffect(() => {
        setInput(inputObj)
    }, inputObj)
    
    return (
        <Stack direction="column" alignItems="center" spacing = {1}>
        </Stack>
    )
}

export default RocketInput