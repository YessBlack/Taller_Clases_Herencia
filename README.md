# Taller: Clases y Herencia en JavaScript

Taller práctico sobre **programación orientada a objetos** en JavaScript, enfocado en el uso de clases, herencia y polimorfismo. Cada ejercicio modela un escenario real inspirado en servicios colombianos.

## Requisitos

- [Node.js](https://nodejs.org/) v14 o superior

No se requieren dependencias externas.

## Estructura del proyecto

```
Taller_Clases_Herencia/
├── punto1.js   # Clases básicas
├── punto2.js   # Herencia y sobrescritura de métodos
├── punto3.js   # Herencia con super()
├── punto4.js   # Polimorfismo
├── package.json
└── README.md
```

## Ejercicios

### Punto 1 — Rappi (`punto1.js`)

Clase `Restaurante` con propiedades básicas y métodos para describir el local y verificar si tiene buena calificación.

**Conceptos:** constructor, propiedades de instancia, métodos.

```bash
node punto1.js
```

**Salida esperada:**
```
Sacuenco Cafe Bar ― Picada Sencilla (4.8⭐️)
Zabdi ― Malteada (4.6⭐️)
```

---

### Punto 2 — Cine Colombia (`punto2.js`)

Clase base `Pelicula` y subclase `PeliculaVIP` que extiende el precio de la boleta según el tipo de sala y si incluye comida.

**Conceptos:** `extends`, `super()`, sobrescritura de métodos.

```bash
node punto2.js
```

**Salida esperada:**
```
Pelicula: El Hobbit: Un viaje Inesperado ― 120 Minutos ($ 15000)
Pelicula: Harry Potter y el misterio del príncipe ― 130 Minutos ($ 58000)
Pelicula: Harry Potter y la orden del Fénix ― 125 Minutos ($ 40000)
```

---

### Punto 3 — Nequi (`punto3.js`)

Clase `UsuarioNequi` para transferencias con validación de saldo, y subclase `ComercioNequi` que aplica una comisión porcentual antes de descontar el monto.

**Conceptos:** herencia, `super()` para reutilizar lógica del padre, validación de condiciones.

```bash
node punto3.js
```

**Salida esperada:**
```
Nombre: Angelica Garcia ― Nuevo Saldo: $ 300000
Nombre: Angelica Garcia ― Saldo Insuficiente
Nombre: Guillermo Sanchez ― Nuevo Saldo: $ 280000
Nombre: Guillermo Sanchez ― Saldo Insuficiente
```

---

### Punto 4 — SITP (`punto4.js`)

Jerarquía de vehículos de transporte público: `Vehiculo` (base), `Alimentador`, `BusDual` y `BusArticulado`, cada uno con su propia tarifa.

**Conceptos:** polimorfismo, arreglos de objetos, iteración con `for...of`.

```bash
node punto4.js
```

**Salida esperada:**
```
Placa: ABC123 ― 20 Pasajeros ($ 2950)
Placa: KLM458 ― 15 Pasajeros ($ 0)
Placa: BHY667 ― 30 Pasajeros ($ 2500)
Placa: LPN890 ― 40 Pasajeros ($ 3500)
```

## Conceptos clave

| Concepto | Descripción | Archivo |
|---|---|---|
| Clase y constructor | Plantilla para crear objetos con estado y comportamiento | `punto1.js` |
| Herencia (`extends`) | Una clase hija adquiere propiedades y métodos de la padre | `punto2.js`, `punto3.js`, `punto4.js` |
| `super()` | Llama al constructor o métodos de la clase padre | `punto2.js`, `punto3.js` |
| Sobrescritura | Redefinir un método en la subclase con comportamiento distinto | `punto2.js`, `punto4.js` |
| Polimorfismo | Invocar el mismo método en distintos tipos y obtener resultados diferentes | `punto4.js` |

## Licencia

ISC
