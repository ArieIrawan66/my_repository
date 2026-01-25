import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: "Project One",
            description: "A cool web application built with React.",
            image: "https://via.placeholder.com/400x300",
            link: "#"
        },
        {
            title: "Project Two",
            description: "Mobile-first responsive design project.",
            image: "https://via.placeholder.com/400x300",
            link: "#"
        },
        {
            title: "Project Three",
            description: "E-commerce dashboard with analytics.",
            image: "https://via.placeholder.com/400x300",
            link: "#"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">My Portfolio</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <a href={project.link} className="text-accent font-medium hover:text-orange-400 transition-colors">
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Portfolio;
