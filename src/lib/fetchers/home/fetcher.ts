const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// --------------------------- Home Page -----------------------------------------------

//--------Best delievered--------------------

export const fetchBestDelivered = async () => {
  const res = await fetch(`${BASE_URL}/meal/weatherMeals`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Network error: ${res.status}`);
  }

  const response = await res.json();

  if (response.status !== "success") {
    console.error("Error in response: ", response);
    throw new Error(response.message || "Unknown error from API");
  }

  return response.meals.slice(0, 3);
};

//--------Carousel categories--------------------

export const fetchCarosuelCategories = async () => {
  const res = await fetch(`${BASE_URL}/meal/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
    next: {
      tags: ["categories"],
    },
  });

  if (!res.ok) {
    throw new Error(`Network error: ${res.status}`);
  }

  const response = await res.json();

  if (response.status !== "success") {
    console.error("Error in response:", response);
    throw new Error(response.message || "Failed to fetch categories");
  }

  return response.categories;
};

//--------Carousel items--------------------
export const fetchCarosuelItems = async (category: string) => {
  if (!category) return [];

  const res = await fetch(
    `${BASE_URL}/meal/carosuelItems?category=${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error(`Network error: ${res.status}`);
  }

  const response = await res.json();

  if (response.status !== "success") {
    console.error("Error in response:", response);
    throw new Error(response.message || "Failed to fetch carousel items");
  }

  return response.carosuelItem;
};

// ---------------------------Menu Page-----------------------------------------------
