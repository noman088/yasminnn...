import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

import { House, UserRound, Camera, Share2 } from "lucide-react";

/* NAVIGATION LINKS */
const navLinks = [
    {
        label: "Home",
        path: "/",
        icon: House,
    },
    {
        label: "About",
        path: "/about",
        icon: UserRound,
    },
    {
        label: "Moments",
        path: "/moments",
        icon: Camera,
    },
    {
        label: "Socials",
        path: "/socials",
        icon: Share2,
    },
];

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* =========================
          DESKTOP / TABLET NAVBAR
      ========================== */}
            <nav className="hidden sm:flex fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-auto max-w-[calc(100%-32px)]">
                <div
                    className="
            glass-dark
            rounded-full
            px-2
            py-2
            shadow-2xl
            overflow-hidden
          "
                >
                    <div className="flex items-center gap-1">
                        {navLinks.map((link) => (
                            <DesktopNavItem
                                key={link.path}
                                to={link.path}
                                label={link.label}
                                active={isActive(link.path)}
                            />
                        ))}
                    </div>
                </div>
            </nav>

            {/* =========================
          MOBILE NAVBAR
      ========================== */}
            <nav
                className="
          sm:hidden
          fixed
          bottom-4
          left-1/2
          -translate-x-1/2
          z-[100]
          w-[calc(100%-24px)]
          max-w-[430px]
        "
            >
                <div
                    className="
            relative
            rounded-[38px]
            p-[6px]
            bg-white/75
            backdrop-blur-[30px]
            backdrop-saturate-[180%]
            border
            border-white/80
            shadow-[0_15px_45px_rgba(0,0,0,0.14)]
          "
                >
                    <div className="grid grid-cols-4 items-center">
                        {navLinks.map((link) => (
                            <MobileNavItem
                                key={link.path}
                                to={link.path}
                                label={link.label}
                                icon={link.icon}
                                active={isActive(link.path)}
                            />
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}

/* =========================
   DESKTOP NAV ITEM
========================= */

function DesktopNavItem({ to, label, active }) {
    return (
        <Link
            to={to}
            className={`
        relative
        flex
        items-center
        justify-center
        px-4
        md:px-5
        py-2.5
        rounded-full
        text-sm
        whitespace-nowrap
        transition-colors
        duration-300
        ${active ? "text-black" : "text-white/70 hover:text-white"}
      `}
        >
            {active && (
                <motion.div
                    layoutId="desktop-active-pill"
                    className="
            absolute
            inset-0
            rounded-full
            bg-white
          "
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        mass: 0.8,
                    }}
                />
            )}

            <span className="relative z-10">{label}</span>
        </Link>
    );
}

/* =========================
   MOBILE NAV ITEM
========================= */

function MobileNavItem({ to, label, icon: Icon, active }) {
    return (
        <Link
            to={to}
            className="
        relative
        flex
        items-center
        justify-center
        w-full
      "
        >
            <motion.div
                className={`
          relative
          flex
          flex-col
          items-center
          justify-center
          w-full
          h-[64px]
          rounded-[31px]
          transition-colors
          duration-300
          ${active ? "text-white" : "text-[#333]"}
        `}
            >
                {active && (
                    <motion.div
                        layoutId="mobile-active-pill"
                        className="
              absolute
              inset-0
              rounded-[31px]
              bg-[#171717]
            "
                        transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                            mass: 0.8,
                        }}
                    />
                )}

                <div className="relative z-10 flex flex-col items-center">
                    <Icon size={23} strokeWidth={1.8} />

                    <span className="text-[11px] mt-1 font-medium">
                        {label}
                    </span>
                </div>
            </motion.div>
        </Link>
    );
}
