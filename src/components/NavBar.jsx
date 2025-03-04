'use client';
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import Link from "next/link";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [searchText, setSearchText] = React.useState("");

    const handleSearch = () => {
        console.log("Searching for:", searchText);
    };

    const link = (
        <div className="flex gap-5">
            <Link
                className="text-black relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] hover:text-[#FF3811] hover:after:w-full transition-all duration-500 ease-in-out"
                href="/"
            >
                Home
            </Link>
            <Link
                className="text-black relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] hover:text-[#FF3811] hover:after:w-full transition-all duration-500 ease-in-out"
                href="/about"
            >
                About
            </Link>
            <Link
                className="text-black relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] hover:text-[#FF3811] hover:after:w-full transition-all duration-500 ease-in-out"
                href="/services"
            >
                Services
            </Link>
            <Link
                className="text-black relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] hover:text-[#FF3811] hover:after:w-full transition-all duration-500 ease-in-out"
                href="/products"
            >
                Products
            </Link>
            <Link
                className="text-black relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] hover:text-[#FF3811] hover:after:w-full transition-all duration-500 ease-in-out"
                href="/contact"
            >
                Contact
            </Link>
        </div>


    );

    return (
        <AppBar
            className="border-b-2 border-b-[#FF3811] py-3 px-4"
            style={{ backgroundColor: "white" }}
            position="fixed"
        >
            <div className="container mx-auto">
                <Toolbar disableGutters>
                    {/* Logo for Desktop */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", mr: 2 }}>
                        <Link href="/">
                            <Image src={logo} alt="Logo" width={90} height={70} />
                        </Link>
                    </Box>

                    {/* Mobile Menu Button */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            onClick={(e) => setAnchorElNav(e.currentTarget)}
                            color="inherit"
                        >
                            <MenuIcon className="text-black" />
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
                            <MenuItem onClick={() => setAnchorElNav(null)}>
                                <Typography sx={{ textAlign: "center" }}>
                                    <ul className="px-10">
                                        <li className="my-2"> <Link className="text-black hover:text-[#FF3811]" href="/">
                                            Home </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link className="text-black hover:text-[#FF3811]" href="/about">
                                                About
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link className="text-black hover:text-[#FF3811]" href="/services">
                                                Services
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link className="text-black hover:text-[#FF3811]" href="/products">
                                                Products
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link className="text-black hover:text-[#FF3811]" href="/contact">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>


                    {/* Navbar Links for Desktop */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
                        {link}
                    </Box>

                    {/* Search and Shopping Icons for Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <IconButton>
                            <ShoppingBagIcon />
                        </IconButton>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </div>

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
                            marginLeft: "20px",
                            "&:hover": {
                                backgroundColor: "#FF3811",
                                color: "white",
                                borderColor: "#FF3811",
                            },
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
                        <Button variant="contained" color="primary" sx={{ marginLeft: "20px" }}>
                            Login
                        </Button>
                    </Link>
                </Toolbar>
            </div>
        </AppBar>
    );
}

export default NavBar;
