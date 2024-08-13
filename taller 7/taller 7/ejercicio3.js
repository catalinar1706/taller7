class producto {
    constructor(id, nombre, precio, cantidadDisponible) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidadDisponible = cantidadDisponible;
    }
  }
  
  // estado del pedido
  let estadoPedido = {
    pendiente: 'pendiente',
    pagado: 'pagado',
    procesando: 'procesando',
    enviado: 'enviado',
    entregado: 'entregado'
  };
  
  // clase para representar un pago
  class pago {
    constructor(monto, fecha, tipo) {
      this.monto = monto;
      this.fecha = fecha;
      this.tipo = tipo;
    }
  
    mostrarDatos() {
      return `monto: ${this.monto}, fecha: ${this.fecha.toISOString().split('T')[0]}, tipo: ${this.tipo}`;
    }
  }
  
  
  class tarjetaDeCredito extends pago {
    constructor(monto, fecha, numero, fechaCaducidad, tipoTarjeta) {
      super(monto, fecha, 'tarjeta de credito');
      this.numero = numero;
      this.fechaCaducidad = fechaCaducidad;
      this.tipoTarjeta = tipoTarjeta; 
    }
  
    mostrarDatos() {
      return `${super.mostrarDatos()}, numero: ${this.numero}, fecha de caducidad: ${this.fechaCaducidad.toISOString().split('T')[0]}, tipo: ${this.tipoTarjeta}`;
    }
  }
  
  class efectivo extends pago {
    constructor(monto, fecha, moneda) {
      super(monto, fecha, 'efectivo');
      this.moneda = moneda;
    }
  
    mostrarDatos() {
      return `${super.mostrarDatos()}, moneda: ${this.moneda}`;
    }
  }
  

  class cheque extends pago {
    constructor(monto, fecha, nombre, entidad) {
      super(monto, fecha, 'cheque');
      this.nombre = nombre;
      this.entidad = entidad;
    }
  
    mostrarDatos() {
      return `${super.mostrarDatos()}, nombre: ${this.nombre}, entidad: ${this.entidad}`;
    }
  }
  

  class pedido {
    constructor(id, fecha) {
      this.id = id;
      this.fecha = fecha;
      this.productos = [];
      this.pagos = [];
      this.estado = estadoPedido.pendiente;
    }
  
    calcularCosteTotal() {
      let total = 0;
      for (let i = 0; i < this.productos.length; i++) {
        let producto = this.productos[i];
        total += producto.precio * producto.cantidadDisponible;
      }
      return total;
    }
  
    actualizarEstado(estado) {
      this.estado = estado;
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    agregarPago(pago) {
      this.pagos.push(pago);
    }
  
    mostrarDatos() {
      let productosDatos = '';
      for (let i = 0; i < this.productos.length; i++) {
        let producto = this.productos[i];
        productosDatos += `id: ${producto.id}, nombre: ${producto.nombre}, precio: ${producto.precio}, cantidad: ${producto.cantidadDisponible}`;
        if (i < this.productos.length - 1) {
          productosDatos += ', ';
        }
      }
  
      let pagosDatos = '';
      for (let i = 0; i < this.pagos.length; i++) {
        pagosDatos += this.pagos[i].mostrarDatos();
        if (i < this.pagos.length - 1) {
          pagosDatos += ', ';
        }
      }
  
      return `pedido id: ${this.id}, fecha: ${this.fecha.toISOString().split('T')[0]}, coste total: ${this.calcularCosteTotal()}, estado: ${this.estado}, productos: [${productosDatos}], pagos: [${pagosDatos}]`;
    }
  }
  
  
  let producto1 = new producto(1, 'laptop', 1200, 2);
  let producto2 = new producto(2, 'mouse', 25, 3);
  
  let pedido1 = new pedido(101, new Date('2024-08-12'));
  
  pedido1.agregarProducto(producto1);
  pedido1.agregarProducto(producto2);
  
  let pago1 = new tarjetaDeCredito(1200, new Date('2024-08-12'), '1234567890123456', new Date('2025-08-12'), 'visa');
  let pago2 = new efectivo(25, new Date('2024-08-12'), 'usd');
  
  pedido1.agregarPago(pago1);
  pedido1.agregarPago(pago2);
  
  pedido1.actualizarEstado(estadoPedido.pagado);
  
  console.log(pedido1.mostrarDatos());