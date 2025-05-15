"use client";
import React from "react";
import { Box, Grid, Stack, Skeleton } from "@mui/material";
import CartCard from "@/components/cart/CartCard";
import { CartItem } from "@/types/type";
import EmptyCart from "@/components/cart/EmptyCart";
import useCart from "@/hooks/useCartMeal";

const CartContent = () => {
  const { cart, isLoadingCart, errorCart } = useCart();

  if (isLoadingCart) {
    return (
      <Box maxWidth={"1600px"} width={"90%"} margin={"auto"}>
        <Grid container spacing={3} margin={"30px 0"}>
          {[...Array(4)].map((_, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Box
                padding={{ xs: "15px", sm: "30px" }}
                borderRadius={"17px"}
                sx={{ backgroundColor: "#F9F9F9" }}
              >
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={190}
                  sx={{ borderRadius: "16px" }}
                />
                <Stack spacing={1.5} sx={{ marginTop: "15px" }}>
                  <Skeleton variant="text" width="60%" height={30} />
                  <Skeleton variant="text" width="40%" height={30} />
                  <Skeleton variant="text" width="80%" height={20} />
                  <Skeleton variant="rectangular" width="100%" height={40} />
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (!isLoadingCart && (!cart || cart.length === 0)) {
    return <EmptyCart />;
  }

  return (
    <>
      <Box maxWidth={"1600px"} width={"90%"} margin={"auto"}>
        <Grid container spacing={3} margin={"30px 0"}>
          {cart &&
            cart.length > 0 &&
            cart.map((item: CartItem) => (
              <CartCard key={item.id} item={item} />
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default CartContent;
