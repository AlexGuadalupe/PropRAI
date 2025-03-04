const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("../models/user"); // Importing the functions from the model

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers();  // Get users from the database
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
});

// Create new user
router.post("/", async (req, res) => {
    const { nombre, apellidos, email, password, direccion, telefono, fecha_de_nacimiento, cliente, agente } = req.body;

    // Basic validation
    if (!nombre || !email || !password) {
        return res.status(400).json({ error: "Nombre, email, and password are required" });
    }

    try {
        // Call the createUser function from the model to insert into the DB
        const newUser = await createUser({
            nombre,
            apellidos,
            email,
            password,
            direccion,
            telefono,
            fecha_de_nacimiento,
            cliente,
            agente
        });

        res.status(201).json(newUser);  // Return the newly created user
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
});

module.exports = router;
