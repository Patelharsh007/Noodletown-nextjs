"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifyUserAction } from "@/actions/auth";
import { setUser } from "@/redux/slice/AuthUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/Store";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const authUser = useSelector((state: RootState) => state.authUser.authUser);

  useEffect(() => {
    async function verifyUser() {
      if (authUser.isAuthenticated) {
        return;
      }

      try {
        const res = await verifyUserAction();

        if (res.status !== "success") {
          router.push("/login");
          return;
        }

        const { id, userName, email } = res.user;
        const profileImage = res.profileImage;
        dispatch(setUser({ id, userName, email, profileImage }));
      } catch (error) {
        console.error(error);
        router.push("/login");
      }
    }

    verifyUser();
  }, [dispatch, router, authUser]);

  return <>{children}</>;
}
