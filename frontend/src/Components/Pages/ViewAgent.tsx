import React, { useEffect, useState } from 'react';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Grid } from '@mui/material'
import Header from '../Navbar/Header'
import NavBar from '../Navbar/NavBar'
import axios from 'axios';


const columns: GridColDef[] = [
  { field: 'agentcode', headerName: 'Agent Code', width: 100 },
  { field: 'agent', headerName: 'Agent', width: 200 },
  { field: 'person', headerName: 'Contact Person', width: 150 },
  { field: 'country', headerName: 'Country', width: 100 },
  { field: 'state', headerName: 'State', width: 100 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'startdate', headerName: 'Start Date', width: 100 },
  { field: 'enddate', headerName: 'End Date', width: 100 }
];


const ViewAgent = () => {

  const [viewagents, setviewagents] = useState([]);

  const baseURL = "http://localhost:3005/agent/";
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setviewagents(response.data);
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
                rows={viewagents}
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

export default ViewAgent