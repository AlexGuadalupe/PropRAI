const express = require("express");
const router = express.Router();
const User = require("../models/user");

let users = [];
// Get all users
router.get("/", async (req, res) => {
    res.json(users);
});

// Create new user
router.post("/", async (req, res) =>{
    const { nombre, apellidos, email, password, direccion, telefono, fecha_de_nacimiento, cliente, agente } = req.body;
    if (!nombre || !email || !password) {
        return res.status(400).json({error: "Nombre, email, and password are required"});
    }
    
    const newUser = new User(
        users.length + 1,
        nombre,
        apellidos,
        email,
        password,
        direccion,
        telefono,
        fecha_de_nacimiento,
        cliente,
        agente,
    );
    users.push(newUser)
    res.status(201).json(newUser);
})

module.exports = router;