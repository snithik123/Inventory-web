
const express = require("express");
const app = express();
const path = require("path");

const methodOverride = require("method-override");

const mongoose = require("mongoose");
const Product = require("./models/product");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017") 
  .then(() => {
    console.log("Connected....");
  })
  .catch((e) => {
    console.log(e);
    console.log("connection Failed");
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("Products/index", { products });
});

app.get("/products/new", (req, res) => {
  res.render("Products/new");
});

app.post("/products", async (req, res) => {
  const np = new Product(req.body);
  await np.save();
  res.redirect("/products");
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.render("Products/show", { product });
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("Products/edit", { product });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });

  res.redirect("/products");
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.listen(3000, () => {
  console.log("Listening...");
});
