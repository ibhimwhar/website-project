import { House, MapPinHouse, Phone, UserRound } from "lucide-react"
import { Link } from "react-router"

const Footer = () => {

    const navLinks = [
        {
            _id: 1,
            name: 'Home',
            icon: <House size={20} />,
            href: "/"
        },
        {
            _id: 2,
            name: 'About Us',
            icon: <UserRound size={20} />,
            href: "/about-us"
        },
        {
            _id: 3,
            name: 'Property List',
            icon: <MapPinHouse size={20} />,
            href: "/properties"
        },
        {
            _id: 4,
            name: 'Contact Us',
            icon: <Phone size={20} />,
            href: "/contact-us"
        },
    ]
    return (
        <footer className="py-10 text-black space-y-10 bg-neutral-50">
            {/* Tagline */}
            <h1 className="px-4 text-neutral-500 font-semibold text-2xl md:text-4xl text-center md:text-left">
                <span className="text-black">Discover Nature's</span> Wonders with Expert Guidance
            </h1>

            {/* Navigation & Branding */}
            <div className="p-3 px-5 border-y border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-6">
                <ul className="flex flex-wrap justify-center md:justify-start gap-5 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            to={link.href}
                            key={link._id}
                            className="hover:underline underline-offset-4 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </ul>

                <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-right">
                    EverEstate
                </h1>
            </div>

            {/* Legal & Footer Info */}
            <div className="px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-3 text-neutral-500">
                <p>&copy; 2025 EverEstate. All rights reserved.</p>
                <p className="text-center md:text-right space-x-2">
                    <span className="hover:underline underline-offset-4 cursor-pointer">Terms & Conditions</span>
                    <span>|</span>
                    <span className="hover:underline underline-offset-4 cursor-pointer">Privacy Policy</span>
                </p>
            </div>
        </footer>

    )
}

export default Footer
