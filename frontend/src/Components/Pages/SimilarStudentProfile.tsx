import React, { useEffect, useState } from 'react';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import axios from 'axios';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

type Props = {studentmarks : string}

const columns: GridColDef[] = [
  { field: 'studentid', headerName: 'Student Id', width: 120, headerClassName: 'headerdesign' },
  { field: 'student_name', headerName: 'Student Name', width: 200, headerClassName: 'headerdesign' },
  { field: 'intake', headerName: 'Intake', width: 100, headerClassName: 'headerdesign' },
  { field: 'country', headerName: 'Country', width: 120, headerClassName: 'headerdesign' },
  { field: 'score_inter', headerName: 'Marks', width: 100, headerClassName: 'headerdesign'},
  { field: 'app_status', headerName: 'Status', width: 110, headerClassName: 'headerdesign'},
  { field: 'id', headerName: 'Action', width: 100, headerClassName: 'headerdesign',
  renderCell: (params) => <Link to={`/studentprofile/${params.value}`}>View</Link>
  }
];


const SimilarStudentProfile: React.FC<Props> = ({ studentmarks }) => {

  
  const [viewsimilarprofile, setviewsimilarprofile] = useState([]);
 
  React.useEffect(() => {

    axios.get("http://localhost:3011/application/searchbymarks/"+studentmarks).then((response) => {
      //console.log(response.data)
      setviewsimilarprofile(response.data);
    });

},[studentmarks]);

  return (
            <Box
            sx={{
              height: '92%',
              width: '100%',
              background: "#ccc",
              '& .headerdesign': {
                backgroundColor: '#FF5733',
              },
            }}
          >
            <DataGrid
              rows={
                viewsimilarprofile
              }
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
            />
            </Box>
  )
}

export default SimilarStudentProfile