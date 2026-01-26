import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdSwipe } from 'react-icons/md';

// Dynamically import specific design images (d1-d9)
const designKeys = import.meta.glob('../assets/design/d*.{png,jpg,jpeg}', { eager: true });
const project1 = '../assets/programming/project1.jpg'; // Placeholder for programming

// Physics constants
const FRICTION = 0.95;
const VELOCITY_CUTOFF = 0.1;

const useMomentumScroll = () => {
    const ref = useRef(null);

    // Physics staterefs (using refs for performance/no-re-render in loop)
    const state = useRef({
        scrollLeft: 0,
        velocity: 0,
        rafId: null
    }).current;

    const stopMomentum = useCallback(() => {
        if (state.rafId) {
            cancelAnimationFrame(state.rafId);
            state.rafId = null;
        }
    }, [state]);

    const startMomentum = useCallback(() => {
        const step = () => {
            if (Math.abs(state.velocity) > VELOCITY_CUTOFF) {
                if (ref.current) {
                    ref.current.scrollLeft -= state.velocity;
                }
                state.velocity *= FRICTION;
                state.rafId = requestAnimationFrame(step);
            } else {
                state.velocity = 0;
            }
        };
        stopMomentum();
        state.rafId = requestAnimationFrame(step);
    }, [state, stopMomentum]);

    // Wheel Event (Horizontal Scroll)
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const onWheelNonPassive = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                // Inject momentum for smooth scrolling
                // deltaY > 0 (Scroll Down) -> velocity negative -> scrollLeft increases (View Right)
                state.velocity -= e.deltaY * 2.0;
                startMomentum();
            }
        };

        element.addEventListener('wheel', onWheelNonPassive, { passive: false });

        return () => {
            element.removeEventListener('wheel', onWheelNonPassive);
            stopMomentum();
        };
    }, [stopMomentum]);

    return {
        ref
    };
};

const Portfolio = () => {
    const [selectedId, setSelectedId] = useState(null);
    const designScroll = useMomentumScroll();
    const programmingScroll = useMomentumScroll();

    const designWorks = useMemo(() => {
        return Object.entries(designKeys)
            .map(([path, mod]) => {
                const fileName = path.split('/').pop().split('.')[0];
                const number = parseInt(fileName.replace('d', ''));
                return {
                    id: number,
                    image: mod.default,
                    title: `Design ${number}`
                };
            })
            .sort((a, b) => a.id - b.id);
    }, []);

    const programmingProjects = [
        {
            title: "Project One",
            description: "A cool web application built with React.",
            image: project1,
            link: "https://github.com"
        },
        {
            title: "Project Two",
            description: "Mobile-first responsive design project.",
            image: project1,
            link: "https://github.com"
        },
        {
            title: "Project Three",
            description: "E-commerce dashboard with analytics.",
            image: project1,
            link: "https://github.com"
        },
        {
            title: "Project Four",
            description: "Real-time chat application.",
            image: project1,
            link: "https://github.com"
        }
    ];

    const sectionVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    // Lightbox Navigation
    const handleNext = (e) => {
        e.stopPropagation();
        const currentIndex = designWorks.findIndex(w => w.id === selectedId);
        if (currentIndex < designWorks.length - 1) {
            setSelectedId(designWorks[currentIndex + 1].id);
        }
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        const currentIndex = designWorks.findIndex(w => w.id === selectedId);
        if (currentIndex > 0) {
            setSelectedId(designWorks[currentIndex - 1].id);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedId) return;
            if (e.key === 'Escape') setSelectedId(null);
            if (e.key === 'ArrowRight') handleNext(e);
            if (e.key === 'ArrowLeft') handlePrev(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedId, designWorks]);

    // Handle Image Click
    const handleImageClick = (id) => {
        setSelectedId(id);
    };

    const selectedImage = designWorks.find(w => w.id === selectedId);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col gap-16"
        >
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center tracking-tight">
                    My Portfolio
                </h2>

                {/* Design Section */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex justify-between items-end mb-8 border-l-4 border-accent pl-4">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                            Design Portfolio
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span className="animate-pulse">Scroll to see more</span>
                            <MdSwipe className="rotate-90" />
                        </div>
                    </div>

                    <div
                        ref={designScroll.ref}
                        className="flex overflow-x-auto gap-6 pb-2 snap-x no-scrollbar"
                    >
                        {designWorks.map((work) => (
                            <motion.div
                                key={work.id}
                                whileHover={{ scale: 1.02 }}
                                className="flex-none w-[300px] md:w-[400px] snap-center cursor-pointer"
                                onClick={() => handleImageClick(work.id)}
                            >
                                <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/10 select-none">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        draggable="false"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-xl font-bold text-white">{work.title}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Programming Section */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="flex justify-between items-end mb-8 border-l-4 border-accent pl-4">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                            Programming Projects
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span className="animate-pulse">Scroll to see more</span>
                            <MdSwipe className="rotate-90" />
                        </div>
                    </div>

                    <div
                        ref={programmingScroll.ref}
                        className="flex overflow-x-auto gap-6 pb-2 snap-x no-scrollbar"
                    >
                        {programmingProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="flex-none w-[300px] md:w-[400px] snap-center flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg select-none"
                            >
                                <div className="h-48 overflow-hidden pointer-events-none">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        draggable="false"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-accent font-medium hover:text-orange-400 transition-colors mt-auto w-fit"
                                    >
                                        <FaGithub size={20} />
                                        <span>View Project</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedId && selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setSelectedId(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-50"
                            onClick={() => setSelectedId(null)}
                        >
                            <FaTimes size={32} />
                        </button>

                        <div
                            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Prev Button */}
                            {designWorks.findIndex(w => w.id === selectedId) > 0 && (
                                <button
                                    className="absolute left-2 md:-left-12 p-2 bg-black/50 text-white rounded-full hover:bg-accent transition-colors z-50 md:bg-transparent md:hover:bg-transparent md:hover:text-accent"
                                    onClick={handlePrev}
                                >
                                    <FaChevronLeft size={40} />
                                </button>
                            )}

                            <motion.img
                                key={selectedId}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />

                            {/* Next Button */}
                            {designWorks.findIndex(w => w.id === selectedId) < designWorks.length - 1 && (
                                <button
                                    className="absolute right-2 md:-right-12 p-2 bg-black/50 text-white rounded-full hover:bg-accent transition-colors z-50 md:bg-transparent md:hover:bg-transparent md:hover:text-accent"
                                    onClick={handleNext}
                                >
                                    <FaChevronRight size={40} />
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Portfolio;
