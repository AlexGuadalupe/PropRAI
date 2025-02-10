const sql = `
    CREATE TABLE IF NOT EXISTS Users (
                                         id INTEGER PRIMARY KEY AUTOINCREMENT, -- Use AUTOINCREMENT for SQLite
                                         nombre TEXT NOT NULL,
                                         apellidos TEXT NOT NULL,
                                         email TEXT UNIQUE NOT NULL,
                                         password TEXT NOT NULL,
                                         direccion TEXT,
                                         telefono TEXT,
                                         fecha_de_nacimiento TEXT,
                                         cliente BOOLEAN DEFAULT 1, -- SQLite uses BOOLEAN for true/false
                                         agente BOOLEAN DEFAULT 0
    );
`;

module.exports = sql;
