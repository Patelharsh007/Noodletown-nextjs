import { getProduct } from "@/actions/restuarant";
import ProductDescription from "@/components/product/ProductDescription";
import { MealItem } from "@/types/type";
import { Typography, Box, Grid } from "@mui/material";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;

  let meal: MealItem | null = null;
  let errorMessage: string | null = null;

  try {
    meal = await getProduct(productId);
  } catch (error) {
    // console.error("BestMeals fetch error:", error);
    errorMessage = "Unable to load meal details. Please try again later.";
  }

  return (
    <Box
      maxWidth="1600px"
      width="90%"
      margin="auto"
      marginY={{ xs: "30px", md: "50px" }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
        {meal ? (
          <>
            <Grid size={{ sm: 12, md: 5 }}>
              <Box
                component="img"
                src={meal?.image}
                alt={meal?.title}
                width={"100%"}
                height={{ xs: "400px", sm: "400px", md: "500px" }}
                borderRadius={"16px"}
                boxShadow={"0 4px 12px rgba(0,0,0,0.1)"}
                sx={{
                  objectFit: "cover",
                }}
              />
            </Grid>
            <ProductDescription meal={meal} />
          </>
        ) : (
          <Typography variant="body1" color="red" textAlign="left">
            No meals details available. The server may be experiencing issues.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}
