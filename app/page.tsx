"use client"

import InteractiveModel from "./components/interactive-model";

export default function Home() {
    return (
        <>
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-0 bg-(image:--background)"
            />
            <main className="relative z-10 min-h-screen bg-transparent text-foreground">
                <header className="mx-auto w-[80%] border top-3 rounded-3xl shadow-sm shadow-primary bg-background/90 sticky border-border z-999">
                    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
                        <a className="text-xl font-semibold tracking-tight text-primary" href="#">
                            blended
                        </a>
                        <div className="hidden gap-6 text-sm text-muted sm:flex">
                            <a className="hover:text-primary" href="#section-one">Examples</a>
                            <a className="hover:text-primary" href="#section-two">Rewards</a>
                            <a className="hover:text-primary" href="#faq">FAQ</a>
                        </div>
                        <a className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-background hover:bg-primary-hover" href="#contact">
                            RSVP
                        </a>
                    </nav>
                </header>

                <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-12 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]" id="top">
                    <InteractiveModel scenepath="/models/hc.glb" />
                    <div>
                        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-foreground sm:text-7xl text-right">
                            build anything in <span className="text-primary hover:text-primary-hover transition-all"><a href="https://www.blender.org/"> blender</a></span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-muted text-right">
                            If you didnt know, Blender is a free and open-source 3D graphics software that can do many things!
                            Here, in <span className="text-primary">blended</span>, you create a 3d project using only blender and its amazing capabilities.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3 w-full justify-end">
                            <a className="rounded-md hover:-rotate-x-30 hover:shadow-neo hover:border bg-primary px-5 py-3 text-sm font-medium text-primary-foreground! transition hover:bg-primary-hover" href="#">
                                RSVP for blended!
                            </a>
                            <a className="rounded-md hover:-rotate-x-30 hover:shadow-neo-secondary border border-secondary px-5 py-3 text-sm text-secondary duration-200 hover:bg-secondary font-bold hover:text-secondary-foreground!" href="#section-one">
                                Examples
                            </a>
                        </div>
                    </div>
                </section>

                <section className="border-y border-border bg-surface/15 py-24" id="section-one">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">You can make</p>
                                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                    anything using Blender
                                </h2>
                            </div>
                            <p className="max-w-xl text-base leading-7 text-muted">
                                Make anything 3d in blender, use your own creativity to make the best out of it.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-6 lg:grid-cols-4">
                            {[
                                {
                                    title: "3d models",
                                    description: "Design anything in the 3d editor of blender.",
                                    model: "/models/icecream.glb",
                                },
                                {
                                    title: "Animations",
                                    description: "Animate any existing 3d model!!.",
                                    model: "",
                                },
                                {
                                    title: "Character rigging",
                                    description: "Add movement to any 3d model in blender.",
                                    model: "/models/hand.glb",
                                },
                                {
                                    title: "VFX and graphics",
                                    description: "Create any 3d graaphic or vfx stuff.",
                                    model: "/models/particles.glb",
                                },
                            ].map((example) => (
                                <article className="group overflow-hidden rounded-2xl border border-border bg-background/70 transition duration-300 hover:-rotate-x-20 hover:shadow-neo hover:border-primary/70" key={example.title}>
                                    <div className="border-b border-border bg-(image:--background) p-2">
                                        <div className="overflow-hidden rounded-xl border border-border bg-background">
                                            {example.model ?
                                                <InteractiveModel scenepath={example.model} color />
                                                :
                                                <div className="min-h-full border border-muted rounded-lg">No model found</div>
                                            }
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center justify-between gap-3">
                                            <h3 className="text-xl font-semibold text-foreground">{example.title}</h3>
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-muted">{example.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-y border-border bg-surface/15 py-24" id="section-two">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="max-w-2xl">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-secondary">You get</p>
                            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                                rewards
                            </h2>
                        </div>

                        <div className="mt-10 grid gap-6 lg:grid-cols-4">
                            {[
                                {
                                    title: "Blender Hat",
                                    description: "blender merch?",
                                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQnDKTpCKAWPWkq-RJsc-7fsSpyn0kbSdSruRe-aJVQ&s=10",
                                },
                                {
                                    title: "Pen Tablet",
                                    description: "make your sculpting easy!!",
                                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6YdNiKuPv6sGoqAmCx2tWOqc85iNvma9hSgWPONA8A&s=10",
                                },
                                {
                                    title: "3d mouse",
                                    description: "a great upgrade to your existing mouse :D",
                                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvf5JAYhto5fIXeHgO0ZOD9rzQZLFtUXvCJvjHHRnYQ&s=10",
                                },
                                {
                                    title: "iPad",
                                    description: "use this for cooler apps you can find on app store to model.",
                                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmV3MM7j1vLOQgQ5o3WHUAzOpgeu1PK8z75f8iQZeb4A&s=10",
                                },
                            ].map((item) => (
                                <article className="group overflow-hidden rounded-2xl border border-border bg-background/70 transition duration-300 hover:-rotate-x-20 hover:shadow-neo-secondary hover:border-secondary/70" key={item.title}>
                                    <div className="border-b border-border bg-(image:--background) p-2">
                                        <div className="overflow-hidden rounded-xl border border-border bg-background">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center justify-between gap-3">
                                            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
}
