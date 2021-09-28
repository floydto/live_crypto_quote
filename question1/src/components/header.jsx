import React from 'react';
import { Link } from 'gatsby';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#001E3C' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <ButtonGroup variant="outlined" aria-label="outlined button group" style={{ background: '#001E3C' }}>
              <Button component={Link} to="/spot" variant="contained" style={{ background: '#001E3C' }}>Spot</Button>
              <Button component={Link} to="/future" variant="contained" style={{ background: '#001E3C' }}>future</Button>
            </ButtonGroup>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header


