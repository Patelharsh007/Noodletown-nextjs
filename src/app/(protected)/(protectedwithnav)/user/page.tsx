"use client";
import { logoutAction } from "@/actions/auth";
import { showSuccessToast } from "@/components/ToastContainer";
import { clearUser } from "@/redux/slice/AuthUserSlice";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function User() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const logout = await logoutAction();
      showSuccessToast(logout.message);
      dispatch(clearUser());
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <>
      User Page
      <>
        <Button
          variant="outlined"
          // startIcon={<LogOut size={16} />}
          onClick={handleLogout}
          sx={{
            gap: 1,
            color: "red",
            borderColor: "red",
            backgroundColor: "#f6c1c1",
            "&:hover": {
              backgroundColor: "#f8a0a0",
              color: "red.600",
            },
          }}
        >
          Logout
        </Button>
      </>
    </>
  );
}
