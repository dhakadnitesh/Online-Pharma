import React from "react";
import { Link } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <Box
      id="box"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      //   border="1px solid gray"
      p="10px"
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      fontSize="14px"
    >
      <Link to="/" style={{ fontFamily: "revert", fontWeight: "bolder" }}>
        TATA 1mg
      </Link>
      <Link
        to="/Medicine"
        style={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          color: "tomato",
        }}
      >
        MEDICINE
      </Link>
      
      <Link
        to="/Consult"
        style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
      >
        CONSULT DOCTORS
      </Link>
      
      <Link
        to="/Partnership"
        style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
      >
        PARTNERSHIP
      </Link>
      <Link
        // to="/Careplan"
        style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
      >
        CARE PLAN
      </Link>
      <Link to="/Signup" style={{fontFamily:"serif"}}>SIGNUP</Link>
      <Link 
      // to="/Card/:id"
      >
        
          <Image
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt="card Logo" style={{width:"23px"}}
          />
        
      </Link>
    </Box>
  );
};

export default Navbar;
