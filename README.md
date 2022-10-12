# Custom Cards

Un simple módulo de manipulación de imágenes con Canvas, escrito en TypeScript.

[![Downloads](https://img.shields.io/npm/dt/custom-cards.svg?maxAge=3600)](https://www.npmjs.com/package/custom-cards)
[![NPM Version](https://img.shields.io/npm/v/custom-cards.svg?maxAge=3600)](https://www.npmjs.com/package/custom-cards)

- [**ESPAÑOL**](#spanish---español)

  - [Instalación](#📦-instalación)
  - [Uso](#❔-uso)
    - [Importar Módulo](#importar-módulo)
    - [Métodos](#métodos-de-custom-cards)
    - [Clase `Welcome`](#clase-welcome)
      - [Parámetros](#parámetros)
      - [Métodos](#métodos)
        - [setAvatar()](#setavatar)
        - [setBackground()](#setbackground)
        - [setText()](#settext)
      - [Ejemplo](#ejemplo-de-uso)
      - [Resultado final](#resultado-final)
    - [Clase `Level`](#clase-level)
      - [Parámetros](#parc3a1metros-1)
      - [Métodos](#mc3a9todos-1)
        - [setAvatar()](#setavatar-1)
        - [setBackground()](#setbackground-1)
        - [setText()](#settext-1)
        - [setXPLevel()](#setxplevel)
      - [Ejemplo](#ejemplo-de-uso-1)
      - [Resultado final](#resultado-final-1)
    - [Función `render`](#función-render)
      - [Parámetros](#parc3a1metros-2)
      - [Ejemplo de uso](#ejemplo-de-uso)

- [**ENGLISH**](#english---inglés)

  - [Installation](#📦-installation)
  - [Use](#❔-use)
    - [Import module](#import-module)
    - [Methods](#custom-card-methods)
    - [`Welcome` class](#welcome-class)
      - [Parameters](#parameters)
      - [Methods](#methods)
        - [setAvatar()](#setavatar-2)
        - [setBackground()](#setbackground-2)
        - [setText()](#settext-2)
      - [Usage example](#usage-example)
      - [Result](#result)
    - [`Level` class](#level-class)
      - [Parameteres](#parameters-1)
      - [Methods](#methods-1)
        - [setAvatar()](#setavatar-3)
        - [setBackground()](#setbackground-3)
        - [setText()](#settext-3)
        - [setXPLevel()](#setxplevel-1)
      - [Usage example](#usage-example-1)
      - [Result](#result-1)
    - [`render` function](#render-function)
      - [Parameters](#parameters-2)
      - [Usage example](#usage-example-2)

- [**✨ Detalles del proyecto**](#✨-detalles-del-proyecto)

---

## Spanish - Español:

## 📦 Instalación

```
npm install custom-cards
```

## ❔ Uso

> Puede experimentar problemas al usar Node.js v18 debido a la dependencia `Canvas`, se recomienda usar la versión LTS de Node.js

### Importar módulo

- ES6:

```js
import * as CustomCards from "custom-cards";
```

- CommonJS:

```js
const CustomCards = require("custom-cards");
```

### Métodos de Custom Cards:

Los métodos disponibles al importar el módulo.

| Método    | Tipo         | Devuelve  |
| --------- | ------------ | --------- |
| _Welcome_ | _`Class`_    | `Welcome` |
| _Level_   | _`Class`_    | `Level`   |
| _render_  | _`Function`_ | `Buffer`  |
| _Colors_  | _`Enum`_     | `Enum`    |

### Clase `Welcome`:

El uso de la clase `Welcome` (teoría).

#### Parámetros:

| Parámetro            | Tipo     | Descripción                        |
| -------------------- | -------- | ---------------------------------- |
| _options_            | `Object` | Las opciones de la tarjeta.        |
| _options#fontFamily_ | `String` | El estilo de la tipografía a usar. |

#### Métodos:

> **Nota:** En la v1.5.0 se agregaron las propiedades **type** en Métodos que usen imágenes.
>
> El tipo cambia dependiendo de lo que eligió en **_\<property>#type_**, si eligió `"url"` el tipo sera `String`, si eligió `"buffer"` el tipo sera `Buffer`.
>
> El `Buffer` es para imágenes locales, que no tengan una dirección URL.
>
> Esto le puede traer problemas con los tipos si no los usa correctamente.

| Método                  | Parámetros          | Descripción                            |
| ----------------------- | ------------------- | -------------------------------------- |
| _Welcome#setAvatar_     | _`options: Object`_ | Las opciones del Avatar.               |
| _Welcome#setBackground_ | _`options: Object`_ | Las opciones del fondo **(opcional)**. |
| _Welcome#setText_       | _`options: Object`_ | Las opciones de los textos.            |

#### _setAvatar()_:

| Propiedad               | Tipo                  | Descripción                          |
| ----------------------- | --------------------- | ------------------------------------ |
| _setAvatar#type_        | _`"url" \| "buffer"`_ | El tipo de la imágen (URL o Buffer). |
| _setAvatar#data_        | _`String \| Buffer`_  | Los datos de la imágen.              |
| _setAvatar#circleColor_ | _`Colors \| string`_  | El color de círculo del Avatar.      |

#### _setBackground()_:

| Propiedad            | Tipo                  | Descripción                          |
| -------------------- | --------------------- | ------------------------------------ |
| _setBackground#type_ | _`"url" \| "buffer"`_ | El tipo de la imágen (URL o Buffer). |
| _setBackground#data_ | _`String \| Buffer`_  | Los datos de la imágen.              |

#### _setText()_:

| Propiedad                         | Tipo                 | Descripción                                |
| --------------------------------- | -------------------- | ------------------------------------------ |
| _setText#title_                   | _`Object`_           | Las propiedades del título.                |
| _setText#title#content_           | _`String`_           | El contenido del título.                   |
| _setText#title#color_             | _`Colors \| String`_ | El color del título.                       |
| _setText#title#shadowColor_       | _`Colors \| String`_ | El color de las sombras del título.        |
| _setTitle#description_            | _`Object`_           | Las propiedades de la descripción.         |
| _setText#description#content_     | _`String`_           | El contenido de la descripción.            |
| _setText#description#color_       | _`Colors \| String`_ | El color de la descripción.                |
| _setText#description#shadowColor_ | _`Colors \| String`_ | El color de las sombras de la descripción. |

#### Ejemplo de uso:

```js
const card = new CustomCards.Welcome({
  fontFamily: "FredokaOne",
})
  .setAvatar({
    type: "url",
    data: "https://cdn.discordapp.com/avatars/752918867273187378/de580e21ed76965a55395c6ab4646d2e.png?size=1024",
    circleColor: Colors.White,
  })
  .setBackground({
    type: "url",
    data: "https://cdn.nekos.life/wallpaper/cGsBtWbjaGs.jpg",
  })
  .setText({
    title: {
      content: "Bienvenid@ usuario",
      color: Colors.Pink,
      shadowColor: Colors.Black,
    },
    description: {
      content: "Descripción aquí.",
      color: Colors.White,
      shadowColor: Colors.Black,
    },
  });
```

#### Resultado final:

[![img](/docs/img1.png)](https://www.npmjs.com/package/custom-cards)

### Clase `Level`:

#### Parámetros:

| Parámetro            | Tipo       | Descripción                        |
| -------------------- | ---------- | ---------------------------------- |
| _options_            | _`Object`_ | Las opciones de la tarjeta         |
| _options#fontFamily_ | _`String`_ | El estilo de la tipografía a usar. |

#### Métodos:

| Método                | Parámetros          | Descripción                            |
| --------------------- | ------------------- | -------------------------------------- |
| _Level#setAvatar_     | _`options: Object`_ | Las opciones del Avatar.               |
| _Level#setBackground_ | _`options: Object`_ | Las opciones del fondo **(opcional)**. |
| _Level#setText_       | _`options: Object`_ | Las opciones de los textos.            |
| _Level#setXPLevel_    | _`options: Object`_ | Las opciones del nivel.                |

#### _setAvatar()_:

| Propiedad               | Tipo                  | Descripción                          |
| ----------------------- | --------------------- | ------------------------------------ |
| _setAvatar#type_        | _`"url" \| "buffer"`_ | El tipo de la imágen (URL o Buffer). |
| _setAvatar#data_        | _`String \| Buffer`_  | Los datos de la imágen.              |
| _setAvatar#circleColor_ | _`Colors \| string`_  | El color de círculo del Avatar.      |

#### _setBackground()_:

| Propiedad            | Tipo                  | Descripción                          |
| -------------------- | --------------------- | ------------------------------------ |
| _setBackground#type_ | _`"url" \| "buffer"`_ | El tipo de la imágen (URL o Buffer). |
| _setBackground#data_ | _`String \| Buffer`_  | Los datos de la imágen.              |

#### _setText()_:

| Propiedad                   | Tipo                 | Descripción                        |
| --------------------------- | -------------------- | ---------------------------------- |
| _setText#user_              | _`Object`_           | Las propiedades del usuario.       |
| _setText#user#name_         | _`String`_           | El nombre de usuario.              |
| _setText#user#color_        | _`Colors \| String`_ | El color del nombre de usuario.    |
| _setText#user#shadowColor_  | _`Colors \| String`_ | El color del nombre de usuario.    |
| _setText#rank_              | _`Object`_           | Las propiedades del rango.         |
| _setText#rank#name_         | _`String`_           | El texto del rango **(opcional)**. |
| _setText#rank#color_        | _`Colors \| String`_ | El color del texto del rango.      |
| _setText#rank#shadowColor_  | _`Colors \| String`_ | El color del texto del rango.      |
| _setText#level_             | _`Object`_           | Las propiedades del nivel.         |
| _setText#level#name_        | _`String`_           | El texto del nivel **(opcional)**. |
| _setText#level#color_       | _`Colors \| String`_ | El color del texto del nivel.      |
| _setText#level#shadowColor_ | _`Colors \| String`_ | El color del texto del nivel.      |

#### _setXPLevel()_:

| Propiedades                       | Tipo                 | Descripción                                  |
| --------------------------------- | -------------------- | -------------------------------------------- |
| _setXPLevel#barColor_             | _`Object`_           | Las propiedades del color de la barra de XP. |
| _setXPLevel#barColor#empty_       | _`Color \| String`_  | El color de la barra de XP vacía.            |
| _setXPLevel#barColor#filled_      | _`Color \| String`_  | El color de la barra de XP llena.            |
| _setXPLevel#barColor#shadowColor_ | _`Color \| String`_  | El color de la sombra de la barra de XP.     |
| _setXPLevel#rank_                 | _`String \| Number`_ | El número del rango.                         |
| _setXPLevel#level_                | _`String \| Number`_ | El número del nivel.                         |
| _setXPLevel#xp_                   | _`Object`_           | Las propiedades de la barra de XP.           |
| _setXPLevel#xp#current_           | _`String \| Number`_ | La cantidad de XP actual.                    |
| _setXPLevel#xp#max_               | _`String \| Number`_ | La cantidad de XP máxima.                    |
| _setXPLevel#xp#levelColor_        | _`Colors \| String`_ | El color del texto de la barra de XP.        |

#### Ejemplo de uso:

```js
const card = new CustomCards.Level({
  fontFamily: "FredokaOne",
})
  .setAvatar({
    type: "url",
    data: "https://cdn.discordapp.com/avatars/752918867273187378/de580e21ed76965a55395c6ab4646d2e.png?size=1024",
    circleColor: Colors.Pink,
  })
  .setBackground({
    type: "url",
    data: "https://cdn.nekos.life/wallpaper/cGsBtWbjaGs.jpg",
  })
  .setText({
    user: {
      name: "usuario#0000",
      color: Colors.White,
      shadowColor: Colors.Black,
    },
    level: {
      name: "Nivel",
      color: Colors.Pink,
      shadowColor: Colors.Black,
    },
    rank: {
      name: "Rango",
      color: Colors.White,
      shadowColor: Colors.Black,
    },
  })
  .setXPLevel({
    barColor: {
      empty: Colors.White,
      filled: Colors.Pink,
      shadowColor: Colors.Gray,
    },
    rank: 8,
    level: 15,
    xp: {
      current: 363,
      max: 646,
      levelColor: Colors.Pink,
    },
  });
```

#### Resultado final:

[![img](/docs/img2.png)](https://www.npmjs.com/package/custom-cards)

### Función `render`:

El uso de la función `render` (teoría).

> **Nota**: La propiedad **_type_** del parámetros **_options_** es necesaria, pues especifíca cuál será el tipo de tarjeta (Bienvenida o Nivel), configurarlo incorrectamente puede traerle errores.
>
> La función `render` es asíncrona, por lo que tendra que usar _`Promesas`_ o _`async / await`_.

#### Parámetros

| Parámetros      | Tipo                   | Descripción                          |
| --------------- | ---------------------- | ------------------------------------ |
| _options_       | `Object`               | Las opciones de la función `render`. |
| _options#type_  | `"level" \| "welcome"` | El tipo de la tarjeta.               |
| _options#model_ | `Welcome \| Level`     | El modelo de la tarjeta.             |

#### Ejemplo de uso:

```js
(async () => {
  try {
    let buffer = await CustomCard.render({
      type: "welcome",
      model: card,
    });

    console.log(buffer);
  } catch (err) {
    console.error(err);
  }
})();
```

---

## English - Inglés

## 📦 Installation

```
npm install custom-cards
```

## ❔ Use

> You may experience issues using Node.js v18 due to the `Canvas` dependency, it is recommended to use the LTS version of Node.js

### Import module

- ES6:

```js
import * as CustomCards from "custom-cards";
```

- CommonJS:

```js
const CustomCards = require("custom-cards");
```

### Custom Card Methods:

The methods available when importing the module.

| Method    | Type         | Return    |
| --------- | ------------ | --------- |
| _Welcome_ | _`Class`_    | `Welcome` |
| _Level_   | _`Class`_    | `Level`   |
| _render_  | _`Function`_ | `Buffer`  |
| _Colors_  | _`Enum`_     | `Enum`    |

### `Welcome` class:

The use of the `Welcome` class (theory).

#### Parameters:

| Parameter            | Type     | Description            |
| -------------------- | -------- | ---------------------- |
| _options_            | `Object` | Card options.          |
| _options#fontFamily_ | `String` | The font style to use. |

#### Methods:

> **Note:** In v1.5.0 **type** properties were added in Methods that use images.
>
> The type changes depending on what you chose in **_\<property>#type_**, if you chose `"url"` the type would be `String`, if you chose `"buffer"` the type would be `Buffer`.
>
> The `Buffer` is for local images, which do not have a URL.
>
> This can get you in trouble with types if you don't use them correctly.

| Method                  | Parameter           | Description                        |
| ----------------------- | ------------------- | ---------------------------------- |
| _Welcome#setAvatar_     | _`options: Object`_ | Avatar options.                    |
| _Welcome#setBackground_ | _`options: Object`_ | Background options **(optional)**. |
| _Welcome#setText_       | _`options: Object`_ | Text options.                      |

#### _setAvatar()_:

| Property                | Type                  | Description                            |
| ----------------------- | --------------------- | -------------------------------------- |
| _setAvatar#type_        | _`"url" \| "buffer"`_ | The type of the image (URL or Buffer). |
| _setAvatar#data_        | _`String \| Buffer`_  | The image data.                        |
| _setAvatar#circleColor_ | _`Colors \| string`_  | The circle color of the Avatar.        |

#### _setBackground()_:

| Property             | Type                  | Description                            |
| -------------------- | --------------------- | -------------------------------------- |
| _setBackground#type_ | _`"url" \| "buffer"`_ | The type of the image (URL or Buffer). |
| _setBackground#data_ | _`String \| Buffer`_  | The image data.                        |

#### _setText()_:

| Property                          | Type                 | Description                                  |
| --------------------------------- | -------------------- | -------------------------------------------- |
| _setText#title_                   | _`Object`_           | Title properties.                            |
| _setText#title#content_           | _`String`_           | The content of the title.                    |
| _setText#title#color_             | _`Colors \| String`_ | The color of the title.                      |
| _setText#title#shadowColor_       | _`Colors \| String`_ | The color of the shadows of the title.       |
| _setTitle#description_            | _`Object`_           | The properties of the description.           |
| _setText#description#content_     | _`String`_           | The content of the description.              |
| _setText#description#color_       | _`Colors \| String`_ | The color of the description.                |
| _setText#description#shadowColor_ | _`Colors \| String`_ | The color of the shadows of the description. |

#### Usage example:

```js
const card = new CustomCards.Welcome({
  fontFamily: "FredokaOne",
})
  .setAvatar({
    type: "url",
    data: "https://cdn.discordapp.com/avatars/752918867273187378/de580e21ed76965a55395c6ab4646d2e.png?size=1024",
    circleColor: Colors.White,
  })
  .setBackground({
    type: "url",
    data: "https://cdn.nekos.life/wallpaper/cGsBtWbjaGs.jpg",
  })
  .setText({
    title: {
      content: "Bienvenid@ usuario",
      color: Colors.Pink,
      shadowColor: Colors.Black,
    },
    description: {
      content: "Descripción aquí.",
      color: Colors.White,
      shadowColor: Colors.Black,
    },
  });
```

#### Result:

[![img](/docs/img1.png)](https://www.npmjs.com/package/custom-cards)

### `Level` class:

#### Parameters:

| Parameter            | Type       | Description            |
| -------------------- | ---------- | ---------------------- |
| _options_            | _`Object`_ | Card options.          |
| _options#fontFamily_ | _`String`_ | The font style to use. |

#### Methods:

| Method                | Parameter           | Description                        |
| --------------------- | ------------------- | ---------------------------------- |
| _Level#setAvatar_     | _`options: Object`_ | Avatar options.                    |
| _Level#setBackground_ | _`options: Object`_ | Background options **(optional)**. |
| _Level#setText_       | _`options: Object`_ | Text options.                      |
| _Level#setXPLevel_    | _`options: Object`_ | Level options.                     |

#### _setAvatar()_:

| Property                | Type                  | Description                            |
| ----------------------- | --------------------- | -------------------------------------- |
| _setAvatar#type_        | _`"url" \| "buffer"`_ | The type of the image (URL or Buffer). |
| _setAvatar#data_        | _`String \| Buffer`_  | The image data.                        |
| _setAvatar#circleColor_ | _`Colors \| string`_  | The circle color of the Avatar.        |

#### _setBackground()_:

| Propiedad            | Tipo                  | Descripción                            |
| -------------------- | --------------------- | -------------------------------------- |
| _setBackground#type_ | _`"url" \| "buffer"`_ | The type of the image (URL or Buffer). |
| _setBackground#data_ | _`String \| Buffer`_  | The image data.                        |

#### _setText()_:

| Property                    | Type                 | Description                           |
| --------------------------- | -------------------- | ------------------------------------- |
| _setText#user_              | _`Object`_           | The user properties.                  |
| _setText#user#name_         | _`String`_           | The username.                         |
| _setText#user#color_        | _`Colors \| String`_ | The color of the username.            |
| _setText#user#shadowColor_  | _`Colors \| String`_ | The color of the username.            |
| _setText#rank_              | _`Object`_           | The properties of the range.          |
| _setText#rank#name_         | _`String`_           | The text of the range **(optional)**. |
| _setText#rank#color_        | _`Colors \| String`_ | The text color of the range.          |
| _setText#rank#shadowColor_  | _`Colors \| String`_ | The text color of the range.          |
| _setText#level_             | _`Object`_           | The properties of the level.          |
| _setText#level#name_        | _`String`_           | The level text **(optional)**.        |
| _setText#level#color_       | _`Colors \| String`_ | The text color of the level.          |
| _setText#level#shadowColor_ | _`Colors \| String`_ | The text color of the level.          |

#### _setXPLevel()_:

| Property                          | Type                 | Description                                |
| --------------------------------- | -------------------- | ------------------------------------------ |
| _setXPLevel#barColor_             | _`Object`_           | The properties of the color of the XP bar. |
| _setXPLevel#barColor#empty_       | _`Color \| String`_  | The color of the empty XP bar.             |
| _setXPLevel#barColor#filled_      | _`Color \| String`_  | The color of the XP bar fills.             |
| _setXPLevel#barColor#shadowColor_ | _`Color \| String`_  | The shadow color of the XP bar.            |
| _setXPLevel#rank_                 | _`String \| Number`_ | The range number.                          |
| _setXPLevel#level_                | _`String \| Number`_ | The level number.                          |
| _setXPLevel#xp_                   | _`Object`_           | The properties of the XP bar.              |
| _setXPLevel#xp#current_           | _`String \| Number`_ | The current amount of XP.                  |
| _setXPLevel#xp#max_               | _`String \| Number`_ | The amount of maximum XP.                  |
| _setXPLevel#xp#levelColor_        | _`Colors \| String`_ | The text color of the XP bar.              |

#### Usage example:

```js
const card = new CustomCards.Level({
  fontFamily: "FredokaOne",
})
  .setAvatar({
    type: "url",
    data: "https://cdn.discordapp.com/avatars/752918867273187378/de580e21ed76965a55395c6ab4646d2e.png?size=1024",
    circleColor: Colors.Pink,
  })
  .setBackground({
    type: "url",
    data: "https://cdn.nekos.life/wallpaper/cGsBtWbjaGs.jpg",
  })
  .setText({
    user: {
      name: "usuario#0000",
      color: Colors.White,
      shadowColor: Colors.Black,
    },
    level: {
      name: "Nivel",
      color: Colors.Pink,
      shadowColor: Colors.Black,
    },
    rank: {
      name: "Rango",
      color: Colors.White,
      shadowColor: Colors.Black,
    },
  })
  .setXPLevel({
    barColor: {
      empty: Colors.White,
      filled: Colors.Pink,
      shadowColor: Colors.Gray,
    },
    rank: 8,
    level: 15,
    xp: {
      current: 363,
      max: 646,
      levelColor: Colors.Pink,
    },
  });
```

#### Result:

[![img](/docs/img2.png)](https://www.npmjs.com/package/custom-cards)

### `render` function:

The use of the `render` function (theory).

> **Note**: The **_type_** property of the **_options_** parameter is necessary, since it specifies what the type of card will be (Welcome or Level), configuring it incorrectly can lead to errors.
>
> The `render` function is asynchronous, so you'll have to use _`Promises`_ or _`async / await`_.

#### Parameters

| Parameter       | Type                   | Description                           |
| --------------- | ---------------------- | ------------------------------------- |
| _options_       | `Object`               | The options of the `render` function. |
| _options#type_  | `"level" \| "welcome"` | The type of the card.                 |
| _options#model_ | `Welcome \| Level`     | The model of the card.                |

#### Usage example:

```js
(async () => {
  try {
    let buffer = await CustomCard.render({
      type: "welcome",
      model: card,
    });

    console.log(buffer);
  } catch (err) {
    console.error(err);
  }
})();
```

---

## ✨ Detalles del proyecto:

- Licencia: **[MIT License](https://github.com/Yumiko0828/custom-cards/blob/main/LICENSE.md)**
- Autor: **[Yasu Yumiko](https://discord.com/users/752918867273187378)**

### Gracias :D
