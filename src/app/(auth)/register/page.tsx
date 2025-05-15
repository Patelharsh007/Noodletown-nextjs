"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { SignUpForm } from "@/form/SignUpForm";
import { showErrorToast, showInfoToast } from "@/components/ToastContainer";
import { RootState } from "@/redux/Store";
import { signupAction } from "@/actions/auth";

interface SignUpFormType {
  fullName: string;
  email: string;
  password: string;
  profileImage: File | null;
}

export const Register: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const authUser = useSelector((state: RootState) => state.authUser.authUser);

  useEffect(() => {
    if (authUser.isAuthenticated) {
      router.replace("/user");
    }
  }, [authUser, router]);

  const handleSignUp = async (formData: SignUpFormType) => {
    const { fullName, email, password, profileImage } = formData;

    if (!fullName || !email || !password || !profileImage) {
      if (!profileImage) {
        showErrorToast("Upload profile picture.");
        return;
      }
      showErrorToast("All fields are required.");
      return;
    }

    const form = new FormData();
    form.append("userName", fullName);
    form.append("email", email);
    form.append("password", password);
    form.append("profileImage", profileImage);

    console.log("form", form);

    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
        {
          method: "POST",
          body: form,
        }
      );

      //if server action but cancelled due to body size limit
      // const result = await signupAction(form);
      const result = await response.json();

      if (result.status === "success") {
        showInfoToast(result.message);
        router.push("/login");
      } else if (result.status === "error") {
        if (result.errors && result.errors.length > 0) {
          result.errors.forEach((error: { field: string; message: string }) => {
            showErrorToast(`${error.message}`);
          });
        } else {
          showErrorToast(result.message || "Registration failed.");
        }
      }
    } catch (error) {
      showErrorToast("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      width="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "100vh",
        backgroundImage: {
          xs: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/drqniwnnq/image/upload/v1747031419/auth-bg_cwbsio.jpg)`,
          md: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://res.cloudinary.com/drqniwnnq/image/upload/v1747031425/auth-bg1_fn872p.jpg)`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        width={{ xs: "70%", sm: "50%" }}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "24px",
          padding: { xs: 3, sm: 4 },
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, mb: 1, fontSize: "2rem" }}
        >
          Create Account
        </Typography>
        <Typography sx={{ color: "#666", mb: 3, fontSize: "0.9rem" }}>
          Join us for delicious adventures!
        </Typography>

        <SignUpForm
          onSubmit={handleSignUp}
          loading={loading}
          setLoading={setLoading}
        />

        <Typography
          onClick={() => router.push("/login")}
          sx={{
            color: "#FFA500",
            textTransform: "none",
            fontWeight: "bold",
            mt: 2,
            mb: 2,
            display: "block",
            width: "100%",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#ff8c00",
              cursor: "pointer",
            },
          }}
        >
          Login
        </Typography>

        <Link
          href="/"
          style={{
            display: "block",
            textAlign: "center",
            color: "#666",
            fontSize: "0.9rem",
            marginTop: "1rem",
            textDecoration: "none",
          }}
        >
          Go to HomePage
        </Link>
      </Box>
    </Box>
  );
};

export default Register;
