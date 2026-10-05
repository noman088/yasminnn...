import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-[#f5f3ef] text-[#171717]">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
