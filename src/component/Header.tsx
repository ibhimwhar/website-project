import { Globe, House, MapPinHouse, Menu, Phone, UserRound } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router"

const Header = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    const [scroll, setscroll] = useState<boolean>(false)

    let navLocation = useLocation()

    const Pathname = navLocation.pathname

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

    useEffect(() => {

        const HandleScroll = () => {

            if (window.scrollY > 260) {
                setscroll(true)
            } else {
                setscroll(false)
            }
        }

        document.addEventListener("scroll", HandleScroll)

        return () => document.removeEventListener("scroll", HandleScroll)
    }, [])

    return (
        <header
            className={`p-3 transition-all duration-300 ease-in-out transform ${scroll
                ? 'fixed top-0 z-50 w-full translate-y-5'
                : 'translate-y-0'
                } flex justify-between items-center`}
        >

            <h1 className={`${scroll ? ' bg-black/50 backdrop-blur-xs text-xl p-2 px-5 rounded-full' : 'text-2xl md:text-4xl'}`}>EverEstate</h1>

            <nav className="p-2 hidden md:block rounded-full bg-black/50 backdrop-blur-xs">

                <ul className="hidden lg:flex gap-5">
                    {navLinks.map((list) => (
                        <NavLink
                            key={list._id}
                            to={list.href}
                            className={`p-1 px-3 rounded-full ${Pathname === list.href ? 'bg-white text-black' : 'hover:bg-white/5 transition-all'}`}
                        >
                            {list.name}
                        </NavLink>
                    ))}
                </ul>

                <ul className="hidden md:flex lg:hidden gap-5">
                    {navLinks.map((list) => (
                        <NavLink
                            key={list._id}
                            to={list.href}
                            className={`p-1 px-4 rounded-full ${Pathname === list.href ? 'bg-white text-black' : null}`}
                        >
                            {list.icon}
                        </NavLink>
                    ))}
                </ul>

            </nav>

            {/* Buttons Section */}
            <div className="flex gap-4 items-center">
                <div ref={dropdownRef}>
                    <button onClick={() => setOpen(!open)} className={`${scroll ? 'bg-black/50 backdrop-blur-xs p-2 rounded-full' : ''} md:hidden`}>
                        <Menu />
                    </button>

                    {/* Example dropdown that appears when open */}
                    {open && (
                        <div className="absolute mt-2 right-4 bg-white text-black rounded shadow p-2">
                            {/* Dropdown content here */}
                            {navLinks.map((list) => (
                                <NavLink
                                    key={list._id}
                                    to={list.href}
                                    className="block p-2 hover:bg-neutral-100 rounded"
                                >
                                    {list.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>

                <button className={`${scroll ? 'bg-black/50 backdrop-blur-xs p-2 px-3 rounded-full' : ''} cursor-pointer hidden md:flex items-center gap-2`}>
                    <Globe />
                    Eng
                </button>

                <button className="bg-green-400 text-white text-sm p-2 px-3 cursor-pointer rounded-full">
                    Sign Up
                </button>
            </div>

        </header>
    )
}

export default Header
