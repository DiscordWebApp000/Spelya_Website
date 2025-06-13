"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowUp } from "react-icons/fa";

const Animatedbar = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="relative border border-red-600 overflow-hidden rounded-3xl min-h-[300px] md:min-h-[400px] w-[96%] mx-auto">
            {/* Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute inset-0 h-full w-full" // Tam ekran kaplama
                options={{
                    background: {
                        color: {
                            value: "#FC7700",
                        },
                    },
                    fullScreen: false,
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center px-6 z-10 text-white text-2xl">
                <div className="flex flex-col gap-6 w-full md:w-2/3 lg:w-1/2">
                    {/* Başlık */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center md:text-left">
                        Discover, Create and Sell Your Own NFT
                    </h1>
                    {/* Butonlar */}
                    <div className="flex flex-col md:flex-row gap-4 text-lg">
                        <button className="bg-white flex-1 text-center text-primary py-4 px-6 rounded-xl hover:bg-[#FCECDD] hover:text-black duration-200">
                            Explore Now <FaArrowUp className="text-lg rotate-45 inline-block" />
                        </button>
                        <button className="bg-white flex-1 text-center text-primary py-4 px-6 rounded-xl hover:bg-[#FCECDD] hover:text-black duration-200">
                            Create Your First NFT <FaArrowUp className="text-lg rotate-45 inline-block" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Animatedbar;
