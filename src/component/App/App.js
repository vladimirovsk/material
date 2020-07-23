import React from 'react';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {Restore, Favorite, LocationOn} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">

     <Box component="span" m={1}>
      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start"
        // className={classes.menuButton} 
        color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
    <Typography variant="h6"// className={classes.title}
    >
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
      <Drawer />
        <Button color="primary">Hello World</Button>
        <BottomNavigation
          //value={value}
         // onChange={(event, newValue) => {
         // setValue(newValue);
        // }}
  //showLabels
  //className={classes.root}
>
  <BottomNavigationAction label="Recents" icon={<Restore />} />
  <BottomNavigationAction label="Favorites" icon={<Favorite />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
  </BottomNavigation> 
      </Box>
    </div>
  );
}

export default App;
