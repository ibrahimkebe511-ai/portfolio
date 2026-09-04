import { GithubLogo } from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-sm text-muted-foreground">
      <span>Ibrahim Kebe</span>
      <a
        href="https://github.com/ibrahimkebe511-ai"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 hover:text-foreground"
      >
        <GithubLogo weight="fill" className="size-4" />
        GitHub
      </a>
    </footer>
  )
}
