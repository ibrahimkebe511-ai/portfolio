import { ArrowUpRight } from "@phosphor-icons/react"
import { Badge } from "@/components/ui/badge"
import type { Projet } from "@/lib/projects"

export function ProjectCard({ projet }: { projet: Projet }) {
  const estGrand = projet.taille === "grand"

  return (
    <a
      href={projet.lien}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
    >
      {estGrand && <div className="-mt-6 -mx-6 mb-2 h-1 rounded-t-xl bg-primary" />}

      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-foreground">{projet.nom}</h3>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-sm text-muted-foreground">{projet.pitch}</p>
        {estGrand && (
          <p className="mt-1 text-sm text-muted-foreground/80">{projet.description}</p>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {projet.stack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-mono text-[11px]">
            {tech}
          </Badge>
        ))}
      </div>
    </a>
  )
}
