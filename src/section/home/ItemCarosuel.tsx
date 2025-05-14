"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MealItem } from "@/types/type";
import { getCarouselCategories, getCarouselItems } from "@/actions/home";
import CarosuelCategoriesSkeleton from "@/skeleton/CarosuelCategoriesSkeleton";
import CarosuelItemsSkeleton from "@/skeleton/CarosuelItemsSkeleton";
import ScrollerCard from "@/components/home/ScrollerCard";

const ItemCarosuel: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error,
  } = useQuery({
    queryKey: ["CarosuelCategories"],
    queryFn: getCarouselCategories,
    staleTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (categories?.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  const {
    data: filteredItems,
    isLoading: isLoadingItems,
    error: error1,
  } = useQuery({
    queryKey: ["CarosuelItems", selectedCategory],
    queryFn: () => getCarouselItems(selectedCategory),
    enabled: !isLoadingCategories && !error && !!selectedCategory,
    staleTime: 10 * 60 * 1000,
  });

  return (
    <>
      <Box
        margin={"auto"}
        display={"flex"}
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems={"center"}
      >
        <Box
          component={"img"}
          src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031435/vector1_vdwge8.png`}
          width={{ xs: "100px", sm: "150px" }}
          display={{ xs: "none", sm: "block" }}
        />
        <Typography
          fontFamily={"Inter"}
          fontWeight={700}
          fontSize={{ xs: "40px", sm: "48px" }}
          lineHeight={{ xs: "50px", sm: "58.09px" }}
          letterSpacing={"0%"}
          textAlign={"center"}
        >
          Popular Recipes
        </Typography>
        <Box
          component={"img"}
          src={`https://res.cloudinary.com/drqniwnnq/image/upload/v1747031435/vector1_vdwge8.png`}
          width={{ xs: "100px", sm: "150px" }}
          height={{ xs: "120px", sm: "160px", lg: "180px" }}
          display={{ xs: "none", sm: "block" }}
        />
      </Box>
      <Box
        maxWidth={"1400px"}
        margin={"auto"}
        padding={"20px"}
        marginBottom={"20px"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"15px"}
      >
        {error ? (
          <Container maxWidth="md" sx={{ marginTop: { xs: "40px" } }}>
            <Typography variant="body1" color="error" textAlign="center">
              No data found. Please check your internet connection or try again
              later.
            </Typography>
          </Container>
        ) : (
          <>
            {isLoadingCategories ? (
              <CarosuelCategoriesSkeleton />
            ) : (
              <>
                {categories &&
                  categories.map((category: string) => (
                    <Button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      sx={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                        border:
                          selectedCategory === category
                            ? "2px solid #F6B716"
                            : "2px solid #ECEEF6",
                        borderRadius: "45px",
                        bgcolor:
                          selectedCategory === category ? "#F6B716" : "#ECEEF6",
                        color:
                          selectedCategory === category ? "white" : "inherit",
                        textTransform: "none",

                        "&:hover": {
                          opacity: 0.8,
                          bgcolor: "#f8c33d",
                          border: "2px solid #f8c33d",
                        },
                      }}
                    >
                      {category}
                    </Button>
                  ))}
              </>
            )}
          </>
        )}
      </Box>
      <Box
        maxWidth="1800px"
        margin="auto"
        marginBottom="100px"
        padding="20px"
        sx={{
          position: "relative",
          overflowX: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "100px",
            pointerEvents: "none",
            display: { xs: "none", md: "block" },
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            overflowX: "auto",
            overflowY: "hidden",
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            padding: "4px",
            width: "100%",
            height: "100%",
            justifyContent: {
              sm: "flex-start",
              xm: filteredItems?.length <= 5 ? "center" : "flex-start",
            },
            "&:hover": {
              cursor: "grab",
            },
            "&:active": {
              cursor: "grabbing",
            },
          }}
        >
          {isLoadingItems ? (
            <CarosuelItemsSkeleton />
          ) : (
            <>
              {filteredItems?.map((item: MealItem) => (
                <Box
                  key={item.id}
                  sx={{
                    flex: "0 0 auto",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <ScrollerCard Card={item} />
                </Box>
              ))}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ItemCarosuel;
