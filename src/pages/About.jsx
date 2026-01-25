import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
            <div className="max-w-3xl w-full text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">About Me</h2>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg shadow-lg">
                    <p className="text-lg text-gray-200 leading-relaxed mb-6">
                        I am a passionate developer and designer with a keen eye for detail.
                        My journey in technology started with a curiosity for how things work,
                        which evolved into a career building user-friendly applications and beautiful interfaces.
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                        When I'm not coding, you can find me exploring new design trends,
                        reading tech blogs, or working on personal creative projects.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
