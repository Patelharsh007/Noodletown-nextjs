"use server";

import {
  fetchMenu,
  fetchMenuCategories,
  fetchProduct,
  fetchRestaurant,
} from "@/lib/fetchers/restaurant_meal/fetcher";

export async function getProduct(id: string) {
  try {
    const meals = await fetchProduct(id);
    return meals;
  } catch (error) {
    console.error("getProduct error:", error);
    return null;
  }
}
export async function getRestaurant(id: string) {
  try {
    const meals = await fetchRestaurant(id);
    return meals;
  } catch (error) {
    console.error("getRestaurant error:", error);
    return null;
  }
}
export async function getMenuCategories(id: string) {
  try {
    const meals = await fetchMenuCategories(id);
    return meals;
  } catch (error) {
    console.error("getRestaurant error:", error);
    return [];
  }
}
export async function getMenu(id: string, category: string) {
  try {
    const meals = await fetchMenu(id, category);
    return meals;
  } catch (error) {
    console.error("getRestaurant error:", error);
    return [];
  }
}
