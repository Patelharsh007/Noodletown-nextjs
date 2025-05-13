// app/lib/fetchers/menu/fetcher.ts
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000"; // Fallback for safety

// ---------Top Brands------------------
export const fetchTopBrands = async () => {
  try {
    const res = await fetch(`${BASE_URL}/restaurant/topbrands`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(
        `fetchTopBrands failed: HTTP ${res.status} - ${res.statusText}`
      );
      return [];
    }

    const response = await res.json();

    if (response.status !== "success") {
      console.error(
        "fetchTopBrands response error:",
        response.message || "Unknown error"
      );
      return [];
    }

    return response.restaurants || [];
  } catch (error) {
    console.error("fetchTopBrands error:", error);
    return [];
  }
};

// ---------Food By Weather------------------
export const fetchRandomWeatherMeal = async () => {
  try {
    const res = await fetch(`${BASE_URL}/meal/weatherMeals`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "force-cache",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(
        `fetchRandomWeatherMeal failed: HTTP ${res.status} - ${res.statusText}`
      );
      return [];
    }

    const response = await res.json();

    if (response.status !== "success") {
      console.error(
        "fetchRandomWeatherMeal response error:",
        response.message || "Unknown error"
      );
      return [];
    }

    return response.meals || [];
  } catch (error) {
    console.error("fetchRandomWeatherMeal error:", error);
    return [];
  }
};
