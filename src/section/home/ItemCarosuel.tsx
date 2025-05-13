"use client"; // This is a client-side component

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";
import ScrollerCard from "@/components/home/ScrollerCard";
import { getCarosuelCategories, getCarosuelItems } from "@/actions/home";
import { MealItem } from "../../types/type";

const ItemCarosuel: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<MealItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);
  const [isLoadingItems, setIsLoadingItems] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCarosuelCategories();
        setCategories(categoriesData);
        setSelectedCategory(categoriesData[0] || "");
        setIsLoadingCategories(false);
      } catch (err) {
        setError("Failed to fetch categories.");
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const fetchItems = async () => {
        setIsLoadingItems(true);
        try {
          const itemsData = await getCarosuelItems(selectedCategory);
          setFilteredItems(itemsData);
        } catch (err) {
          setError("Failed to fetch items.");
        } finally {
          setIsLoadingItems(false);
        }
      };

      fetchItems();
    }
  }, [selectedCategory]);

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
              {error}
            </Typography>
          </Container>
        ) : isLoadingCategories ? (
          <CircularProgress sx={{ display: "block", margin: "auto" }} />
        ) : (
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
                bgcolor: selectedCategory === category ? "#F6B716" : "#ECEEF6",
                color: selectedCategory === category ? "white" : "inherit",
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
          ))
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
            <CircularProgress sx={{ display: "block", margin: "auto" }} />
          ) : (
            filteredItems?.map((item: MealItem) => (
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
            ))
          )}
        </Box>
      </Box>
    </>
  );
};

export default ItemCarosuel;
