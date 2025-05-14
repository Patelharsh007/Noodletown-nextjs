import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { RestaurantItem } from "@/types/type";
import { getRestaurant } from "@/actions/restuarant";

const RestaurantMenu = async ({
  params,
}: {
  params: { restaurantId: string };
}) => {
  const { restaurantId } = await params;

  let restaurant: RestaurantItem | null = null;
  let errorMessage: string | null = null;

  try {
    restaurant = await getRestaurant(restaurantId);
  } catch (error) {
    // console.error("BestMeals fetch error:", error);
    errorMessage = "Unable to restaurant. Please try again later.";
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ margin: "80px auto" }}>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={{ xs: "28px", sm: "24px" }}
          lineHeight={{ xs: "40px", sm: "36px" }}
          letterSpacing="0%"
          color={"#000000"}
          textAlign={{ xs: "center", sm: "left" }}
        >
          Menu
        </Typography>

        <Grid
          container
          spacing={{ xs: "40px", sm: "30px" }}
          padding={{ xs: "10px", sm: "0" }}
        >
          {restaurant &&
            restaurant?.menu_images.map((image: string, id: number) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} marginTop={"30px"} key={id}>
                <Box
                  component={"img"}
                  src={image}
                  alt={restaurant?.title}
                  borderRadius={"20px"}
                  width={"100%"}
                  height={{ xs: "100%", sm: "500px" }}
                  sx={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
                <Typography
                  margin={"16px"}
                  fontFamily={"Poppins"}
                  fontWeight={400}
                  fontSize={"16px"}
                  lineHeight={"24px"}
                  letterSpacing="0%"
                  color={"#000000"}
                  textAlign={"center"}
                >
                  Menu-{id + 1}
                </Typography>
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default RestaurantMenu;
