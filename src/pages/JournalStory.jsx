import { Link, useParams } from "react-router-dom";
import { journalPosts } from "../data/journal";

export default function JournalStory() {
    const { slug } = useParams();

    const post = journalPosts.find((item) => item.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                    404
                </p>

                <h1 className="font-editorial text-6xl mt-5">
                    Story not found.
                </h1>

                <Link
                    to="/journal"
                    className="mt-8 text-xs uppercase tracking-[0.2em] border-b border-black/20 pb-2"
                >
                    Back to Journal →
                </Link>
            </div>
        );
    }

    return (
        <article className="bg-[#f5f3ef] min-h-screen">
            {/* HEADER */}

            <section className="px-6 md:px-16 pt-40 pb-20">
                <div className="max-w-5xl mx-auto">
                    <Link
                        to="/journal"
                        className="text-xs uppercase tracking-[0.2em] text-neutral-400"
                    >
                        ← Journal
                    </Link>

                    <p className="text-xs text-neutral-400 mt-12">
                        {post.date}
                    </p>

                    <h1 className="font-editorial text-6xl md:text-[8rem] leading-[0.85] mt-5 max-w-5xl">
                        {post.title}
                    </h1>

                    <p className="max-w-2xl text-neutral-500 leading-8 mt-10 text-lg">
                        {post.excerpt}
                    </p>
                </div>
            </section>

            {/* HERO IMAGE */}

            <section className="px-4 md:px-10">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full max-h-[80vh] object-cover"
                />
            </section>

            {/* STORY */}

            <section className="px-6 md:px-16 py-24">
                <div className="max-w-2xl mx-auto">
                    {post.content.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-base md:text-lg leading-9 text-neutral-600 mb-8"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>

            {/* BACK */}

            <section className="px-6 md:px-16 pb-32 text-center">
                <Link
                    to="/journal"
                    className="inline-block px-7 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur-xl text-xs uppercase tracking-[0.2em]"
                >
                    More stories →
                </Link>
            </section>
        </article>
    );
}
