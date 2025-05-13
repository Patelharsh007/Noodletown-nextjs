const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// --------------------------- Home Page -----------------------------------------------

// --------Best Delivered--------------------
export const fetchBestDelivered = async () => {
  try {
    const res = await fetch(`${BASE_URL}/meal/weatherMeals`, {
      cache: "force-cache",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(
        `fetchBestDelivered failed: HTTP ${res.status} - ${res.statusText}`
      );
      return [];
    }

    const response = await res.json();

    if (response.status !== "success") {
      console.error(
        "fetchBestDelivered response error:",
        response.message || "Unknown error"
      );
      return [];
    }

    return (response.meals || []).slice(0, 3);
  } catch (error) {
    console.error("fetchBestDelivered error:", error);
    return [];
  }
};

// --------Carousel Categories--------------------
export const fetchCarosuelCategories = async () => {
  try {
    const res = await fetch(`${BASE_URL}/meal/categories`, {
      cache: "force-cache",
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(
        `fetchCarosuelCategories failed: HTTP ${res.status} - ${res.statusText}`
      );
      return [];
    }

    const response = await res.json();

    if (response.status !== "success") {
      console.error(
        "fetchCarosuelCategories response error:",
        response.message || "Unknown error"
      );
      return [];
    }

    return response.categories || [];
  } catch (error) {
    console.error("fetchCarosuelCategories error:", error);
    return [];
  }
};

// --------Carousel Items--------------------
export const fetchCarosuelItems = async (category: string) => {
  if (!category) {
    console.warn("fetchCarosuelItems: No category provided");
    return [];
  }

  try {
    const res = await fetch(
      `${BASE_URL}/meal/carosuelItems?category=${category}`,
      {
        cache: "force-cache",
        signal: AbortSignal.timeout(5000),
      }
    );

    if (!res.ok) {
      console.error(
        `fetchCarosuelItems failed: HTTP ${res.status} - ${res.statusText}`
      );
      return [];
    }

    const response = await res.json();

    if (response.status !== "success") {
      console.error(
        "fetchCarosuelItems response error:",
        response.message || "Unknown error"
      );
      return [];
    }

    return response.carosuelItem || [];
  } catch (error) {
    console.error("fetchCarosuelItems error:", error);
    return [];
  }
};
