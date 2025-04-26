import Header from "../component/Header";
import Image from '../assets/0_noaucfMoidzph82C.jpg';
import { ChevronDown, CircleChevronLeft, CircleChevronRight, MoveLeft, MoveRight, Play, X } from "lucide-react";
import { Products } from "../data/Products";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "../component/Footer";
import Vid from '../assets/original-8b359147335bb5b21308eca998d4f7d5.mp4'


const Home = () => {

    const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);


    const filterOptions = [
        { name: 'City' },
        { name: 'House' },
        { name: 'Residential' },
        { name: 'Apartment' },
    ];

    const [activeFilter, setActiveFilter] = useState('All');


    const orderDetails = [
        {
            details: 'Satisfactions Clients',
            percentage: `${100}%`
        },

        {
            details: 'Property sells',
            percentage: `${500}+`
        },
        {
            details: 'Countries & Cities',
            percentage: `${150}+`
        },

        {
            details: 'Positive reviews',
            percentage: `${200}+`
        },
    ]

    const HandleOpenAccordion = (index: number) => {
        setOpenAccordionIndex(prevIndex => (prevIndex === index ? null : index));
    };


    const accordion = [
        {
            title: 'What types of properties do you sell?',
            description:
                "We specialize in residential, commercial, and luxury properties, offering a wide range of options to suit every buyer's needs. Whether you're looking for a family home, an investment property, or a luxury estate, we have something for you.",
            image: Image
        },
        {
            title: 'How do I know if a property is a good investment?',
            description:
                "Our team provides market analysis, historical data, and growth potential to help you evaluate property investments. We consider location trends, rental yield, and future developments to guide your decision.",
            image: null
        },
        {
            title: 'Do I need to hire a real estate agent?',
            description:
                "While not mandatory, working with an experienced agent offers many benefits, including access to exclusive listings, expert negotiation, and a smoother transaction process.",
            image: null
        },
        {
            title: "What's the process for buying a property?",
            description:
                "The buying process includes property search, financial pre-approval, home viewings, making an offer, inspections, and closing the deal. We guide you through every step to ensure a smooth experience.",
            image: Image
        },
        {
            title: 'Can I tour a property before purchasing?',
            description:
                "Absolutely. We offer private and virtual tours to ensure you feel confident and informed about your purchase decision. Scheduling is flexible to suit your availability.",
            image: null
        },
        {
            title: 'What financing options are available?',
            description:
                "We connect buyers with reputable lenders offering competitive mortgage rates and flexible loan terms. Our team helps you understand the financing options best suited to your needs.",
            image: Image
        },
        {
            title: 'Do you offer properties in different countries?',
            description:
                "Yes, we have listings across multiple countries and cities, each carefully selected for investment potential, lifestyle, and value. Our global reach ensures more choices for you.",
            image: null
        },
        {
            title: 'Can I sell my property through your platform?',
            description:
                "Definitely. We help sellers market their properties to the right buyers using high-quality visuals, property listings, and professional negotiation support.",
            image: Image
        }
    ];

    const testimonials = [
        {
            image: Image,
            quote: `Working with this team was a pleasure. They understood our vision and helped us find a property that exceeded our expectations.`,
            name: 'Sajibur Rahman',
            role: 'UI UX designer',
        },
        {
            image: Image,
            quote: `From start to finish, the experience was smooth and professional. Highly recommend!`,
            name: 'Fatima Ahmed',
            role: 'Architect',
        },
        {
            image: Image,
            quote: `Their market insight is unmatched. We landed an amazing deal thanks to them.`,
            name: 'Omar Malik',
            role: 'Investor',
        },
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));


    const [formData, setFormData] = useState({
        type: '',
        price: '',
        location: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { placeholder, value } = e.target;
        const key = placeholder.toLowerCase(); // matches 'type', 'price', 'location'
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const searchData = {
            ...formData,
            filter: activeFilter,
        };
        console.log('Searching with:', searchData);
        // You can now send searchData to backend or use to filter frontend results
    };

    const [openVid, setOpenVid] = useState(false)

    if (openVid) {
        return (
            <div className="w-full h-screen">
                <button
                    className="fixed z-50 top-5 right-5 bg-black/50 text-white backdrop-blur-xs p-2 cursor-pointer rounded-full"
                    onClick={() => setOpenVid(false)}
                >
                    <X />
                </button>
                <video
                    src={Vid}
                    loop
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />
            </div>
        );
    }

    return (
        <div className="relative h-[100vh] text-white">
            {/* Background Image */}
            <img
                src={Image}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20">

                <Header />

                <div className="px-4 py-8 pt-20 md:pt-50 md:px-10 lg:px-20 max-w-4xl lg:max-w-7xl mx-auto">

                    <div className="md:flex gap-5 md:gap-0 items-end">

                        <div className="grid gap-5">
                            <div className="py-2 flex gap-2 md:gap-5 text-sm">
                                <button className="p-1 px-4 rounded-full bg-white text-black">House</button>
                                <button className="p-1 px-4 rounded-full bg-white text-black">Apartment</button>
                                <button className="p-1 px-4 rounded-full bg-white text-black">Recidential</button>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6">Build Your Future, One Property at a TIme.</h1>
                        </div>

                        <p className="text-sm md:text-base leading-relaxed w-fit h-fit">
                            Own Your World. One Property at a Time. Own Your World. One Property at a Time. Own Your World. One Property at a Time. Own Your World. One Property at a Time.
                        </p>
                    </div>

                    <form onSubmit={handleSearch} className="bg-white text-black border-2 border-neutral-100 p-5 mt-5 md:mt-20 rounded-lg">
                        <h1 className="text-2xl md:text-3xl font-bold mb-3">Find the best place</h1>

                        {/* Inputs */}
                        <div className="grid md:flex gap-5">
                            {[
                                { label: 'Looking for', placeholder: 'Type' },
                                { label: 'Price', placeholder: 'Price' },
                                { label: 'Locations', placeholder: 'Location' }
                            ].map((field, idx) => (
                                <div key={idx} className="grid gap-2 w-full">
                                    <h3 className="text-sm">{field.label}</h3>
                                    <input
                                        type="text"
                                        placeholder={field.placeholder}
                                        value={(formData as any)[field.placeholder.toLowerCase()]}
                                        onChange={handleInputChange}
                                        className="bg-neutral-100 p-2 rounded-lg outline-none focus:ring ring-green-400"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Filters and Search Button */}
                        <div className="mt-5 md:flex justify-between items-center">
                            {/* Filter List */}
                            <div className="flex items-center gap-2 mb-10 md:mb-0">
                                <h3 className="text-sm">Filter:</h3>
                                <ul className="flex items-center py-3 md:py-0 gap-2 overflow-x-scroll md:overflow-x-hidden">
                                    {filterOptions.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => setActiveFilter(item.name)}
                                            className={`list-none text-sm cursor-pointer border p-2 px-5 rounded-full transition-all
                                                    ${activeFilter === item.name
                                                    ? 'bg-green-400 text-white border-green-400'
                                                    : 'text-neutral-500 border-neutral-100 hover:bg-neutral-100'
                                                }`}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Search Button */}
                            <button
                                type="submit"
                                className="bg-black text-white text-sm p-2 px-5 w-full md:w-fit rounded-full cursor-pointer"
                            >
                                Search Properties
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            <section className="bg-white text-black p-5 py-10">

                <div className="grid md:flex justify-between items-center">

                    <h1 className="text-2xl md:text-3xl font-bold">Your Primary home might begin to fell left out.</h1>

                    <div className="md:w-[400px] w-full flex gap-2 justify-between items-center py-10">

                        <div onClick={() => setOpenVid(true)} className="relative overflow-hidden cursor-pointer rounded-full w-40 h-15 flex justify-center items-center">
                            <img
                                src={Image}
                                alt="Background"
                                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                            />


                            <button className="absolute  bg-white text-black p-2 rounded-full">
                                <Play size={15} />
                            </button>

                        </div>
                        <p className="text-sm text-balance">Each listing offers unique features, exceptional quality, and prime locations.</p>

                    </div>

                </div>

                <div className="gap-5 grid md:flex">
                    {/* item 1 */}
                    <div className="relative h-fit">
                        <img src={Image} className=" lg:w-[70vh] rounded-2xl" />

                        <div className="absolute bottom-0 w-full flex justify-end p-2">
                            <div className="bg-white flex gap-2 p-1 rounded-full">
                                <img src={Image} className="w-7 h-7 rounded-full ring ring-neutral-100 p-1" />
                                <img src={Image} className="w-7 h-7 rounded-full" />
                                <img src={Image} className="w-7 h-7 rounded-full" />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        <div className="lg:flex grid justify-center gap-5">
                            {/* item 2 */}
                            <div className="bg-neutral-100 p-5 rounded-2xl space-y-5 lg:w-[40vh]">
                                <h2 className="font-semibold text-2xl">Big things can happen in small spaces.</h2>
                                <p>With throughful design and smart organization, you can maximize every inch, making room for creativity</p>
                                <button className="bg-white p-2 px-5 rounded-full border border-neutral-500">Details</button>
                            </div>

                            {/* item 3 */}
                            <div className="bg-neutral-100 p-2 rounded-2xl  flex flex-col gap-5 justify-center items-center">
                                <img src={Image} className="lg:w-[50vh] rounded-2xl" />
                                <p>Pricing Start at $256K</p>
                                <button className=" bg-black text-white p-3 text-sm rounded-full flex items-center gap-2">
                                    Explore Properties
                                    <MoveRight />
                                </button>
                            </div>
                        </div>

                        <div className="md:flex space-y-5 md:space-y-0 justify-between items-center">
                            <p className="md:w-[60vh]">Weather it's creating a cozy corner for relaxation or transforming a small area into a workspace</p>
                            <div className="flex gap-5">
                                <button className="p-1 rounded-full text-neutral-500 border border-neutral-100"><MoveLeft /></button>
                                <button className="p-1 rounded-full border"><MoveRight /></button>
                            </div>
                        </div>

                    </div>



                </div>

                <div className="p-5 my-20 gap-10 md:gap-0 flex flex-col md:flex-row ">
                    {orderDetails.map((orders, index) => (
                        <div key={index} className={`w-full md:px-3 md:text-center ${index === 3 ? null : 'border-b border-neutral-500 md:border-r md:border-b-0'}`}>
                            <h3 className="text-6xl">{orders.percentage}</h3>
                            <p>{orders.details}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-neutral-100 p-5 rounded-2xl md:flex items-center gap-10 space-y-5">

                    <img src={Image} className="md:w-[70vh] rounded-2xl" />

                    <div className="space-y-5">
                        <h2 className="text-xl font-semibold">Discover Properties with the Best Value</h2>
                        <p>From minimalist interiors to compact solutions, small spacs inspire big ideas, proving that you don't nedd much room.</p>
                        <button className=" bg-black text-white p-3 text-sm rounded-full flex items-center gap-2">
                            Find Nearest Properties
                            <MoveRight />
                        </button>
                    </div>

                </div>

            </section>

            <section className="bg-white text-black">
                <div className="p-5 space-y-5">
                    <h1 className="text-4xl md:text-5xl font-semibold">Explore our premier houses</h1>
                    <div className="md:flex justify-between space-y-5 md:space-y-0 items-center">
                        <p>Each listing offers unique features, exceptional quality, and prime locations, ensuring an exclusiv living experience.</p>
                        <button className=" bg-black text-white p-3 text-sm rounded-full flex items-center gap-2">
                            See All Properties
                            <MoveRight />
                        </button>
                    </div>

                    {/* Products */}
                    <div className="gap-[70px] md:gap-5 grid md:grid-cols-3 lg:grid-cols-4 justify-between">
                        {Products.map((items) => (
                            <div key={items._id} className="relative grid gap-3">

                                {items.active ?
                                    <h3 className="bg-white text-black absolute top-2 left-2 rounded-full text-[12px] p-1 px-2">For Sale</h3>
                                    :
                                    null
                                }

                                <img src={items.img} className="rounded-2xl" />

                                <div className="flex justify-center gap-3 text-sm w-fit">
                                    <li className="list-none text-right">{items.features[0].label}</li>
                                    <li className="list-disc">{items.features[1].label}</li>
                                </div>

                                <h1 className="text-xl md:text-2xl font-semibold">{items.description}</h1>

                                <div className="flex items-center gap-3">
                                    <p className="font-semibold text-sm">${items.price.toFixed(2)}</p>
                                    <li className="list-disc text-[12px]">{items.location}</li>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="md:flex py-10">
                        <h1 className="text-3xl md:text-4xl w-full font-semibold">Frequently asked questions</h1>
                        <p className="text-sm">Our experts guide you in making informed investment decisions based on market insights. We offer residentail, commercial, and luxury properties tailored to different preferences and budgets.</p>
                    </div>

                    {accordion.map((items, index) => (
                        <div onClick={() => HandleOpenAccordion(index)} key={index} className="border grid gap-5 border-neutral-100 p-2 md:p-4 rounded-2xl">
                            <div className="flex justify-between items-center">
                                <h1 className="md:text-2xl font-semibold">{items.title}</h1>
                                <button className={`cursor-pointer transition-transform ${openAccordionIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                    <ChevronDown />
                                </button>
                            </div>

                            <div className={`grid md:flex gap-5 overflow-hidden transition-all duration-500 ease-in-out ${openAccordionIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-sm">
                                    We specialize in residential, commercial, and luxury properties, offering a wide range of options to suit every buyer's needs and preferences. We connect you with trusted lenders offering competitive mortgage options and financial advice. We arrange private showings for you to visit and evaluate properties before making a decision. Properties range across different price points, catering to various budgets and investment goals.
                                </p>
                                {items.image && <img src={items.image} className="w-40 rounded-2xl" />}
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            <section className="bg-white text-black">
                <div className="p-5 space-y-5">
                    <div className="grid gap-5 md:gap-0 md:flex justify-between items-center">
                        <h1 className="text-2xl md:text-3xl font-bold">What our clients say about us</h1>
                        <div>
                            <div className="flex -space-x-3">
                                <img src={Image} className="rounded-full w-10 h-10 border-2 border-white" />
                                <img src={Image} className="rounded-full w-10 h-10 border-2 border-white" />
                                <img src={Image} className="rounded-full w-10 h-10 border-2 border-white" />
                                <img src={Image} className="rounded-full w-10 h-10 border-2 border-white" />
                            </div>
                            <h4>More than <span className="font-semibold">500+</span> Client Reviews</h4>
                        </div>
                    </div>

                    <div className="relative w-full md:p-5">
                        <div className="flex items-center gap-5 justify-center">
                            <button onClick={prevSlide} className="hidden md:block text-neutral-500 cursor-pointer">
                                <CircleChevronLeft size={35} />
                            </button>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="grid gap-10 md:flex items-center"
                                >
                                    <img
                                        src={testimonials[current].image}
                                        className="md:w-80 rounded-2xl object-cover"
                                        alt="testimonial"
                                    />

                                    <div className="rounded-2xl bg-neutral-100 p-5 space-y-2 max-w-xl">
                                        <h2 className="text-xl lg:text-2xl font-semibold mb-6">
                                            <span className="font-bold text-green-400 text-5xl">"</span>
                                            {testimonials[current].quote}
                                        </h2>
                                        <h1 className="font-semibold">{testimonials[current].name}</h1>
                                        <p className="text-sm">{testimonials[current].role}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <button onClick={nextSlide} className="hidden md:block text-neutral-500 cursor-pointer">
                                <CircleChevronRight size={35} />
                            </button>
                        </div>

                        <div className="flex justify-center mt-5">
                            {testimonials.map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-2 rounded-full mx-1 transition-all duration-300 ${current === i ? 'bg-green-400 w-6' : 'bg-neutral-300 w-2'
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="md:hidden text-center space-x-10 mt-5">
                            <button onClick={prevSlide} className="text-neutral-400">
                                <CircleChevronLeft size={35} />
                            </button>
                            <button onClick={nextSlide} className="text-neutral-400">
                                <CircleChevronRight size={35} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative h-[50vh] w-full flex justify-center items-center text-white overflow-hidden">
                    {/* Background Image */}
                    <img
                        src={Image}
                        alt="Background"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

                    {/* Content */}
                    <div className="relative z-20 flex flex-col items-center text-center gap-5 px-4">
                        <h1 className="font-semibold text-3xl md:text-4xl max-w-xl">
                            Ready to Make Your Dream Property a Reality?
                        </h1>
                        <p className="text-sm md:text-base max-w-md">
                            Explore a curated selection of properties that align with your vision and goals.
                        </p>
                        <button className="bg-white text-black cursor-pointer px-6 py-3 text-sm md:text-base rounded-full flex items-center gap-2 hover:bg-neutral-200 transition">
                            Get Started
                            <MoveRight />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default Home;
