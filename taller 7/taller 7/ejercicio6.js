class Paciente {
    constructor(historiaClinica, nombre, direccion) {
        this.historiaClinica = historiaClinica;
        this.nombre = nombre;
        this.direccion = direccion;
        this.analisis = [];
    }

    agregarAnalisis(analisis) {
        this.analisis.push(analisis);
        console.log("Análisis añadido:", analisis.obtenerDetalles());
    }
}

class EmpleadoSanitario {
    constructor(numeroEmpleado, nombre, tipo) {
        this.numeroEmpleado = numeroEmpleado;
        this.nombre = nombre;
        this.tipo = tipo;
    }

    mostrarInfo() {
        return `${this.tipo}: ${this.nombre} (Num: ${this.numeroEmpleado})`;
    }
}


class Medico extends EmpleadoSanitario {
    constructor(numeroEmpleado, nombre, especialidad) {
        super(numeroEmpleado, nombre, "Médico");
        this.especialidad = especialidad;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Especialidad: ${this.especialidad}`;
    }
}


class Enfermero extends EmpleadoSanitario {
    constructor(numeroEmpleado, nombre) {
        super(numeroEmpleado, nombre, "Enfermero");
    }
}


class Analisis {
    constructor(referencia, tipo, fecha, resultados, medico, enfermeros) {
        this.referencia = referencia;
        this.tipo = tipo;
        this.fecha = fecha;
        this.resultados = resultados;
        this.medico = medico;
        this.enfermeros = enfermeros;
    }

    obtenerDetalles() {
        
        let dia = this.fecha.getDate();
        let mes = this.fecha.getMonth() + 1; 
        let ano = this.fecha.getFullYear();
        let fecha = `${dia}/${mes}/${ano}`;

       
        let enfermerosInfo = "";
        for (let i = 0; i < this.enfermeros.length; i++) {
            if (i > 0) enfermerosInfo += ", ";
            enfermerosInfo += this.enfermeros[i].mostrarInfo();
        }
        
        return `Ref: ${this.referencia}, Tipo: ${this.tipo}, Fecha: ${fecha}, Resultados: ${this.resultados}, Médico: ${this.medico.mostrarInfo()}, Enfermeros: ${enfermerosInfo}`;
    }
}


let paciente = new Paciente("12345", "Ana Gomez", "Calle Falsa 123");
let medico = new Medico("001", "Dr. Perez", "Cardiologia");
let enfermero1 = new Enfermero("101", "Luis Fernandez");
let enfermero2 = new Enfermero("102", "Maria Lopez");
let analisis = new Analisis("A001", "Sangre", new Date(), "Todo bien", medico, [enfermero1, enfermero2]);

paciente.agregarAnalisis(analisis);