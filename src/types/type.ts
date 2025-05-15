export interface RestaurantItem {
  id: string;
  title: string;
  logo: string;
  poster_images: string[];
  cuisines: string[];
  avg_cost_per_person: number;
  address: string;
  is_open: boolean;
  open_time: string;
  close_time: string;
  menu_images: string[];
  is_featured: boolean;
  rating: number;
  meals?: MealItem[];
}

export interface MealItem {
  id: string;
  category: string;
  image: string;
  title: string;
  short_description: string;
  full_description: string[];
  price: number;
  is_popular: boolean;
  restaurant?: RestaurantItem;
}

export interface User {
  id: number;
  email: string;
  userName: string;
  profileImage: string | null;
  createdAt?: Date;
}

export interface AuthUserItem {
  isAuthenticated: boolean;
  id: number | null;
  email: string;
  userName: string;
  profileImage: string;
}

export interface AddressItem {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface NewAddress {
  id: string;
  recipientName: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface CartItem {
  id: number;
  email: string;
  quantity: number;
  meal?: MealItem;
}

export interface OrderItem {
  // itemId: number;
  id: string | number;
  item_name: string;
  image: string;
  quantity: number;
  price: number;
  item_total: number;
}

export interface Order {
  id: number;
  userId: number | string;
  ordered_at: Date | string;
  address: AddressItem;
  items: OrderItem[];
  sub_total: number;
  discount: number;
  total: number;
  status: OrderStatus;
  delivery: number;
  stripe_payment_id: string;
  payment_status: PaymentStatus;
}

export enum OrderStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  PROCESSING = "processing",
  SHIPPED = "shipped",
}

export enum PaymentStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
}

export interface CartResponse {
  status: "success" | "error";
  message: string;
  cartItem?: any[];
}
