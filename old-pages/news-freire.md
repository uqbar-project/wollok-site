---
layout: hyde
lang: 'es'
---

<div class="container">
<img src="/images/news.png" height="64" width="64" align="left"/>

<h1>&nbsp;&nbsp;¡Tenemos una nueva versión: Wollok Freire!</h1>
</div>

<img src="/images/news-freire/paulo-freire.jpg" height="170" width="170" align="left" style="padding: 0rem 0.5rem 0rem 0.5rem !important; margin-bottom: 0rem;"/>

Tenemos un nuevo release de Wollok: la versión 1.6 que homenajea al gran educador <a href="https://es.wikipedia.org/wiki/Paulo_Freire">Paulo Freire</a>. Su obra es fuente de inspiración para todos los que abordamos el camino de la enseñanza.

Este nuevo producto es fruto de un gran equipo de docentes de programación y desarrolladores, donde una vez al mes nos juntamos para contarnos novedades, hacer sociales y 
aprender del trabajo de los demás. Si te interesa participar ¡<a href="/comunidad/index.html">contactanos</a>!

## ¡Salió el último release: 1.6.3! ##

En [este link](https://github.com/uqbar-project/wollok/milestone/18?closed=1) podés ver los últimos arreglos y funcionalidades que sacamos en la versión **1.6.3** el 04/10/2017
 
<div/>

## ¡Conocé lo nuevo! ##

Podés ver <a href="https://github.com/uqbar-project/wollok/milestone/11?closed=1">en este link</a> el resumen de todos los issues (más de 100) que fueron resueltos. Pero para que sea más amena la introducción te contamos qué cosas nuevas trae:

* <a href="#conjunto-de-tests" class="wollokLink">Soporte para generar un conjunto de tests con estado compartido</a>
* <a href="#mejoras-al-lenguaje" class="wollokLink">Mejoras al lenguaje</a>
* <a href="#nuevas-validaciones" class="wollokLink">Nuevas validaciones</a>
* <a href="#quick-fixes" class="wollokLink">Quick Fixes</a>
* <a href="#organizacion-general-del-proyecto" class="wollokLink">Organización general del Proyecto</a>
* <a href="#mejoras-al-diagrama-estatico" class="wollokLink">Mejoras al Diagrama estático</a>
* <a href="#mejoras-en-la-consola-repl" class="wollokLink">Mejoras en la consola REPL</a>
* <a href="#cambios-en-los-plugins" class="wollokLink">Cambios en los Plugins</a>
* <a href="#soporte-para-bibliotecas-externas" class="wollokLink">Soporte para bibliotecas externas</a>

<hr>

<!--
## Sistema de inferencia de tipos ##

Wollok permite configurar un sistema propio de inferencia de tipos, que agrega

* detección de tipos para las referencias (variables y parámetros)
* validación de uso de tipos adecuado para los mensajes de cada objeto

Esto permite que no tengas que escribirlos explícitamente, sino dejar que Wollok los infiera por vos, como ocurre en otros lenguajes como Scala, Go, Haskell, Swift, entre otros.

<img src="/images/news-freire/typeSystem10.png"/>

Al posicionarte sobre una variable o parámetro, podés ver cuál es el tipo inferido. De la misma manera cuando buscás con Ctrl + Barra qué mensajes podés enviar a un objeto, se visualizan solo los métodos que dicho objeto entiende:

![image](/images/news-freire/typeSystem3.png)

Y en la solapa Outline (Resumen) tenés un resumen de los tipos encontrados por el sistema de tipos de Wollok:

![image](/images/news-freire/typeSystem5.png)

Para configurar el sistema de tipos, tenés la opción Ventana > Preferencias...

-->

## Conjunto de tests ##

Anteriormente solo podíamos generar un archivo con tests aislados. Ahora se incorpora una nueva posibilidad: generar un conjunto de tests con estado compartido.

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/testSuite.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light">
        </div>
        </a>
    </div>
</div>
<br>

* Tenemos varios tests que comparten el mismo objeto cuyo estado inicial se define en un **fixture** (lo que asegura que sean independientes y repetibles)

* La solapa que muestra los resultados de los tests está integrada con el editor, por eso cuando hay un error podemos navegar directamente a la línea donde se produjo
* Si presionamos en el botón *Mostrar solamente fallas y errores* la vista filtra los tests que debemos corregir, lo que permite al usuario concentrarse en dichos casos de prueba
* A partir de esta versión se puede ejecutar todos los tests de un proyecto (tanto para tests individuales como para *describes*):

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/allTests.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

En la solapa Outline (Resumen) vemos cómo es la estructura de un *describe*

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/testSuite2.png" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

## Mejoras al lenguaje ##

Más allá de correcciones menores, lo más interesante que trae Wollok Freire es un cambio importante respecto a los constructores:

* toda clase hereda los constructores de su superclase, es decir que no está obligado a definir un constructor solo para llamar a super
* a menos que explícitamente decida generar sus constructores: en ese caso valen únicamente los constructores de dicha clase

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/constructors.png" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

Recordá que podés buscar clases de la biblioteca nativa Wollok presionando Ctrl + Shift + F3 y escribiendo el nombre de la clase deseada:

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="https://cloud.githubusercontent.com/assets/4549002/17170623/5d5d3cbe-53c3-11e6-8086-c47df70caf3d.png" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

## Nuevas Validaciones ##

El feedback que recibimos de la herramienta nos permitió agregar nuevos controles para detectar tempranamente problemas en los programas:

* Se encuentran referencias cíclicas de jerarquías (A hereda de B, B hereda de A por ejemplo) para evitar un *loop infinito*
* Se detectan errores de concepto como redefinir un método para solamente llamar a super
* Se castellanizaron los mensajes de error para facilitar la lectura al estudiante de habla española

Varios chequeos nuevos más se agregaron, y muchos más esperemos incorporar en próximas versiones.

## Quick Fixes

Se mejoró la experiencia de usuario respecto a los quick fixes, como podemos apreciar en esta pequeña demostración:

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/quickFix.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

* Se castellanizaron los mensajes para facilitar la lectura al estudiante de habla española
* Los quick fixes trabajan ahora hacia cualquier archivo al que necesiten acceder (en versiones anteriores fallaba la creación de métodos, entre otros elementos, cuando eso involucraba un archivo diferente del que se estaba manipulando)
* Se mejoraron quick fixes en tests, *describes*, y dentro de clases la creación de constructores, métodos redefinidos, nuevas referencias.


## Organizacion general del proyecto

Wollok permite organizar proyectos en packages, cuando éstos empiezan a tornarse voluminosos.

La forma de referenciar los objetos y clases en las sentencias imports es agregando como prefijo los nombres de los *packages* o carpetas terminando con un punto:

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/packages.png" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>


## Mejoras al Diagrama estatico

Wollok ofrece un diagrama estático que se integra con las demás herramientas del entorno:

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/staticDiagram.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

Ahora tenés muchas más funcionalidades disponibles:

* Los ajustes manuales y la configuración en general se almacena para que nunca pierdas tus cambios
* Tiene una forma inteligente de dibujar el diagrama
* Podés configurar qué clases, variables o métodos mostrar en el diagrama (por defecto no muestra las variables ni los getters, ni los constructores)
* Te recordamos dos funcionalidades que ya estaban presentes: permite llevarte hacia el editor de código con un doble click y podés exportar el diagrama a un archivo de imagen png
* Detecta automáticamente las relaciones de herencia. Por el momento las relaciones de asociación y dependencia las tenés que definir a mano a partir de la barra de herramientas que está a la derecha. Cuando comenzás a marcar relaciones de asociación o dependencia el diagrama asume que por defecto vas a generar varias relaciones, entonces tenés que volver a elegir "Selección" para dejar de generar relaciones.
* Todas las acciones pueden deshacerse, de manera de volver a mostrar elementos ocultos, o volver a definir relaciones entre elementos.

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/staticDiagram2.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>

* Y en la versión 1.6.1 se incorporó la posibilidad de agregar cualquier clase externa que esté en el mismo proyecto

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/staticDiagram3.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>


## Mejoras en la Consola REPL ##

* Solucionamos el problema de pegar texto desde el portapapeles, que obligaba a escribir un espacio para que funcionara
* Se puede ejecutar la consola REPL sin tener un proyecto abierto
* Cuando hay un error, podés navegar por la pila de ejecución directamente hacia el código (se integra con el editor)

<div class="container">
    <div class="view overlay hm-white-slight">
        <img src="/images/news-freire/replConsole.gif" class="img-fluid z-depth-2"/>
        <a>
            <div class="mask flex-center waves-effect waves-light hoverable">
        </div>
        </a>
    </div>
</div>
<br>


## Cambios en los plugins

En esta versión 

* el plugin para compartir código por defecto es [EGit](http://www.eclipse.org/egit/), que integra Git con una instalación de Eclipse
* el plugin para SVN ya no viene con la instalación, por lo que si lo necesitás podés descargarlo en forma manual [desde el Marketplace](https://marketplace.eclipse.org/content/subclipse), **como cualquier otro plugin que quieras utilizar**


## Soporte para bibliotecas externas ##

A partir de esta versión, Wollok permite correr cualquier archivo .wlk, .wtest o .wpgm pasándole cualquier biblioteca externa que pueda compilar una JDK 1.8. 

Esto habilita a que cualquier proyecto tuyo tenga bibliotecas .jar y que en la configuración de ejecución (Run Configuration) vos puedas indicar que use dichas bibliotecas. 

<div class="container">
<hr>
</div>

<div class="container">
<img src="/images/bug.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;Issues resueltos</h1>
<br>
</div>

Podés ver la lista de issues resueltos de cada release de 1.6:

* [1.6.0](https://github.com/uqbar-project/wollok/milestone/11?closed=1)
* [1.6.1](https://github.com/uqbar-project/wollok/milestone/15?closed=1)
* [1.6.2](https://github.com/uqbar-project/wollok/milestone/16?closed=1)
* [1.6.3](https://github.com/uqbar-project/wollok/milestone/18?closed=1) 