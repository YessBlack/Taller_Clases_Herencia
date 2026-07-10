// 2 Cine Colombia

class Pelicula {
  constructor(titulo, duracion) {
    this.titulo = titulo
    this.duracion = duracion
    this.precioBoleta = 15000
  }

  getPrecioBoleta() {
    return this.precioBoleta
  }

  ficha() {
    return `Pelicula: ${this.titulo} ― ${this.duracion} Minutos ($ ${this.getPrecioBoleta()})`
  }
}

class PeliculaVIP extends Pelicula {
  constructor(titulo, duracion, incluyeComida) {
    super(titulo, duracion)
    this.incluyeComida = incluyeComida
  }

  getPrecioBoleta() {
    const precioFinal = this.precioBoleta + 25000
    return this.incluyeComida ? precioFinal + 18000 : precioFinal
  }
}

const peliculaNormal1 = new Pelicula('El Hobbit: Un viaje Inesperado', 120)
console.log(peliculaNormal1.ficha())

const peliculaVIP1 = new PeliculaVIP('Harry Potter y el misterio del príncipe', 130, true)
console.log(peliculaVIP1.ficha())

const peliculaVIP2 = new PeliculaVIP('Harry Potter y la orden del Fénix', 125, false)
console.log(peliculaVIP2.ficha())
