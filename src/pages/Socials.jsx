import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { siInstagram, siPinterest } from "simple-icons";

/* =========================================================
   BRAND ICON
========================================================= */

function BrandIcon({ icon, size = 24 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d={icon.path} />
        </svg>
    );
}

/* =========================================================
   SOCIALS PAGE
========================================================= */

export default function Socials() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#f5f3ef] text-[#171717]">
            {/* =====================================================
          BACKGROUND
      ===================================================== */}

            <div
                className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#eadfdb]/50
          blur-[130px]
        "
            />

            <div
                className="
          pointer-events-none
          absolute
          top-[50%]
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#e9e3d7]/60
          blur-[120px]
        "
            />

            {/* =====================================================
          HERO
      ===================================================== */}

            <div className="relative">
                <div
                    className="
            max-w-6xl
            mx-auto
            px-6
            md:px-10
            pt-36
            md:pt-48
            pb-24
            md:pb-32
          "
                >
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-neutral-400
              mb-8
            "
                    >
                        Find me elsewhere
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                        }}
                        className="
              font-editorial
              text-[clamp(4rem,10vw,9rem)]
              leading-[0.82]
              font-medium
              tracking-[-0.045em]
            "
                    >
                        Let's stay
                        <br />
                        <span className="italic text-neutral-400">
                            connected.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                        }}
                        className="
              max-w-md
              mt-10
              text-sm
              md:text-base
              leading-7
              text-neutral-500
            "
                    >
                        A little more of my world — photographs, inspiration,
                        moodboards, everyday moments and everything that catches
                        my eye.
                    </motion.p>
                </div>
            </div>

            {/* =====================================================
          SOCIAL CARDS
      ===================================================== */}

            <div
                className="
          relative
          max-w-6xl
          mx-auto
          px-6
          md:px-10
          pb-32
        "
            >
                <div
                    className="
            grid
            md:grid-cols-2
            gap-5
          "
                >
                    {/* =================================================
              INSTAGRAM
          ================================================= */}

                    <InstagramCard />

                    {/* =================================================
              PINTEREST
          ================================================= */}

                    <PinterestCard />
                </div>
            </div>

            {/* =====================================================
          DIVIDER
      ===================================================== */}

            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <div className="border-t border-black/10" />
            </div>

            {/* =====================================================
          CLOSING
      ===================================================== */}

            <div
                className="
          relative
          max-w-6xl
          mx-auto
          px-6
          md:px-10
          py-24
          md:py-32
        "
            >
                <p
                    className="
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-neutral-400
            mb-7
          "
                >
                    One more thing
                </p>

                <h2
                    className="
            font-editorial
            text-4xl
            md:text-6xl
            leading-[0.95]
            tracking-[-0.02em]
          "
                >
                    Thanks for being
                    <span className="italic text-neutral-400"> here.</span>
                </h2>

                <p
                    className="
            mt-6
            text-sm
            leading-7
            text-neutral-400
            max-w-md
          "
                >
                    The internet is a little more interesting when we share the
                    things that inspire us.
                </p>
            </div>
        </section>
    );
}

/* =========================================================
   INSTAGRAM CARD
========================================================= */

function InstagramCard() {
    return (
        <motion.a
            href="https://www.instagram.com/shahzain06_0/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
                y: -8,
            }}
            transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
            }}
            className="
        group
        relative
        overflow-hidden
        min-h-[390px]
        rounded-[36px]
        p-8
        md:p-10
        flex
        flex-col
        justify-between
        text-white
        shadow-[0_20px_70px_rgba(150,80,100,0.16)]
      "
        >
            {/* Instagram gradient */}

            <div
                className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#833ab4]
          via-[#fd1d1d]
          to-[#fcb045]
        "
            />

            {/* Soft light */}

            <div
                className="
          absolute
          -top-32
          -right-20
          w-[320px]
          h-[320px]
          rounded-full
          bg-white/20
          blur-[80px]
          group-hover:scale-125
          transition-transform
          duration-1000
        "
            />

            {/* Decorative circle */}

            <div
                className="
          absolute
          -bottom-32
          -left-24
          w-[300px]
          h-[300px]
          rounded-full
          border
          border-white/20
        "
            />

            {/* TOP */}

            <div className="relative flex items-center justify-between">
                <div
                    className="
            w-16
            h-16
            rounded-[20px]
            border
            border-white/30
            bg-white/15
            backdrop-blur-xl
            flex
            items-center
            justify-center
            shadow-lg
          "
                >
                    <BrandIcon icon={siInstagram} size={30} />
                </div>

                <div
                    className="
            w-11
            h-11
            rounded-full
            border
            border-white/30
            bg-white/10
            backdrop-blur-xl
            flex
            items-center
            justify-center
            group-hover:bg-white
            group-hover:text-[#833ab4]
            transition-all
            duration-300
          "
                >
                    <ArrowUpRight size={19} strokeWidth={1.5} />
                </div>
            </div>

            {/* INSTAGRAM LABEL */}

            <div className="relative">
                <p
                    className="
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-white/70
          "
                >
                    Follow the moments
                </p>

                <h2
                    className="
            font-editorial
            text-4xl
            md:text-5xl
            mt-3
          "
                >
                    @shahzain06_0
                </h2>

                <p
                    className="
            text-sm
            text-white/70
            mt-4
            max-w-xs
            leading-6
          "
                >
                    Photos, reels, outfits, little moments and everything
                    happening along the way.
                </p>

                {/* CTA */}

                <div
                    className="
            mt-7
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-white
            text-black
            text-[10px]
            uppercase
            tracking-[0.2em]
            font-medium
            group-hover:px-7
            transition-all
            duration-300
          "
                >
                    Open Instagram
                    <ArrowUpRight size={13} />
                </div>
            </div>
        </motion.a>
    );
}

/* =========================================================
   PINTEREST CARD
========================================================= */

function PinterestCard() {
    return (
        <motion.a
            href="https://in.pinterest.com/sahilhussain78621/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
                y: -8,
            }}
            transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
            }}
            className="
        group
        relative
        overflow-hidden
        min-h-[390px]
        rounded-[36px]
        bg-[#ffffff]
        border
        border-black/[0.07]
        p-8
        md:p-10
        flex
        flex-col
        justify-between
        shadow-[0_20px_70px_rgba(0,0,0,0.07)]
        transition-shadow
        duration-500
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.11)]
      "
        >
            {/* Pinterest decorative red shape */}

            <div
                className="
          absolute
          -top-28
          -right-28
          w-[330px]
          h-[330px]
          rounded-full
          bg-[#E60023]
          opacity-[0.07]
          group-hover:scale-125
          transition-transform
          duration-1000
        "
            />

            {/* Small red accent */}

            <div
                className="
          absolute
          bottom-0
          right-0
          w-32
          h-32
          bg-[#E60023]
          opacity-[0.05]
          rounded-tl-[100px]
        "
            />

            {/* TOP */}

            <div className="relative flex items-center justify-between">
                <div
                    className="
            w-16
            h-16
            rounded-[20px]
            bg-[#E60023]
            text-white
            flex
            items-center
            justify-center
            shadow-[0_10px_30px_rgba(230,0,35,0.22)]
            group-hover:scale-105
            transition-transform
            duration-300
          "
                >
                    <BrandIcon icon={siPinterest} size={30} />
                </div>

                <div
                    className="
            w-11
            h-11
            rounded-full
            border
            border-black/10
            flex
            items-center
            justify-center
            text-neutral-500
            group-hover:bg-[#E60023]
            group-hover:text-white
            group-hover:border-[#E60023]
            transition-all
            duration-300
          "
                >
                    <ArrowUpRight size={19} strokeWidth={1.5} />
                </div>
            </div>

            {/* PINTEREST CONTENT */}

            <div className="relative">
                <p
                    className="
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-neutral-400
          "
                >
                    Save something beautiful
                </p>

                <h2
                    className="
            font-editorial
            text-4xl
            md:text-5xl
            mt-3
            text-[#171717]
          "
                >
                    @sahilhussain78621
                </h2>

                <p
                    className="
            text-sm
            text-neutral-500
            mt-4
            max-w-xs
            leading-6
          "
                >
                    Moodboards, inspiration, fashion, places, ideas and things
                    worth saving.
                </p>

                {/* CTA */}

                <div
                    className="
            mt-7
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-[#171717]
            text-white
            text-[10px]
            uppercase
            tracking-[0.2em]
            font-medium
            group-hover:bg-[#E60023]
            group-hover:px-7
            transition-all
            duration-300
          "
                >
                    Open Pinterest
                    <ArrowUpRight size={13} />
                </div>
            </div>
        </motion.a>
    );
}
