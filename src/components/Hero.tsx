import { Button } from "@/components/ui/button"

const EXTRAIT_CODE = `typedef struct Branche {
    char domaine[50];
    Feuille* feuilles;
    struct Branche* next;
} Branche;

typedef struct Arbre {
    char date[80];
    int nb_branche;
    int nb_feuille;
    Branche* branches;
} Arbre;`

export function Hero() {
  return (
    <section id="accueil" className="mx-auto grid max-w-5xl gap-10 px-6 pt-16 pb-20 lg:grid-cols-2 lg:items-center">
      <div className="flex min-w-0 flex-col gap-5">
        <h1 className="text-4xl leading-tight font-medium tracking-tight text-balance md:text-5xl">
          Votre idée devient un vrai site web.
        </h1>
        <p className="max-w-md text-base text-muted-foreground">
          Développeur freelance basé au Mali. Sites vitrines, applications sur mesure, hébergement compris.
        </p>
        <div className="flex items-center gap-3">
          <Button size="lg" asChild>
            <a href="#contact">Me contacter</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projets">Voir mes projets</a>
          </Button>
        </div>
      </div>

      <div className="min-w-0 rounded-xl border border-border bg-card p-5 font-mono text-xs text-muted-foreground shadow-sm">
        <div className="mb-3 text-[11px] text-muted-foreground/70">moteur.c</div>
        <pre className="overflow-x-auto leading-relaxed">
          <code>{EXTRAIT_CODE}</code>
        </pre>
      </div>
    </section>
  )
}
