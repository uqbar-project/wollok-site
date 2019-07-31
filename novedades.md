---
layout: hyde
title: 'Novedades'
weight: 60
lang: 'es'
icon: 'podcast'
---

<div class="container">
<img src="/images/news.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;¡Nuevo release: Wollok Hypatia!</h1>
<br>
</div>


<div class="container" style="text-align: center; margin-bottom: 1em;">
    <img src="/images/news/hypatia.jpg"/>
</div>


Esta versión homenajea a [Hypatia](https://es.wikipedia.org/wiki/Hipatia), una filósofa neoplatónica griega, que destacó en los campos de las matemáticas, la astronomía, el álgebra y la geometría.

La versión 1.8 de Wollok está disponible, ¡y trae muchas novedades!

- ¡el **sistema de inferencia de tipos** ya viene activado por defecto en tu versión inicial de Wollok! De esa manera vas a poder tener información de los tipos de tus definiciones: variables, parámetros, y detectar errores más tempranamente
- nació una nueva herramienta: [wollok-cli](https://github.com/uqbar-project/wollok-cli), que permite [**integración continua de tus proyectos con Travis**](../documentacion/apuntes#integracion-con-travis) y automatizar tus tareas. Hacé click en el link ¡y descubrí todas las opciones que tenés!
- tenemos un renovado **diagrama dinámico** integrado con la consola REPL, para que veas cómo se relacionan los objetos en el ambiente
- mejoramos la experiencia de la consola REPL para que además consuma menos recursos. Y le agregamos una nueva funcionalidad: **ahora podés importar cualquier archivo de tu proyecto en la consola**. Te lo contamos mejor en la solapa Console del [tour](../tour)
- los [**parámetros nombrados**](https://docs.google.com/document/d/11c9l3sqgUIFDx1J_ULCSS86faMQXAyOV3uesg-nwaSY/edit#heading=h.vj2ax6a4f7xh) se utilizan por defecto para construir e inicializar todos los objetos
- modificamos el reporte de errores del validador para que puedas explorar el lenguaje con más flexibilidad (bajando la severidad de varios errores a advertencias)
- la función de autocompletado es más inteligente, filtrando mensajes privados de los objetos, y mostrando primero los que pertenecen al objeto
- mejoramos la performance de las listas y de los conjuntos de Wollok
- incorporamos nuevos métodos en la biblioteca de elementos que viene con Wollok (días de la semana como _wko_, `toString` para fechas y pares, métodos `left(), right(), reverse()` en String, `copyWith(), copyWithout()` en Collection, etc.)
- el Test Runner te permite copiar la pila de ejecución de errores, para facilitar el envío por mail, y también te muestra el tiempo que tardaron en ejecutarse esos tests
- mejoramos el tratamiento de parámetros nulos para que sea más fácil de encontrar errores en tus programas
- y seguimos incorporando quick fixes (como reemplazar `self` en lugar de llamar explícitamente al wko por su nombre)

entre muchas otras cosas. El resumen de issues resueltos las tenés aquí: para la [1.8.0](https://github.com/uqbar-project/wollok/milestone/26?closed=1) (versión pre-release) y [1.8.1](https://github.com/uqbar-project/wollok/milestone/28?closed=1).

## Sumamos nuevas personas al equipo!!

A partir de julio hicimos dos hackatones: [una con comida china](https://twitter.com/wollokLang/status/1150785337108680704) y [la segunda más tradicional, con empanadas](https://twitter.com/wollokLang/status/1156572239241863169), donde se incorporaron alumn@s de la Universidad Nacional de San Martín y de la Universidad Nacional de Quilmes, para ayudarnos a mejorar día a día el producto.

¡Te esperamos a vos [cuando quieras](../comunidad)!

<div class="container">
<br>
<hr>
<img src="/images/bug.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;¿En qué estamos trabajando?</h1>
<br/>
</div>

Podés ver [aquí](https://github.com/uqbar-project/wollok/milestone/25) la lista de issues que estamos encarando para el próximo release y lo que [ya hicimos](https://github.com/uqbar-project/wollok/milestone/25?closed=1). 