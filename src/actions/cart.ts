"use server";
import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchCart = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");
    // if (!token) return [];

    const res = await fetch(`${BASE_URL}/cart/allCartData`, {
      headers: {
        Cookie: `access_token=${token?.value}`,
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) return [];
    const response = await res.json();
    return response.cartItem || [];
  } catch (error) {
    console.error("fetchCart error:", error);
    return [];
  }
};

export const addToCart = async (mealId: string) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");
    // if (!token) return null;

    const res = await fetch(`${BASE_URL}/cart/addToCart/${mealId}`, {
      method: "POST",
      headers: {
        Cookie: token ? `access_token=${token?.value}` : " ",
      },
      body: null,
      signal: AbortSignal.timeout(5000),
    });

    // if (!res.ok) return null;
    const response = await res.json();
    console.log(response);

    return response;
  } catch (error) {
    console.error("addToCart error:", error);
    return null;
  }
};

export const removeFromCart = async (mealId: string) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");
    if (!token) return null;

    const res = await fetch(`${BASE_URL}/cart/removeFromCart/${mealId}`, {
      method: "DELETE",
      headers: {
        Cookie: `access_token=${token.value}`,
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) return null;
    const response = await res.json();
    return response;
  } catch (error) {
    console.error("removeFromCart error:", error);
    return null;
  }
};

export const incrementCartItem = async (mealId: string) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");
    if (!token) return null;

    const res = await fetch(`${BASE_URL}/cart/increment/${mealId}`, {
      method: "PATCH",
      headers: {
        Cookie: `access_token=${token.value}`,
      },
      signal: AbortSignal.timeout(5000),
    });

    // if (!res.ok) return null;
    const response = await res.json();
    return response;
  } catch (error) {
    console.error("incrementCartItem error:", error);
    return null;
  }
};

export const decrementCartItem = async (mealId: string) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");
    if (!token) return null;

    const res = await fetch(`${BASE_URL}/cart/decrement/${mealId}`, {
      method: "PATCH",
      headers: {
        Cookie: `access_token=${token.value}`,
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) return null;
    const response = await res.json();
    return response;
  } catch (error) {
    console.error("decrementCartItem error:", error);
    return null;
  }
};

export const clearCart = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");
    if (!token) return null;

    const res = await fetch(`${BASE_URL}/cart/clearCart`, {
      method: "DELETE",
      headers: {
        Cookie: `access_token=${token.value}`,
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) return null;
    const response = await res.json();
    return response;
  } catch (error) {
    console.error("clearCart error:", error);
    return null;
  }
};
