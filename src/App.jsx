import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import MyWorld from "./pages/MyWorld";
import Moments from "./pages/Moments";
import Journal from "./pages/Journal";
import JournalStory from "./pages/JournalStory";
import Socials from "./pages/Socials";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <Home />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/about"
                        element={
                            <PageTransition>
                                <About />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/my-world"
                        element={
                            <PageTransition>
                                <MyWorld />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/moments"
                        element={
                            <PageTransition>
                                <Moments />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/journal"
                        element={
                            <PageTransition>
                                <Journal />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/journal/:slug"
                        element={
                            <PageTransition>
                                <JournalStory />
                            </PageTransition>
                        }
                    />

                    <Route
                        path="/socials"
                        element={
                            <PageTransition>
                                <Socials />
                            </PageTransition>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
