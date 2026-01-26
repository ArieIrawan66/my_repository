import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: 'home' },
        { name: 'Skills', path: 'skills' },
        { name: 'Portfolio', path: 'portfolio' },
        { name: 'About Me', path: 'about' },
    ];

    // Always transparent styles
    const navClasses = "fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-300";

    // Always white text styles since we have a dark background everywhere
    const textClasses = "text-white";
    const linkDefaultClasses = "text-gray-200 hover:text-white cursor-pointer";
    const activeLinkClasses = "text-accent";

    return (
        <nav className={navClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            to="home"
                            smooth={true}
                            duration={1200}
                            className={`text-xl font-bold ${textClasses} cursor-pointer`}
                        >
                            Arie Irawan
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                smooth={true}
                                duration={1200}
                                spy={true}
                                activeClass="text-accent"
                                className={linkDefaultClasses}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={1200}
                            className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-white text-gray-900 hover:bg-gray-100 cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-200 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md shadow-lg rounded-b-lg border-t border-white/10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                smooth={true}
                                duration={1200}
                                spy={true}
                                activeClass="text-accent bg-white/10"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    {/* Mobile Contact Me Button */}
                    <div className="px-5 pb-4">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={1200}
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center px-4 py-3 rounded-md text-base font-medium bg-white text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
