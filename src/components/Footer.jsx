import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#171717] text-[#f5f3ef]">
            <div className="px-6 md:px-16 py-24">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-6">
                        <h2 className="font-editorial text-6xl md:text-8xl">
                            Yasmin.
                        </h2>

                        <p className="mt-6 max-w-sm text-sm text-white/50 leading-7">
                            A little world of photographs, fashion, moments and
                            things I love.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
                            Explore
                        </p>

                        <div className="flex flex-col gap-3 text-sm">
                            <Link to="/about">About</Link>
                            <Link to="/my-world">My World</Link>
                            <Link to="/moments">Moments</Link>
                            <Link to="/journal">Journal</Link>
                            <Link to="/socials">Socials</Link>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6">
                            Find me
                        </p>

                        <div className="flex flex-col gap-3 text-sm">
                            <a
                                target="_blank"
                                href="https://www.instagram.com/shahzain06_0/"
                            >
                                Instagram ↗
                            </a>
                            <a
                                target="_blank"
                                href="https://in.pinterest.com/sahilhussain78621/"
                            >
                                Pinterest ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="
        border-t border-white/10
        px-6 md:px-16 py-6
        flex justify-between
        text-[10px] uppercase
        tracking-[0.15em]
        text-white/40
      "
            >
                <span>© {new Date().getFullYear()} All Rights are reserved to  Yasmin</span>

                <span>Made with intention</span>
            </div>
        </footer>
    );
}
