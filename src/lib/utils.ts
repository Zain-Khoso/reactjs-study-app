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
    isLive: false,
  };

  if (difference > 0) {
    timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
    timeLeft.seconds = Math.floor((difference / 1000) % 60);
    timeLeft.isLive = false;
  } else {
    timeLeft.days = 0;
    timeLeft.hours = 0;
    timeLeft.minutes = 0;
    timeLeft.seconds = 0;
    timeLeft.isLive = true;
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

// Helper to get a user's initials from the name.
export function getInitials(name: string) {
  const names = name.split(' ');
  if (names.length === 0) return 'U';

  const firstInitial = names.at(0)?.at(0)?.toUpperCase() ?? 'U';
  if (names.length === 1) return firstInitial;

  const lastInitial = names.at(-1)?.at(0)?.toUpperCase() ?? '';
  return firstInitial + lastInitial;
}

// Helper to normalize dates into readable strings.
export function normalizeDate(date?: Date | string): string {
  const d = new Date(date || Date.now());

  return d.toLocaleDateString('pk', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

