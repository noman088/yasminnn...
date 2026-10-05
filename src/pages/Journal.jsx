import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { categories } from "../data/categories";

export default function MyWorld() {
    return (
        <div className="page-background min-h-screen">
            <section className="px-6 md:px-16 pt-40 pb-28">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                    Explore
                </p>

                <h1 className="font-editorial text-7xl md:text-[10rem] leading-[0.8] mt-8">
                    My
                    <br />
                    <i>World.</i>
                </h1>

                <p className="max-w-lg mt-10 text-neutral-500 leading-8">
                    The things I love, the things that inspire me and the little
                    pieces of life that make up my everyday world.
                </p>
            </section>

            <section className="px-6 md:px-16 pb-40">
                <div className="space-y-32">
                    {categories.map((category, index) => (
                        <motion.article
                            key={category.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="grid md:grid-cols-12 gap-8 items-center"
                        >
                            <div
                                className={`md:col-span-7 ${
                                    index % 2 === 1 ? "md:order-2" : ""
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.035 }}
                                        transition={{ duration: 0.8 }}
                                        src={category.image}
                                        alt={category.title}
                                        className="aspect-[4/5] object-cover"
                                    />
                                </div>
                            </div>

                            <div
                                className={`md:col-span-4 ${
                                    index % 2 === 1
                                        ? "md:order-1 md:col-start-1"
                                        : "md:col-start-9"
                                }`}
                            >
                                <span className="text-xs text-neutral-400">
                                    0{index + 1}
                                </span>

                                <h2 className="font-editorial text-5xl md:text-6xl mt-4">
                                    {category.title}
                                </h2>

                                <p className="text-sm leading-8 text-neutral-500 mt-6">
                                    {category.description}
                                </p>

                                <Link
                                    to="/moments"
                                    className="inline-block mt-8 text-xs uppercase tracking-[0.2em] border-b border-black/20 pb-2"
                                >
                                    See moments →
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
}
