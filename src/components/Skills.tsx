import { Badge } from "@/components/ui/badge"

const COMPETENCES = [
  "Python",
  "C",
  "JavaScript",
  "HTML / CSS",
  "FastAPI",
  "Docker",
  "Linux",
  "Sécurité réseau",
]

export function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col gap-6 border-t border-border pt-16 md:flex-row md:items-start md:justify-between">
        <h2 className="text-2xl font-medium">Compétences</h2>
        <div className="flex max-w-lg flex-wrap gap-2">
          {COMPETENCES.map((competence) => (
            <Badge key={competence} variant="outline">
              {competence}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
