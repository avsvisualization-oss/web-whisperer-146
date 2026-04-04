import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
