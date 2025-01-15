import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUrl(url: string) {
  const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
  return formattedUrl;
}

