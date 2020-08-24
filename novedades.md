---
layout: hyde
title: 'Novedades'
weight: 60
lang: 'es'
icon: 'podcast'
---

<div class="container">
<img src="/images/news.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;¡Nuevo release: Wollok Ingalls!</h1>
<br>
</div>


<div class="container" style="text-align: center; margin-bottom: 1em;">
    <img src="/images/news/ingalls.png" width="30%" height="auto"/>
</div>


Esta versión homenajea a [Dan Ingalls](https://en.wikipedia.org/wiki/Dan_Ingalls), pionero de la programación orientada a objetos y el principal arquitecto de Smalltalk en Xerox Parc Place.

La versión 2.0 de Wollok está disponible, y además de la integración con Travis a partir de la herramienta [wollok-cli](https://github.com/uqbar-project/wollok-cli), el sistema de inferencia de tipos, las herramientas de detección y solución de errores,

- tenemos nueva iconografía, que diferencia mejor los archivos de definiciones, los de tests y los programas, y cada uno de los conceptos del lenguaje. Los íconos están adaptados para personas con capacidades visuales diferentes, para ayudarte en la experiencia de usuario.
- mejoramos el **diagrama dinámico**, que podés integrarlo no solo con la consola REPL sino también con los tests, lo que te ayudará a detectar problemas con algún test en particular (si anotás al test con la palabra `only` ejecuta ese test solo). Si querés ver más podés buscar la solapa Test Runner del [tour](../tour)
- tenés un aviso más claro en la consola REPL cuando modificás el archivo en medio de tus pruebas. Ahora podés reiniciar la consola desde cero, o incluso ejecutar todos los comandos de la última sesión. Te lo contamos mejor en la solapa Console del [tour](../tour)
- podés tener varios describe en un mismo archivo

entre muchas otras cosas. El resumen de issues resueltos las tenés aquí: para la [1.9.2](https://github.com/uqbar-project/wollok/milestone/32?closed=1) (versión pre-release), [2.0.0](https://github.com/uqbar-project/wollok/milestone/25?closed=1) y [2.0.1](https://github.com/uqbar-project/wollok/milestone/35?closed=1).

## ¡Seguimos avanzando!

Aun en un contexto mundial complejo, nos estamos encontrando virtualmente cada dos semanas a charlar sobre los próximos pasos de la herramienta: la interacción de wollok game, una nueva definición para los mixines, son algunas de las cuestiones en las que estamos trabajando. Si te interesa participar, ¡te esperamos a vos [cuando quieras](../comunidad)!

<div class="container">
<br>
<hr>
<img src="/images/bug.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;¿En qué estamos trabajando?</h1>
<br/>
</div>

Podés ver [aquí](https://github.com/uqbar-project/wollok/issues) la lista de issues que estamos encarando para el próximo release. 