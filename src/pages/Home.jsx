import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center md:justify-start"
        >
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 md:ml-10 lg:ml-20">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Hello, I'm <span className="text-accent">Arie Irawan</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                    Graphic Design & Programming Enthusiast
                </p>
                <p className="text-gray-300 mb-10 max-w-lg">
                    Passionate about visual design, UI/UX, and software development.
                    Creating clean code and meaningful designs.
                </p>
                <div className="flex gap-4">
                    <Link
                        to="portfolio"
                        smooth={true}
                        duration={1200}
                        className="bg-accent text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors shadow-lg cursor-pointer"
                    >
                        View Portfolio
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={1200}
                        className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors cursor-pointer"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
