const express = require('express');
const bodyParser = require('body-parser');
const { createUser } = require("./User");  // User.js handles the DB
const app = express();

app.use(bodyParser.json());

// POST route to create a user
app.post("/User", async (req, res) => {
    const { nombre, apellidos, email, password, direccion, telefono, fecha_de_nacimiento, cliente, agente } = req.body;

    // Basic validation
    if (!nombre || !email || !password) {
        return res.status(400).json({ error: "Nombre, email, and password are required" });
    }

    try {
        // Call the createUser function from User.js to insert into the DB
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
        console.error("❌ Error in POST /User:", error);
        res.status(500).json({ error: "Error creating user" });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});
