

class Veterinario {
    constructor(nombre, DNI) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.pacientes = [];
        this.clientes = [];
    }

    agregarPaciente(mascota) {
        this.pacientes.push(mascota);
    }

    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

    mostrarDetalles() {
        console.log(`Veterinario: ${this.nombre}, DNI: ${this.DNI}`);
        console.log('Clientes:');
        for (let i = 0; i < this.clientes.length; i++) {
            console.log(this.clientes[i].obtenerDetalles());
        }
        console.log('Pacientes:');
        for (let i = 0; i < this.pacientes.length; i++) {
            console.log(this.pacientes[i].obtenerDetalles());
        }
    }
}

class Cliente {
    constructor(codigo, primerApellido, numCuentaBancaria, direccion, telefono) {
        this.codigo = codigo;
        this.primerApellido = primerApellido;
        this.numCuentaBancaria = numCuentaBancaria;
        this.direccion = direccion;
        this.telefono = telefono;
        this.personas = [];
        this.mascotas = [];
    }

    agregarPersona(persona) {
        this.personas.push(persona);
    }

    agregarMascota(mascota) {
        this.mascotas.push(mascota);
    }

    obtenerDetalles() {
        let personasDetalles = '';
        for (let i = 0; i < this.personas.length; i++) {
            if (i > 0) personasDetalles += ', ';
            personasDetalles += this.personas[i].nombre;
        }

        let mascotasDetalles = '';
        for (let i = 0; i < this.mascotas.length; i++) {
            if (i > 0) mascotasDetalles += ', ';
            mascotasDetalles += this.mascotas[i].alias;
        }

        return `Cliente: ${this.codigo}, Apellido: ${this.primerApellido}, Cuenta: ${this.numCuentaBancaria}, Direccion: ${this.direccion}, Telefono: ${this.telefono}, Personas: ${personasDetalles}, Mascotas: ${mascotasDetalles}`;
    }
}

class Persona {
    constructor(nombre, DNI) {
        this.nombre = nombre;
        this.DNI = DNI;
    }
}

class Mascota {
    constructor(codigo, alias, especie, raza, colorPelo, fechaNacimiento, pesoMedio, pesoActual) {
        this.codigo = codigo;
        this.alias = alias;
        this.especie = especie;
        this.raza = raza;
        this.colorPelo = colorPelo;
        this.fechaNacimiento = fechaNacimiento;
        this.pesoMedio = pesoMedio;
        this.pesoActual = pesoActual;
        this.historialMedico = new HistorialMedico();
    }

    registrarVisita(pesoActual) {
        this.pesoActual = pesoActual;
    }

    obtenerDetalles() {
        return `Mascota: ${this.alias}, Especie: ${this.especie}, Raza: ${this.raza}, Color: ${this.colorPelo}, Fecha Nac: ${this.fechaNacimiento}, Peso Medio: ${this.pesoMedio}, Peso Actual: ${this.pesoActual}`;
    }
}

class HistorialMedico {
    constructor() {
        this.enfermedades = [];
        this.vacunas = [];
    }

    agregarEnfermedad(enfermedad) {
        this.enfermedades.push(enfermedad);
    }

    agregarVacuna(vacuna) {
        this.vacunas.push(vacuna);
    }

    obtenerDetalles() {
        let enfermedadesDetalles = '';
        for (let i = 0; i < this.enfermedades.length; i++) {
            if (i > 0) enfermedadesDetalles += ', ';
            enfermedadesDetalles += `${this.enfermedades[i].nombre} (${this.enfermedades[i].fechaInicio})`;
        }

        let vacunasDetalles = '';
        for (let i = 0; i < this.vacunas.length; i++) {
            if (i > 0) vacunasDetalles += ', ';
            vacunasDetalles += `${this.vacunas[i].fecha} - ${this.vacunas[i].enfermedad.nombre}`;
        }

        return `Enfermedades: ${enfermedadesDetalles}, Vacunas: ${vacunasDetalles}`;
    }
}

class Enfermedad {
    constructor(nombre, fechaInicio) {
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
    }
}

class Vacuna {
    constructor(fecha, enfermedad) {
        this.fecha = fecha;
        this.enfermedad = enfermedad;
    }
}


let veterinario = new Veterinario("Dr. Lopez", "12345678A");
let cliente = new Cliente("C001", "Gómez", "ES1234567890", "Av. Ejemplo 1", "123456789");
let persona = new Persona("Juan Gómez", "87654321B");
let mascota = new Mascota("M001", "Rex", "Perro", "Labrador", "Negro", "2018-05-12", 30, 28);
let enfermedad = new Enfermedad("Gripe", "2023-01-15");
let vacuna = new Vacuna("2023-01-20", enfermedad);

mascota.historialMedico.agregarEnfermedad(enfermedad);
mascota.historialMedico.agregarVacuna(vacuna);
cliente.agregarPersona(persona);
cliente.agregarMascota(mascota);
veterinario.agregarCliente(cliente);
veterinario.agregarPaciente(mascota);

veterinario.mostrarDetalles();
