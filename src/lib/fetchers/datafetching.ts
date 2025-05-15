import { AddressItem } from "@/types/type";
import { axiosInstance } from "./axiosInstance";

//-------------------------User Address Management----------------------------
export const getUserAddresses = async () => {
  const response = await axiosInstance.get(`/user/addresses`);
  return response.data.addresses;
};

export const addAddress = async (address: Omit<AddressItem, "id">) => {
  const response = await axiosInstance.post(`/user/addAddress`, {
    address,
  });
  return response.data.address;
};

export const updateAddress = async (
  addressId: string,
  updatedFields: Partial<AddressItem>
) => {
  const response = await axiosInstance.patch(
    `/user/updateAddress/${addressId}`,
    updatedFields
  );
  return response.data.updatedAddress;
};

export const deleteAddress = async (addressId: string) => {
  const response = await axiosInstance.delete(
    `/user/deleteAddress/${addressId}`
  );
  return response.data;
};

export const updatePassword = async (data: {
  currentPassword: string;
  newPassword: string;
  confirmNew: string;
}) => {
  const response = await axiosInstance.post(`/user/updatePassword`, data);
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post(`/auth/logout`, {});
};
export const login = async (email: string, password: string): Promise<void> => {
  const loginInfo = {
    email: email,
    password: password,
  };

  const response = await axiosInstance.post(`/auth/login`, loginInfo);
  return response.data;
};

//-------------------------User Profile Image Update----------------------------
export const updateProfileImage = async (file: File) => {
  const formData = new FormData();
  formData.append("profileImage", file);

  const response = await axiosInstance.post(
    `/user/changeProfileImage`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

//-------------------------Checkout Page----------------------------

export const createPayment = async (
  coupon_code: string | null,
  addressId: string
) => {
  const requestBody: { addressId: string; coupon_code?: string } = {
    addressId,
  };
  if (coupon_code) {
    requestBody.coupon_code = coupon_code;
  }
  const response = await axiosInstance.post(`/order/createOrder`, requestBody);
  return response.data;
};

//-------------------------Order Management----------------------------
export const getOrders = async () => {
  const response = await axiosInstance.get(`/order/getOrders`);
  return response.data.orders;
};

export const getCoupon = async (coupon_code: string) => {
  const response = await axiosInstance.post(`/order/getCoupons`, {
    coupon_code,
  });
  return response.data.coupon;
};
