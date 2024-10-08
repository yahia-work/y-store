import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCheck({className="",label,list=[],value,setvalue,style={m:"5px 0px"}}) {
  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <Box sx={style} className={className}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          value={value}
          label={label}
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 250, 
              },
            },
          }}
        >
            {
                list.map((item,index)=>{
                    return <MenuItem key={index} value={item}>{item}</MenuItem>
                })
            }
          
        </Select>
      </FormControl>
    </Box>
  );
}
