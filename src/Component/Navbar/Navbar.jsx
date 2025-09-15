// ../Navbar/Navbar.js
import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button, Box } from "@mui/material";
import { MdOutlineSegment } from "react-icons/md";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Navbar.css"; // if you want to keep your same classes

function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:1000px)");

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const menuItems = [
    { text: "Our websites" },
    { text: "About Us" },
    { text: "Reviews" },
  ];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="herotopdivnewherojdfh" sx={{ justifyContent: "space-between" }}>
        
        {/* Left Section */}
        <Box className="herotopdivnew" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div className="emaildivnewhero">
            <img src="/Images/emailicon.svg" alt="" />
            <p className="infoemail">info@greenlight-digital.co.uk</p>
          </div>
          <div className="emaildivnewhero">
            <img src="/Images/phoneicon.svg" alt="" />
            <p className="infoemail">01234 567 890</p>
          </div>
          <div className="socialiconsnewhero">
            <img src="/Images/fbicon.svg" alt="" style={{cursor:"pointer"}}  />
            <img src="/Images/linkedinicon.svg" alt="" style={{cursor:"pointer"}}  />
            <img src="/Images/emailicon.svg" alt="" style={{cursor:"pointer"}} />
          </div>
        </Box>

        {/* Right Section */}
        {!isMobile ? (
          <Box className="heroresponsivenavbarnewee" sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {menuItems.map((item, i) => (
              <p key={i} className="webbbbbbbb">{item.text}</p>
            ))}
            <Button className="talktousbtn">Talk to us</Button>
          </Box>
        ) : (
          <IconButton onClick={toggleDrawer(true)}>
            <MdOutlineSegment size={28} />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {menuItems.map((item, i) => (
              <ListItem button key={i} onClick={toggleDrawer(false)}>
                <ListItemText primary={item.text} className="webbbbbbbb" />
              </ListItem>
            ))}
            <Button fullWidth className="talktousbtn">Talk to us</Button>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
