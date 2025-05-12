"use client";
import { useState } from "react";
import {
  Typography,
  Stack,
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("Surat");
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();

  const handleCityChange = (event: SelectChangeEvent) => {
    setSelectedCity(event.target.value || "Surat");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.trim()) {
      router.push(`/search/${selectedCity}/${searchValue}`);
    }
  };

  return (
    <>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={{ xs: "40px", sm: "80px" }}
        marginTop={{ xs: "90px", sm: "140px" }}
      >
        <Stack
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            fontFamily={"Poppins, serif"}
            fontWeight={700}
            fontSize={{ xs: "38px", sm: "48px" }}
            lineHeight={"72px"}
            letterSpacing={"0%"}
            color={"#fff"}
          >
            NOODLETOWN
          </Typography>
          <Typography
            fontFamily={"Poppins, serif"}
            fontWeight={500}
            fontSize={{ xs: "18px", sm: "24px" }}
            lineHeight={"36px"}
            letterSpacing={"0%"}
            color={"#fff"}
          >
            Discover best food around you
          </Typography>
        </Stack>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          <Stack
            height={{ xs: "80px", sm: "65px" }}
            width={{ xs: "90%", sm: "590px" }}
            sx={{
              backgroundColor: "#d9d9d9",
              borderRadius: "8px",
            }}
          >
            {/* Search-Bar Box  */}
            <Stack
              height={"100%"}
              width={"100%"}
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              margin={"0 auto"}
              gap={{ xs: "5px", sm: "35px" }}
            >
              {/* Select  */}
              <Select
                id="dropdown"
                name="city"
                value={selectedCity}
                onChange={handleCityChange}
                displayEmpty={false}
                sx={{
                  width: { xs: "50%", sm: "auto" },
                  margin: { xs: "0", sm: "auto 10px" },
                  height: "50%",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "#000000",
                  lineHeight: "30px",
                  letterSpacing: "0%",
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  "& .MuiSelect-select": {
                    padding: { xs: "7px", sm: "auto" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  "& .MuiSelect-icon": {
                    position: "absolute",
                    right: { xs: "15%", sm: "0" },
                  },
                }}
              >
                <MenuItem value="Navsari">Navsari</MenuItem>
                <MenuItem value="Surat">Surat</MenuItem>
                <MenuItem value="Valsad">Valsad</MenuItem>
              </Select>

              <Typography display={{ xs: "none", sm: "block" }}>|</Typography>
              <Stack
                width={{ xs: "90%", sm: "70%" }}
                marginX={"auto"}
                height={"50%"}
                margin={"0 auto"}
                display={"flex"}
                direction={"row"}
                justifyContent={{ xs: "space-evenly", sm: "flex-start" }}
                alignItems={"center"}
                gap={{ xs: "20px", sm: "15px" }}
              >
                <TextField
                  id="search-value"
                  name="search"
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for restraunt, cuisine, places"
                  sx={{
                    width: { xs: "300px", sm: "85%" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#000000",
                      fontFamily: "Poppins",
                      fontWeight: "400",
                      fontSize: { xs: "16.5px", sm: "18px" },
                      lineHeight: "27px",
                      letterSpacing: "0%",
                      padding: "0px",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      textOverflow: "ellipsis",
                      color: "#999999",
                      opacity: "1",
                    },
                  }}
                  variant="outlined"
                />
                <SearchIcon
                  sx={{ color: "#999999" }}
                  onClick={() => {
                    router.push(`/search/${selectedCity}/${searchValue}`);
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
