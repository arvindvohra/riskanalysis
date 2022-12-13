import React , { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import PersonAddAltRounded from '@mui/icons-material/PersonAddAltRounded';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonSearch from '@mui/icons-material/PersonSearch';
import { Link } from 'react-router-dom';
import { AddLocationAlt, Assessment, Language, LocationCity, CorporateFare, InsertEmoticon, GroupAdd } from '@mui/icons-material';
import SpeedIcon from '@mui/icons-material/Speed';

export default function NavBar() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  const [openuser, setopenuser] = React.useState(false);

  const userClick = () =>{
    setopenuser(!openuser);
  }


  const [locopen, setlocopen] = useState(false);

  const handlelocClick = () =>{
    setlocopen(!locopen);
  }

  return (
    <List
      sx={{ width: '100%', height: '100%', minHeight: '980px', maxWidth: 240, background : '#404E67', color : '#CBCDEF' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >

      <ListItemButton>
        <ListItemIcon>
          <Assessment style={{ color: "white" }}/>
        </ListItemIcon>
        <ListItemText primary="Report" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <SpeedIcon style={{ color: "white" }}/>
        </ListItemIcon>
        <Link to="/viewapplication" style={{ textDecoration: 'none', color: '#CBCDEF' }}>Application</Link>
      </ListItemButton>

      <ListItemButton onClick={userClick}>
        <ListItemIcon>
          <InsertEmoticon style={{ color: "white" }}/>
        </ListItemIcon>
        <ListItemText primary="User" />
        {openuser ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openuser} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <GroupAdd style={{ color: "white" }}/>
            </ListItemIcon>
            <Link to="/adduser" style={{ textDecoration: 'none', color: '#CBCDEF' }}>Add User</Link>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openuser} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonSearch style={{ color: "white" }}/>
            </ListItemIcon>
            <Link to="/viewuser" style={{ textDecoration: 'none', color: '#CBCDEF' }}>View User</Link>
          </ListItemButton>
        </List>
      </Collapse>



      <ListItemButton onClick={handlelocClick}>
        <ListItemIcon>
          <Language style={{ color: "white" }}/>
        </ListItemIcon>
        <ListItemText primary="Location" />
        {locopen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={locopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AddLocationAlt style={{ color: "white" }}/>
            </ListItemIcon>
            <Link to="/addagent" style={{ textDecoration: 'none', color: '#CBCDEF' }}>Country</Link>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={locopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <CorporateFare style={{ color: "white" }}/>
            </ListItemIcon>
            <Link to="/viewagent" style={{ textDecoration: 'none', color: '#CBCDEF' }}>State</Link>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={locopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <LocationCity style={{ color: "white" }}/>
            </ListItemIcon>
            <Link to="/viewagent" style={{ textDecoration: 'none', color: '#CBCDEF' }}>City</Link>
          </ListItemButton>
        </List>
      </Collapse>

      


      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccountCircle style={{ color: "white" }}/>
        </ListItemIcon>
        <ListItemText primary="Agent" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonAddAltRounded style={{ color: "white" }}/>
            </ListItemIcon>
            <Link to="/addagent" style={{ textDecoration: 'none', color: '#CBCDEF' }}>Add Agent</Link>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonSearch style={{ color: "white" }}/>
            </ListItemIcon>
            <Link to="/viewagent" style={{ textDecoration: 'none', color: '#CBCDEF' }}>View Agent</Link>
          </ListItemButton>
        </List>
      </Collapse>

      
    </List>
  );
}