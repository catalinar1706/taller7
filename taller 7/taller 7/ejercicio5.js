class Pasajero {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    
    obtenerInfo() {
        return `${this.nombre} ${this.apellidos}, Edad: ${this.edad}`;
    }
}

class Billete {
    constructor(numero, asiento, pasajero, vuelo) {
        this.numero = numero;
        this.asiento = asiento;
        this.pasajero = pasajero;
        this.vuelo = vuelo;
    }
    
    mostrarDetalles() {
        return `Billete Nº ${this.numero}, Asiento: ${this.asiento}, Pasajero: ${this.pasajero.obtenerInfo()}`;
    }
}

class Avion {
    constructor(matricula, capacidad) {
        this.matricula = matricula;
        this.capacidad = capacidad;
    }
    
    asignarVuelo(vuelo) {
        this.vuelo = vuelo;
        console.log(`Avión ${this.matricula} asignado al vuelo ${vuelo.numero}`);
    }
}

class Vuelo {
    constructor(numero, fecha, plazas, avion) {
        this.numero = numero;
        this.fecha = fecha;
        this.plazas = plazas;
        this.avion = avion;
        this.billetes = [];
    }
    
    reservarBillete(pasajero, asiento) {
        if (this.billetes.length < this.plazas) {
            let numeroBillete = `B-${this.billetes.length + 1}`;
            let billete = new Billete(numeroBillete, asiento, pasajero, this);
            this.billetes.push(billete);
            console.log(`Billete reservado: ${billete.mostrarDetalles()}`);
            return billete;
        } else {
            console.log('No hay plazas disponibles');
            return null;
        }
    }
}

class Compania {
    constructor(nombre) {
        this.nombre = nombre;
        this.vuelos = [];
        this.aviones = [];
    }
    
    ofertarVuelo(vuelo) {
        this.vuelos.push(vuelo);
        console.log(`Vuelo ${vuelo.numero} ofertado`);
    }
    
    agregarAvion(avion) {
        this.aviones.push(avion);
        console.log(`Avión ${avion.matricula} agregado`);
    }
}


let pasajero1 = new Pasajero("Juan", "Pérez", 30);
let avion1 = new Avion("ABC123", 150);
let vuelo1 = new Vuelo("V001", new Date(), 100, avion1);

let compania = new Compania("Viajes SA");
compania.agregarAvion(avion1);
compania.ofertarVuelo(vuelo1);

avion1.asignarVuelo(vuelo1);
vuelo1.reservarBillete(pasajero1, "12A");
