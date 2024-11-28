"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(
  "/images",
  express_1.default.static(path_1.default.join(__dirname, "../public/images"))
);
app.get("/", (req, res) => {
  console.log(path_1.default.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/pancake.png",
      type: "dinner",
    },
    {
      name: "Ramen",
      type: "Lunch",
      text: "Savory noodle soup with a rich broth, fresh vegetables, and soft-boiled eggs.",
      price: 25.00,
      image: "https://example.com/images/ramen.jpg",
    },
    {
      name: "Sushi Platter",
      type: "Lunch",
      text: "Delicious assortment of fresh sushi rolls and sashimi.",
      price: 35.00,
      image: "https://example.com/images/sushi.jpg",
    },
    {
      name: "Pasta Primavera",
      type: "Dinner",
      text: "Fresh vegetables tossed with penne pasta in a light cream sauce.",
      price: 18.00,
      image: "https://example.com/images/pasta.jpg",
    },
    {
      name: "Cheeseburger",
      type: "Lunch",
      text: "Juicy beef patty topped with melted cheese and served with fries.",
      price: 12.00,
      image: "https://example.com/images/cheeseburger.jpg",
    },
    {
      name: "Caesar Salad",
      type: "Lunch",
      text: "Crisp romaine lettuce with creamy Caesar dressing and croutons.",
      price: 10.00,
      image: "https://example.com/images/caesar-salad.jpg",
    },
    {
      name: "Grilled Salmon",
      type: "Dinner",
      text: "Tender grilled salmon served with a lemon butter sauce.",
      price: 30.00,
      image: "https://example.com/images/grilled-salmon.jpg",
    },
    {
      name: "Chicken Curry",
      type: "Dinner",
      text: "Spicy and flavorful chicken curry served with steamed rice.",
      price: 20.00,
      image: "https://example.com/images/chicken-curry.jpg",
    },
    {
      name: "Vegetable Stir-fry",
      type: "Lunch",
      text: "Mixed vegetables stir-fried with soy sauce and sesame seeds.",
      price: 15.00,
      image: "https://example.com/images/veg-stirfry.jpg",
    },
    {
      name: "Margherita Pizza",
      type: "Dinner",
      text: "Classic pizza with tomato, mozzarella, and fresh basil.",
      price: 22.00,
      image: "https://example.com/images/margherita-pizza.jpg",
    },
    {
      name: "Chocolate Lava Cake",
      type: "Breakfast",
      text: "Decadent chocolate cake with a molten center.",
      price: 8.00,
      image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
    },
  ];
  res.json(foodData);
});
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map
