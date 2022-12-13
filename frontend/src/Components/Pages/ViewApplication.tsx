import React, { useEffect, useState } from 'react';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { Grid } from '@mui/material'
import Header from '../Navbar/Header'
import NavBar from '../Navbar/NavBar'
import axios from 'axios';
import { Link } from 'react-router-dom';


const columns: GridColDef[] = [
  { field: 'studentid', headerName: 'Student Id', width: 120 },
  { field: 'passport', headerName: 'Passport', width: 100 },
  { field: 'student_name', headerName: 'Student Name', width: 200 },
  { field: 'univ', headerName: 'University', width: 100 },
  { field: 'intake', headerName: 'Intake', width: 100 },
  { field: 'student_dob', headerName: 'DOB', width: 120 },
  { field: 'course', headerName: 'Course', width: 100 },
  { field: 'country', headerName: 'Country', width: 100 },
  { field: 'id', headerName: 'Action', width: 100,
  renderCell: (params) => <Link to={`studentprofile/${params.value}`}>View</Link>
  }
];


const ViewApplication = () => {

  
  const [viewapplication, setviewapplication] = useState([]);
  
  React.useEffect(() => {
  const baseURL = "http://localhost:3011/application/";
    axios.get(baseURL).then((response) => {
        setviewapplication(response.data);
    });
},[viewapplication]);


  return (
    <Grid container>
        <Grid xs={12} sm={12}  md={12}>
            <Header />
        </Grid>
        <Grid xs={5} sm={3} md={2} >
            <NavBar />
        </Grid>
        <Grid xs={7} sm={9} md={10}>
            <div style={{ height: '105%', width: '100%' }}>
              <DataGrid
                rows={
                    viewapplication
                    
                }
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
              />
            </div>
        </Grid>
    </Grid>
  )
}

export default ViewApplication