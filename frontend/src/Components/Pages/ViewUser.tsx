import React, { useEffect, useState } from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { Grid } from '@mui/material'
import Header from '../Navbar/Header'
import NavBar from '../Navbar/NavBar'
import axios from 'axios';
import { KeyObject } from 'crypto';


const columns: GridColDef[] = [
  { field: 'userid', headerName: 'User Id', width: 200 },
  { field: 'username', headerName: 'Username', width: 200 },
  { field: 'password', headerName: 'Password', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'isactive', headerName: 'Status', width: 150 }
];


const ViewUser = () => {

  const [viewusers, setviewusers] = useState([]);

  const baseURL = "http://localhost:3011/user/";
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {

        setviewusers(response.data);
    });
},[]);

  return (
    <Grid container>
        <Grid xs={12} sm={12}  md={12}>
            <Header />
        </Grid>
        <Grid xs={5} sm={3} md={2} >
            <NavBar />
        </Grid>
        <Grid xs={7} sm={9} md={10}>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={
                    viewusers
                }
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
        </Grid>
        
    </Grid>
  )
}

export default ViewUser