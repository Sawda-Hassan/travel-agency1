// src/data/data.js
export const packages = [
    {
        id: 1,
        title: 'Mogadishu Beach Getaway',
        description: 'Relax on the pristine beaches of Mogadishu and enjoy local seafood delicacies.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJfuegwPYflu7QPiTkOvkAu1ElN2vOnL0jg&s',
    },
    {
        id: 2,
        title: 'Hargeisa Cultural Tour',
        description: 'Explore the rich culture and history of Somaliland, including local markets and museums.',
        image: 'http://www.radiosomaliland.com/wp-content/uploads/Hargeisa.jpg',
    },
    {
        id: 3,
        title: 'Bosaso Adventure',
        description: 'Experience the thrill of watersports and local attractions in Bosaso.',
        image: 'https://horseedmedia.net/wp-content/uploads/2024/09/bosaso-jpg.webp',
    },
    {
        id: 4,
        title: 'Kismayo Coastal Retreat',
        description: 'Enjoy sunbathing and exploring the historical sites of Kismayo.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5EJdTBFWG5B5u1yMbflGkOlmfj_o7vjstKw&s',
    },
    {
        id: 5,
        title: 'Jawhar Exploration',
        description: 'Discover ancient rock art and stunning landscapes at Laas Geel.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVdsTUkgrDnNAXPoVSirOAmvKovLqCmTRiw&s',
    },
    {
        id: 6,
        title: 'Berbera Beach Adventure',
        description: 'Enjoy the beautiful beaches and rich history of Berbera.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcKcR0ncqCpc5MNPbbIwXv0oUJK5Ibg0Lnw&s',
    },
];

export const testimonials = [
    {
        id: 1,
        quote: "An unforgettable experience!",
        author: "John Doe",
    },
    {
        id: 2,
        quote: "I loved every moment of my trip.",
        author: "Jane Smith",
    },
];

export const destinations = [
  {
    id: "mogadishu",
    name: "Mogadishu",
    description: "The bustling capital city known for its historical sites, vibrant culture, and beautiful beaches.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJfuegwPYflu7QPiTkOvkAu1ElN2vOnL0jg&s", // Updated
    rating: 4.5,
    infoLink: "/destinations/mogadishu",
    attractions: ["Liido Beach", "The National Museum", "Arba'a Rukun Mosque", "Bakara Market"],
    culture: "Experience traditional Somali music, dance (like Buraanbur), and diverse cuisine.",
    travelTips: "Best visited during the dry season (November to April). Be aware of local customs and dress modestly.",
    reviews: [
      { user: "Amina", text: "A beautiful city with friendly people and amazing seafood!" },
      { user: "Mohammed", text: "The beaches are stunning and the historical sites are very insightful." },
    ]
  },
  {
    id: "hargeisa",
    name: "Hargeisa",
    description: "The capital of Somaliland, known for its vibrant markets, ancient rock art, and rich history.",
    imageUrl: "http://www.radiosomaliland.com/wp-content/uploads/Hargeisa.jpg", // Updated
    rating: 4.6,
    infoLink: "/destinations/hargeisa",
    attractions: ["The Hargeisa War Memorial", "Suuq Gacmeed Market", "Laas Geel Caves", "Camel Market"],
    culture: "A unique blend of traditional Somali culture with a strong sense of local identity.",
    travelTips: "Explore the local markets for unique crafts and experience the bustling city life. Don't miss Laas Geel!",
    reviews: [
      { user: "Fatima", text: "Laas Geel was breathtaking! A true historical treasure." },
      { user: "Ali", text: "I loved the local food and the vibrant atmosphere of the markets." },
    ]
  },
  {
    id: "berbera",
    name: "Berbera",
    description: "A historic coastal city with beautiful beaches, an ancient port, and significant maritime heritage.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcKcR0ncqCpc5MNPbbIwXv0oUJK5Ibg0Lnw&s", // Updated
    rating: 4.7,
    infoLink: "/destinations/berbera",
    attractions: ["Berbera Beach", "The Old Ottoman Lighthouse", "Daraweyne Beach", "Berbera Port"],
    culture: "Enjoy the rich maritime history, fresh seafood, and the laid-back coastal lifestyle.",
    travelTips: "Visit during the cooler months (October to March) to enjoy the beaches. Try the local seafood!",
    reviews: [
      { user: "Hassan", text: "The beaches are clean and perfect for relaxation! The old port is fascinating." },
      { user: "Sarah", text: "A hidden gem with amazing views and incredibly friendly locals." },
    ]
  },
  {
    id: "kismayo",
    name: "Kismayo",
    description: "A port city in southern Somalia, known for its picturesque beaches, diverse wildlife, and proximity to national parks.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5EJdTBFWG5B5u1yMbflGkOlmfj_o7vjstKw&s", // Updated
    rating: 4.4,
    infoLink: "/destinations/kismayo",
    attractions: ["Kismayo National Park", "Goobweyn Beach", "Jubba River Estuary", "Local Fish Market"],
    culture: "Experience the vibrant culture and traditional fishing practices. Rich in biodiversity.",
    travelTips: "Plan for boat tours to explore nearby islands and spot local wildlife. Check local safety advisories.",
    reviews: [
      { user: "Yasmin", text: "The wildlife and nature are breathtaking! A true adventure." },
      { user: "Omar", text: "A great destination for nature lovers and those seeking unique experiences." },
    ]
  },
  {
    id: "jowhar",
    name: "Jowhar",
    description: "A historic agricultural town in the Middle Shabelle region, known for its fertile lands and riverine beauty.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVdsTUkgrDnNAXPoVSirOAmvKovLqCmTRiw&s", // Updated
    rating: 4.2,
    infoLink: "/destinations/jowhar",
    attractions: ["Shabelle River", "Local Farms and Plantations", "Jowhar Old Town"],
    culture: "Experience rural Somali life, agricultural traditions, and the serene beauty of the river.",
    travelTips: "Ideal for those interested in agriculture and a quieter, more traditional setting. Explore the river by boat.",
    reviews: [
      { user: "Ahmed", text: "A peaceful escape, loved seeing the farms and the river." },
      { user: "Nura", text: "Very authentic experience, the hospitality was wonderful." },
    ]
  },
  {
    id: "dhuusamareeb",
    name: "Dhuusamareeb",
    description: "The capital of Galmudug State, a central hub with a growing economy and cultural significance.",
    imageUrl: "https://horseedmedia.net/wp-content/uploads/2024/09/bosaso-jpg.webp", // Updated
    rating: 4.0,
    infoLink: "/destinations/dhuusamareeb",
    attractions: ["Central Market", "Local Administration Buildings", "Cultural Centers"],
    culture: "A vibrant administrative and commercial center reflecting the diverse culture of central Somalia.",
    travelTips: "Engage with local traders in the market for a true feel of the city. Respect local customs.",
    reviews: [
      { user: "Khalid", text: "Bustling city, great for experiencing local commerce." },
      { user: "Safia", text: "Found some unique crafts in the market, very interesting place." },
    ]
  },
  {
    id: "bosaso",
    name: "Bosaso",
    description: "A major port city in Puntland, serving as a commercial gateway and offering coastal views.",
    imageUrl: "https://horseedmedia.net/wp-content/uploads/2024/09/bosaso-jpg.webp", // Updated
    rating: 4.3,
    infoLink: "/destinations/bosaso",
    attractions: ["Bosaso Port", "Alula Beach", "Frankincense Mountains (nearby)"],
    culture: "A dynamic trade city with a mix of traditional and modern influences, known for its frankincense trade.",
    travelTips: "Visit the port to see the bustling trade. Consider excursions to the nearby mountains for frankincense trees.",
    reviews: [
      { user: "Jamal", text: "The port is impressive, and the city has a lively energy." },
      { user: "Layla", text: "Enjoyed the coastal breeze and the unique frankincense products." },
    ]
  },
  {
    id: "galkayo",
    name: "Galkayo",
    description: "A divided city that serves as a significant commercial and transportation hub in central Somalia.",
    imageUrl: "https://horseedmedia.net/wp-content/uploads/2024/09/bosaso-jpg.webp", // Updated
    rating: 3.9,
    infoLink: "/destinations/galkayo",
    attractions: ["Galkayo Airport", "Local Markets", "Camel Herding Areas (outskirts)"],
    culture: "A crossroads of different Somali clans, offering a unique perspective on regional dynamics and trade.",
    travelTips: "Important to understand the local context. A key transit point for goods and people.",
    reviews: [
      { user: "Yusuf", text: "A very active city, important for regional trade." },
      { user: "Rukia", text: "Experienced the local transport network, very efficient." },
    ]
  },
]
