import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] w-full px-20 py-0 text-white">
            <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between py-20">
                {/* Product Section */}
                <div className="flex flex-col space-y-2">
                <h3 className="font-semibold">Product</h3>
                <a href="#">Pricing</a>
                <a href="#">Overview</a>
                <a href="#">Browse</a>
                <a href="#">Accessibility</a>
                <a href="#">Five</a>
                </div>

                {/* Solutions Section */}
                <div className="flex flex-col space-y-2">
                <h3 className="font-semibold">Solutions</h3>
                <a href="#">Brainstorming</a>
                <a href="#">Ideation</a>
                <a href="#">Wireframing</a>
                <a href="#">Research</a>
                <a href="#">Design</a>
                </div>

                {/* Support Section */}
                <div className="flex flex-col space-y-2">
                <h3 className="font-semibold">Support</h3>
                <a href="#">Contact Us</a>
                <a href="#">Developers</a>
                <a href="#">Documentation</a>
                <a href="#">Integrations</a>
                <a href="#">Reports</a>
                </div>

                {/* Get the App Section */}
                <div className="flex flex-col space-y-4 ">
                <h3 className="font-semibold cursor-pointer">Get the App</h3>
                <div className="flex flex-col ">
                    <img src="/ButtonAppStore.png" alt="App Store" className="w-[200px] cursor-pointer" />
                    <img src="/ButtonPlayStore.png" alt="Google Play" className="w-[200px] cursor-pointer" />
                </div>
                <div className="mt-4">
                    <h4 className="font-semibold cursor-pointer">Follow Us</h4>
                    <div className="flex space-x-4 mt-2">
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="border-t border-gray-700 py-4 flex justify-between items-center">
                <span>Collers @ 2023. All rights reserved.</span>
                <div className="flex space-x-6 items-center">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Contact</a>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                <img src="/Vector.png"></img>
                <span>EN</span>
                </div>
            </div>
        </footer>

    );
};

export default Footer;