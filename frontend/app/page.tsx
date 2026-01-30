import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white selection:bg-indigo-500/30">
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="text-xl font-bold tracking-tighter sm:text-2xl">
            MORRIS<span className="text-indigo-500">MATRIX</span>
          </div>
          <nav className="hidden space-x-8 text-sm font-medium sm:flex">
            <Link href="/" className="transition-colors hover:text-indigo-400">Features</Link>
            <Link href="/" className="transition-colors hover:text-indigo-400">About</Link>
            <Link href="/" className="transition-colors hover:text-indigo-400">Documentation</Link>
          </nav>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-sm">Login</Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
          <div className="absolute -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
          <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
            Next Generation<br />Opportunity Hub
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Empowering students and ambassadors through a unified matrix of opportunities,
            streamlined with modern architecture and seamless authentication.
          </p>
          <div className="mt-10 flex gap-4">
            <Button size="lg" className="h-12 rounded-full bg-indigo-600 px-8 text-lg hover:bg-indigo-700">
              Launch App
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full border-zinc-700 bg-transparent px-8 text-lg hover:bg-zinc-900">
              View Architecture
            </Button>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { title: "MVC Backend", desc: "Clean Node.js & Express architecture with Mongoose ODM." },
              { title: "App Router", desc: "Built on Next.js 14 for speed and modern search optimization." },
              { title: "Role Management", desc: "Integrated JWT auth for Students, Admins, and Ambassadors." },
            ].map((feature, i) => (
              <Card key={i} className="border-white/5 bg-zinc-900/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-indigo-400">{feature.title}</CardTitle>
                  <CardDescription className="text-zinc-400">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12">
        <div className="container mx-auto px-6 text-center text-zinc-500">
          <p>© 2026 Morris Matrix. Built with Precision.</p>
        </div>
      </footer>
    </div>
  );
}
