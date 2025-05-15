"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from "@/form/LoginForm";
import { showErrorToast, showInfoToast } from "@/components/ToastContainer";
import { setUser } from "@/redux/slice/AuthUserSlice";
import { RootState } from "@/redux/Store";
import { loginAction } from "@/actions/auth";

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const authUser = useSelector((state: RootState) => state.authUser.authUser);

  useEffect(() => {
    if (authUser.isAuthenticated) {
      router.replace("/user");
    }
  }, [authUser, router]);

  //   const handleLogin = async (email: string, password: string) => {
  //     const loginInfo = {
  //       email: email,
  //       password: password,
  //     };

  //     setLoading(true);
  //     try {
  //       const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`;

  //       const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(loginInfo),
  //         credentials: "include",
  //       });

  //       const result = await response.json();

  //       if (result.status === "success") {
  //         showInfoToast(`${result.message}`);
  //         const id = result.logUser.id as number;
  //         const userName = result.logUser.userName as string;
  //         const profileImage = result.logUser.profileImage as string;

  //         dispatch(setUser({ id, userName, email, profileImage }));
  //         router.replace("/user");
  //       } else if (result.status === "error") {
  //         if (result.errors && result.errors.length > 0) {
  //           result.errors.forEach((error: { field: string; message: string }) => {
  //             showErrorToast(`${error.message}`);
  //           });
  //         } else {
  //           showErrorToast(`${result.message}`);
  //         }
  //       }
  //     } catch (error) {
  //       console.log("Error during fetch:", error);
  //       // showErrorToast("An unexpected error occurred. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  // const handleLogin = async (email: string, password: string) => {
  //   setLoading(true);

  //   try {
  //     // Prepare FormData for the server action
  //     const formData = new FormData();
  //     formData.append("email", email);
  //     formData.append("password", password);

  //     // Call the server action
  //     const result = await loginAction(formData);

  //     if (result.status === "success") {
  //       showInfoToast(`${result.message}`);
  //       const id = result.logUser.id as number;
  //       const userName = result.logUser.userName as string;
  //       const profileImage = result.logUser.profileImage as string;

  //       dispatch(setUser({ id, userName, email, profileImage }));
  //       router.replace("/user");
  //     } else {
  //       if (result.errors && result.errors.length > 0) {
  //         result.errors.forEach((error: { field: string; message: string }) => {
  //           showErrorToast(error.message);
  //         });
  //       } else {
  //         showErrorToast(result.message);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Unexpected error during login:", error);
  //     showErrorToast("An unexpected error occurred. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);

    try {
      // Prepare FormData for the server action
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      // Call the server action (assumes loginAction is a server-side function)
      const result = await loginAction(formData);

      if (result.status === "success") {
        showInfoToast(`${result.message}`);
        const id = result.logUser.id as number;
        const userName = result.logUser.userName as string;
        const profileImage = result.logUser.profileImage as string;

        // Dispatch the user data to the Redux store
        dispatch(setUser({ id, userName, email, profileImage }));

        // Navigate the user to the protected route after login
        router.replace("/user");
      } else {
        if (result.errors && result.errors.length > 0) {
          result.errors.forEach((error: { field: string; message: string }) => {
            showErrorToast(error.message);
          });
        } else {
          showErrorToast(result.message);
        }
      }
    } catch (error) {
      console.error("Unexpected error during login:", error);
      showErrorToast("An unexpected error occurred. Please try again.");
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
        <Box
          component="img"
          src={
            "https://res.cloudinary.com/drqniwnnq/image/upload/v1747031419/auth-logo_qca8jd.png"
          }
          alt="Noodletown"
          sx={{
            width: "80px",
            height: "80px",
            display: "block",
            margin: "0 auto 20px",
          }}
        />

        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#333",
            mb: 1,
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Welcome Back!
        </Typography>

        <Typography
          sx={{
            color: "#666",
            mb: 3,
            fontSize: "0.9rem",
          }}
        >
          Your favorite food is waiting for you!
        </Typography>

        <LoginForm
          onSubmit={handleLogin}
          loading={loading}
          setLoading={setLoading}
        />

        <Typography
          onClick={() => router.replace("/register")}
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
          Create Account
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

export default Login;
