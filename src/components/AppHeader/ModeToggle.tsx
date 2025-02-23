import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button onClick={handleClick} variant="outline" size="icon">
      {theme === 'light' ? <Icons.moon /> : <Icons.sun />}
    </Button>
  );
}
