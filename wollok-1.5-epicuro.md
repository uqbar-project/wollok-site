---
layout: hyde
title: 'Novedades'
weight: 10
lang: 'es'
---

<div>
<img src="/images/news.png" height="64" width="64" align="left"/>

<h1>&nbsp;&nbsp;¡Estamos preparando lo que se viene!</h1>
</div>

## Hackatones 2017

Muy pronto sale el nuevo release de Wollok 1.6 (Freire). Mucho antes, para definir nuestra hoja de ruta, funcionalidades nuevas y corrección de errores, armamos un equipo de
trabajo y nos juntamos una vez por mes para contarnos novedades, hacer sociales y 
aprender del trabajo de los demás. Si te interesa participar ¡<a href="/comunidad/index.html">contactanos</a>!

<div style="float: left;" class="slideLeft">
<img src="/images/WollokMeeting2017_1.jpg" alt="image" height="50%" width="50%" align="left" style="padding: 5px; border-radius: 40px;"/>
<img src="/images/WollokMeeting2017_2.jpg" alt="image" height="50%" width="50%" align="right" style="padding: 5px; border-radius: 40px;"/>
<img src="/images/WollokMeeting2017_3.jpg" alt="image" height="50%" width="50%" align="left" style="padding: 5px; border-radius: 40px;"/>
<img src="/images/WollokMeeting2017_4.jpg" alt="image" height="50%" width="50%" align="right" style="padding: 5px; border-radius: 40px;"/>
</div>


<h1>&nbsp;&nbsp;¡Salió Wollok 1.5 Epicuro!</h1>

## Lo nuevo
¡Se incorporaron muchas clases nuevas!

* **Date**
* **Interval:** que modela un intervalo continuo de números reales
* **Dictionary:** una implementación de un mapa de claves y valores

![image](https://cloud.githubusercontent.com/assets/4549002/17170349/fe20ee22-53c1-11e6-87e1-2517003a5490.png)

También tenés una gran variedad de **nuevos** métodos en estas clases:

* **String**
* **números**
* **collections**

Recordá que podés buscar clases de la librería nativa Wollok presionando Ctrl + Shift + F3 y escribiendo el nombre de la clase deseada:

![image](https://cloud.githubusercontent.com/assets/4549002/17170623/5d5d3cbe-53c3-11e6-8086-c47df70caf3d.png)

## Wollokdoc
(Casi) todas las clases y métodos ahora están documentadas en (Wollok)doc, con ejemplos concretos.

![image](https://cloud.githubusercontent.com/assets/4549002/17155608/2dff4762-535c-11e6-92e7-733bf93d880d.png)

## Librerías
Hubo un gran cambio en las librerías nativas de Wollok. Ahora tenés varios archivos .wlk más cortos y extensibles:

* lang.wlk
* lib.wlk
* game.wlk

## Chequeos

Wollok ahora valida que solo uses 'self' dentro de un WKO (**well known object**) y no apuntes al nombre de la referencia concreta:

![image](https://cloud.githubusercontent.com/assets/4549002/17172042/b5bd609a-53c9-11e6-8c8b-e37c519652f8.png)

También advierte al desarrollador cuando define una variable únicamente para devolver un valor:

![image](https://cloud.githubusercontent.com/assets/4549002/17172301/c8e34dbe-53ca-11e6-8211-994bb0042f8c.png)

También se chequean otros **bad smells**, como la expresión 

```scala
if (true) return true else false
```

![image](https://cloud.githubusercontent.com/assets/4549002/17172426/71f868b2-53cb-11e6-8c05-30167eeecc32.png)


# IDE (Entorno de desarrollo)

## Editor
En las ventanas de edición había un problema en las versiones 1.4.x: se duplicaban líneas (o insertaba espacios en blanco en lugares extraños). Salvo contados casos (difíciles de reproducir) este incidente fue solucionado.

## Integración con SVN
Wollok trae ahora una integración con SVN (Subversion) mediante el plugin subversive:

![image](https://cloud.githubusercontent.com/assets/4549002/17162413/36a110a0-538c-11e6-9939-0cd22683bd34.png)

![image](https://cloud.githubusercontent.com/assets/4549002/17162432/80088f5c-538c-11e6-95a9-f2f7b830b0c0.png)

## Consola REPL
**Nuevas funcionalidades:**

* Se puede pegar texto del portapapeles (admite varias líneas)
* Soporta copiar al portapapeles texto plano y RTF sin los molestos caracteres de escape ANSI
* Ya no es necesario correr la consola REPL a partir de un archivo (Run REPL without a file)

## Diagramas
Podés activar el diagrama estático (por el momento automático) de Wollok seleccionando Window > Show View > Other... Static Diagram

**Nuevas funcionalidades:**

* Se puede exportar el diagrama a formato PNG
![image](https://cloud.githubusercontent.com/assets/4549002/17155290/cff20804-535a-11e6-85da-2dfad3f9a7e3.png)
* WKO y Mixins se ubican arriba, de izquierda a derecha, en ese orden
 * Las clases se acomodan en función de los WKO y Mixins existentes
* Los objetos ya no muestran la herencia hacia _Object class_. 
 * Sí muestran relaciones de herencia entre objetos y clases diferentes de Object. 
 * Ahora se muestran relaciones de herencia entre objetos y mixins 
* Las superclases se acomodan por defecto arriba y centradas a las subclases
* Se filtran los **accessors** (métodos getters/setters), basándose en el contrato de los métodos que se llaman igual que variables definidas en la misma clase

**Errores solucionados:**

* las conexiones quedaban mal posicionadas cuando subías o bajabas con los scrolls o cuando cambiabas el tamaño de la ventana. 
* Se duplicaban los mixins compartidos entre clases y objetos. 
* No aparecían los nombres las variables de instancia. 

<div>
<img src="/images/bug.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;Issues resueltos</h1>
</div>

Podés ver [aquí](https://github.com/uqbar-project/wollok/milestone/6?closed=1) la lista de issues resueltos para este release. 