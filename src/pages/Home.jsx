import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { photos } from "../data/photos";
import { journalPosts } from "../data/journal";

export default function Home() {
    return (
        <div className="bg-[#f5f3ef]">
            {/* HERO */}

            <section className="relative h-screen min-h-[700px] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    src={photos[0].image}
                    alt="Yasminn..."
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="relative z-10 h-full flex items-end p-6 md:p-16 text-white">
                    <div className="max-w-4xl">
                        <p className="uppercase tracking-[0.35em] text-xs mb-5">
                            A visual diary
                        </p>

                        <h1 className="font-editorial text-7xl md:text-[11rem] leading-[0.75]">
                            Yasmin
                        </h1>

                        <p className="mt-8 max-w-md text-sm md:text-base leading-7 text-white/80">
                            Photographs, little moments, fashion and everything
                            that makes life beautiful.
                        </p>
                    </div>
                </div>

                {/* <div className="absolute bottom-8 right-8 text-white text-xs tracking-[0.25em] uppercase">
                    Scroll ↓
                </div> */}
            </section>

            {/* INTRO */}

            <section className="px-6 md:px-16 py-32 md:py-48">
                <div className="max-w-5xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                        01 — Welcome
                    </p>

                    <h2 className="font-editorial text-5xl md:text-8xl mt-8 leading-[0.95]">
                        A little world
                        <br />
                        <i>made of moments.</i>
                    </h2>

                    <p className="max-w-xl mt-10 text-neutral-500 leading-8">
                        I'm Yasmin. I love photography, fashion, beauty, music,
                        art and the small details that make ordinary days feel
                        special.
                    </p>

                    <Link
                        to="/about"
                        className="inline-block mt-8 px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur-xl text-xs uppercase tracking-[0.2em] hover:bg-white transition"
                    >
                        Discover Yasmin →
                    </Link>
                </div>
            </section>

            {/* MOMENTS PREVIEW */}

            <section className="px-6 md:px-16 pb-32">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                            02 — Moments
                        </p>

                        <h2 className="font-editorial text-6xl md:text-8xl mt-4">
                            Recently
                        </h2>
                    </div>

                    <Link
                        to="/moments"
                        className="hidden md:block text-xs uppercase tracking-[0.2em] border-b border-black/20 pb-2"
                    >
                        View all →
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                    {photos.slice(1, 5).map((photo) => (
                        <Link
                            key={photo.id}
                            to="/moments"
                            className="group overflow-hidden"
                        >
                            <motion.img
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.7 }}
                                src={photo.image}
                                alt={photo.title}
                                className="aspect-[3/4] object-cover"
                            />
                        </Link>
                    ))}
                </div>
            </section>

            {/* MY WORLD */}

            <section className="bg-white px-6 md:px-16 py-32">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                        03 — Explore
                    </p>

                    <div className="flex justify-between items-end mb-16">
                        <h2 className="font-editorial text-6xl md:text-8xl">
                            My World
                        </h2>

                        <Link
                            to="/my-world"
                            className="hidden md:block text-xs uppercase tracking-[0.2em]"
                        >
                            Explore →
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            ["Fashion", photos[1].image],
                            ["Beauty", photos[3].image],
                            ["Lifestyle", photos[5].image],
                        ].map(([title, image]) => (
                            <Link key={title} to="/my-world" className="group">
                                <div className="overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.04 }}
                                        src={image}
                                        alt={title}
                                        className="aspect-[3/4] object-cover"
                                    />
                                </div>

                                <h3 className="font-editorial text-3xl mt-4">
                                    {title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* JOURNAL PREVIEW */}

            <section className="px-6 md:px-16 py-32">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                            04 — Journal
                        </p>

                        <h2 className="font-editorial text-6xl md:text-8xl mt-4">
                            Little stories
                        </h2>
                    </div>

                    <Link
                        to="/journal"
                        className="hidden md:block text-xs uppercase tracking-[0.2em]"
                    >
                        Read all →
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {journalPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/journal/${post.slug}`}
                            className="group"
                        >
                            <div className="overflow-hidden">
                                <motion.img
                                    whileHover={{ scale: 1.04 }}
                                    src={post.image}
                                    alt={post.title}
                                    className="aspect-[4/3] object-cover"
                                />
                            </div>

                            <p className="text-xs text-neutral-400 mt-5">
                                {post.date}
                            </p>

                            <h3 className="font-editorial text-3xl mt-2">
                                {post.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </section>

            {/* SOCIAL CTA */}

            <section className="bg-[#171717] text-[#f5f3ef] px-6 md:px-16 py-40 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    Come find me
                </p>

                <h2 className="font-editorial text-6xl md:text-9xl mt-8">
                    Let's be <i>social.</i>
                </h2>

                <Link
                    to="/socials"
                    className="inline-block mt-10 px-7 py-3 rounded-full border border-white/20 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition"
                >
                    Find Yasmin →
                </Link>
            </section>
        </div>
    );
}
