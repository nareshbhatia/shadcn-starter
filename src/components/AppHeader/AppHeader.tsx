import { MainNav } from './MainNav';
import { ModeToggle } from './ModeToggle';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <MainNav />
        </div>
        <nav className="flex flex-1 items-center justify-end gap-3">
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
