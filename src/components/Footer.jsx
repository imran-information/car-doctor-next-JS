import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../../public/assets/logo-re.png';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#151515] pt-12 pb-3 sm:pt-20 ">
            <div className="container mx-auto p-5 xl:p-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8  justify-items-center lg:justify-items-end">
                    <div className="text-center lg:text-left">
                        <Image className='mx-auto lg:m-0' alt="Footer img" width={120} src={logo} />
                        <p className="text-[#E8E8E8] text-sm mb-4">
                            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial entrepreneur.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex justify-center lg:justify-start space-x-6 mt-5">
                            <a href="#" className="text-white text-xl"><FaFacebook /></a>
                            <a href="#" className="text-white text-xl"><FaTwitter /></a>
                            <a href="#" className="text-white text-xl"><FaLinkedin /></a>
                            <a href="#" className="text-white text-xl"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-semibold mb-4">About</h3>
                        <ul className="text-[#F3F3F3] space-y-2">
                            <li><Link href="/" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Home</Link></li>
                            <li><Link href="/services" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Services</Link></li>
                            <li><Link href="/products" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Products</Link></li>
                            <li><Link href="/contact" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-semibold mb-4">Company</h3>
                        <ul className="text-[#F3F3F3] space-y-2">
                            <li><a href="/about" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">About Us</a></li>
                            <li><a href="#" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Careers</a></li>
                            <li><a href="#" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-semibold mb-4">Support</h3>
                        <ul className="text-[#F3F3F3] space-y-2">
                            <li><a href="#" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Help Center</a></li>
                            <li><a href="#" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Contact Us</a></li>
                            <li><a href="#" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">FAQ</a></li>
                            <li><a href="#" className="text-sm relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FF3811] after:transition-all after:duration-500 after:ease-in-out hover:text-[#FF3811] hover:after:w-full">Feedback</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-[#F3F3F3] text-sm mt-8">
                <p>&copy; 2025 Car Doctor. All rights reserved.</p>
            </div>
        </footer>
    );
}
