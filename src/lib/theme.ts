/** Shared theme helpers. The blocking script in `layout.tsx` must stay in sync. */
export type Theme = "dark" | "light";

export const THEME_KEY = "theme";

export const themeScript = `(function(){try{var k=${JSON.stringify(THEME_KEY)};var s=localStorage.getItem(k);var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(t);r.style.colorScheme=t;}catch(e){document.documentElement.classList.add("dark");}})();`;

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  localStorage.setItem(THEME_KEY, theme);
}

export function readTheme(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}
