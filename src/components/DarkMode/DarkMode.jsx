import { useEffect, useState } from "react";
import "../DarkMode/DarkMode.css";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div>
      <button
        className="btn toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
      </button>
    </div>
  );
}
