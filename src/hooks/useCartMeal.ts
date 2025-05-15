"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchCart,
  addToCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
  clearCart,
} from "@/actions/cart";
import {
  showSuccessToast,
  showErrorToast,
  showInfoToast,
} from "../components/ToastContainer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

const useCart = () => {
  const authUser = useSelector((state: RootState) => state.authUser.authUser);
  const queryClient = useQueryClient();

  const {
    data: cart,
    isLoading: isLoadingCart,
    error: errorCart,
  } = useQuery({
    queryKey: ["cartItems", authUser.id],
    queryFn: () => fetchCart(),
    enabled: !!authUser.id,
  });

  const addToCartMutation = useMutation({
    mutationFn: (mealId: string) => addToCart(mealId),
    onSuccess: (data) => {
      if (data.status === "error") {
        showErrorToast(data?.message);
        return;
      }
      showSuccessToast(data?.message || "Added to cart");
      queryClient.invalidateQueries({ queryKey: ["cartItems", authUser.id] });
    },
    onError: () => showErrorToast("Error adding item to cart"),
  });

  const removeFromCartMutation = useMutation({
    mutationFn: (mealId: string) => removeFromCart(mealId),
    onSuccess: (data) => {
      if (data.status === "error") {
        showErrorToast(data?.message);
        return;
      }
      showSuccessToast(data?.message || "Removed from cart");
      queryClient.invalidateQueries({ queryKey: ["cartItems", authUser.id] });
    },
    onError: () => showErrorToast("Error removing item from cart"),
  });

  const incrementMutation = useMutation({
    mutationFn: (mealId: string) => incrementCartItem(mealId),
    onSuccess: (data) => {
      if (data.status === "error") {
        showErrorToast(data?.message);
        return;
      }
      showInfoToast(data?.message || "Item incremented");
      queryClient.invalidateQueries({ queryKey: ["cartItems", authUser.id] });
    },
    onError: () => showErrorToast("Error incrementing item"),
  });

  const decrementMutation = useMutation({
    mutationFn: (mealId: string) => decrementCartItem(mealId),
    onSuccess: (data) => {
      if (data.status === "error") {
        showErrorToast(data?.message);
        return;
      }
      showInfoToast(data?.message || "Item decremented");
      queryClient.invalidateQueries({ queryKey: ["cartItems", authUser.id] });
    },
    onError: () => showErrorToast("Error decrementing item"),
  });

  const clearCartMutation = useMutation({
    mutationFn: clearCart,
    onSuccess: (data) => {
      showSuccessToast(data?.message || "Cart cleared");
      queryClient.invalidateQueries({ queryKey: ["cartItems", authUser.id] });
    },
    onError: () => showErrorToast("Error clearing cart"),
  });

  return {
    cart,
    isLoadingCart,
    errorCart,
    addToCart: addToCartMutation.mutate,
    removeFromCart: removeFromCartMutation.mutate,
    incrementItem: incrementMutation.mutate,
    decrementItem: decrementMutation.mutate,
    emptyCart: clearCartMutation.mutate,
    isAdding: addToCartMutation.isPending,
    isIncrementing: incrementMutation.isPending,
    isDecrementing: decrementMutation.isPending,
  };
};

export default useCart;
