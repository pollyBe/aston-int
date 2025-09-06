import { useTheme } from "@/shared/lib/theme/use-theme";
import { Button } from "../../../shared/ui/Button/Button";


export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Switch to: {theme === "light" ? "Dark" : "Light"} theme
    </Button>
  );
};
