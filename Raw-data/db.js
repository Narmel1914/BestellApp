
const burger_sandwiches =
    [
        {
            name: "Veggie mushrroom black burger",
            price: 16.9,
            description: "Mixed green salad,Tomatoes,Edemame,Mushrooms",
            amount: 0,
            image: "../assets/img/VeggieBlackBurger.png",
        },

        {
            name: "All meat burger",
            price: 15.9,
            description: "Beef,Bacon,Dill pickels,Smoked cheese, Ketchup, BBQ souse",
            amount: 0,
            image: "../assets/img/Allmeatburger.png",
        },

        {
            name: "Beef red burger",
            price: 14.9,
            description: "Beef,Cheese,Tomatoes,Lettuce,Onion",
            amount: 0,
            image: "../assets/img/Beefredburger.png",
        },

        {
            name: "Big chicken burger",
            price: 15.9,
            description: "Chicken,Cheese,Tomatoes,Lettuce,Onion,Bell,pepper",
            amount: 0,
            image: "../assets/img/VeggieBlackBurger.png",
        },
    ];

const pizza_30cm =
    [
        {
            name: "Pizza Margheritta",
            price: 12.9,
            description: "Tomato Sauce, Morrarella",
            amount: 0,
            image: "../assets/img/Pizzamargheritta.png",
        },

        {
            name: "Pizza Chorizo",
            price: 13.9,
            description: "Tomato slices, Mozzarella, Chorizo",
            amount: 0,
            image: "../assets/img/Pizzachorizo.png",
        },

        {
            name: "Funghi",
            price: 12.9,
            description: "Red onion, Olives, Button Mushrooms, mozzarella",
            amount: 0,
            image: "../assets/img/Funghi.png",
        },

        {
            name: "Quattro Formaggie with Chicken",
            price: 15.9,
            description: "Chicken,Mozzarella,Gorgonzola,Fonina,Pamigiano Reggeiano",
            amount: 0,
            image: "../assets/img/VeggieBlackBurger.png",
        },
    ];

const Salad =
    [
        {
            name: "Warm beef arugula salad",
            price: 16.9,
            description:
                "Beef,Arugula,Field salad,Greek feta, Cherry tomatoes, Sun-dried Tomates,Balsamic-vinegar dressing",
            amount: 0,
            image: "../assets/img/Warmbeef.png",
        },

        {
            name: "Mini green Salas",
            price: 7.9,
            description: "Green salad,Cucumber,Carrots,Parsley,Radishes",
            amount: 0,
            image: "../assets/img/Minigreensalad.png",
        },

        {
            name: "Green Salad with see food",
            price: 16.9,
            description:
                "Mixed greens,Cherry tomatoes,Red onion,Musssels,Squid rings,Shrimp,Dijon mustard-lemon dressing with dill",
            amount: 0,
            image: "../assets/img/Grensaladwithseafood.png",
        },

        {
            name: "Vegan green salad with tofu",
            price: 14.9,
            description:
                "Green salad,Cherry tomatoes,Cucumber, Baby spinach, Edamame, Radisches, Bittercress, Tofu Peanuts",
            amount: 0,
            image: "../assets/img/Vegangreensaladwithtofu.png",
        },
    ];


let arrDishes = [burger_sandwiches, pizza_30cm, Salad]; // array object of Json
//console.log(arrDishes[0]); // 3
/* test
for (let i = 2; i < arrDishes.length; i++) {
    let categorie = arrDishes[i];
    for (let j = 0; j < categorie.length; j++) {
        const elt = categorie[j];
        console.log(elt.name);
        console.log(elt.image);
    }
}*/