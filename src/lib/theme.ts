/** Shared theme helpers. The blocking script in `layout.tsx` must stay in sync. */
export type Theme = "dark" | "light";

export const THEME_KEY = "color-theme";
export const DEFAULT_THEME: Theme = "light";

export const themeScript = `(function(){try{var k=${JSON.stringify(THEME_KEY)};var d=${JSON.stringify(DEFAULT_THEME)};var s=localStorage.getItem(k);var t=(s==="light"||s==="dark")?s:d;var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(t);r.style.colorScheme=t;}catch(e){document.documentElement.classList.add(${JSON.stringify(DEFAULT_THEME)});}})();`;

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

export function readTheme(): Theme {
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : DEFAULT_THEME;
}
