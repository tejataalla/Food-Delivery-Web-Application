/* ============================================
   TastyBites - Food Delivery App
   Complete JavaScript Functionality
   ============================================ */

// ============================================
// DATA - Restaurants, Menus, Cuisines
// ============================================

const cuisinesData = [
    { id: 1, name: 'Pizza', icon: '🍕' },
    { id: 2, name: 'Burger', icon: '🍔' },
    { id: 3, name: 'Biryani', icon: '🍛' },
    { id: 4, name: 'Chinese', icon: '🥡' },
    { id: 5, name: 'Sushi', icon: '🍣' },
    { id: 6, name: 'Desserts', icon: '🍰' },
    { id: 7, name: 'Healthy', icon: '🥗' },
    { id: 8, name: 'Rolls', icon: '🌯' },
    { id: 9, name: 'Sandwich', icon: '🥪' },
    { id: 10, name: 'Ice Cream', icon: '🍦' },
    { id: 11, name: 'Thali', icon: '🍽️' },
    { id: 12, name: 'Dosa', icon: '🥞' },
];

const restaurantsData = [
    {
        id: 1,
        name: "Pizza Paradise",
        image: "https://tse1.mm.bing.net/th/id/OIP.H2cxTuQC4PYYKtffYxsHYgHaE9?pid=Api&P=0&h=180",
        cuisines: ["Italian", "Pizza", "Pasta"],
        rating: 4.5,
        deliveryTime: "25-30",
        priceForTwo: 400,
        offer: "50% OFF up to ₹100",
        promoted: true,
        veg: false,
        menu: [
            {
                category: "Bestsellers",
                items: [
                    { id: 101, name: "Margherita Pizza", price: 249, desc: "Classic cheese pizza with fresh tomato sauce and basil", veg: true, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200" },
                    { id: 102, name: "Pepperoni Pizza", price: 349, desc: "Topped with pepperoni slices and mozzarella", veg: false, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200" },
                    { id: 103, name: "BBQ Chicken Pizza", price: 399, desc: "Grilled chicken with tangy BBQ sauce", veg: false, image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200" },
                ]
            },
            {
                category: "Pasta",
                items: [
                    { id: 104, name: "Alfredo Pasta", price: 279, desc: "Creamy white sauce pasta with herbs", veg: true, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200" },
                    { id: 105, name: "Arrabiata Pasta", price: 249, desc: "Spicy tomato sauce with garlic", veg: true, image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=200" },
                ]
            },
            {
                category: "Sides",
                items: [
                    { id: 106, name: "Garlic Bread", price: 129, desc: "Crispy bread with garlic butter", veg: true, image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=200" },
                    { id: 107, name: "Cheesy Fries", price: 149, desc: "Golden fries with melted cheese", veg: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200" },
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Royal Spice Kitchen",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
        cuisines: ["North Indian", "Biryani", "Mughlai"],
        rating: 4.8,
        deliveryTime: "30-35",
        priceForTwo: 500,
        offer: "₹125 OFF on orders above ₹249",
        promoted: false,
        veg: false,
        menu: [
            {
                category: "Biryani",
                items: [
                    { id: 201, name: "Hyderabadi Chicken Biryani", price: 299, desc: "Aromatic basmati rice with tender chicken", veg: false, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200" },
                    { id: 202, name: "Mutton Biryani", price: 399, desc: "Rich and flavorful mutton dum biryani", veg: false, image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=200" },
                    { id: 203, name: "Veg Biryani", price: 229, desc: "Mixed vegetables in aromatic rice", veg: true, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200" },
                ]
            },
            {
                category: "Curry",
                items: [
                    { id: 204, name: "Butter Chicken", price: 329, desc: "Creamy tomato curry with tender chicken", veg: false, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200" },
                    { id: 205, name: "Dal Makhani", price: 199, desc: "Slow-cooked black lentils in cream", veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200" },
                    { id: 206, name: "Paneer Tikka Masala", price: 279, desc: "Grilled paneer in spicy gravy", veg: true, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200" },
                ]
            },
            {
                category: "Breads",
                items: [
                    { id: 207, name: "Butter Naan", price: 49, desc: "Soft and buttery Indian bread", veg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200" },
                    { id: 208, name: "Garlic Naan", price: 59, desc: "Naan topped with fresh garlic", veg: true, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200" },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Burger Kingdom",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        cuisines: ["American", "Burgers", "Fast Food"],
        rating: 4.3,
        deliveryTime: "20-25",
        priceForTwo: 350,
        offer: "FREE delivery on orders above ₹199",
        promoted: true,
        veg: false,
        menu: [
            {
                category: "Burgers",
                items: [
                    { id: 301, name: "Classic Cheeseburger", price: 179, desc: "Juicy beef patty with melted cheese", veg: false, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200" },
                    { id: 302, name: "Double Decker", price: 249, desc: "Two patties stacked with special sauce", veg: false, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200" },
                    { id: 303, name: "Veggie Delight", price: 159, desc: "Crispy veg patty with fresh veggies", veg: true, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=200" },
                ]
            },
            {
                category: "Sides",
                items: [
                    { id: 304, name: "French Fries", price: 99, desc: "Crispy golden fries", veg: true, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200" },
                    { id: 305, name: "Onion Rings", price: 119, desc: "Crispy battered onion rings", veg: true, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=200" },
                ]
            },
            {
                category: "Beverages",
                items: [
                    { id: 306, name: "Coke", price: 59, desc: "Chilled Coca-Cola", veg: true, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200" },
                    { id: 307, name: "Chocolate Shake", price: 129, desc: "Thick and creamy chocolate milkshake", veg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200" },
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Sushi Master",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
        cuisines: ["Japanese", "Sushi", "Asian"],
        rating: 4.7,
        deliveryTime: "35-40",
        priceForTwo: 800,
        offer: "20% OFF on your first order",
        promoted: false,
        veg: false,
        menu: [
            {
                category: "Sushi Rolls",
                items: [
                    { id: 401, name: "California Roll", price: 349, desc: "Crab, avocado, and cucumber", veg: false, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200" },
                    { id: 402, name: "Dragon Roll", price: 449, desc: "Shrimp tempura with eel on top", veg: false, image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=200" },
                    { id: 403, name: "Veggie Roll", price: 299, desc: "Fresh vegetables with rice", veg: true, image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=200" },
                ]
            },
            {
                category: "Ramen",
                items: [
                    { id: 404, name: "Tonkotsu Ramen", price: 399, desc: "Rich pork broth with noodles", veg: false, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200" },
                    { id: 405, name: "Miso Ramen", price: 349, desc: "Fermented soybean broth", veg: true, image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=200" },
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Dragon Wok",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500",
        cuisines: ["Chinese", "Thai", "Asian"],
        rating: 4.4,
        deliveryTime: "25-30",
        priceForTwo: 450,
        offer: "Flat ₹75 OFF",
        promoted: false,
        veg: false,
        menu: [
            {
                category: "Starters",
                items: [
                    { id: 501, name: "Spring Rolls", price: 149, desc: "Crispy rolls with veggie filling", veg: true, image: "https://images.unsplash.com/photo-1539735257261-e7c5c07e8e9e?w=200" },
                    { id: 502, name: "Chicken Manchurian", price: 229, desc: "Deep fried chicken in tangy sauce", veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=200" },
                    { id: 503, name: "Honey Chilli Potato", price: 179, desc: "Crispy potatoes in sweet chilli", veg: true, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=200" },
                ]
            },
            {
                category: "Main Course",
                items: [
                    { id: 504, name: "Kung Pao Chicken", price: 299, desc: "Spicy chicken with peanuts", veg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=200" },
                    { id: 505, name: "Schezwan Fried Rice", price: 199, desc: "Spicy fried rice with vegetables", veg: true, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200" },
                    { id: 506, name: "Hakka Noodles", price: 179, desc: "Stir-fried noodles with veggies", veg: true, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200" },
                ]
            }
        ]
    },
    {
        id: 6,
        name: "The Green Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        cuisines: ["Healthy", "Salads", "Bowls"],
        rating: 4.6,
        deliveryTime: "20-25",
        priceForTwo: 400,
        offer: "FREE smoothie on orders above ₹299",
        promoted: false,
        veg: true,
        menu: [
            {
                category: "Salads",
                items: [
                    { id: 601, name: "Caesar Salad", price: 229, desc: "Romaine lettuce with parmesan", veg: true, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=200" },
                    { id: 602, name: "Greek Salad", price: 249, desc: "Fresh veggies with feta cheese", veg: true, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200" },
                    { id: 603, name: "Quinoa Bowl", price: 299, desc: "Protein-rich quinoa with veggies", veg: true, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200" },
                ]
            },
            {
                category: "Smoothies",
                items: [
                    { id: 604, name: "Green Detox", price: 179, desc: "Spinach, apple, ginger blend", veg: true, image: "https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?w=200" },
                    { id: 605, name: "Berry Blast", price: 199, desc: "Mixed berries with yogurt", veg: true, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=200" },
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Sweet Temptations",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500",
        cuisines: ["Desserts", "Bakery", "Cakes"],
        rating: 4.9,
        deliveryTime: "30-35",
        priceForTwo: 350,
        offer: "Buy 2 Get 1 FREE",
        promoted: true,
        veg: true,
        menu: [
            {
                category: "Cakes",
                items: [
                    { id: 701, name: "Chocolate Truffle", price: 499, desc: "Rich chocolate layered cake", veg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200" },
                    { id: 702, name: "Red Velvet", price: 549, desc: "Classic red velvet with cream", veg: true, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=200" },
                    { id: 703, name: "Cheesecake", price: 399, desc: "New York style cheesecake", veg: true, image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=200" },
                ]
            },
            {
                category: "Pastries",
                items: [
                    { id: 704, name: "Chocolate Brownie", price: 129, desc: "Fudgy chocolate brownie", veg: true, image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?w=200" },
                    { id: 705, name: "Croissant", price: 99, desc: "Buttery French pastry", veg: true, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200" },
                ]
            },
            {
                category: "Ice Cream",
                items: [
                    { id: 706, name: "Belgian Chocolate", price: 149, desc: "Rich chocolate ice cream", veg: true, image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=200" },
                    { id: 707, name: "Mango Sorbet", price: 129, desc: "Refreshing mango flavor", veg: true, image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=200" },
                ]
            }
        ]
    },
    {
        id: 8,
        name: "Taco Bell Express",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500",
        cuisines: ["Mexican", "Tacos", "Burritos"],
        rating: 4.2,
        deliveryTime: "25-30",
        priceForTwo: 400,
        offer: "Combo deals starting ₹199",
        promoted: false,
        veg: false,
        menu: [
            {
                category: "Tacos",
                items: [
                    { id: 801, name: "Chicken Taco", price: 149, desc: "Grilled chicken in crispy shell", veg: false, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200" },
                    { id: 802, name: "Veggie Taco", price: 129, desc: "Fresh veggies with cheese", veg: true, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=200" },
                    { id: 803, name: "Fish Taco", price: 179, desc: "Crispy fish with slaw", veg: false, image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=200" },
                ]
            },
            {
                category: "Burritos",
                items: [
                    { id: 804, name: "Chicken Burrito", price: 249, desc: "Wrapped with rice and beans", veg: false, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200" },
                    { id: 805, name: "Bean Burrito", price: 199, desc: "Hearty bean filling", veg: true, image: "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?w=200" },
                ]
            },
            {
                category: "Sides",
                items: [
                    { id: 806, name: "Nachos", price: 179, desc: "Crispy chips with cheese dip", veg: true, image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200" },
                    { id: 807, name: "Guacamole", price: 99, desc: "Fresh avocado dip", veg: true, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=200" },
                ]
            }
        ]
    },
    {
        id: 9,
        name: "Dosa Factory",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500",
        cuisines: ["South Indian", "Dosa", "Idli"],
        rating: 4.5,
        deliveryTime: "20-25",
        priceForTwo: 250,
        offer: "Extra 15% OFF with code DOSA15",
        promoted: false,
        veg: true,
        menu: [
            {
                category: "Dosa",
                items: [
                    { id: 901, name: "Masala Dosa", price: 99, desc: "Crispy dosa with potato filling", veg: true, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200" },
                    { id: 902, name: "Paper Dosa", price: 89, desc: "Extra thin and crispy", veg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200" },
                    { id: 903, name: "Rava Dosa", price: 109, desc: "Semolina dosa with onions", veg: true, image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=200" },
                    { id: 904, name: "Mysore Masala Dosa", price: 119, desc: "Spicy red chutney dosa", veg: true, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200" },
                ]
            },
            {
                category: "Idli & Vada",
                items: [
                    { id: 905, name: "Idli Sambar", price: 69, desc: "Soft idlis with sambar", veg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200" },
                    { id: 906, name: "Medu Vada", price: 79, desc: "Crispy lentil fritters", veg: true, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200" },
                ]
            },
            {
                category: "Uttapam",
                items: [
                    { id: 907, name: "Onion Uttapam", price: 99, desc: "Thick pancake with onions", veg: true, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200" },
                    { id: 908, name: "Mixed Veg Uttapam", price: 119, desc: "Topped with mixed vegetables", veg: true, image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200" },
                ]
            }
        ]
    },
    {
        id: 10,
        name: "The Kebab House",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500",
        cuisines: ["Kebabs", "Mughlai", "Grills"],
        rating: 4.6,
        deliveryTime: "30-35",
        priceForTwo: 600,
        offer: "Flat 30% OFF",
        promoted: true,
        veg: false,
        menu: [
            {
                category: "Kebabs",
                items: [
                    { id: 1001, name: "Seekh Kebab", price: 299, desc: "Minced meat grilled on skewers", veg: false, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200" },
                    { id: 1002, name: "Chicken Tikka", price: 279, desc: "Marinated chicken chunks", veg: false, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200" },
                    { id: 1003, name: "Paneer Tikka", price: 249, desc: "Grilled cottage cheese", veg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=200" },
                    { id: 1004, name: "Galouti Kebab", price: 349, desc: "Melt in mouth mutton kebabs", veg: false, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200" },
                ]
            },
            {
                category: "Rolls",
                items: [
                    { id: 1005, name: "Chicken Roll", price: 159, desc: "Kebab wrapped in roomali roti", veg: false, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200" },
                    { id: 1006, name: "Paneer Roll", price: 139, desc: "Grilled paneer in wrap", veg: true, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200" },
                ]
            },
            {
                category: "Platters",
                items: [
                    { id: 1007, name: "Non-Veg Platter", price: 699, desc: "Assorted kebabs for 2", veg: false, image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200" },
                    { id: 1008, name: "Veg Platter", price: 499, desc: "Mixed veg kebabs for 2", veg: true, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=200" },
                ]
            }
        ]
    },
    {
        id: 11,
        name: "Sandwich Station",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
        cuisines: ["Sandwiches", "Wraps", "Cafe"],
        rating: 4.3,
        deliveryTime: "15-20",
        priceForTwo: 300,
        offer: "₹50 OFF on first order",
        promoted: false,
        veg: false,
        menu: [
            {
                category: "Classic Sandwiches",
                items: [
                    { id: 1101, name: "Club Sandwich", price: 199, desc: "Triple decker with chicken", veg: false, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200" },
                    { id: 1102, name: "Grilled Cheese", price: 149, desc: "Melted cheese between toasted bread", veg: true, image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=200" },
                    { id: 1103, name: "BLT Sandwich", price: 179, desc: "Bacon, lettuce, tomato", veg: false, image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=200" },
                ]
            },
            {
                category: "Wraps",
                items: [
                    { id: 1104, name: "Chicken Caesar Wrap", price: 189, desc: "Grilled chicken with caesar dressing", veg: false, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200" },
                    { id: 1105, name: "Falafel Wrap", price: 169, desc: "Crispy falafel with hummus", veg: true, image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200" },
                ]
            },
            {
                category: "Beverages",
                items: [
                    { id: 1106, name: "Cold Coffee", price: 129, desc: "Creamy iced coffee", veg: true, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200" },
                    { id: 1107, name: "Fresh Lime Soda", price: 79, desc: "Refreshing lime drink", veg: true, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200" },
                ]
            }
        ]
    },
    {
        id: 12,
        name: "Thali Express",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
        cuisines: ["North Indian", "Thali", "Home Style"],
        rating: 4.4,
        deliveryTime: "25-30",
        priceForTwo: 350,
        offer: "Unlimited refills on thali",
        promoted: false,
        veg: true,
        menu: [
            {
                category: "Thali",
                items: [
                    { id: 1201, name: "Rajasthani Thali", price: 249, desc: "Dal bati churma special", veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200" },
                    { id: 1202, name: "Gujarati Thali", price: 229, desc: "Sweet and savory combo", veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200" },
                    { id: 1203, name: "Punjabi Thali", price: 269, desc: "Rich and creamy delights", veg: true, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200" },
                ]
            },
            {
                category: "Combos",
                items: [
                    { id: 1204, name: "Chole Bhature", price: 129, desc: "Spicy chickpeas with fried bread", veg: true, image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=200" },
                    { id: 1205, name: "Pav Bhaji", price: 119, desc: "Spiced vegetable mash with bread", veg: true, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200" },
                ]
            }
        ]
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let cart = [];
let currentRestaurant = null;
let filteredRestaurants = [...restaurantsData];

// ============================================
// DOM ELEMENTS
// ============================================

const landingPage = document.getElementById('landing-page');
const restaurantsPage = document.getElementById('restaurants-page');
const navbar = document.getElementById('navbar');
const btnOrderNow = document.getElementById('btn-order-now');
const btnViewAll = document.getElementById('btn-view-all');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalAmount = document.getElementById('cart-total-amount');
const restaurantModal = document.getElementById('restaurant-modal');
const modalClose = document.getElementById('modal-close');
const restaurantsGrid = document.getElementById('restaurants-grid');
const cuisinesContainer = document.getElementById('cuisines-container');
const searchRestaurants = document.getElementById('search-restaurants');
const filterChips = document.querySelectorAll('.filter-chip');
const sortBy = document.getElementById('sort-by');
const backToHome = document.getElementById('back-to-home');
const btnCheckout = document.getElementById('btn-checkout');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Auth modals
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const btnLogin = document.getElementById('btn-login');
const btnSignup = document.getElementById('btn-signup');
const loginModalClose = document.getElementById('login-modal-close');
const signupModalClose = document.getElementById('signup-modal-close');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

// Checkout modal
const checkoutModal = document.getElementById('checkout-modal');
const checkoutModalClose = document.getElementById('checkout-modal-close');
const btnTrackOrder = document.getElementById('btn-track-order');

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    setupScrollEffects();
    loadCuisines();
    loadRestaurants();
    updateCartUI();
    animateOnScroll();
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Navigation
    btnOrderNow.addEventListener('click', navigateToRestaurants);
    btnViewAll.addEventListener('click', navigateToRestaurants);
    backToHome.addEventListener('click', navigateToHome);

    // Category cards on landing page
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            navigateToRestaurants();
        });
    });

    // Restaurant preview cards on landing page
    document.querySelectorAll('.restaurant-preview-card').forEach(card => {
        card.addEventListener('click', () => {
            navigateToRestaurants();
        });
    });

    // Cart
    cartIcon.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    btnCheckout.addEventListener('click', processCheckout);

    // Restaurant modal
    modalClose.addEventListener('click', closeRestaurantModal);
    restaurantModal.addEventListener('click', (e) => {
        if (e.target === restaurantModal) closeRestaurantModal();
    });

    // Search
    searchRestaurants.addEventListener('input', handleSearch);

    // Filters
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => handleFilter(chip));
    });

    // Sort
    sortBy.addEventListener('change', handleSort);

    // Auth modals
    btnLogin.addEventListener('click', () => openModal(loginModal));
    btnSignup.addEventListener('click', () => openModal(signupModal));
    loginModalClose.addEventListener('click', () => closeModal(loginModal));
    signupModalClose.addEventListener('click', () => closeModal(signupModal));
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(signupModal);
    });
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(signupModal);
        openModal(loginModal);
    });

    // Auth forms
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('signup-form').addEventListener('submit', handleSignup);

    // Checkout modal
    checkoutModalClose.addEventListener('click', () => closeModal(checkoutModal));
    btnTrackOrder.addEventListener('click', () => {
        closeModal(checkoutModal);
        showToast('Order tracking started! 🚀');
    });

    // Hamburger menu
    document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);
}

// ============================================
// SCROLL EFFECTS
// ============================================

function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Navbar background
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card, .step-card, .feature-card, .restaurant-preview-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// PAGE NAVIGATION
// ============================================

function navigateToRestaurants() {
    landingPage.classList.add('hidden');
    restaurantsPage.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function navigateToHome() {
    restaurantsPage.classList.add('hidden');
    landingPage.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// ============================================
// LOAD CUISINES
// ============================================

function loadCuisines() {
    cuisinesContainer.innerHTML = cuisinesData.map(cuisine => `
        <div class="cuisine-item" data-cuisine="${cuisine.name}">
            <div class="cuisine-icon">${cuisine.icon}</div>
            <span class="cuisine-name">${cuisine.name}</span>
        </div>
    `).join('');

    // Add click events
    document.querySelectorAll('.cuisine-item').forEach(item => {
        item.addEventListener('click', () => {
            const cuisineName = item.dataset.cuisine.toLowerCase();
            searchRestaurants.value = cuisineName;
            handleSearch({ target: { value: cuisineName } });
        });
    });
}

// ============================================
// LOAD RESTAURANTS
// ============================================

function loadRestaurants() {
    restaurantsGrid.innerHTML = filteredRestaurants.map(restaurant => `
        <div class="restaurant-card" data-id="${restaurant.id}">
            <div class="restaurant-card-image">
                ${restaurant.promoted ? '<span class="promoted-badge">Promoted</span>' : ''}
                <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500'">
                ${restaurant.offer ? `<span class="restaurant-offer">${restaurant.offer}</span>` : ''}
            </div>
            <div class="restaurant-card-info">
                <div class="restaurant-card-header">
                    <h3>${restaurant.name}</h3>
                    <span class="rating-badge">⭐ ${restaurant.rating}</span>
                </div>
                <p class="restaurant-cuisines">${restaurant.cuisines.join(', ')}</p>
                <div class="restaurant-meta">
                    <span>🕐 ${restaurant.deliveryTime} min</span>
                    <span>₹${restaurant.priceForTwo} for two</span>
                </div>
            </div>
        </div>
    `).join('');

    // Add click events
    document.querySelectorAll('.restaurant-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openRestaurantModal(id);
        });
    });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query === '') {
        filteredRestaurants = [...restaurantsData];
    } else {
        filteredRestaurants = restaurantsData.filter(restaurant => {
            return restaurant.name.toLowerCase().includes(query) ||
                restaurant.cuisines.some(c => c.toLowerCase().includes(query));
        });
    }

    loadRestaurants();
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================

function handleFilter(chip) {
    // Update active state
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const filter = chip.dataset.filter;

    switch (filter) {
        case 'all':
            filteredRestaurants = [...restaurantsData];
            break;
        case 'rating':
            filteredRestaurants = restaurantsData.filter(r => r.rating >= 4.0);
            break;
        case 'fast':
            filteredRestaurants = restaurantsData.filter(r => parseInt(r.deliveryTime) <= 25);
            break;
        case 'offers':
            filteredRestaurants = restaurantsData.filter(r => r.offer);
            break;
        case 'veg':
            filteredRestaurants = restaurantsData.filter(r => r.veg);
            break;
        case 'nonveg':
            filteredRestaurants = restaurantsData.filter(r => !r.veg);
            break;
        default:
            filteredRestaurants = [...restaurantsData];
    }

    loadRestaurants();
}

// ============================================
// SORT FUNCTIONALITY
// ============================================

function handleSort(e) {
    const sortValue = e.target.value;

    switch (sortValue) {
        case 'rating':
            filteredRestaurants.sort((a, b) => b.rating - a.rating);
            break;
        case 'delivery':
            filteredRestaurants.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime));
            break;
        case 'cost-low':
            filteredRestaurants.sort((a, b) => a.priceForTwo - b.priceForTwo);
            break;
        case 'cost-high':
            filteredRestaurants.sort((a, b) => b.priceForTwo - a.priceForTwo);
            break;
        default:
            // Reset to original order
            filteredRestaurants = restaurantsData.filter(r =>
                filteredRestaurants.find(fr => fr.id === r.id)
            );
    }

    loadRestaurants();
}

// ============================================
// RESTAURANT MODAL
// ============================================

function openRestaurantModal(id) {
    currentRestaurant = restaurantsData.find(r => r.id === id);
    if (!currentRestaurant) return;

    // Render header
    document.getElementById('restaurant-detail-header').innerHTML = `
        <div style="display: flex; align-items: center; flex-wrap: wrap; gap: var(--spacing-lg);">
            <img src="${currentRestaurant.image}" alt="${currentRestaurant.name}" class="restaurant-detail-image" onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200'">
            <div class="restaurant-detail-info">
                <h2>${currentRestaurant.name}</h2>
                <p style="color: var(--gray-400); margin-bottom: var(--spacing-sm);">${currentRestaurant.cuisines.join(', ')}</p>
                <div class="restaurant-detail-meta">
                    <span>⭐ ${currentRestaurant.rating}</span>
                    <span>🕐 ${currentRestaurant.deliveryTime} min</span>
                    <span>₹${currentRestaurant.priceForTwo} for two</span>
                </div>
                ${currentRestaurant.offer ? `<p style="color: var(--primary); margin-top: var(--spacing-sm); font-weight: 600;">🎁 ${currentRestaurant.offer}</p>` : ''}
            </div>
        </div>
    `;

    // Render menu categories
    const categories = currentRestaurant.menu.map(cat => cat.category);
    document.getElementById('menu-categories').innerHTML = categories.map((cat, index) => `
        <button class="menu-category-btn ${index === 0 ? 'active' : ''}" data-category="${cat}">${cat}</button>
    `).join('');

    // Add category click events
    document.querySelectorAll('.menu-category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.menu-category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenuItems(btn.dataset.category);
        });
    });

    // Render first category items
    renderMenuItems(categories[0]);

    // Show modal
    restaurantModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function renderMenuItems(category) {
    const menuCategory = currentRestaurant.menu.find(cat => cat.category === category);
    if (!menuCategory) return;

    document.getElementById('menu-items').innerHTML = menuCategory.items.map(item => {
        const cartItem = cart.find(c => c.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return `
            <div class="menu-item" data-item-id="${item.id}">
                <div class="menu-item-info">
                    <div class="menu-item-header">
                        <span class="${item.veg ? 'veg-badge' : 'nonveg-badge'}"></span>
                        <span class="menu-item-name">${item.name}</span>
                    </div>
                    <p class="menu-item-price">₹${item.price}</p>
                    <p class="menu-item-desc">${item.desc}</p>
                </div>
                <div class="menu-item-action">
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image" onerror="this.style.display='none'">
                    ${quantity > 0 ? `
                        <div class="quantity-controls">
                            <button class="quantity-btn minus-btn" data-id="${item.id}">−</button>
                            <span class="quantity-value">${quantity}</span>
                            <button class="quantity-btn plus-btn" data-id="${item.id}">+</button>
                        </div>
                    ` : `
                        <button class="btn-add" data-id="${item.id}">ADD</button>
                    `}
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners for add buttons
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.id));
        });
    });

    // Add event listeners for quantity buttons
    document.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateCartQuantity(parseInt(btn.dataset.id), 1);
        });
    });

    document.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateCartQuantity(parseInt(btn.dataset.id), -1);
        });
    });
}

function closeRestaurantModal() {
    restaurantModal.classList.add('hidden');
    document.body.style.overflow = '';
    currentRestaurant = null;
}

// ============================================
// CART FUNCTIONALITY
// ============================================

function addToCart(itemId) {
    // Find item in current restaurant menu
    let item = null;
    for (const category of currentRestaurant.menu) {
        const found = category.items.find(i => i.id === itemId);
        if (found) {
            item = found;
            break;
        }
    }

    if (!item) return;

    const existingItem = cart.find(c => c.id === itemId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            restaurantId: currentRestaurant.id,
            restaurantName: currentRestaurant.name
        });
    }

    updateCartUI();
    showToast(`${item.name} added to cart! 🛒`);

    // Re-render menu items to update button state
    const activeCategory = document.querySelector('.menu-category-btn.active');
    if (activeCategory) {
        renderMenuItems(activeCategory.dataset.category);
    }
}

function updateCartQuantity(itemId, change) {
    const itemIndex = cart.findIndex(c => c.id === itemId);

    if (itemIndex === -1) return;

    cart[itemIndex].quantity += change;

    if (cart[itemIndex].quantity <= 0) {
        const itemName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        showToast(`${itemName} removed from cart`);
    }

    updateCartUI();

    // Re-render menu items to update button state
    const activeCategory = document.querySelector('.menu-category-btn.active');
    if (activeCategory) {
        renderMenuItems(activeCategory.dataset.category);
    }
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(c => c.id === itemId);
    if (itemIndex !== -1) {
        const itemName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        showToast(`${itemName} removed from cart`);
        updateCartUI();
    }
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <p>Your cart is empty</p>
                <p style="font-size: 0.9rem; margin-top: 10px;">Add items from a restaurant to start your order</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="quantity-btn cart-minus" data-id="${item.id}">−</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn cart-plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="cart-item-remove" data-id="${item.id}">🗑️</button>
                </div>
            </div>
        `).join('');

        // Add event listeners
        document.querySelectorAll('.cart-plus').forEach(btn => {
            btn.addEventListener('click', () => {
                updateCartQuantity(parseInt(btn.dataset.id), 1);
            });
        });

        document.querySelectorAll('.cart-minus').forEach(btn => {
            btn.addEventListener('click', () => {
                updateCartQuantity(parseInt(btn.dataset.id), -1);
            });
        });

        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                removeFromCart(parseInt(btn.dataset.id));
            });
        });
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalAmount.textContent = `₹${total}`;
}

function openCart() {
    cartSidebar.classList.remove('hidden');
    cartOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.add('hidden');
    cartOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

// ============================================
// CHECKOUT
// ============================================

function processCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty! Add some items first.');
        return;
    }

    // Generate random order ID
    const orderId = '#TB' + Math.floor(10000 + Math.random() * 90000);
    document.getElementById('order-id').textContent = orderId;

    // Random delivery time
    const deliveryTimes = ['25-30 mins', '30-35 mins', '35-40 mins', '40-45 mins'];
    document.getElementById('delivery-time').textContent = deliveryTimes[Math.floor(Math.random() * deliveryTimes.length)];

    // Clear cart
    cart = [];
    updateCartUI();

    // Close cart sidebar
    closeCart();

    // Show checkout modal
    openModal(checkoutModal);
}

// ============================================
// MODALS
// ============================================

function openModal(modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// ============================================
// AUTH HANDLERS
// ============================================

function handleLogin(e) {
    e.preventDefault();
    showToast('Login successful! Welcome back! 🎉');
    closeModal(loginModal);
}

function handleSignup(e) {
    e.preventDefault();
    showToast('Account created successfully! Welcome to TastyBites! 🎉');
    closeModal(signupModal);
}

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ============================================
// MOBILE MENU
// ============================================

function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.classList.toggle('active');

    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(26, 26, 46, 0.98)';
        navLinks.style.padding = '20px';
        navLinks.style.gap = '15px';
    }
}

// ============================================
// VIDEO BACKGROUND FALLBACK
// ============================================

const heroVideo = document.getElementById('hero-video');
if (heroVideo) {
    // Use a food-related video
    heroVideo.innerHTML = `
        <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pizza-slice-and-a-glass-with-a-drink-51385-large.mp4" type="video/mp4">
    `;

    heroVideo.addEventListener('error', () => {
        // Fallback to a gradient background if video fails
        heroVideo.parentElement.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!restaurantModal.classList.contains('hidden')) {
            closeRestaurantModal();
        }
        if (!cartSidebar.classList.contains('hidden')) {
            closeCart();
        }
        if (!loginModal.classList.contains('hidden')) {
            closeModal(loginModal);
        }
        if (!signupModal.classList.contains('hidden')) {
            closeModal(signupModal);
        }
        if (!checkoutModal.classList.contains('hidden')) {
            closeModal(checkoutModal);
        }
    }
});

console.log('🍔 TastyBites Food Delivery App Initialized!');
console.log('📱 Built with pure HTML, CSS, and JavaScript');
console.log('🚀 Enjoy ordering delicious food!');
