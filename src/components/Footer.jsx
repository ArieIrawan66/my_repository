import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">© {new Date().getFullYear()} Arie Irawan. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="mailto:aarieirawan04@gmail.com" className="text-gray-700 hover:text-black transition-colors">
                            aarieirawan04@gmail.com
                        </a>
                        {/* Add more social links here if provided later */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
