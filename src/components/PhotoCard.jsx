// src/components/PhotoCard.jsx

import { motion } from "motion/react";

export default function PhotoCard({ photo, onClick }) {
    return (
        <motion.article
            className="group cursor-pointer"
            onClick={onClick}
            whileHover={{ y: -2 }}
            transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {/* IMAGE FRAME */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-200">
                <motion.img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
                />
            </div>

            {/* PHOTO INFORMATION */}
            <div className="mt-2">
                <p className="text-[8px] uppercase tracking-[0.18em] text-neutral-400">
                    {photo.category}
                </p>

                <p className="font-editorial text-sm leading-tight text-[#171717]">
                    {photo.title}
                </p>
            </div>
        </motion.article>
    );
}
