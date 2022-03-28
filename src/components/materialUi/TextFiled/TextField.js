
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" required  error />
      <TextField id="outlined-basic" label="Surname" variant="outlined" required  />
      <TextField id="outlined-basic" label="Address" variant="outlined" required   />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}