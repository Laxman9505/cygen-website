/** @format */

// Cygen Brand Color System
export const COLORS = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6", // Main blue
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },

  secondary: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316", // Main orange
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },

  accent: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6", // Main teal
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
  },

  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e", // Main green
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },

  warning: {
    50: "#fefce8",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b", // Main yellow
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },

  background: {
    primary: "#ffffff",
    secondary: "#f8fafc",
    accent: "#eff6ff", // Light blue
    muted: "#f1f5f9",
  },

  text: {
    primary: "#111827",
    secondary: "#4b5563",
    muted: "#6b7280",
    inverse: "#ffffff",
  },
} as const;

export const THEME_COLORS = {
  primary: COLORS.primary[600], // Main blue
  primaryLight: COLORS.primary[500], // Lighter blue
  primaryDark: COLORS.primary[700], // Darker blue
  secondary: COLORS.secondary[500], // Orange
  accent: COLORS.accent[500], // Teal
  success: COLORS.success[500], // Green
  warning: COLORS.warning[500], // Yellow
  background: COLORS.background.primary,
  backgroundAccent: COLORS.background.accent,
  textPrimary: COLORS.text.primary,
  textSecondary: COLORS.text.secondary,
} as const;

export const CSS_VARIABLES = {
  "--color-primary": COLORS.primary[600],
  "--color-primary-light": COLORS.primary[500],
  "--color-primary-dark": COLORS.primary[700],
  "--color-secondary": COLORS.secondary[500],
  "--color-accent": COLORS.accent[500],
  "--color-success": COLORS.success[500],
  "--color-warning": COLORS.warning[500],
} as const;
