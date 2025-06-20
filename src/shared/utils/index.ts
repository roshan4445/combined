import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function determineUserRole(code: string): 'state' | 'district' | 'mandal' {
  if (code.startsWith('s')) return 'state';
  if (code.includes('m')) return 'mandal';
  return 'district';
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
}

export function generateId(): string {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

export function validateAdminCode(code: string): boolean {
  const validCodes = ['s001', 'd1', 'd2', 'd3', 'd4', 'd1m1', 'd1m2', 'd2m1', 'd2m2'];
  return validCodes.includes(code);
}