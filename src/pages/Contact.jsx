import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
        >
            <div className="max-w-3xl w-full text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Contact Me</h2>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg shadow-lg">
                    <p className="text-lg text-gray-200 mb-8">
                        Feel free to reach out to me via any of the platforms below:
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a
                            href="mailto:aarieirawan04@gmail.com"
                            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 hover:bg-white/20 transition-all group w-40"
                        >
                            <MdEmail className="text-4xl text-white group-hover:text-accent transition-colors" />
                            <span className="text-white text-sm font-medium">Email</span>
                        </a>

                        <a
                            href="https://wa.me/6281534086508"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 hover:bg-white/20 transition-all group w-40"
                        >
                            <FaWhatsapp className="text-4xl text-white group-hover:text-green-500 transition-colors" />
                            <span className="text-white text-sm font-medium">WhatsApp</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/arie-irawan-40782621b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 hover:bg-white/20 transition-all group w-40"
                        >
                            <FaLinkedin className="text-4xl text-white group-hover:text-blue-500 transition-colors" />
                            <span className="text-white text-sm font-medium">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
