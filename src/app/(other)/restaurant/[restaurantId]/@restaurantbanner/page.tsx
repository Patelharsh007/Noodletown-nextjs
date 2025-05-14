import { Box, Container, Typography } from "@mui/material";
import { getRestaurant } from "@/actions/restuarant";
import { RestaurantItem } from "@/types/type";

const RestaurantBanner = async ({
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

  if (errorMessage) {
    return (
      <Container maxWidth="md" sx={{ marginTop: { xs: "40px" } }}>
        <Typography variant="body1" color="error" textAlign="center">
          No data found. Please check your internet connection or try again
          later.
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Box
        width={"100%"}
        margin={{ xs: "30px auto", sm: "50px auto" }}
        display={"grid"}
        gridTemplateAreas={{
          xs: '"first" "second" "third"',
          sm: '"first second" "first third"',
        }}
        gridTemplateColumns={{ xs: "1fr", sm: "1.1fr 0.9fr" }}
        gap={"10px"}
      >
        {restaurant && restaurant?.poster_images?.[0] && (
          <Box
            component={"img"}
            src={restaurant?.poster_images[0]}
            alt="Restaurant meals"
            width={"100%"}
            height={{ xs: "200px", sm: "500px", lg: "600px" }}
            gridArea={"first"}
            overflow={"hidden"}
            sx={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        )}
        {restaurant?.poster_images?.[1] && (
          <Box
            component={"img"}
            src={restaurant?.poster_images[1]}
            alt="Restaurant meals"
            width={"100%"}
            height={{ xs: "200px", sm: "245px", lg: "295px" }}
            gridArea={"second"}
            overflow={"hidden"}
            sx={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        )}
        {restaurant?.poster_images?.[2] && (
          <Box
            component={"img"}
            src={restaurant?.poster_images[2]}
            alt="Restaurant meals"
            width={"100%"}
            height={{ xs: "200px", sm: "245px", lg: "295px" }}
            gridArea={"third"}
            overflow={"hidden"}
            sx={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        )}
      </Box>
    </>
  );
};

export default RestaurantBanner;
