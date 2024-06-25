import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fdfbf7] py-8">
      <div className="container mx-auto px-4 flex flex-col gap-8 md:flex-row justify-between items-center">
        <div className="text-gray-600 text-sm md:text-base">
          © {new Date().getFullYear()} Puriear. All rights reserved.
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <a
            href="#"
            className="hover:text-[#d4840b] transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-[#d4840b] transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-[#d4840b] transition-colors duration-300"
          >
            Support
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            className="text-gray-600 hover:text-[#d4840b] transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-600 hover:text-[#d4840b] transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-600 hover:text-[#d4840b] transition-colors duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
