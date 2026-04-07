import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes and handles conditional logic
 * without style conflicts.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}