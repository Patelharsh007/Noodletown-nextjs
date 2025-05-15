"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const EmptyCart = () => {
  const router = useRouter();

  return (
    <Box maxWidth={"1600px"} width={"90%"} margin={"auto"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center",
          p: 3,
        }}
      >
        <Box
          component="img"
          src={
            "https://res.cloudinary.com/drqniwnnq/image/upload/v1747031420/emptyCart_nxk2ah.jpg"
          }
          alt="Empty Cart"
          sx={{
            width: { xs: "250px", sm: "300px", md: "350px" },
            height: "auto",
            mb: 4,
          }}
        />
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 2, color: "#333" }}
        >
          Your cart is empty
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 4, color: "#666", maxWidth: "500px" }}
        >
          Looks like you haven't added any items to your cart yet. Start
          exploring our menu to find something delicious!
        </Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/menu")}
          sx={{
            bgcolor: "#FFA500",
            color: "white",
            "&:hover": {
              bgcolor: "#FF8F00",
            },
            px: 6,
            py: 2,
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "1.1rem",
            fontWeight: 600,
          }}
        >
          Explore Menu
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
