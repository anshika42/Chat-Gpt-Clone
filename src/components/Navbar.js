import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  // handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout Successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 4, mb: 2 }}
    >
      <Typography variant="h1" color={"primary"} fontWeight={"bold"}>
        AI GPT CLONE
      </Typography>
      {loggedIn ? (
        <>
          <NavLink to="/" p={1}>
            Home
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} p={1}>
            Log Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register" p={1}>
            Sign Up
          </NavLink>
          <NavLink to="/login" p={1}>
            Sign In
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;
