// app/actions/menu.ts
"use server";
import {
  fetchRandomWeatherMeal,
  fetchTopBrands,
} from "@/lib/fetchers/menu/fetcher";

export async function getTopBrands() {
  try {
    const restaurants = await fetchTopBrands();
    return restaurants;
  } catch (error) {
    console.error("getTopBrands error:", error);
    return [];
  }
}

export async function getWeatherMeal() {
  try {
    const meals = await fetchRandomWeatherMeal();
    return meals;
  } catch (error) {
    console.error("getWeatherMeal error:", error);
    return [];
  }
}
