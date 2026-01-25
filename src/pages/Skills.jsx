import React from 'react';
import { motion } from 'framer-motion';
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobelightroom,
    SiFigma,
    SiCanva,
    SiDart
} from 'react-icons/si';
import { FaPython } from 'react-icons/fa';

const Skills = () => {
    const designTools = [
        { name: "Adobe Illustrator", icon: <SiAdobeillustrator />, color: "#FF9A00" },
        { name: "Adobe Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
        { name: "Adobe Lightroom", icon: <SiAdobelightroom />, color: "#31A8FF" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
        { name: "Canva", icon: <SiCanva />, color: "Teal" },
    ];

    const programmingLanguages = [
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Dart", icon: <SiDart />, color: "#0175C2" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center tracking-tight">
                My Skills
            </h2>

            <div className="w-full max-w-6xl flex flex-col gap-16">

                {/* Design Tools Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="w-full"
                >
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 border-l-4 border-accent pl-4 ml-2">
                        Design Tools
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {designTools.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4 cursor-default"
                            >
                                <div
                                    className="text-5xl transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>
                                <p className="text-lg font-medium text-white group-hover:text-accent transition-colors">
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Programming Languages Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="w-full"
                >
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 border-l-4 border-accent pl-4 ml-2">
                        Programming Languages
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {programmingLanguages.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4 cursor-default"
                            >
                                <div
                                    className="text-5xl transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>
                                <p className="text-lg font-medium text-white group-hover:text-accent transition-colors">
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Skills;
