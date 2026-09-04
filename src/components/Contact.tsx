import { EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-16">
        <h2 className="text-2xl font-medium">Un projet en tête ?</h2>
        <p className="max-w-md text-muted-foreground">
          Décrivez-moi ce que vous voulez construire, je reviens vers vous rapidement avec un plan concret.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <a href="https://wa.me/22394265961" target="_blank" rel="noreferrer">
              <WhatsappLogo weight="fill" />
              WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:ibrahimkebe511@gmail.com">
              <EnvelopeSimple weight="fill" />
              ibrahimkebe511@gmail.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
