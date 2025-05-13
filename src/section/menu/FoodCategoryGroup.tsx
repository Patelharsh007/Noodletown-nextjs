"use server";
import { Box, Grid } from "@mui/material";
import FoodCategoryGroupCard from "@/components/menu/FoodCategoryGroupCard";

const DUMMY_FOOD_BY_CATEGORY_DATA: foodByCategoryGroup[] = [
  {
    groupName: "Veggie friendly",
    groupDetails: "29 places near you",
    groupImage: `https://res.cloudinary.com/drqniwnnq/image/upload/v1744108258/cld-sample-4.jpg`,
  },
  {
    groupName: "Authentic",
    groupDetails: "15 places near you",
    groupImage: `https://res.cloudinary.com/drqniwnnq/image/upload/v1747031433/menuCategory2_v4scw3.jpg`,
  },
  {
    groupName: "Trending this week",
    groupDetails: "10 places near you",
    groupImage: `https://res.cloudinary.com/drqniwnnq/image/upload/v1747031434/menuCategory3_fudrx7.jpg`,
  },
];

const FoodCategoryGroup: React.FC = () => {
  return (
    <>
      <Box
        maxWidth={"1600px"}
        width={"90%"}
        margin={{ xs: "40px auto", sm: "60px auto", md: "80px auto" }}
        padding={{ xs: "15px", sm: "10px" }}
      >
        <Grid container spacing={{ xs: "20px", sm: "40px", md: "50px" }}>
          {DUMMY_FOOD_BY_CATEGORY_DATA.map((data) => (
            <FoodCategoryGroupCard Card={data} key={data.groupName} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FoodCategoryGroup;
