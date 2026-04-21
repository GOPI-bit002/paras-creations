import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export const BUSINESS = {
  name: "Chai-Churi",
  tagline: "Premium Chai, Churi, Snacks & Cafe Experience in Una",
  phone: "9805642484",
  phoneDisplay: "098056 42484",
  address:
    "F76J+X37, Malahat Nagar, Professor Colony, Una, Himachal Pradesh 174303",
  shortAddress: "Una, Himachal Pradesh",
  hours: "Open · Closes 11:30 pm",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Chai-Churi+Malahat+Nagar+Professor+Colony+Una+Himachal+Pradesh+174303",
  mapsEmbed:
    "https://www.google.com/maps?q=Chai-Churi+Malahat+Nagar+Professor+Colony+Una+Himachal+Pradesh+174303&output=embed",
};

export function whatsappLink(message: string) {
  return `https://wa.me/91${BUSINESS.phone}?text=${encodeURIComponent(message)}`;
}
