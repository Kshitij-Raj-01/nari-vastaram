export const colou = [
    "White",
    "Black",
    "Red",
    "Maroon",
    "Pink",
    "Yellow",
    "Green"
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            {value: "white", label: "White"},
            {value: "biege", label: "Beige"},
            {value: "blue", label: "Blue"},
            {value: "brown", label: "Brown"},
            {value: "green", label: "Green"},
            {value: "purple", label: "Purple"},
            {value: "yellow", label: "Yellow"},
        ]
    },
    {
        id: "fabric",
        name: "Fabric",
        options: [
            {value: "chanderi", label: "Chanderi"},
            {value: "chanderi_cotton", label: "Chanderi Cotton"},
            {value: "chinon", label: "Chinon"},
            {value: "cotton", label: "Cotton"},
            {value: 'crepe', label: "Crepe"},
            {value: 'crepe_silk', label: "Crepe Silk"},
            {value: "georgette", label: "Georgette"},
            {value: "muslin", label: "Muslin"},
            {value: "organza", label: "Organze"},
            {value: "silk", label: "Silk"},
            {value: "viscose_silk", label: "Viscose Silk"}
        ]
    },
    {
        id: "size",
        name: "Size",
        options: [
            {value: "S", label: "S"},
            {value: "M", label: "M"},
            {value: "L", label: "L"},
            {value: "XL", label: "XL"},
            {value: "XXL", label: "XXL"},
        ]
    }
];
export const singleFilters =[
    {
        id: "price",
        name: "Price",
        options: [
            {value: "499-999", label: "₹499 to ₹999"},
            {value: "999-1999", label: "₹999 to ₹1999"},
            {value: "1999-3999", label: "₹1999 to ₹3999"},
            {value: "3999-4999", label: "₹3999 to ₹4999"},
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {value: "20", label: "20% And Above"},
            {value: "30", label: "30% And Above"},
            {value: "40", label: "40% And Above"},
            {value: "50", label: "50% And Above"},
            {value: "60", label: "60% And Above"},
            {value: "70", label: "70% And Above"},
            {value: "80", label: "80% And Above"},
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            {value: "in_stock", label: "In Stock"},
            {value: "out_of_stock", label: "Out Of Stock"}
        ]
    }
];

export const sortOptions = [
    {name: "Price: Low to High", query: "price_low", current: false},
    {name: "Price: High to Low", query: "price_high", current: false},
]