class User {
    constructor(id, nombre, apellidos, email, password, direccion, telefono, fecha_de_nacimiento, cliente, agente) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fecha_de_nacimiento = fecha_de_nacimiento;
        this.cliente = cliente;
        this.agente = agente;
    }
}

module.exports = User;