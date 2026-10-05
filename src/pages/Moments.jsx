import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";

import { photos } from "../data/photos";

const filters = ["All", "Portrait", "Fashion", "Lifestyle", "Beauty"];

export default function Moments() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selected, setSelected] = useState(null);

    const filteredPhotos = useMemo(() => {
        if (activeFilter === "All") {
            return photos;
        }

        return photos.filter((photo) => photo.category === activeFilter);
    }, [activeFilter]);

    const currentIndex = selected
        ? filteredPhotos.findIndex((photo) => photo.id === selected.id)
        : -1;

    const nextPhoto = () => {
        if (currentIndex === -1) return;

        setSelected(filteredPhotos[(currentIndex + 1) % filteredPhotos.length]);
    };

    const previousPhoto = () => {
        if (currentIndex === -1) return;

        setSelected(
            filteredPhotos[
                (currentIndex - 1 + filteredPhotos.length) %
                    filteredPhotos.length
            ],
        );
    };

    return (
        <div className="bg-[#f5f3ef] text-[#171717] min-h-screen">
            {/* =====================================================
          HEADER
      ===================================================== */}

            <section className="px-6 md:px-16 pt-40 md:pt-48 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                                03 — Photography
                            </p>

                            <h1 className="font-editorial text-[5rem] md:text-[9rem] leading-[0.78] mt-8">
                                Moments.
                            </h1>
                        </div>

                        <div className="max-w-sm">
                            <p className="text-sm leading-7 text-neutral-500">
                                Little pieces of life, captured along the way.
                                People, places, outfits, light and everything in
                                between.
                            </p>

                            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mt-6">
                                {photos.length} moments collected
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          FILTER BAR
      ===================================================== */}

            <section className="px-6 md:px-16 pb-12">
                <div className="max-w-7xl mx-auto">
                    <div
                        className="
            flex
            items-center
            gap-2
            overflow-x-auto
            pb-2
            scrollbar-hide
          "
                    >
                        {filters.map((filter) => {
                            const active = activeFilter === filter;

                            return (
                                <button
                                    key={filter}
                                    onClick={() => {
                                        setActiveFilter(filter);
                                        setSelected(null);
                                    }}
                                    className={`
                    shrink-0
                    px-5
                    py-2.5
                    rounded-full
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-300
                    border
                    ${
                        active
                            ? "bg-[#171717] text-white border-[#171717]"
                            : "bg-white/60 text-neutral-500 border-black/10 hover:bg-white"
                    }
                  `}
                                >
                                    {filter}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
          MASONRY GALLERY
      ===================================================== */}

            <section className="px-4 md:px-8 lg:px-12 pb-32">
                <div className="max-w-[1600px] mx-auto">
                    <motion.div
                        layout
                        className="
              columns-1
              sm:columns-2
              lg:columns-3
              xl:columns-4
              gap-4
            "
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredPhotos.map((photo, index) => (
                                <motion.article
                                    layout
                                    key={photo.id}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.96,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.025,
                                    }}
                                    className="
                    break-inside-avoid
                    mb-4
                    group
                    cursor-pointer
                  "
                                    onClick={() => setSelected(photo)}
                                >
                                    {/* IMAGE */}

                                    <div
                                        className="
                    relative
                    overflow-hidden
                    bg-neutral-200
                  "
                                    >
                                        <motion.img
                                            whileHover={{
                                                scale: 1.035,
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            src={photo.image}
                                            alt={photo.title}
                                            loading={
                                                index > 5 ? "lazy" : "eager"
                                            }
                                            className="
                        w-full
                        h-auto
                        object-cover
                      "
                                        />

                                        {/* HOVER OVERLAY */}

                                        <div
                                            className="
                      absolute
                      inset-0
                      bg-black/0
                      group-hover:bg-black/20
                      transition-all
                      duration-500
                    "
                                        />

                                        {/* EXPAND BUTTON */}

                                        <div
                                            className="
                      absolute
                      top-4
                      right-4
                      w-9
                      h-9
                      rounded-full
                      bg-white/80
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                      opacity-0
                      group-hover:opacity-100
                      translate-y-2
                      group-hover:translate-y-0
                      transition-all
                      duration-300
                    "
                                        >
                                            <Maximize2 size={14} />
                                        </div>
                                    </div>

                                    {/* PHOTO INFO */}

                                    <div
                                        className="
                    flex
                    items-center
                    justify-between
                    pt-3
                    pb-1
                  "
                                    >
                                        <span
                                            className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-neutral-500
                    "
                                        >
                                            {photo.category}
                                        </span>

                                        <span
                                            className="
                      text-[9px]
                      text-neutral-400
                    "
                                        >
                                            {String(photo.id).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h2
                                        className="
                    font-editorial
                    text-xl
                    leading-none
                  "
                                    >
                                        {photo.title}
                                    </h2>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* EMPTY STATE */}

                    {filteredPhotos.length === 0 && (
                        <div className="py-32 text-center">
                            <p className="font-editorial text-4xl">
                                Nothing here yet.
                            </p>

                            <button
                                onClick={() => setActiveFilter("All")}
                                className="
                  mt-6
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  border-b
                  border-black/20
                  pb-2
                "
                            >
                                View all moments
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

            <section
                className="
        bg-white
        px-6
        md:px-16
        py-32
        text-center
      "
            >
                <p
                    className="
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-neutral-400
        "
                >
                    Keep exploring
                </p>

                <h2
                    className="
          font-editorial
          text-5xl
          md:text-7xl
          mt-6
        "
                >
                    There is always
                    <br />
                    <i>another moment.</i>
                </h2>
            </section>

            {/* =====================================================
          LIGHTBOX
      ===================================================== */}

            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
              fixed
              inset-0
              z-[200]
              bg-black/95
              backdrop-blur-xl
              flex
              items-center
              justify-center
              p-5
              md:p-10
            "
                    >
                        {/* CLOSE */}

                        <button
                            onClick={() => setSelected(null)}
                            className="
                absolute
                top-5
                right-5
                md:top-7
                md:right-7
                z-10
                w-11
                h-11
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                text-white
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
              "
                        >
                            <X size={19} strokeWidth={1.5} />
                        </button>

                        {/* PREVIOUS */}

                        <button
                            onClick={previousPhoto}
                            className="
                absolute
                left-4
                md:left-8
                w-11
                h-11
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                text-white
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
              "
                        >
                            <ArrowLeft size={19} strokeWidth={1.5} />
                        </button>

                        {/* IMAGE */}

                        <motion.div
                            key={selected.id}
                            initial={{
                                opacity: 0,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                max-w-[90vw]
                max-h-[82vh]
                flex
                items-center
                justify-center
              "
                        >
                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="
                  max-h-[82vh]
                  max-w-[90vw]
                  w-auto
                  object-contain
                  shadow-2xl
                "
                            />
                        </motion.div>

                        {/* NEXT */}

                        <button
                            onClick={nextPhoto}
                            className="
                absolute
                right-4
                md:right-8
                w-11
                h-11
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                text-white
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
              "
                        >
                            <ArrowRight size={19} strokeWidth={1.5} />
                        </button>

                        {/* IMAGE INFORMATION */}

                        <div
                            className="
              absolute
              bottom-6
              left-1/2
              -translate-x-1/2
              text-center
              text-white
              whitespace-nowrap
            "
                        >
                            <p
                                className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/50
              "
                            >
                                {selected.category}
                            </p>

                            <p
                                className="
                font-editorial
                text-2xl
                mt-1
              "
                            >
                                {selected.title}
                            </p>

                            <p
                                className="
                text-[9px]
                text-white/30
                mt-2
              "
                            >
                                {currentIndex + 1} / {filteredPhotos.length}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
