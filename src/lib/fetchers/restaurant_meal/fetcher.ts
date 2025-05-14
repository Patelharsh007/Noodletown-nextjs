// app/lib/fetchers/menu/fetcher.ts
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// product detail
export const fetchProduct = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/meal/${id}`, {
      cache: "force-cache",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(
        `fetchProduct failed: HTTP ${res.status} - ${res.statusText}`
      );
      return null;
    }

    const response = await res.json();

    if (response.status !== "success") {
      console.error(
        "fetchProduct response error:",
        response.message || "Unknown error"
      );
      return null;
    }

    return response.meal || null;
  } catch (error) {
    console.error("fetchProduct error:", error);
    return null;
  }
};

//restaurant detail
export const fetchRestaurant = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/restaurant/${id}`, {
      cache: "force-cache",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(
        `fetchRestaurant failed: HTTP ${res.status} - ${res.statusText}`
      );
      return null;
    }

    const response = await res.json();

    if (response.status !== "success") {
      console.error(
        "fetchRestaurant response error:",
        response.message || "Unknown error"
      );
      return null;
    }

    return response.restaurant || null;
  } catch (error) {
    console.error("fetchRestaurant error:", error);
    return null;
  }
};

//Meal Category
export const fetchMenuCategories = async (id: string) => {
  try {
    const res = await fetch(`${BASE_URL}/meal/${id}/categories`, {
      cache: "force-cache",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(
        `fetchMenuCategories failed: HTTP ${res.status} - ${res.statusText}`
      );
      return [];
    }

    const response = await res.json();

    if (response.status !== "success") {
      console.error(
        "fetchMenuCategories response error:",
        response.message || "Unknown error"
      );
      return [];
    }

    return response.categoriesCount || [];
  } catch (error) {
    console.error("fetchMenuCategories error:", error);
    return [];
  }
};

// Fetch Menu Items
export const fetchMenu = async (id: string, category: string) => {
  try {
    const url =
      category === "Recommended"
        ? `${BASE_URL}/meal/${id}/menu`
        : `${BASE_URL}/meal/${id}/menu?category=${category}`;

    const res = await fetch(url, {
      cache: "force-cache",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(`fetchMenu failed: HTTP ${res.status} - ${res.statusText}`);
      return [];
    }

    const response = await res.json();

    if (response.status !== "success") {
      console.error(
        "fetchMenu response error:",
        response.message || "Unknown error"
      );
      return [];
    }

    return response.menu || [];
  } catch (error) {
    console.error("fetchMenu error:", error);
    return [];
  }
};
