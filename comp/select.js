import { TextField, Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
const Select = () => {
  const [buttonName, setButtonName] = useState("Trending");

  return (
    <Container maxWidth="xl">
      <ImageHeader>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="h5">Free Stock Photos</Typography>
          </div>
          <div>
            {" "}
            <div className="dropdown">
              <Button className="dropbtn">
                {buttonName} <ArrowDropDownIcon />
              </Button>
              <div className="dropdown-content">
                <Typography
                  onClick={(e) => {
                    setButtonName(e.target.textContent);
                  }}
                >
                  Trending
                </Typography>
                <Typography
                  onClick={(e) => {
                    setButtonName(e.target.textContent);
                  }}
                >
                  New
                </Typography>
                <Typography
                  onClick={(e) => {
                    setButtonName(e.target.textContent);
                  }}
                >
                  Following
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </ImageHeader>
    </Container>
  );
};

export default Select;

const ImageHeader = styled.div`
  margin-top: 20px;
  .dropbtn {
    font-size: 16px;
    border: none;
    color: black;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content p {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content p:hover {
    background-color: #f1f1f1;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown:hover .dropbtn {
  }
`;
