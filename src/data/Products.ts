import Image from '../assets/0_noaucfMoidzph82C.jpg';


type Feature = {
    label: string;
};

type Product = {
    _id: number;
    description: string;
    img: string;
    price: number;
    location: string;
    features: Feature[];
    active: boolean;
};


export const Products: Product[] = [
    {
        _id: 1,
        description: 'The Pinnacle at Highland Park',
        img: Image
        , price: 356798,
        location: '123 Maple Street, New York',
        features: [
            {
                label: '5 Bedrooms'
            },
            {
                label: '2 Bathrooms'
            },
        ],
        active: true,
    },

    {
        _id: 2,
        description: 'The Pinnacle at Highland Park',
        img: Image
        , price: 356798,
        location: '123 Maple Street, New York',
        features: [
            {
                label: '5 Bedrooms'
            },
            {
                label: '2 Bathrooms'
            },
        ],
        active: false,
    },

    {
        _id: 3,
        description: 'The Pinnacle at Highland Park',
        img: Image
        , price: 356798,
        location: '123 Maple Street, New York',
        features: [
            {
                label: '5 Bedrooms'
            },
            {
                label: '2 Bathrooms'
            },
        ],
        active: true,
    },
    {
        _id: 4,
        description: 'The Pinnacle at Highland Park',
        img: Image
        , price: 356798,
        location: '123 Maple Street, New York',
        features: [
            {
                label: '5 Bedrooms'
            },
            {
                label: '2 Bathrooms'
            },
        ],
        active: false,
    },
    {
        _id: 5,
        description: 'The Pinnacle at Highland Park',
        img: Image
        , price: 356798,
        location: '123 Maple Street, New York',
        features: [
            {
                label: '5 Bedrooms'
            },
            {
                label: '2 Bathrooms'
            },
        ],
        active: true,
    },
];
