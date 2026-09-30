"use client"

import InteractiveModel from "./components/interactive-model";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 z-0 grid-bg"
            />
            <main className="relative z-10 min-h-screen bg-transparent text-foreground">
                <header className="mx-auto w-[80%] border top-3 rounded-lg shadow-sm shadow-primary bg-background/90 sticky border-border z-999">
                    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
                        <a className="text-xl font-semibold tracking-tight text-primary" href="#">
                            blended
                        </a>
                        <div className="hidden gap-6 text-sm text-muted sm:flex">
                            <a className="hover:text-primary" href="#examples">Examples</a>
                            <a className="hover:text-primary" href="#rewards">Rewards</a>
                            {/* <a className="hover:text-primary" href="#faq">FAQ</a> */}
                        </div>
                        <a className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-background hover:bg-primary-hover" href="https://rsvp.soon.it/blended/">
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
                            If you didnt know, Blender is a free and open source 3D graphics software that can do many things!
                            Here, in <span className="text-primary">blended</span>, you create a 3d project using only blender and its amazing capabilities.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3 w-full justify-end">
                            <a className="rounded-sm hover:-rotate-x-30 hover:shadow-neo hover:border bg-primary px-5 py-3 text-sm font-medium text-primary-foreground! transition hover:bg-primary-hover" href="https://rsvp.soon.it/blended/">
                                RSVP for blended!
                            </a>
                            <a className="rounded-sm hover:-rotate-x-30 hover:shadow-neo-secondary border border-secondary px-5 py-3 text-sm text-secondary duration-200 hover:bg-secondary font-bold hover:text-secondary-foreground!" href="#examples">
                                Examples
                            </a>
                        </div>
                    </div>
                </section>

                <section className="border-y border-border bg-surface/15 py-24" id="examples">
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
                                    media: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHdvY2RoNnNtZGczYzdkcnZybm50NHllZG56Z3ptMGU5cDZsZDZocSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4zFuOaEKf1Ll6/giphy.gif",
                                    alt: "",
                                },
                                {
                                    title: "Animations",
                                    description: "Animate any existing 3d model!!.",
                                    media: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnQ0ZDlkNGRmZGlzeTU2NXhtMXdsMDQ4cW1lejdiaHVzNjI1NXk5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT77Y1T0zY1gR5qe5O/giphy.gif",
                                    alt: "",
                                },
                                {
                                    title: "Character rigging",
                                    description: "Add movement to any 3d model in blender.",
                                    media: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXh2Y3JvY3RydHBwdXQ2cjRmeXVvMHQ1OGQ3ZzYyemF2YTM5bmFsYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bBrfLWeU4piGEOdYel/giphy.gif   ",
                                    alt: "",
                                },
                                {
                                    title: "VFX and graphics",
                                    description: "Create any 3d graphic or vfx stuff.",
                                    media: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2sycWg4b3NmcW1rNjh1NGlmYTlybjQzYmhjc2xkb3Vta3RqYWJxZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26n6G8lRMOrYC6rFS/giphy.gif",
                                    alt: "",
                                },
                            ].map((example) => (
                                <article className="group overflow-hidden rounded-md border border-border bg-background/70 transition duration-300 hover:-rotate-x-20 hover:shadow-neo hover:border-primary/70" key={example.title}>
                                    <div className="border-b border-border bg-(image:--background) p-2">
                                        <div className="relative aspect-4/5 overflow-hidden rounded-sm border border-border bg-background">
                                            <Image
                                                src={example.media}
                                                alt={example.alt}
                                                fill
                                                unoptimized
                                                loading="lazy"
                                                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                                                className="object-cover"
                                            />
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

                <section className="border-y border-border bg-surface/15 py-24" id="rewards">
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
                                    title: "the og blender :D",
                                    image: "https://instaplay.co.in/cdn/shop/files/INSTA-NWNUTRI-BLNDR-BKSLVR_3.jpg?v=1783674179&width=1445",
                                },
                                {
                                    title: "3d mouse",
                                    description: "a great upgrade to your existing mouse :D",
                                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvf5JAYhto5fIXeHgO0ZOD9rzQZLFtUXvCJvjHHRnYQ&s=10",
                                },
                                {
                                    title: "nvidia rtx 4060 gpu",
                                    description: "this would definitely run blender at top speeds (and ofc better rendering :D)",
                                    image: "https://www.theengineerstore.in/cdn/shop/products/Gigabyte-GeForce-RTX-4060-EAGLE-OC-8GB-GDDR6-Graphics-Card-GV-N4060EAGLE-OC-8GD.webp?v=1706692250",
                                },
                                {
                                    title: "switch 2",
                                    description: "get inspired by better 3d games....",
                                    image: "https://www.nistore.in/wp-content/uploads/2025/05/switch-2-2.webp",
                                },
                                {
                                    title: "elegoo cc2",
                                    description: "an awesome 3d printer.",
                                    image: "https://eu.elegoo.com/cdn/shop/files/CC2-_-260811.jpg?v=1786593948",
                                },
                                {
                                    title: "beats solo 4",
                                    description: "listen to some music oooooooo...",
                                    image: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/slate-blue/blue-01-solo4.jpg",
                                },
                                {
                                    title: "and many many more",
                                    description: "more c0ming soon!!!",
                                    image: "https://cdn3.emoji.gg/emojis/4081_SoonTM.png",
                                },
                            ].map((item) => (
                                <article className="group overflow-hidden rounded-md border border-border bg-background/70 transition duration-300 hover:-rotate-x-20 hover:shadow-neo-secondary hover:border-secondary/70" key={item.title}>
                                    <div className="border-b border-border bg-(image:--background) p-2">
                                        <div className="relative aspect-4/3 overflow-hidden bg-background">
                                            <Image
                                                src={item.image}
                                                alt={`${item.title} reward`}
                                                fill
                                                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                                                unoptimized
                                                loading="lazy"
                                                className="object-contain p-4"
                                            />
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
                <footer className="h-[30vh] w-full bg-surface/10 backdrop-blur-xs border-t border-border p-5 grid grid-cols-3">
                    <div className="text-5xl h-full flex items-center justify-center text-primary">HACK CLUB</div>
                    <div></div>
                    <div className="h-full flex flex-col items-center justify-center text-secondary gap-5">
                        <p className="text-sm max-w-[70%] text-white">made by <a className="text-primary hover:text-primary-hover" href="https://hackclub.enterprise.slack.com/team/U096RMRG03G">me</a>, sponsored by...... (noone as of now :( hope we find someone soon)</p>
                        <p className="text-xs">Credits to giffy for some gifs :D</p>
                    </div>
                </footer>
            </main >
        </>
    );
}
