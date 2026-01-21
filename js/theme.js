// js/theme.js
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleButton = document.getElementById("themeToggle");

  // SÄTT TEMA ALLTID
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", savedTheme);

  // OM KNAPP FINNS → koppla klick
  if (!toggleButton) return;

  toggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  toggleButton.addEventListener("click", () => {
    const nextTheme =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    toggleButton.textContent = nextTheme === "dark" ? "☀️" : "🌙";
  });
});
