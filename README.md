# Portfolio

Site vitrine perso (Vite + React + TypeScript + Tailwind), déployé automatiquement à chaque push sur `main`.

## Ajouter un projet

Ouvrir `src/lib/projects.ts` et ajouter un objet au tableau `projets` :

```ts
{
  nom: "Nom du projet",
  pitch: "Une phrase d'accroche",
  description: "Description plus longue (affichée seulement sur le projet mis en avant)",
  stack: ["Techno1", "Techno2"],
  lien: "https://github.com/...",
  taille: "petit", // ou "grand" pour la carte mise en avant (une seule a la fois)
}
```

Commit + push : le site se met à jour automatiquement (aucune autre étape).

## Développement local

```bash
npm install
npm run dev
```
