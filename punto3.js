// 3. Usuarios Nequi

class UsurioNequi {
  constructor(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
  }

  enviarMonto(monto) {
    if (monto > this.saldo) {
      return `Nombre: ${this.nombre} ― Saldo Insuficiente`
    }

    this.saldo = this.saldo - monto

    return `Nombre: ${this.nombre} ― Nuevo Saldo: $ ${this.saldo}`
  }
}

class ComercioNequi extends UsurioNequi {
  constructor(nombre, saldo, comision) {
    super(nombre, saldo)
    this.comision = comision
  }

  enviarMonto(monto) {
    const comision = monto * (this.comision / 100)
    const total = monto + comision

    return super.enviarMonto(total)
  }
}

const usuarioNequi1 = new UsurioNequi('Angelica Garcia', 500000)
console.log(usuarioNequi1.enviarMonto(200000))
console.log(usuarioNequi1.enviarMonto(700000))

const comercioNequi1 = new ComercioNequi('Guillermo Sanchez', 500000, 10)
console.log(comercioNequi1.enviarMonto(200000))
console.log(comercioNequi1.enviarMonto(700000))
