import { ThemeSupa } from "@supabase/auth-ui-shared";

export const lightLoginStyles = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: "#4f46e5",
        brandAccent: "#6366f1",
        defaultButtonBackground: "transparent",
        defaultButtonBackgroundHover: "#e5e7eb",
        defaultButtonBorder: "#d1d5db",
        defaultButtonText: "#111827",
        dividerBackground: "#e5e7eb",
        inputBorder: "#d1d5db",
        inputBorderHover: "#d1d5db",
        inputBorderFocus: "#4f46e5",
        inputText: "#111827",
        inputLabelText: "#111827",
        inputPlaceholder: "#6b7280",
        messageText: "#111827",
        messageTextDanger: "#dc2626",
        anchorTextColor: "#4f46e5",
        anchorTextHoverColor: "#6366f1",
      },
      fonts: {
        bodyFontFamily: `Inter var, ui-sans-serif, system-ui, -apple-system`,
        buttonFontFamily: `Inter var, ui-sans-serif, system-ui, -apple-system`,
        inputFontFamily: `Inter var, ui-sans-serif, system-ui, -apple-system`,
        labelFontFamily: `Inter var, ui-sans-serif, system-ui, -apple-system`,
      },
      radii: {
        borderRadiusButton: "6px",
        buttonBorderRadius: "6px",
        inputBorderRadius: "6px",
      },
    },
  },
  className: {
    anchor: "text-indigo-600 hover:text-indigo-500",
    label: "text-gray-900 dark:text-white",
    input: "text-gray-900 dark:text-white",
    button: "text-white bg-indigo-600 hover:bg-indigo-500",
    divider: "bg-gray-200 dark:bg-gray-700",
    message: "text-gray-900 dark:text-white",
  },
  style: {
    input: { letterSpacing: "0.0em" },
  },
};

export const darkLoginStyles = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: "#4f46e5",
        brandAccent: "#6366f1",
        defaultButtonBackground: "transparent",
        defaultButtonBackgroundHover: "#27272a",
        defaultButtonBorder: "#27272a",
        defaultButtonText: "white",
        dividerBackground: "#27272a",
        inputBorder: "#27272a",
        inputBorderHover: "#27272a",
        inputBorderFocus: "#4f46e5",
        inputText: "white",
        inputLabelText: "#9ca3af",
        inputPlaceholder: "#6b7280",
        messageText: "white",
        messageTextDanger: "#dc2626",
        anchorTextColor: "#4f46e5",
        anchorTextHoverColor: "#6366f1",
      },
      fonts: {
        bodyFontFamily: `Inter var, ui-sans-serif, system-ui, -apple-system`,
        buttonFontFamily: `Inter var, ui-sans-serif, system-ui, -apple-system`,
        inputFontFamily: `Inter var, ui-sans-serif, system-ui, -apple-system`,
        labelFontFamily: `Inter var, ui-sans-serif, system-ui, -apple-system`,
      },
      radii: {
        borderRadiusButton: "6px",
        buttonBorderRadius: "6px",
        inputBorderRadius: "6px",
      },
    },
  },
  className: {
    anchor: "text-indigo-600 hover:text-indigo-500",
    label: "text-gray-900 dark:text-white",
    input: "text-gray-900 dark:text-white",
    button: "text-white bg-indigo-600 hover:bg-indigo-500",
    divider: "bg-gray-200 dark:bg-gray-700",
    message: "text-gray-900 dark:text-white",
  },
  style: {
    input: { letterSpacing: "0.0em" },
  },
};
