
const burger_sandwiches =
    [
        {
            name: "Veggie mushrroom black burger",
            preis: 16.9,
            description: "Mixed green salad,Tomatoes,Edemame,Mushrooms",
            amount: 0,
            image: "/BestellApp/assets/img/VeggieBlackBurger.png",
        },

        {
            name: "All meat burger",
            preis: 15.9,
            description: "Beef,Bacon,Dill pickels,Smoked cheese, Ketchup, BBQ souse",
            amount: 0,
            image: "/BestellApp/assets/img/Allmeatburger.png",
        },

        {
            name: "Beef red burger",
            preis: 14.9,
            description: "Beef,Cheese,Tomatoes,Lettuce,Onion",
            amount: 0,
            image: "/BestellApp/assets/img/Beefredburger.png",
        },

        {
            name: "Big chicken burger",
            preis: 15.9,
            description: "Chicken,Cheese,Tomatoes,Lettuce,Onion,Bell,pepper",
            amount: 0,
            image: "/BestellApp/assets/img/VeggieBlackBurger.png",
        },
    ];

const pizza_30cm =
    [
        {
            name: "Pizza Margheritta",
            preis: 12.9,
            description: "Tomato Sauce, Morrarella",
            amount: 0,
            image: "/BestellApp/assets/img/Pizzamargheritta.png",
        },

        {
            name: "Pizza Chorizo",
            preis: 13.9,
            description: "Tomato slices, Mozzarella, Chorizo",
            amount: 0,
            image: "/BestellApp/assets/img/Pizzachorizo.png",
        },

        {
            name: "Funghi",
            preis: 12.9,
            description: "Red onion, Olives, Button Mushrooms, mozzarella",
            amount: 0,
            image: "/BestellApp/assets/img/Funghi.png",
        },

        {
            name: "Quattro Formaggie with Chicken",
            preis: 15.9,
            description: "Chicken,Mozzarella,Gorgonzola,Fonina,Pamigiano Reggeiano",
            amount: 0,
            image: "/BestellApp/assets/img/VeggieBlackBurger.png",
        },
    ];

const Salad =
    [
        {
            name: "Warm beef arugula salad",
            preis: 16.9,
            description:
                "Beef,Arugula,Field salad,Greek feta, Cherry tomatoes, Sun-dried Tomates,Balsamic-vinegar dressing",
            amount: 0,
            image: "/BestellApp/assets/img/Pizzamargheritta.png",
        },

        {
            name: "Mini green Salas",
            preis: 7.9,
            description: "Green salad,Cucumber,Carrots,Parsley,Radishes",
            amount: 0,
            image: "/BestellApp/assets/img/Pizzachorizo.png",
        },

        {
            name: "Green Salad with see food",
            preis: 16.9,
            description:
                "Mixed greens,Cherry tomatoes,Red onion,Musssels,Squid rings,Shrimp,Dijon mustard-lemon dressing with dill",
            amount: 0,
            image: "/BestellApp/assets/img/Funghi.png",
        },

        {
            name: "Vegan green salad with tofu",
            preis: 14.9,
            description:
                "Green salad,Cherry tomatoes,Cucumber, Baby spinach, Edamame, Radisches, Bittercress, Tofu Peanuts",
            amount: 0,
            image: "/BestellApp/assets/img/VeggieBlackBurger.png",
        },
    ];


let allDishes = [burger_sandwiches, pizza_30cm, Salad];
//console.log(allDishes.length); // 3