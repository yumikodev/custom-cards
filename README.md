# Custom Cards

Un simple módulo de manipulación de imágenes con Canvas, escrito en TypeScript.

[![Downloads](https://img.shields.io/npm/dt/custom-cards.svg?maxAge=3600)](https://www.npmjs.com/package/custom-cards)
[![NPM Version](https://img.shields.io/npm/v/custom-cards.svg?maxAge=3600)](https://www.npmjs.com/package/custom-cards)

## 📦 Instalación

```
npm install custom-cards
```

## ❔ Uso

> Puede experimentar problemas al usar Node.js v18 debido a la dependencia `Canvas`, se recomienda usar la versión LTS de Node.js

Importar módulo

- ES6:

```js
import * as CustomCards from "custom-cards";
```

- CommonJS:

```js
const CustomCards = require("custom-cards");
```

### Métodos:

Los métodos disponibles al importar el módulo.

| Método    | Tipo         | Devuelve  |
| --------- | ------------ | --------- |
| _Welcome_ | _`Class`_    | `Welcome` |
| _render_  | _`Function`_ | `Buffer`  |

### Clase `Welcome`:

El uso de la clase `Welcome` (teoría).

- Parámetros:

| Parámetro        | Tipo     | Descripción                        |
| ---------------- | -------- | ---------------------------------- |
| _options_        | `Object` | Las opciones de la tarjeta.        |
| _options#family_ | `String` | El estilo de la tipografía a usar. |

- Métodos:

| Método                        | Parámetros         | Descripción                                   |
| ----------------------------- | ------------------ | --------------------------------------------- |
| _Welcome#setAvatar_           | `url: string`      | La URL de la imágen del avatar.               |
| _Welcome#setBackground_       | `url: string`      | La URL de la imágen del fondo **(opcional)**. |
| _Welcome#setTitle_            | `content: string`  | El título de la tarjeta.                      |
| _Welcome#setTitleColor_       | `hexColor: string` | El color hexadecimal del título.              |
| _Welcome#setDescription_      | `content: string`  | La descripción de la tarjeta **(opcional)**   |
| _Welcome#setDescriptionColor_ | `hexColor: string` | El color hexadecimal de la descripción.       |
| _Welcome#setCircleColor_      | `hexColor: string` | El color hexadecimal del circulo del avatar.  |

#### Ejemplo de uso:

```js
const card = new CustomCard.Welcome({
  family: "FredokaOne", // La tipografía de la tarjeta
})
  .setAvatar("https://cdn.nekos.life/avatar/avatar_28.png")
  .setTitle("Bienvenid@ usuario")
  .setTitleColor("#fff")
  .setDescription("Descripción...") // Opcional
  .setDescriptionColor("#fff") // Opcional
  .setCircleColor("#fff")
  .setBackground("https://cdn.nekos.life/wallpaper/T9EhHiObTEU.jpg"); // Opcional
```

### Función `render`:

El uso de la función `render` (teoría).

> La función `render` es asíncrona, por lo que tendra que usar _`Promesas`_ o _`async / await`_.

| Parametros      | Tipo      | Descripción                          |
| --------------- | --------- | ------------------------------------ |
| _options_       | `Object`  | Las opciones de la función `render`. |
| _options#type_  | `String`  | El tipo de la tarjeta.               |
| _options#model_ | `Welcome` | El modelo de la tarjeta              |

#### Ejemplo de uso:

```js
(async () => {
  try {
    let buffer = await CustomCard.render({
      type: "welcome", // El tipo de tarjeta.
      model: card, // El modelo de la tarjeta.
    });

    console.log(buffer); // El buffer de la tarjeta.
  } catch (err) {
    console.error(err);
  }
})();
```

## ✨ Detalles del proyecto:

- Licencia: **[MIT License](https://github.com/Yumiko0828/custom-cards/blob/main/LICENSE.md)**
- Autor: **[Yasu Yumiko](https://discord.com/users/752918867273187378)**

### Gracias :D
