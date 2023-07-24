const database = {
    fish: [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/A._percula.jpg",
            name: "Petey",
            species: "clownfish",
            size: 4.3,
            location: "Sydney, Australia",
            food: "Gummy Sharks", 
        },
        {
            image: "https://spacecityfishandcoral.com/cdn/shop/products/IMG_5903_61ef415c-b4d3-499c-b430-51fb2b5f4273.jpg?v=1656478111",
            name: "Bart",
            species: "Betta Butterfly Fish",
            size: 3,
            location: "Cancun, Mexico",
            food: "Whipped Cream",
        },
        {
            image: "https://a-z-animals.com/media/2022/04/shutterstock_1132151273.jpg",
            name: "Franklin",
            species: "Bala Shark",
            size: 15,
            location: "Rincon, Puerto Rico",
            food: "Hot Dogs",
        },
        {
            image: "https://www.americanoceans.org/wp-content/uploads/2022/10/Puffer-fish.jpg",
            name: "Nugget",
            species: "Puffer-Fish",
            size: 20,
            location: "Capetown, South Africa",
            food: "Nuggets",
        },
        {
            image: "https://media.istockphoto.com/id/862239824/photo/pacific-sea-nettle-chrysaora-melanaster-jellyfish-vibrant-pink-against-a-deep-blue-background.jpg?s=612x612&w=0&k=20&c=rLScbcP9y-MrhUOYVkS4A_yPYe6BMPaBmc4fh2gNmGo=",
            name: "Cholula",
            species: "Jellyfish",
            size: 12,
            location: "Bora Bora, French Polynesia",
            food: "Crackers",
        },
        {
            image: "https://www.swelluk.com/media/wordpress/cb327d94b7d19cc4debe1d91ccb3cdb0.jpg",
            name: "Queenie",
            species: "Flower Horn",
            size: 4.7,
            location: "St. Lucia, Caribbean",
            food: "Soup",
        },
        {
            image: "https://c402277.ssl.cf1.rackcdn.com/photos/20852/images/magazine_medium/axolotl_WWsummer2021.jpg?1618758847",
            name: "Barbie",
            species: "Axolotl",
            size: 3,
            location: "Parga, Greece",
            food: "Plastic",
        },
        {
            image: "https://azgardens.com/wp-content/uploads/2017/05/Pterophyllum-Scalare-Red-Marbled-Angelfish.jpg",
            name: "Krusty",
            species: "Angel Fish",
            size: 11,
            location: "Ibiza, Mediterranean",
            food: "Seaweed",
        },
    ],
    tankTips : [
        {
            tip: "Clean Tanks",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            tip: "Filter Water",
            description: "Ut enim ad minim veniam"
        },
        {
            tip: "Check Water Salinity Levels",
            description: "Duis aute irure dolor in reprehenderit"
        }
    ],
    locations: [
        {
            city: "Sydney",
            country: "Australia"
        },
        {
            city: "Cancun",
            country: "Mexico"
        },
        {
            city: "Rincon",
            country: "Puerto Rico"
        },
        {
            city: "Capetown",
            country: "South Africa"
        },
        {
            city: "Bora Bora",
            country: "French Polynesia"
        },
        {
            city: "St. Lucia",
            country: "Caribbean"
        },
        {
            city: "Parga",
            country: "Greece"
        },
        {
            city: "Ibiza",
            country: "Mediterranean"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTankTips = () => {
    return database.tankTips.map(tankTips => ({...tankTips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}