"use client";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { applyTheme, readTheme, type Theme } from "@/lib/theme";

const palettes = {
  dark: {
    background: { default: "#08090a", paper: "#0c0e10" },
    text: { primary: "#f2f3f5", secondary: "#b8bec6" },
    divider: "rgba(255,255,255,0.08)",
    tooltipBg: "#14181b",
    tooltipBorder: "rgba(255,255,255,0.1)",
    drawer: "#0a0c0d",
    drawerBorder: "rgba(255,255,255,0.08)",
    backdrop: "rgba(4,5,6,0.72)",
    accent: "#7ea6ff",
  },
  light: {
    background: { default: "#f6f5f2", paper: "#ffffff" },
    text: { primary: "#14171c", secondary: "#3f4650" },
    divider: "rgba(20,23,28,0.1)",
    tooltipBg: "#ffffff",
    tooltipBorder: "rgba(20,23,28,0.12)",
    drawer: "#f6f5f2",
    drawerBorder: "rgba(20,23,28,0.1)",
    backdrop: "rgba(20,23,28,0.4)",
    accent: "#3d63d8",
  },
} as const;

function buildMuiTheme(mode: Theme) {
  const p = palettes[mode];
  return createTheme({
    cssVariables: true,
    palette: {
      mode,
      background: p.background,
      primary: { main: p.accent },
      text: p.text,
      divider: p.divider,
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
    },
    components: {
      MuiTooltip: {
        defaultProps: { arrow: true, enterTouchDelay: 0 },
        styleOverrides: {
          tooltip: {
            backgroundColor: p.tooltipBg,
            border: `1px solid ${p.tooltipBorder}`,
            color: p.text.primary,
            fontSize: "0.75rem",
            fontWeight: 400,
            padding: "8px 10px",
            maxWidth: 260,
            lineHeight: 1.45,
          },
          arrow: { color: p.tooltipBg },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: p.drawer,
            backgroundImage: "none",
            borderLeft: `1px solid ${p.drawerBorder}`,
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: { backgroundColor: p.backdrop },
        },
      },
    },
  });
}

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    setThemeState(readTheme());
  }, []);

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(readTheme() === "light" ? "dark" : "light");
  }, [setTheme]);

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute(
        "content",
        theme === "light" ? "#f6f5f2" : "#08090a",
      );
    }
  }, [theme]);

  const muiTheme = useMemo(() => buildMuiTheme(theme), [theme]);
  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <AppRouterCacheProvider options={{ key: "mui", enableCssLayer: true }}>
        <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
      </AppRouterCacheProvider>
    </ThemeContext.Provider>
  );
}
