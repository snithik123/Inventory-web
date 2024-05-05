
const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/farm")
  .then(() => {
    console.log("Connected....");
  })
  .catch((e) => {
    console.log(e);
    console.log("connection Failed");
  });

// const p = new Product({
//   name: "Banana",
//   price: 20,
//   category: "fruit",
// });

// p.save()
//   .then((d) => {
//     console.log(d);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const productsData = [
  {
    name: "Banana",
    price: 20,
    category: "fruit",
  },
  {
    name: "Carrot",
    price: 10,
    category: "vegetable",
  },
  {
    name: "Apple",
    price: 25,
    category: "fruit",
  },
  {
    name: "Spinach",
    price: 15,
    category: "vegetable",
  },
  {
    name: "Milk",
    price: 5,
    category: "dairy",
  },
  {
    name: "Cheese",
    price: 12,
    category: "dairy",
  },
  {
    name: "Orange",
    price: 18,
    category: "fruit",
  },
  {
    name: "Broccoli",
    price: 12,
    category: "vegetable",
  },
  {
    name: "Yogurt",
    price: 8,
    category: "dairy",
  },
  {
    name: "Grapes",
    price: 15,
    category: "fruit",
  },
  {
    name: "Cucumber",
    price: 7,
    category: "vegetable",
  },
  {
    name: "Butter",
    price: 10,
    category: "dairy",
  },
];

Product.insertMany(productsData)
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });
