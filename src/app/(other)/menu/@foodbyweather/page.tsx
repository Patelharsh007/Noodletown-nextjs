import { Box, Grid, Typography } from "@mui/material";
import FoodByWeatherCard from "@/components/menu/FoodByWeatherCard";
import { MealItem } from "@/types/type";
import { getWeatherMeal } from "@/actions/menu";

export default async function foodbyweather() {
  let weatherMeal: MealItem[] = [];
  let errorMessage: string | null = null;

  try {
    weatherMeal = await getWeatherMeal();
  } catch (error) {
    // console.error("BestMeals fetch error:", error);
    errorMessage = "Unable to load meals. Please try again later.";
  }

  return (
    <Box
      maxWidth="1600px"
      width="90%"
      margin="auto"
      marginTop="50px"
      padding="10px"
    >
      <Typography
        fontFamily="Poppins"
        fontWeight={500}
        fontSize={{ xs: "28px", sm: "32px" }}
        lineHeight={{ xs: "40px", sm: "48px" }}
        letterSpacing="0%"
      >
        Food according to Weather
      </Typography>

      <Box marginY="50px">
        {errorMessage ? (
          <Typography variant="body1" color="error" textAlign="center">
            {errorMessage}
          </Typography>
        ) : weatherMeal.length > 0 ? (
          <Grid container spacing={{ xs: "20px", sm: "40px", md: "50px" }}>
            {weatherMeal.map((food) => (
              <FoodByWeatherCard Card={food} key={food.id} />
            ))}
          </Grid>
        ) : (
          <Typography variant="body1" color="red" textAlign="left">
            No meals available. The server may be experiencing issues.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
