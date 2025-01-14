# Custom Cards

Un simple módulo de manipulación de imágenes con Canvas, escrito en TypeScript.

[![Downloads](https://img.shields.io/npm/dt/custom-cards.svg?maxAge=3600)](https://www.npmjs.com/package/custom-cards)
[![NPM Version](https://img.shields.io/npm/v/custom-cards.svg?maxAge=3600)](https://www.npmjs.com/package/custom-cards)

## Tabla de contenido

- [Instalación](#instalación)
- [Importar Módulo](#importar-módulo)
- [Uso básico](#uso-básico)
- [Detalles del proyecto](#detalles-del-proyecto)

## Instalación

```
npm install custom-cards
```

## Uso

### Importar módulo

> A partir de la versión 1.6.0 el módulo pasó a ser un ESM, por lo que usarlo con CommonJs puede llegar a dar problemas inesperados.

```js
import * as CustomCards from "custom-cards";
```

### Uso básico

```js
import { readFileSync } from "node:fs";

// Leemos una imágen local
const wpBuf = readFileSync("./wallpaper.jpg");

// Inicializamos el cliente (reemplazamos TOKEN por nuestro token)
const client = new CustomCards.Setup("TOKEN");

// Creamos el modelo de nuestra tarjeta
const card = new CustomCards.WelcomeCard({
  variant: "Classic",
  avatar: {
    // usamos "imageUrlAdapter" para usar imágenes desde una URL
    source: await CustomCards.imageUrlAdapter(
      "https://yumikodev.vercel.app/avatar.webp"
    ),
    frameColor: "#ff7eae",
    frameType: CustomCards.FrameType.Square,
  },
  background: await CustomCards.imageBufferAdapter(wpBuf),
  font: CustomCards.Fonts.Fredoka,
  text: [
    {
      content: "Bienvenid@ usuario",
      color: "#fff",
    },
    {
      content: "Descripción aquí.",
      color: "#eee",
    },
  ],
});

const data = await client.cards.createWelcomeCard(card);
console.log(data);
/*
{
  "mimetype": "image/webp",
  "card": Buffer<...>
}
*/
```

#### Ejemplo:

[![img](https://raw.githubusercontent.com/Yumiko0828/custom-cards/main/docs/img1.webp)](https://www.npmjs.com/package/custom-cards)

## Detalles del proyecto:

- Licencia: **[MIT License](LICENSE)**
- Autor: **[Yasu Yumiko](https://discord.com/users/752918867273187378)**
- [Servidor de Discord](https://discord.gg/YqUkagNPaw)
- [Documentación oficial](https://custom-cards-web.vercel.app/)

### Gracias :D
