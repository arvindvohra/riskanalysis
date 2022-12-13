import React, { useState } from 'react'
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Container from "@mui/material/Container";
import Logo from "../../static/logo.svg";
import ManImage from "../../static/man.jpg";
import WomanImage from "../../static/woman.jpg";
import riskImage from "../../static/riskImage.png";

import { styled } from "@mui/material/styles";
import Header from "../Navbar/Header";
import NavBar from "../Navbar/NavBar";
import axios from 'axios';

import {useParams} from 'react-router-dom';
import SimilarStudentProfile from './SimilarStudentProfile';

type Paramprops = {sid: string}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 11,
    padding: "5px 10px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    padding: "5px 10px",
  },
}));

const style = {
  width: "100%",
  bgcolor: "background.paper",
  paddingTop: "0px",
  paddingBottom: "0px",
  border: "2px solid #FFF",
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function StudentProfile() {

  const [studentname, setstuname] = useState('');
  const [stugender, setstugender] = useState('');
  const [chgstuimg, setchgstuimg] = useState('');
  const [stucountry, setstucountry] = useState('');
  const [stustate, setstustate] = useState('');

  const [stutesttype, setstutesttype] = useState('');
  const [stul, setstul] = useState('');
  const [stur, setstur] = useState('');
  const [stuw, setstuw] = useState('');
  const [stus, setstus] = useState('');
  const [stutotal, setstutotal] = useState('');

  const [stucou, setstucou] = useState('');

  const [stucourse, setstucourse] = useState('');
  const [stuintake, setstuintake] = useState('');

  const [stumarkstype, setstumarkstype] = useState('');
  const [stumarks, setstumarks] = useState('');
  const [stumarksper, setstumarksper] = useState('');

  const [stusponserf, setstusponserf] = useState('');
  const [stusponserm, setstusponserm] = useState('');
  const [stusponsergf, setstusponsergf] = useState('');
  const [stusponsergm, setstusponsergm] = useState('');
  const [stusponseru, setstusponseru] = useState('');

  const[stuintermarks, setstuintermarks] = useState('');

  const[gtedays, setgtedays] = useState('');

  const[visadays, setvisadays] = useState('');

  const studentid = useParams<Paramprops>();

  console.log("stu id-"+studentid.sid);

  React.useEffect(() => {

  axios.get("http://localhost:3011/application/searchbyid/"+studentid.sid)
  .then((res)=>{
      setstuname(res.data.student_name);
      setstugender(res.data.student_gender);
      setstucountry(res.data.country);
      setstustate(res.data.state);

      setstutesttype(res.data.eng_test_type);
      setstul(res.data.learning);
      setstur(res.data.reading);
      setstuw(res.data.writing);
      setstus(res.data.speaking);
      setstutotal(res.data.overall);


      let coun = res.data.country.slice(0, 3);
      let country = coun.toUpperCase();
      setstucou(country);

      setstucourse(res.data.course);
      setstuintake(res.data.intake);


      let intermarks = res.data.score_inter;

      setstuintermarks(intermarks);

      let getpercentage: any = intermarks/400*100;

      let graduationmarks = res.data.score_graduation;

      let getpergruad: any = graduationmarks/400*100;

      if(getpergruad != " ")
      {
        setstumarkstype('Graduation Marks');
        setstumarksper(getpergruad);
        if(getpergruad >= 50 && getpergruad <= 60)
        {
          setstumarks('Low Graduation Marks');
        }
        
        if(getpergruad >= 60 && getpergruad <= 80)
        {
          setstumarks('Average Graduation Marks');
        }
        
        if(getpergruad >= 80 && getpergruad <= 100)
        {
          setstumarks('Good Graduation Marks');
        }
        else{
          setstumarks('Poor Marks in Graduation');
        }

      }else{
        setstumarkstype('12th Marks');
        setstumarksper(getpercentage);

        if(getpercentage >= 50 && getpercentage <= 60)
        {
          setstumarks('Low 12th Marks');
        }
        
        if(getpercentage >= 60 && getpercentage <= 80)
        {
          setstumarks('Average 12th Marks');
        }
        
        if(getpercentage >= 80 && getpercentage <= 100)
        {
          setstumarks('Good 12th Marks');
        }
        else{
          setstumarks('Poor Marks in 12th Class');
        }
      }

      let sp_f = res.data.sp_father;
      let sp_m = res.data.sp_mother;
      let sp_gf = res.data.sp_gf;
      let sp_gm = res.data.sp_gm;
      let sp_u = res.data.sp_uncle;

      if(sp_f === 1)
      {
        setstusponserf('Father,');
      }else { setstusponserf(' '); }

      if(sp_m === 1)
      {
        setstusponserm('Mother,');
      }else { setstusponserm(' '); }

      if(sp_gf === 1)
      {
        setstusponsergf('Grand Father,');
      }else { setstusponsergf(' '); }

      if(sp_gm === 1)
      {
        setstusponsergm('Grand Monter,');
      }else { setstusponsergm(' '); }

      if(sp_u === 1)
      {
        setstusponseru('Uncle');
      }else { setstusponseru(' '); }

      setgtedays(res.data.gte);
      setvisadays(res.data.visa);

      if(res.data.student_gender === 'M')
      {
        setchgstuimg(ManImage);

      }else{

        setchgstuimg(WomanImage);

      }

  })

},[studentid.sid]);



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
                <React.Fragment>
                  <Container maxWidth="lg" sx={{ background: "#1A124D" }}>
                    <Box sx={{ padding: "20px 5px" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={9}>
                          <Typography variant="h2" component="h3" sx={{ color: "#FFF" }}>
                            Student Profile Dashboard
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <img src={Logo} alt="" />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box sx={{ padding: "5px 5px" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={1}>
                        
                          <img src={chgstuimg} alt="" />
                        
                        </Grid>
                        <Grid item xs={9}>
                          <List sx={style} component="nav" aria-label="mailbox folders">
                            <ListItem sx={{ background: "#A952A0" }}>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  width: "fit-content",
                                  color: "#FFF",
                                  "& svg": {
                                    m: 2.5,
                                  },
                                  "& hr": {
                                    mx: 2.0,
                                    color: "#FFF",
                                    width: "1px",
                                    background: "#FFF",
                                    height: "11px",
                                  },
                                }}
                              >
                                <Typography sx={{ fontWeight: "bold" }}>
                                  {studentname}
                                </Typography>
                                <Divider
                                  orientation="vertical"
                                  variant="middle"
                                  flexItem
                                  className="profileHr"
                                />
                                <Typography sx={{ fontWeight: "bold" }}>{stugender}</Typography>
                                <Divider
                                  orientation="vertical"
                                  variant="middle"
                                  flexItem
                                  className="profileHr"
                                />
                                <Typography sx={{ fontWeight: "bold" }}>19</Typography>
                                <Divider
                                  orientation="vertical"
                                  variant="middle"
                                  flexItem
                                  className="profileHr"
                                />
                                <Typography sx={{ fontWeight: "bold" }}>{stucountry}</Typography>
                                <Divider
                                  orientation="vertical"
                                  variant="middle"
                                  flexItem
                                  className="profileHr"
                                />
                                <Typography sx={{ fontWeight: "bold" }}>{stustate}</Typography>
                                <Divider
                                  orientation="vertical"
                                  variant="middle"
                                  flexItem
                                  className="profileHr"
                                />
                                <Typography sx={{ fontWeight: "bold" }}>
                                  {stutesttype} (O:{stutotal}, L:{stul}, R:{stur}, W:{stuw}, S:{stus})
                                </Typography>
                              </Box>
                            </ListItem>
                            <Divider />
                            <ListItem divider sx={{ background: "#ccc" }}>
                              <Grid container spacing={2}>
                                <Grid item xs={9}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      width: "fit-content",

                                      color: "#333",
                                      "& svg": {
                                        m: 2.5,
                                      },
                                      "& hr": {
                                        mx: 2.0,
                                        color: "#333",
                                        width: "1px",
                                        background: "#333",
                                        height: "15px",
                                      },
                                    }}
                                  >
                                    <Typography sx={{ fontWeight: "bold" }}>
                                      {stucou}
                                    </Typography>
                                    <Divider
                                      orientation="vertical"
                                      variant="middle"
                                      flexItem
                                      className="profileHr"
                                    />
                                    <Typography sx={{ fontWeight: "bold" }}>
                                      FEDUNI
                                    </Typography>
                                    <Divider
                                      orientation="vertical"
                                      variant="middle"
                                      flexItem
                                      className="profileHr"
                                    />
                                    <Typography sx={{ fontWeight: "bold" }}>{stucourse}</Typography>
                                    <Divider
                                      orientation="vertical"
                                      variant="middle"
                                      flexItem
                                      className="profileHr"
                                    />
                                    <Typography sx={{ fontWeight: "bold" }}>
                                      {stuintake}
                                    </Typography>
                                  </Box>
                                </Grid>
                                <Grid item xs={3}>
                                  <TableContainer component={Paper}>
                                    <Table aria-label="customized table">

                                      <TableBody>
                                        <StyledTableRow key="1">
                                          <StyledTableCell component="th" scope="row">
                                            ETA to VISA
                                          </StyledTableCell>
                                          <StyledTableCell align="right">
                                            {visadays}
                                          </StyledTableCell>
                                        </StyledTableRow>
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                </Grid>
                              </Grid>
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item xs={2} sx={{ textAlign: "right" }}>
                          <img src={riskImage} alt="" width="100%" />
                        </Grid>
                      </Grid>
                    </Box>


                    
                    <Box sx={{ padding: "20px 5px" }}>
                      <Grid container spacing={2}>
                        
                      <Grid item xs={9} md={8} >
                            <ListItem sx={{ background: "#A952A0", border: "2px solid #FFFFFF" }}>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  width: "fit-content",
                                  color: "#FFF",
                                  "& svg": {
                                    m: 2.5,
                                  },
                                  "& hr": {
                                    mx: 2.0,
                                    color: "#FFF",
                                    width: "1px",
                                    background: "#FFF",
                                    height: "20px",
                                  },
                                }}
                              >
                                <Typography sx={{ fontWeight: "bold" }}>
                                  Similar Profile  
                                </Typography>                                
                              </Box>
                            </ListItem>
                               <SimilarStudentProfile studentmarks = {stuintermarks} />
                         </Grid>
                        
                      


                        <Grid item xs={9} md={4}>
                          <List sx={style} component="nav" aria-label="mailbox folders">
                            <ListItem sx={{ background: "#A952A0" }}>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  width: "fit-content",
                                  color: "#FFF",
                                  "& svg": {
                                    m: 2.5,
                                  },
                                  "& hr": {
                                    mx: 2.0,
                                    color: "#FFF",
                                    width: "1px",
                                    background: "#FFF",
                                    height: "20px",
                                  },
                                }}
                              >
                                <Typography sx={{ fontWeight: "bold" }}>
                                  Risk Highlights
                                </Typography>
                              
                                
                              </Box>
                            </ListItem>
                            <Divider />
                            <ListItem divider sx={{ background: "#ccc" }}>
                              <Grid container spacing={1}>
                              
                              <TableContainer>

                                <Table sx={{ border: "1" }}>
                                  <TableHead>
                                    <TableRow sx={{backgroundColor: '#FF5733'}}>
                                      <TableCell>Parameter</TableCell>
                                      <TableCell>Value</TableCell>
                                      <TableCell>Ref</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  
                                  <TableBody>

                                      <StyledTableRow>
                                        
                                        <TableCell>State</TableCell>
                                        <TableCell>{stustate}</TableCell>
                                        <TableCell>-</TableCell>
                                        
                                        
                                      </StyledTableRow>

                                      
                                      <StyledTableRow>
                                        <TableCell>{stumarkstype}</TableCell>
                                        <TableCell>{stumarksper}%</TableCell>
                                        <TableCell>Above 60%</TableCell>
                                      </StyledTableRow>

                                      <StyledTableRow>
                                        <TableCell>Eng Test</TableCell>
                                        <TableCell>{stutesttype}</TableCell>
                                        <TableCell>IELTS/ PTE</TableCell>
                                      </StyledTableRow>

                                      <StyledTableRow>
                                        <TableCell>Eng Score</TableCell>
                                        <TableCell>(O:{stutotal}, L:{stul}, R:{stur}, W:{stuw}, S:{stus})</TableCell>
                                        <TableCell>Above 6.5</TableCell>
                                      </StyledTableRow>

                                      <StyledTableRow>
                                        <TableCell>Sponsors</TableCell>
                                        <TableCell>{stusponserf}{stusponserm}{stusponsergf}
                                          {stusponsergm}{stusponseru}</TableCell>
                                        <TableCell>Min 2</TableCell>
                                      </StyledTableRow>

                                      <StyledTableRow>
                                        <TableCell>ITR Income</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>Above 6L</TableCell>
                                      </StyledTableRow>
                                  </TableBody>
                                </Table>
                              </TableContainer>

                              </Grid>
                            </ListItem>
                          </List>
                        </Grid>
                        
                        
                      </Grid>
                    </Box>


                    


                    
                  </Container>
                </React.Fragment>
            </div>
        </Grid>
        
    </Grid>
    
  );
}
