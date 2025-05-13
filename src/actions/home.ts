"use server";
import {
  fetchBestDelivered,
  fetchCarosuelCategories,
  fetchCarosuelItems,
} from "@/lib/fetchers/home/fetcher";

export async function getBestDeliveredMeals() {
  try {
    const meals = await fetchBestDelivered();
    return meals;
  } catch (error) {
    console.error("getBestDeliveredMeals error:", error);
    return [];
  }
}

export async function getCarouselCategories() {
  try {
    const categories = await fetchCarosuelCategories();
    return categories;
  } catch (error) {
    console.error("getCarouselCategories error:", error);
    return [];
  }
}

export async function getCarouselItems(category: string) {
  try {
    const items = await fetchCarosuelItems(category);
    return items;
  } catch (error) {
    console.error("getCarouselItems error:", error);
    return [];
  }
}
