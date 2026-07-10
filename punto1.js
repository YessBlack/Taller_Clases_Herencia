// 1. Rappi
class Restaurante {
  constructor(nombre, categoria, calificacion) {
    this.nombre = nombre
    this.categoria = categoria
    this.calificacion = calificacion
  }

  describir() {
    return `${this.nombre} ― ${this.categoria} (${this.calificacion}⭐️)`
  }

  estaBienCalificado() {
    return this.calificacion >= 4.5
  }
}

const restaurante1 = new Restaurante('Sacuenco Cafe Bar', 'Picada Sencilla', 4.8)
const restaurante2 = new Restaurante('Zabdi', 'Malteada', 4.6)

console.log(restaurante1.describir())
console.log(restaurante2.describir())
