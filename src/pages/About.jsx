import { Link } from "react-router-dom";
import { motion } from "motion/react";
import yasminv6 from "../assets/photos/yasminv6.jpeg";

export default function About() {
    return (
        <div className="page-background min-h-screen">
            <section className="px-6 md:px-16 pt-40 pb-24">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                    About Yasmin
                </p>

                <h1 className="font-editorial text-7xl md:text-[10rem] leading-[0.8] mt-8">
                    Hello,
                    <br />
                    <i>I'm Yasmin.</i>
                </h1>
            </section>

            <section className="px-6 md:px-16 pb-32">
                <div className="grid md:grid-cols-12 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-7"
                    >
                        <img
                            src={yasminv6}
                            alt="Yasmin"
                            className="w-full aspect-[4/5] object-cover"
                        />
                    </motion.div>

                    <div className="md:col-span-4 md:col-start-9">
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                            A little introduction
                        </p>

                        <h2 className="font-editorial text-4xl md:text-5xl mt-6">
                            Finding beauty in ordinary things.
                        </h2>

                        <div className="mt-8 space-y-5 text-sm leading-8 text-neutral-500">
                            <p>
                                I'm someone who believes that life is made up of
                                small moments.
                            </p>

                            <p>
                                A beautiful outfit, sunlight coming through a
                                window, a song playing at exactly the right
                                moment or a conversation that stays with you.
                            </p>

                            <p>
                                This website is my little corner of the internet
                                — a place where I collect those moments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 md:px-16 py-32 bg-white">
                <div className="max-w-4xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                        What I love
                    </p>

                    <h2 className="font-editorial text-6xl md:text-8xl mt-6">
                        Fashion.
                        <br />
                        Photography.
                        <br />
                        Music.
                        <br />
                        Life.
                    </h2>
                </div>
            </section>

            <section className="px-6 md:px-16 py-32 text-center">
                <h2 className="font-editorial text-5xl md:text-7xl">
                    Want to explore my world?
                </h2>

                <Link
                    to="/my-world"
                    className="inline-block mt-8 px-7 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur-xl text-xs uppercase tracking-[0.2em]"
                >
                    Explore My World →
                </Link>
            </section>
        </div>
    );
}
