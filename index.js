const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes.js");
const bookRoutes = require("./routes/bookRoutes.js");


const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{

  res.send('welcome to book api page!');

})

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
   
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
