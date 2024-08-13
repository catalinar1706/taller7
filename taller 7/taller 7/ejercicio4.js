class Cliente {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.pedidos = [];
    }

    agregarPedido(pedido) {
        this.pedidos.push(pedido);
    }
}

class Pedido {
    constructor(fechaFormalizacion, estado) {
        this.fechaFormalizacion = fechaFormalizacion;
        this.estado = estado;
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularCostoTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].precio * this.productos[i].cantidad;
        }
        return total;
    }
}

class Producto {
    constructor(nombre, precio, cantidad, impuesto, existencias) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.impuesto = impuesto;
        this.existencias = existencias;
    }
}

class Pago {
    constructor(fechaPago, cantidadPagada, tipo) {
        this.fechaPago = fechaPago;
        this.cantidadPagada = cantidadPagada;
        this.tipo = tipo;
    }
}

class TarjetaCredito extends Pago {
    constructor(fechaPago, cantidadPagada, tipo, fechaCaducidad, numero, tipoTarjeta) {
        super(fechaPago, cantidadPagada, tipo);
        this.fechaCaducidad = fechaCaducidad;
        this.numero = numero;
        this.tipoTarjeta = tipoTarjeta; 
    }
}

class Cheque extends Pago {
    constructor(fechaPago, cantidadPagada, tipo, nombre, entidadBancaria) {
        super(fechaPago, cantidadPagada, tipo);
        this.nombre = nombre;
        this.entidadBancaria = entidadBancaria;
    }
}

class Efectivo extends Pago {
    constructor(fechaPago, cantidadPagada, tipo, moneda) {
        super(fechaPago, cantidadPagada, tipo);
        this.moneda = moneda;
    }
}

// Ejemplo de uso

let cliente = new Cliente("Juan Pérez", "Calle 123", "555-1234");

let producto1 = new Producto("Laptop", 1500, 1, 0.16, 10);
let producto2 = new Producto("Mouse", 25, 2, 0.16, 50);

let pedido = new Pedido("2024-08-13", "pendiente");
pedido.agregarProducto(producto1);
pedido.agregarProducto(producto2);

cliente.agregarPedido(pedido);

console.log(`Total del pedido: $${pedido.calcularCostoTotal()}`);

let pago = new TarjetaCredito("2024-08-13", pedido.calcularCostoTotal(), "tarjeta", "2025-05", "123456789", "VISA");

console.log(`Pago realizado por ${cliente.nombre} con ${pago.tipoTarjeta}`);
