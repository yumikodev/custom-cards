# Custom Cards

Un simple módulo de manipulación de imágenes con Canvas, escrito en TypeScript.

[![Downloads](https://img.shields.io/npm/dt/custom-cards.svg?maxAge=3600)](https://www.npmjs.com/package/custom-cards)
[![NPM Version](https://img.shields.io/npm/v/custom-cards.svg?maxAge=3600)](https://www.npmjs.com/package/custom-cards)

## Tabla de contenido

- [Instalación](#instalación)
- [Importar Módulo](#importar-módulo)
- [Tarjetas](#tarjetas)
- Métodos
  - [Estáticos](#métodos-estáticos)
  - [Extras](#métodos-extras)
- [Clase `Welcome`](#clase-welcome)
- [Función `render`](#función-render)

- [**Detalles del proyecto**](#detalles-del-proyecto)

## Instalación

```
npm install custom-cards
```

## Uso

### Importar módulo

- ESM:

```js
import * as CustomCards from "custom-cards";
```

- CommonJS:

```js
const CustomCards = require("custom-cards");
```

### Tarjetas:

Los métodos disponibles al importar el módulo.

| Tarjeta   | Tipo      |
| --------- | --------- |
| _Welcome_ | _`Class`_ |

### Métodos estáticos:

- [`<card>.render()`](#función-render)

### Métodos extras:

| Método       | Tipo       | Descripción                                |
| ------------ | ---------- | ------------------------------------------ |
| registerFont | `Function` | Registra tus propias fuentes tipográficas. |
| Fonts        | `Enum`     | Enumerado con las fuentes por defecto.     |

### Clase `Welcome`:

| Método                   | Tipo                     | Descripción                                  |
| ------------------------ | ------------------------ | -------------------------------------------- |
| _setAvatar(**options**)_ | options: `AvatarOptions` | Establece el avatar de la tarjeta.           |
| _setImage(**src**)_      | src: `Source`            | Establece la imágen de fondo. **(opcional)** |
| _setFont(**font**)_      | font: `Fonts \| string`  | Establece la fuente tipográfica.             |
| _setText(**options**)_   | options: `TextOptions[]` | Establece el texto de la tarjeta.            |

```js
const card = new CustomCards.Welcome()
  .setAvatar({
    src: "https://yumikodev.vercel.app/avatar.webp",
    frameColor: "#ff7eae",
    frameType: "square",
  })
  .setImage("https://cdn.nekos.life/wallpaper/cGsBtWbjaGs.jpg")
  .setText([
    {
      content: "Bienvenid@ usuario",
      color: "#fff",
    },
    {
      content: "Descripción aquí.",
      color: "#eee",
    },
  ])
  .setFont(Fonts.Fredoka);
```

#### Ejemplo:

[![img](https://raw.githubusercontent.com/Yumiko0828/custom-cards/main/docs/img1.png)](https://www.npmjs.com/package/custom-cards)

### Función `render`:

El uso de la función `render` (teoría).

> [!NOTE]
> La función `render` es asíncrona, por lo que tendra que usar _`Promesas`_ o _`async / await`_.

- Ejemplo de uso:

  Cada [tarjeta](#tarjetas) tendrá un método estático que construirá la Tarjeta respectiva. A esta función se le debe pasar la instancia de la tarjeta.

  ```js
  const buffer = await Welcome.render(card);

  console.log(buffer);
  ```

## Detalles del proyecto:

- Licencia: **[MIT License](https://github.com/Yumiko0828/custom-cards/blob/main/LICENSE.md)**
- Autor: **[Yasu Yumiko](https://discord.com/users/752918867273187378)**

### Gracias :D
