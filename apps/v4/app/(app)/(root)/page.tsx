import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { CardsDemo } from "@/components/cards"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageNav } from "@/components/page-nav"
import { ThemeSelector } from "@/components/theme-selector"
import { Button } from "@/components/ui/button"

const title = "Build your Component Library"
const description =
  "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code."

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-2xl font-bold">Levva Counter</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Dark Mode</span>
            <Button variant="square" size="square" className="bg-secondary hover:bg-secondary/90">
              🌙
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="mx-auto max-w-2xl">
          {/* Card */}
          <div className="rounded-lg border bg-card p-8 shadow-sm">
            <div className="mb-8 text-center">
              <h2 className="mb-2 text-3xl font-bold">Contador</h2>
              <p className="text-muted-foreground">
                Use os botões abaixo para incrementar ou decrementar o valor
              </p>
            </div>

            {/* Counter Display */}
            <div className="mb-8 flex items-center justify-center">
              <span className="text-6xl font-bold">0</span>
            </div>

            {/* Counter Controls */}
            <div className="flex items-center justify-center gap-4">
              <Button variant="square" size="square" className="bg-secondary hover:bg-secondary/90">
                -
              </Button>
              <Button variant="square" size="square">
                +
              </Button>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-xl font-semibold">Sobre os Botões</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button variant="square" size="square" className="h-8 w-8">
                  +
                </Button>
                <span className="text-sm text-muted-foreground">Tamanho pequeno (32x32)</span>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="square" size="square">
                  +
                </Button>
                <span className="text-sm text-muted-foreground">Tamanho padrão (48x48)</span>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="square" size="square" className="h-16 w-16 text-xl">
                  +
                </Button>
                <span className="text-sm text-muted-foreground">Tamanho grande (64x64)</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex h-16 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 Levva. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="square" size="square" className="h-8 w-8">
              🐦
            </Button>
            <Button variant="square" size="square" className="h-8 w-8">
              📱
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
