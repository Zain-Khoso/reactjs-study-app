// Lib Imports.
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper to merge class names.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to calculate the time late in a future date.
export function calculateTimeLeft(targetDate: Date | string) {
  const difference = new Date(targetDate).getTime() - Date.now();
  const timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
    timeLeft.seconds = Math.floor((difference / 1000) % 60);
  }

  return timeLeft;
}

// Helper to format category slug.
export function formatCategorySlug(slug: string): string {
  if (!slug) return '';

  const cleanSlug = slug.replace(/-?mcqs$/i, '');

  return cleanSlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
