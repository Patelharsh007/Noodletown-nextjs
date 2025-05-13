import { Box, Stack, Typography } from "@mui/material";
import BestDelieveredBox from "@/components/home/BestDelieveredBox";
import BestDeliveredSkeleton from "../../skeleton/BestDeliveredSkeleton";
import { getBestDeliveredMeals } from "@/actions/home";
import { MealItem } from "../../types/type";

const BestDelivered = async () => {
  let bestMeals: MealItem[] = [];
  let errorMessage: string | null = null;

  try {
    bestMeals = await getBestDeliveredMeals();
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = error.message || "Failed to load meals";
    }
  }

  if (!bestMeals.length && !errorMessage) {
    return <BestDeliveredSkeleton />;
  }

  if (errorMessage) {
    return (
      <Box padding={4}>
        <Typography color="error">{errorMessage}</Typography>
      </Box>
    );
  }

  // Render the meals when fetched successfully
  return (
    <Box
      maxWidth={"1400px"}
      margin={"20px auto"}
      padding={"30px"}
      display={{ xs: "none", sm: "block", md: "block" }}
    >
      <Stack padding={"20px 20px"} margin={"50px 20px"}>
        <Typography
          fontFamily={"Poppins"}
          fontSize={"48px"}
          fontWeight={700}
          lineHeight={"72px"}
          letterSpacing={0}
          color={"#ffc300"}
          textAlign={"left"}
        >
          Our best delivered cuisines
        </Typography>
        <Typography
          fontFamily={"Poppins"}
          fontSize={"16px"}
          fontWeight={400}
          lineHeight={"24px"}
          letterSpacing={0}
          textAlign={"left"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </Typography>
      </Stack>

      <Box
        id="best-delievered-container"
        maxWidth={"1400px"}
        margin={"0 auto"}
        padding={"0 20px"}
        display={"flex"}
        flexDirection={{ sm: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"relative"}
        sx={{
          "& > :nth-of-type(1)::after,& > :nth-of-type(2)::after": {
            content: '""',
            position: "absolute",
            top: { sm: "100%", md: "40%" },
            left: { sm: "0%", md: "0%", lg: "105%", xl: "110%" },
            width: { sm: "100%", md: "0%", lg: "50%", xl: "90%" },
            height: "2px",
            backgroundColor: "#ffc300",
            zIndex: -1,
          },
        }}
      >
        {bestMeals.map((item: MealItem) => (
          <BestDelieveredBox
            key={item.id}
            box={{
              id: item.id,
              imageurl: item.image,
              title: item.title,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BestDelivered;
