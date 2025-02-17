"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { InputBase, Paper } from "@mui/material";
import logo from "../../public/assets/logo.svg"; // Ensure the path is correct
import Link from "next/link";

const pages = ["Home", "About", "Services", "Blog", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [searchText, setSearchText] = React.useState("");

    const handleSearch = () => {
        console.log("Searching for:", searchText);
    };

    return (
        <AppBar className="border-b-2 border-b-[#FF3811] py-1" style={{ backgroundColor: "white" }} position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo for Desktop */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", mr: 2 }}>
                        <Link href={'/'}>
                            <Image src={logo} alt="Logo" width={100} height={70} />
                        </Link>
                    </Box>

                    {/* Mobile Menu Button */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton size="large" onClick={(e) => setAnchorElNav(e.currentTarget)} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            keepMounted
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            open={Boolean(anchorElNav)}
                            onClose={() => setAnchorElNav(null)}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => setAnchorElNav(null)}>
                                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Logo for Mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
                        <Image src={logo} alt="Logo" width={100} height={50} />
                    </Box>

                    {/* Navbar Links for Desktop */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "center" } }}>
                        {pages.map((page) => (
                            <Button key={page} sx={{ my: 2, color: "black", fontWeight: "700" }}>
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Search Bar */}
                    <Paper
                        component="form"
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            borderRadius: "12px",
                            width: "268px",
                            height: "56px",
                            padding: "4px 8px",
                            border: "1px solid #FF3811",
                        }}
                    >
                        <IconButton>
                            <ShoppingBagIcon />
                        </IconButton>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className="w-44"
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </Paper>

                    {/* Appointment Button */}
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: "#FF3811",
                            color: "#FF3811",
                            borderRadius: "3px",
                            fontWeight: "bold",
                            padding: "6px 12px",
                            whiteSpace: "nowrap",
                            marginLeft: "10px",
                        }}
                        onClick={handleSearch}
                    >
                        Appointment
                    </Button>

                    {/* Profile Avatar */}
                    <Box sx={{ flexGrow: 0, ml: 2 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
                                <Avatar alt="User Profile" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            keepMounted
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            open={Boolean(anchorElUser)}
                            onClose={() => setAnchorElUser(null)}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                                    <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Link href="/login">
                        <Button>login </Button>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
