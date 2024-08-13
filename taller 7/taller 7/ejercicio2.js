class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    toString() {
      return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
  }
  
  class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
      super(nombre, edad);
      this.sueldo = sueldo;
    }
  
    toString() {
      return `${super.toString()}, Sueldo: ${this.sueldo}`;
    }
  }
  
  class Directivo extends Empleado {
    constructor(nombre, edad, sueldo) {
      super(nombre, edad, sueldo);
      this.subordinados = [];
    }
  
    agregarSubordinado(empleado) {
      this.subordinados.push(empleado);
    }
  
    toString() {
      let resultado = `${super.toString()}, Subordinados: `;
      for (let i = 0; i < this.subordinados.length; i++) {
        resultado += `${this.subordinados[i].toString()} `;
      }
      return resultado;
    }
  }
  
  let empleado1 = new Empleado("Juan", 30, 2000);
  let empleado2 = new Empleado("María", 25, 1800);
  let directivo = new Directivo("Pedro", 40, 3000);
  
  directivo.agregarSubordinado(empleado1);
  directivo.agregarSubordinado(empleado2);
  
  console.log(directivo.toString());