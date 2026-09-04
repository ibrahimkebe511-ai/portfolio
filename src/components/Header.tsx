import { ThemeToggle } from "@/components/layout/ThemeToggle"

export function Header() {
  return (
    <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
      <a href="#accueil" className="font-mono text-sm text-muted-foreground">
        ibrahim.dev
      </a>
      <nav className="hidden items-center gap-6 text-sm sm:flex">
        <a href="#projets" className="text-muted-foreground hover:text-foreground">
          Projets
        </a>
        <a href="#contact" className="text-muted-foreground hover:text-foreground">
          Contact
        </a>
      </nav>
      <ThemeToggle />
    </header>
  )
}
