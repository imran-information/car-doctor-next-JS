"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
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
    const pathname = usePathname(); // Get the current route
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    // Function to check if the link is active
    const isActive = (href) => pathname === href;

    const link = (
        <div className="flex gap-5">
            {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
            ].map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full ${isActive(item.href) ? "text-[#FF3811] after:w-full" : "text-black"
                        }`}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );

    return (
        <AppBar
            className="border-b-2 border-b-[#FF3811] py-2 px-4"
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
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About" },
                                { href: "/services", label: "Services" },
                                { href: "/products", label: "Products" },
                                { href: "/contact", label: "Contact" },
                            ].map((item) => (
                                <MenuItem key={item.href} onClick={() => setAnchorElNav(null)}>
                                    <Link
                                        className={`text-black hover:text-[#FF3811] ${isActive(item.href) ? "text-[#FF3811]" : ""
                                            }`}
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Link>
                                </MenuItem>
                            ))}
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
                        <Button variant="contained" sx={{
                            backgroundColor: "#FF3811",
                            color: "white",
                            fontWeight: 700,
                            padding: "7px 20px",
                            borderRadius: "8px",
                            marginLeft: "20px",
                            textTransform: "uppercase",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                            "&:hover": {
                                backgroundColor: "#d32f0f",
                                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                            },
                        }} >
                            Login
                        </Button>
                    </Link>
                </Toolbar>
            </div>
        </AppBar>
    );
}

export default NavBar;
