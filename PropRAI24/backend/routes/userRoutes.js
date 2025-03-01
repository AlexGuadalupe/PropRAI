const express = require("express");
const router = express.Router();
// Importing the functions from the model

// POST route to create a user
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
        console.error("❌ Error creating user:", error);
        res.status(500).json({ error: "Error creating user" });
    }
});

// GET route to fetch all users
router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers(); // Assuming getAllUsers fetches all users from the DB
        res.status(200).json(users); // Return the list of users
    } catch (error) {
        console.error("❌ Error fetching users:", error);
        res.status(500).json({ error: "Error fetching users" });
    }
});

module.exports = router;
