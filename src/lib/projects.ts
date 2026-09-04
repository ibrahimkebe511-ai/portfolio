export type Projet = {
  nom: string
  pitch: string
  description: string
  stack: string[]
  lien: string
  taille: "grand" | "petit"
}

export const projets: Projet[] = [
  {
    nom: "Arbre de Competences",
    pitch: "Une appli de notes qui fait pousser un vrai arbre",
    description:
      "Application desktop : le moteur (structures de donnees en C pur, listes chainees) fait evoluer un arbre de connaissances a chaque note ajoutee. Interface HTML/CSS/JS, pont Python.",
    stack: ["C", "Python", "JavaScript"],
    lien: "https://github.com/ibrahimkebe511-ai/arbre-de-competences",
    taille: "grand",
  },
  {
    nom: "Outils systeme en C",
    pitch: "Shell Unix, allocateur memoire, calculatrice Lisp",
    description:
      "Reimplementation d'outils systeme depuis zero pour comprendre ce qui tourne sous le capot : un shell (fork/exec/wait), un allocateur type malloc, un evaluateur d'expressions bases sur un parseur AST.",
    stack: ["C"],
    lien: "https://github.com/ibrahimkebe511-ai/outils-c",
    taille: "petit",
  },
  {
    nom: "Labo securite",
    pitch: "Automatisation de reconnaissance reseau, assistant IA local",
    description:
      "Pipeline d'automatisation de tests d'intrusion (scan, classement de services, suggestion d'outils adaptes) complete par un modele de langage local qui synthetise les rapports sans jamais inventer un resultat.",
    stack: ["Python", "Nmap", "Ollama"],
    lien: "https://github.com/ibrahimkebe511-ai/labo-securite",
    taille: "petit",
  },
]
