const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./PropRAI.db", sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.error("❌ Database Connection error:", err.message);
    console.log("✅ Connected to the SQLite database");
});

// Create the users table (if it doesn't already exist)
db.serialize(() => {
    const sql = `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        apellidos TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        direccion TEXT,
        telefono TEXT UNIQUE,
        fecha_de_nacimiento TEXT,
        cliente INTEGER DEFAULT 1,  -- Stored as INTEGER (0 or 1)
        agente INTEGER DEFAULT 0,  -- Stored as INTEGER (0 or 1)
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`;

    db.run(sql, (err) => {
        if (err) {
            console.error("❌ Error creating Users table:", err.message);
        } else {
            console.log("✅ Users table ready.");
        }
    });
});

// Create a new user
const createUser = ({ nombre, apellidos, email, password, direccion, telefono, fecha_de_nacimiento, cliente, agente }) => {
    console.log("🔄 Preparing to insert user...");

    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Users (nombre, apellidos, email, password, direccion, telefono, fecha_de_nacimiento, cliente, agente) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        db.run(sql, [nombre, apellidos, email, password, direccion, telefono, fecha_de_nacimiento, cliente, agente], function (err) {
            if (err) {
                console.error("❌ Error inserting user into DB:", err.message);
                reject(err);
            } else {
                console.log(`✅ User inserted with ID: ${this.lastID}`);
                resolve({
                    id: this.lastID,
                    nombre,
                    apellidos,
                    email,
                    direccion,
                    telefono,
                    fecha_de_nacimiento,
                    cliente,
                    agente
                });
            }
        });
    });
};

// Get all users
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM Users", (err, rows) => {
            if (err) {
                console.error("❌ Error fetching users:", err.message);
                reject(err);
            } else {
                console.log("✅ Users retrieved successfully.");
                resolve(rows);
            }
        });
    });
};

module.exports = { getAllUsers, createUser };
