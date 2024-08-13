class Persona {
    constructor(nombre, apellidos, edad, sexo, domicilio) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.edad = edad;
      this.sexo = sexo;
      this.domicilio = domicilio;
    }
  
    obtenerInformacion() {
      return `${this.nombre} ${this.apellidos}, Edad: ${this.edad}, Sexo: ${this.sexo}, Domicilio: ${this.domicilio}`;
    }
  }
  
  class Autoridad {
    constructor(nombre, apellidos, cargo) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.cargo = cargo;
    }
  
    formalizarActo() {
      return `${this.nombre} ${this.apellidos} ha formalizado el acto como ${this.cargo}.`;
    }
  }
  
  
  class Matrimonio {
    constructor(fecha, lugar, contrayente1, contrayente2, testigo1, testigo2, autoridad) {
      this.fecha = fecha;
      this.lugar = lugar;
      this.contrayente1 = contrayente1;
      this.contrayente2 = contrayente2;
      this.testigo1 = testigo1;
      this.testigo2 = testigo2;
      this.autoridad = autoridad;
    }
  
    registrarMatrimonio() {
      return `Matrimonio registrado en ${this.lugar} el ${this.fecha}`;
    }
  
    obtenerDatos() {
      return `
        Matrimonio registrado el: ${this.fecha}
        Lugar: ${this.lugar}
        Contrayentes:
           ${this.contrayente1.obtenerInformacion()}
           ${this.contrayente2.obtenerInformacion()}
        Testigos:
           ${this.testigo1.obtenerInformacion()}
           ${this.testigo2.obtenerInformacion()}
        Autoridad:
          ${this.autoridad.formalizarActo()}`;
    }
  }
 
  let contrayente1 = new Persona('Juan', 'Pérez', 30, 'Masculino', 'Calle Falsa 123');
  let contrayente2 = new Persona('María', 'Gómez', 28, 'Femenino', 'Avenida Siempreviva 742');
  let testigo1 = new Persona('Pedro', 'López', 35, 'Masculino', 'Calle Luna 45');
  let testigo2 = new Persona('Ana', 'Martínez', 32, 'Femenino', 'Calle Sol 76');
  

  let autoridad = new Autoridad('Carlos', 'Ramírez', 'Juez Municipal');
  

  let matrimonio = new Matrimonio('2024-08-11', 'Morelia', contrayente1, contrayente2, testigo1, testigo2, autoridad);
  
  console.log(matrimonio.obtenerDatos());