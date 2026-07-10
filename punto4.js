// 4. SITP

class Vehiculo {
  constructor(placa, pasajeros) {
    this.placa = placa
    this.pasajeros = pasajeros
  }

  getTarifa() {
    return 2950
  }

  getReporte() {
    return `Placa: ${this.placa} ― ${this.pasajeros} Pasajeros ($ ${this.getTarifa()})`
  }
}

class Alimentador extends Vehiculo {
  getTarifa() {
    return 0
  }
}

class BusDual extends Vehiculo {
  constructor(placa, pasajeros, esElectrico) {
    super(placa, pasajeros)
    this.esElectrico = esElectrico
  }

  getTarifa() {
    return this.esElectrico ? 2500 : 3200
  }
}

class BusArticulado extends Vehiculo {
  getTarifa() {
    return 3500
  }
}

const flota = [
  new Vehiculo('ABC123', 20),
  new Alimentador('KLM458', 15),
  new BusDual('BHY667', 30, true),
  new BusArticulado('LPN890', 40)
]

for (const vehiculo of flota) {
  console.log(vehiculo.getReporte())
}
