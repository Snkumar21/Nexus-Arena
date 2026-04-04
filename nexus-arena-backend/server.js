require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// =====================
// 🔗 Middleware
// =====================
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));

app.use(bodyParser.json());

// =====================
// 🔗 MongoDB Connection
// =====================
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));

// =====================
// 📦 User Schema
// =====================
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const User = mongoose.model("User", userSchema);

// =====================
// 🔐 Signup API
// =====================
app.post("/api/auth/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "Signup successful" });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// =====================
// 🔐 Login API
// =====================
app.post("/api/auth/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.json({
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// =====================
// 🚀 Start Server
// =====================
app.listen(PORT, () => {
    console.log(`🔥 Nexus Arena Server running on http://localhost:${PORT}`);
});