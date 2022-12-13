import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from '../Navbar/Header';
import NavBar from '../Navbar/NavBar';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddUser() {

    const UserId = useRef<HTMLInputElement>(null);
    const [IsUserId, SetUserId] = useState(false);

    const Username = useRef<HTMLInputElement>(null);
    const [IsUsername, SetUsername] = useState(false);

    const Password = useRef<HTMLInputElement>(null);
    const [IsPassword, SetPassword] = useState(false);

    const Passtext = useRef<HTMLInputElement>(null);
    const [IsPasstext, SetPasstext] = useState(false);

    const Email = useRef<HTMLInputElement>(null);
    const [IsEmail, SetEmail] = useState(false);

    const Type = useRef<HTMLInputElement>(null);
    const [IsType, SetType] = useState(false);


    const submitUsername = (event : React.FormEvent) =>{

        event.preventDefault();

        let chkUserId = UserId.current!.value;
        let chkUsername = Username.current!.value;
        let chkPassword = Password.current!.value;
        let chkPasstext = Passtext.current!.value;
        let chkEmail = Email.current!.value;
        let chkType = Type.current!.value;
        
        
        if(chkUserId == ''){
            SetUserId(true);
        }
        if(chkUsername == ''){
            SetUsername(true);
        }
        if(chkPassword == ''){
            SetPassword(true);
        }
        if(chkPasstext == ''){
            SetPasstext(true);
        }
        if(chkEmail == ''){
            SetEmail(true);
        }
        if(chkType == ''){
            SetType(true);
        }


        if(chkUserId != '' && chkUsername != '' && chkPassword != '' && chkPasstext != '' && chkEmail != '' && 
        chkType != ''){

            axios.post("http://localhost:3011/User/",{
                userid : chkUserId,
                username : chkUsername,
                password : chkPassword,
                passtext : chkPasstext,
                email : chkEmail,
                type : chkType,
            })
            .then((res)=>{
                toast(res.data);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }

  return (
    <Box>
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} border={0}>
          <Header />
        </Grid>

        <Grid xs={5} sm={3} md={2} >
          <NavBar />
        </Grid>

        <Grid sx={{backgroundColor: '#EDEEF2'}} xs={7} sm={9} md={10}>

            <Box sx={{
                margin:"0 auto", 
                padding:"20px 25px",
            }}>


            <Box sx={{
                margin:"0 0 20px 0", 
                padding:"20px 25px",
                backgroundColor: '#FFFACD',
                
            }}>
                    ADD Username
            </Box>


            <form>
                <Grid container sx={{
                margin:"0 auto", 
                padding:"20px 25px",
                backgroundColor: '#FFFFFF',
                
                }} style={{ gap: 10 }}>

                    <Grid  xs={12} sm={12} md={5}>
                        <TextField error={IsUserId} inputRef={UserId} id="outlined-basic" label="Username Code" variant="outlined" placeholder='Username Code' fullWidth/>
                    </Grid>
                    <Grid  xs={12} sm={12} md={5}>
                        <TextField error={IsUsername} inputRef={Username} id="outlined-basic" label="Username Name" variant="outlined" placeholder='Username Name' fullWidth/>
                    </Grid>


                    <Grid  xs={12} sm={12} md={5}>
                        <TextField error={IsPassword} inputRef={Password} id="outlined-basic" label="Password" variant="outlined" placeholder='Password' fullWidth/>
                    </Grid>
                    <Grid  xs={12} sm={12} md={5}>
                        <TextField error={IsPasstext} inputRef={Passtext} id="outlined-basic" label="Passtext" variant="outlined" placeholder='Passtext' fullWidth/>
                    </Grid>


                    <Grid  xs={12} sm={12} md={5}>
                        <TextField error={IsEmail} inputRef={Email} id="outlined-basic" label="Email" variant="outlined" placeholder='Email' fullWidth/>
                    </Grid>


                    <Grid  xs={12} sm={12} md={5}>
                        <TextField error={IsType} inputRef={Type} id="outlined-basic" label="Contact Type" variant="outlined" placeholder='Contact Type' fullWidth/>
                    </Grid>
                    
                    <Grid>
                        <Button type='submit' variant="contained" size='large'  sx={{backgroundColor: '#1976d2',
                        '&:hover': { backgroundColor: 'green',}}} onClick={submitUsername}>Submit</Button>
                    </Grid>
                    
                </Grid>
                
            </form>    
            </Box>
            
        </Grid>

      </Grid>
      <ToastContainer />
    </Box>
  );
}