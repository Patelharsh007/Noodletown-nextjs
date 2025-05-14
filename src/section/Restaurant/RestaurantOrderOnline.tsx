"use client";
import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import RestaurantMenuCategories from "../../components/restaurant/RestaurantMenuCategories";
import { MealItem } from "@/types/type";
import RestaurantMenuItems from "../../components/restaurant/RestaurantMenuItems";
import { getMenu, getMenuCategories } from "@/actions/restuarant";
import RestaurantMenuItemsSkeleton from "@/skeleton/RestaurantMenuItemsSkeleton";

interface restaurantProps {
  id: string;
}

const RestaurantOrderOnline: React.FC<restaurantProps> = ({ id }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Recommended");

  const {
    data: categoriesCount,
    isLoading: categoryLoad,
    error: categoryError,
  } = useQuery({
    queryKey: ["MenuCategories", id],
    queryFn: () => getMenuCategories(id),
    staleTime: 2 * 60 * 1000,
  });

  const {
    data: meals,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["filterMenu", id, selectedCategory],
    queryFn: () => getMenu(id, selectedCategory),
    staleTime: 10 * 60 * 1000,
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  if (error) {
    return (
      <Container maxWidth="md" sx={{ marginTop: { xs: "40px" } }}></Container>
    );
  }

  return (
    <>
      <Container sx={{ padding: "20px" }}>
        <Typography
          fontFamily={"Poppins"}
          fontWeight={500}
          fontSize={{ xs: "28px", sm: "24px" }}
          lineHeight={{ xs: "40px", sm: "36px" }}
          letterSpacing="0%"
          color={"#000000"}
          textAlign={{ xs: "center", sm: "left" }}
        >
          Order Online
        </Typography>
        <Grid container width={"100%"} marginY={"40px"}>
          <RestaurantMenuCategories
            categoriesCount={categoriesCount}
            Category={selectedCategory}
            onCategoryClick={handleCategoryClick}
            isLoading={isLoading}
          />
          <>
            <Grid
              size={{ xs: 12, sm: 9 }}
              paddingLeft={{ xs: "0px", sm: "30px" }}
              marginTop={{ xs: "30px", sm: "0px" }}
              sx={{
                height: { xs: "auto", sm: "80vh" },
                overflowY: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                fontFamily="Poppins"
                fontWeight={500}
                fontSize={{ xs: "26px", sm: "28px", md: "32px" }}
                lineHeight={{ xs: "38px", sm: "44px", md: "48px" }}
              >
                {selectedCategory}
              </Typography>

              <Grid
                container
                size={12}
                spacing={{ xs: 1, sm: 2 }}
                marginTop={{ xs: "20px", sm: "30px" }}
                direction={{ xs: "column", sm: "row" }}
                paddingRight={{ xs: "0", sm: "16px" }}
                sx={{
                  overflowY: { sm: "auto" },
                  maxHeight: { sm: "75vh" },
                  whiteSpace: { sm: "normal" },
                  msOverflowStyle: { sm: "none" },
                  scrollbarWidth: { sm: "thin" },
                  overscrollBehaviorY: { sm: "auto" },
                  scrollbarColor: { sm: "#f8f8f8 transparent" },
                  overflowX: "hidden",
                  "& .MuiTypography-root": {
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  },
                  "&::-webkit-scrollbar": {
                    display: { sm: "none" },
                  },
                  "&::-webkit-scrollbar-button": {
                    display: { sm: "none" },
                  },
                  scrollBehavior: "smooth",
                }}
              >
                {isLoading ? (
                  <RestaurantMenuItemsSkeleton />
                ) : (
                  meals &&
                  meals.map((meal: MealItem) => {
                    return <RestaurantMenuItems key={meal.id} meal={meal} />;
                  })
                )}
              </Grid>
            </Grid>
          </>
        </Grid>
      </Container>
    </>
  );
};

export default RestaurantOrderOnline;
