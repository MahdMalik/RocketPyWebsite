import { useState } from "react"
import { Stack, Button, TextField, Typography } from "@mui/material"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const DateGetter = ({show, inputName, setInputObj}) => {
    const [value, setValue] = useState(0)

    return (
        <div>
          {show ? (
            <Stack direction="row" alignItems="center" spacing = {2}>
              <Typography>{inputName}</Typography>
              <DatePicker 
                selected={value} 
                showYearDropdown 
                showMonthDropdown 
                scrollableYearDropdown 
                yearDropdownItemNumber={50} 
                onChange={(date) => {
                    setValue(date)
                    setInputObj((prev) => {
                        return {...prev, ["day"]: date.getDate(), ["month"]: date.getMonth() + 1, ["year"]: date.getYear()}
                    })
                }}
                />
            </Stack>
            ) : (<div/>)}
          
      </div>
    )
}

export default DateGetter