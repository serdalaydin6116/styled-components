import {Button} from "@mui/material";
import { makeStyles } from "@mui/styles";




const MyOwn = makeStyles({
    btn:{
        background: 'Linear-gradient(45deg, #FF688B, #FF8E53)',
        border: 0,
        borderRadius: 7,
        color: '#fff',
        padding: '10px 50px',
        marginBottom: '1rem',
        fontSize:"25px"
        
    }

})


const StyledButton = ()=>{

    const newStyle = MyOwn();

    return(
        <Button className={newStyle.btn}>Button that I used my own sytle.</Button>
    )
}

export default StyledButton;