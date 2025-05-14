"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface RestaurantButtonsProp {
  title: string;
}

const RestauarntButtonsClient: React.FC<RestaurantButtonsProp> = ({
  title,
}) => {
  const router = useRouter();

  const handleOrderOnline = () => {
    router.push("/cart");
  };

  const handleDirection = (title: string) => {
    if (title) {
      const mapUrl = `https://www.google.com/maps/search/?q=${encodeURIComponent(
        title
      )}`;
      window.open(mapUrl, "_blank");
    } else {
      console.error("Restaurant is null");
    }
  };

  const handleShare = () => {
    window.open("https://www.instagram.com", "_blank");
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      gap={{ xs: 2, sm: 3 }}
      width="100%"
      alignItems={{ xs: "center" }}
    >
      {["Order Online", "Directions", "Share"].map((text) => (
        <Button
          key={text}
          sx={{
            width: { xs: "80%", sm: "33%" },
            paddingY: { xs: 1, sm: 1.5 },
            border: "2px solid #FFA500",
            color: "#000000",
            "&:hover": {
              backgroundColor: "#FFA500",
              borderColor: "#FFA500",
              "& .MuiTypography-root": {
                color: "#FFFFFF",
              },
            },
          }}
          onClick={() => {
            if (text === "Order Online") {
              handleOrderOnline();
            }
            if (text === "Directions") {
              handleDirection(title);
            }
            if (text === "Share") {
              handleShare();
            }
          }}
        >
          <Typography
            fontFamily="Poppins"
            fontWeight={500}
            fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
            color="inherit"
          >
            {text}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
};

export default RestauarntButtonsClient;
