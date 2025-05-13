import { Box, Typography } from "@mui/material";
import Link from "next/link";
import TopBrandUI from "@/components/menu/TopBrandUI";
import { getTopBrands } from "@/actions/menu";

export default async function TopBrands() {
  let restaurants: topBrandRestaurant[] = [];
  let errorMessage: string | null = null;

  try {
    restaurants = await getTopBrands();
  } catch (error) {
    // console.error("TopBrands fetch error:", error);
    errorMessage = "Unable to load top brands. Please try again later.";
  }

  return (
    <Box maxWidth="1600px" width="90%" margin="auto" marginTop="30px">
      <Typography
        fontFamily="Poppins"
        fontWeight={500}
        fontSize={{ xs: "28px", sm: "32px" }}
        lineHeight={{ xs: "40px", sm: "48px" }}
        letterSpacing="0%"
      >
        Top brands for you
      </Typography>

      <Box
        margin="30px auto"
        padding="0 30px"
        display="flex"
        gap={{ xs: "45px", sm: "65px", md: "75px" }}
        height={
          restaurants.length > 0
            ? { xs: "170px", sm: "250px", md: "300px" }
            : "100px"
        }
        sx={{
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "thin",
          overscrollBehaviorX: "contain",
          scrollbarColor: "#f8f8f8 transparent",
          "&::-webkit-scrollbar-button": { display: "none" },
          "&:hover": {
            sm: { cursor: restaurants.length > 3 ? "grabbing" : "default" },
            md: { cursor: restaurants.length > 4 ? "grabbing" : "default" },
          },
          "&:active": {
            sm: { cursor: restaurants.length > 3 ? "grabbing" : "default" },
            md: { cursor: restaurants.length > 4 ? "grabbing" : "default" },
          },
        }}
      >
        {errorMessage ? (
          <Typography variant="body1" color="error" textAlign="center">
            {errorMessage}
          </Typography>
        ) : restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Link
              href={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TopBrandUI
                restaurant={{
                  title: restaurant.title,
                  id: restaurant.id,
                  logo: restaurant.logo,
                }}
              />
            </Link>
          ))
        ) : (
          <Typography variant="body1" color="red" textAlign="left">
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
