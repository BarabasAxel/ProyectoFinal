import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import { menuNavigate } from "../../../routes/menuNavigate";
import WidgetCart from "../../common/widgetcart/WidgetCart";


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <a href="/"><img src="https://res.cloudinary.com/dcfsspuhw/image/upload/v1686063053/e-commerce%20CODERHOUSE/LevelOne_n7wdf7.png" alt="logo" width={60}/></a>
      </Typography>
      <Divider />
      <List>
        {menuNavigate.map(({ id, path, title }) => (
          <ListItem key={id} to={path} disablePadding>
            <Link style={{ textDecoration: "none" }} to={path}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <a href="/"><img src="https://res.cloudinary.com/dcfsspuhw/image/upload/v1686063053/e-commerce%20CODERHOUSE/LevelOne_n7wdf7.png" alt="logo" width={60}/></a>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {menuNavigate.map(({ id, path, title }) => (
                <Link style={{ textDecoration: "none" }} key={id} to={path}>
                  <Button sx={{ color: "#fff" }} variant="h1">
                    {title}
                  </Button>
                </Link>
              ))}
            </Box>
            <WidgetCart />
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true,}} sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240,},}}>
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
