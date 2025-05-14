import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { RestaurantItem } from "@/types/type";
import { getRestaurant } from "@/actions/restuarant";
import RestauarntButtonsClient from "@/components/restaurant/RestauarntButtonsClient";

const RestaurantDetail = async ({
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

  const getOpenStatus = (openTime: string, closeTime: string) => {
    const now = new Date();
    const currentTime = now.toTimeString().split(" ")[0];

    const isOpen =
      openTime < closeTime
        ? currentTime >= openTime && currentTime < closeTime
        : currentTime >= openTime || currentTime < closeTime;

    return (
      <span style={{ color: isOpen ? "green" : "red" }}>
        {isOpen ? "Open Now" : "Closed"}
      </span>
    );
  };

  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: { xs: "40px" } }}>
        {restaurant && (
          <Grid container spacing={"20px"}>
            <Grid
              size={{ xs: 12, sm: 3 }}
              display={"flex"}
              justifyContent={{ xs: "center", sm: "flex-start" }}
              alignItems={{ xs: "center", sm: "self-start" }}
            >
              <Box
                component={"img"}
                src={restaurant?.logo}
                alt={restaurant?.title}
                width={{ xs: "187px", sm: "160px", md: "187px" }}
                height={{ xs: "186px", sm: "159px", md: "186px" }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 9 }} width={"100%"}>
              <Stack
                width={"87%"}
                margin="auto"
                gap={"15px"}
                direction={"column"}
              >
                <Typography
                  fontFamily={"Poppins"}
                  fontWeight={{ xs: 500, sm: 600 }}
                  fontSize={{ xs: "28px", sm: "36px" }}
                  lineHeight={{ xs: "42px", sm: "54px" }}
                  letterSpacing="0%"
                  color={"#000000"}
                  textAlign={{ xs: "center", sm: "left" }}
                >
                  {restaurant?.title}
                </Typography>

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  gap="15px"
                >
                  <Typography
                    fontFamily={"Poppins"}
                    fontWeight={300}
                    fontSize={{ xs: "13px", sm: "16px" }}
                    lineHeight={{ xs: "20px", sm: "24px" }}
                    letterSpacing="0%"
                    color="#999999"
                  >
                    {restaurant?.cuisines.join(", ")}
                  </Typography>

                  <Typography
                    fontFamily={"Poppins"}
                    fontWeight={300}
                    fontSize={{ xs: "13px", sm: "16px" }}
                    lineHeight={{ xs: "20px", sm: "24px" }}
                    letterSpacing="0%"
                    color="#999999"
                  >
                    {`Average Cost: ${Math.round(
                      restaurant?.avg_cost_per_person
                    )}rs per person`}
                  </Typography>
                </Stack>

                <Typography
                  fontFamily={"Poppins"}
                  fontWeight={300}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  lineHeight={{ xs: "20px", sm: "24px" }}
                  letterSpacing="0%"
                  color="#999999"
                >
                  {restaurant?.address}
                </Typography>

                <Typography
                  fontFamily={"Poppins"}
                  fontWeight={300}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  lineHeight={{ xs: "20px", sm: "24px" }}
                  letterSpacing="0%"
                  color="#999999"
                >
                  {restaurant && (
                    <>
                      {getOpenStatus(
                        restaurant?.open_time,
                        restaurant?.close_time
                      )}{" "}
                      ({restaurant?.open_time} - {restaurant?.close_time})
                      (Today)
                    </>
                  )}
                </Typography>

                <RestauarntButtonsClient title={restaurant.title} />
              </Stack>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default RestaurantDetail;
