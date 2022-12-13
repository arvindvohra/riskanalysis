import { Box, Grid, TextField, Typography, Button, Container, FormHelperText } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useHistory } from "react-router-dom";
import './Login.css';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const history = useHistory();

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const [IsValidUser, SetValidUser] = useState(false);
    const [IsValidPass, SetValidPass] = useState(false);

    const chklogin =(event : React.FormEvent)=>{

        event.preventDefault();

        let chkuser = username.current!.value;
        let chkpass = password.current!.value;

        if(chkuser === '')
        {
            SetValidUser(true);
        }

        if(chkpass === ''){
            SetValidPass(true);
        }


        
        axios.get("http://localhost:3011/user/searchuser/"+chkuser).then((res)=>{

            if(chkuser === res.data.username && chkpass === res.data.password)
            {
                history.push("/dashboard");
            }else{
                toast.error("Invalid User Login Details !");
            }

        })

    }

  return (
    <div className="App">
      <header className="App-header">

        <Box
        sx={{
            width: 400,
            margin:"0 auto", 
            padding:"20px 5px",
            backgroundColor: 'white',
        }}
        >
            <Container maxWidth="sm">
            <Typography gutterBottom color="textSecondary" variant="h5">User Login</Typography>                
                    <form>
                        <Grid xs={12} sm={6}>
                            <TextField error={IsValidUser} inputRef={username} id="outlined-basic" label="Username" variant="outlined" placeholder='Enter Username' fullWidth/>
                            { IsValidUser && <FormHelperText>Please enter Username</FormHelperText>}
                        </Grid>

                        <br/>
                        <Grid xs={12} sm={6}>
                            <TextField type={IsValidPass?'text':'password'} error={IsValidPass} inputRef={password} id="outlined-basic" label="Password" variant="outlined" placeholder='Enter Password' fullWidth />
                            { IsValidPass && <FormHelperText>Please enter Password</FormHelperText>}
                        </Grid>
                        <br/><br/>
                        <Grid>
                            <Button type='submit' variant="contained" size='large'  sx={{backgroundColor: '#1976d2',
                            '&:hover': { backgroundColor: 'green',}}} fullWidth onClick={chklogin}>Login</Button>
                        </Grid>
                    </form>
                    </Container>

        </Box>
        
        </header>
        <ToastContainer />
    </div>
  )
}

export default Login