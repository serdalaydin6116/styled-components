import * as React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasicButtons() {
  return (
    <>
     
      <Button variant="contained" color="secondary" size= "xlarge" startIcon= {<SaveIcon/>}>SAVE</Button>
      <br />

      <Button variant="contained" color="success" size= "small" endIcon= {<DeleteIcon/>}>DELETE</Button>

      </>
  );
}