import { ProjectCard } from "@/components/ProjectCard"
import { projets } from "@/lib/projects"

export function Projects() {
  const [grand, ...petits] = projets

  return (
    <section id="projets" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-medium">Projets</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        <div className="md:col-span-2 md:row-span-2">
          <ProjectCard projet={grand} />
        </div>
        {petits.map((projet) => (
          <ProjectCard key={projet.nom} projet={projet} />
        ))}
      </div>
    </section>
  )
}
