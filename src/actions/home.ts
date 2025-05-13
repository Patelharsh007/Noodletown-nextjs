"use server";

import {
  fetchBestDelivered,
  fetchCarosuelCategories,
  fetchCarosuelItems,
} from "@/lib/fetchers/home/fetcher";

// Get best delivered meals
export async function getBestDeliveredMeals() {
  try {
    return await fetchBestDelivered();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Failed to fetch meals");
    }
  }
}

// Get carousel categories
export async function getCarosuelCategories() {
  try {
    return await fetchCarosuelCategories();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Failed to fetch carousel categories");
    }
  }
}

// Get carousel items for a given category
export async function getCarosuelItems(category: string) {
  try {
    return await fetchCarosuelItems(category);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Failed to fetch carousel items");
    }
  }
}
