"use server";

import { cookies } from "next/headers";
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function loginAction(formData: FormData) {
  const cookieStore = await cookies();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const backendRes = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await backendRes.json();

  const setCookie = backendRes.headers.get("set-cookie");
  if (setCookie) {
    const match = setCookie.match(/access_token=([^;]+);/);
    if (match) {
      const token = match[1];

      cookieStore.set("access_token", token, {
        httpOnly: true,
        secure: true,
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 day
      });
    }
  }

  return result;
}

export async function signupAction(formData: FormData) {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    return result;
  } catch (err) {
    console.error("Server error during signup:", err);
    return {
      status: "error",
      message: "Something went wrong. Try again.",
    };
  }
}

export async function verifyUserAction() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token");
  // console.log("token", token);

  if (!token) {
    return { status: "error", message: "User not authenticated" };
  }

  //set cookie manually as sending cookie to node js from server
  const res = await fetch(`${BASE_URL}/user/verifyUser`, {
    method: "GET",
    headers: {
      Cookie: `access_token=${token?.value}`,
    },
    cache: "no-store",
  });

  const result = await res.json();
  // console.log("pro", result);
  return result;
}

export async function logoutAction() {
  const cookieStore = await cookies();

  // Remove the 'access_token' cookie on the server
  cookieStore.delete("access_token");

  return { message: "Logged out successfully on the server" };
}
