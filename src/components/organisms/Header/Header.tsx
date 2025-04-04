import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme.context";
import { Button } from "@/components/atoms/button";

type HeaderProps = {};

const Header = ({}: HeaderProps): React.ReactNode => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex justify-end  bg-stone-950 py-0.5 px-2">
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        size="icon"
        className="bg-stone-400 hover:bg-stone-200 text-stone-950 dark:bg-stone-600 dark:hover:bg-stone-400 transform"
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </header>
  );
};

export default Header;
