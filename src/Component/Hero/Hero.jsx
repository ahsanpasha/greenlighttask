import "./Hero.css";
import { useState } from "react";
import { useMediaQuery, AppBar, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Hero() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:1000px)");

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  const handleScrollToSection = (page) => {
    const targetId = page;
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      <div className="herodiv" style={{ position: "relative" }}>
        <div className="herotextdivvvvv">
          <div>
            <img className="herologoooooo" src="/Images/logogreen.svg" alt="" />
            <AppBar
              className="fjdshfkjsadfjksdhfjksdhf"
              position="absolute"
              color="transparent"
              elevation={0}
              sx={{ boxShadow: "none", p: 0, top: "10px", right: "10px" }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={handleOpenMenu}
                  sx={{ p: 0, m: 0 }}
                >
                  <MenuIcon sx={{ color: "#FFFFFF" }}/>
                </IconButton>
              </div>
            </AppBar></div>
          <p className="ready">Ready To Go</p>
          <p className="smart">Smart and efficient websites</p>
          <p className="specialize">
            We specialize in building high-quality, template-based websites that
            save you time, energy, and money without sacrificing design or
            functionality.
          </p>
          <p className="talk">Talk to us and we’ll get you up and running!</p>
          <div className="twobtnnnn">
            <button className="ourwebsite" onClick={() => handleScrollToSection('ourwebsite')}>Our Websites</button>
            <button className="talktous ">Talk to us</button>
          </div>
          <div className="affordablediv">
            <img src="/Images/arrowdown.svg" className="downarrow" alt="" />
            <p className="affordable">Affordable options</p>
          </div>
        </div>

        <div className="heromainimgdivv">
          {/* ✅ Complete Navbar */}
          <div>
            {isMobile ? (
              <AppBar
                className="herotopdivnewherojdfhfdsfhkj"
                position="static"
                color="transparent"
                elevation={0}
                sx={{ boxShadow: "none", p: 0 }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleOpenMenu}
                    sx={{ p: 0, m: 0 }}
                  >
                    <MenuIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                </div>
              </AppBar>
            ) : (
              <div className="herotopdivnewherojdfh">
                <div className="herotopdivnew">
                  <div className="emaildivnewhero">
                    <img src="/Images/emailicon.svg" alt="" />
                    <p className="infoemail">info@greenlight-digital.co.uk</p>
                  </div>
                  <div className="emaildivnewhero">
                    <img src="/Images/phoneicon.svg" alt="" />
                    <p className="infoemail">01234 567 890</p>
                  </div>
                  <div className="socialiconsnewhero">
                    <img src="/Images/fbicon.svg" alt="" />
                    <img src="/Images/linkedinicon.svg" alt="" />
                    <img src="/Images/emailicon.svg" alt="" />
                  </div>
                </div>
                <div className="heroresponsivenavbarnewee">
                  <p className="webbbbbbbb" onClick={() => handleScrollToSection('ourwebsite')} style={{ cursor: 'pointer' }}>Our websites</p>
                  <p className="webbbbbbbb" onClick={() => handleScrollToSection('abouts')} style={{ cursor: 'pointer' }}>About Us</p>
                  <p className="webbbbbbbb" onClick={() => handleScrollToSection('reviews')} style={{ cursor: 'pointer' }}>Reviews</p>
                  <button className="talktousbtn" onClick={() => handleScrollToSection('talktous')}>Talk to us</button>
                </div>
              </div>
            )}
          </div>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            PaperProps={{
              sx: {
                bgcolor: "#41286C",
                color: "white",
                minWidth: 200,
                textAlign: "center",
              },
            }}
          >
            <MenuItem onClick={() => { handleCloseMenu(); handleScrollToSection('ourwebsite'); }}>
              <p className="webbbbbbbb">Our websites</p>
            </MenuItem>
            <MenuItem onClick={() => { handleCloseMenu(); handleScrollToSection('abouts'); }}>
              <p className="webbbbbbbb">About Us</p>
            </MenuItem>
            <MenuItem onClick={() => { handleCloseMenu(); handleScrollToSection('reviews'); }}>
              <p className="webbbbbbbb">Reviews</p>
            </MenuItem>
            <MenuItem onClick={() => { handleCloseMenu(); handleScrollToSection('talktous'); }}>
              <button className="talktousbtn">Talk to us</button>
            </MenuItem>
          </Menu>

          <img className="heromainimgnew" src="/Images/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
