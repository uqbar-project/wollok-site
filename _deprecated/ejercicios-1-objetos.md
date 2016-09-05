---
layout: hyde
---

# Guía 1 - Ejercicios con objetos


## Ejercicio 1 – Aves y entrenadores

### Parte 1 - Pepita come y vuela

Definir un objeto **pepita** que entienda los mensajes:

* **energia**, que devuelve su energía actual
* **volar(metros)**, que consume energia a razón de 4 calorías por metro volado
* **comer(comida)** que aumenta la energía de pepita en tantas calorías como tenga la comida.

Para el estado interno de pepita, utilizar una única variable llamada **energia**, que arranque en 100 calorías y contenga todo el tiempo la energía actual de pepita.

Además necesitamos diferentes objetos que pepita pueda comer:

* **alpiste**, que otorga 5 calorías
* **manzana**, que otorga 80 calorías
* **hamburguesa**, que otorga 800 calorías. 

### Parte 2 - El picaflor pepe

El ornitólogo tiene otra ave: un picaflor llamado **pepe**. Pepe sabe hacer las mismas cosas que pepita, pero su consumo de energía es distinto:

<div class="sidenote">
<h3>Tip: Máximos y mínimos</h3>
<p>
Los números entienden dos mensajes útiles para calcular máximos y mínimos:
3.max(10) devuelve 10
3.min(10) devuelve 3
</p>
</div>

* Pepe es incansable, entonces al volar siempre consume lo mismo: 10 calorías. No importa cuantos metros vuele.
* Pepe es pequeño, no puede comer mucho... cualquier cosa que coma le da como máximo 10 calorías. 

### Parte 3 - Pepona, la gaviota gordinflona

Y el ornitólogo no descansa y nos pide que le modelemos un ave más, su gaviota **Pepona**.

Pepona tiene tendencia a engordar... y también es un poco vaga. Por eso, cada vez que vuela se cansa un poco más que la vez anterior. Al arrancar consume lo mismo que pepita: "cuatro calorías por metro", pero cada vez que vuela ese número se duplica.

Pero no todo es tan dramático, cuando logra comer algo su "consumo por metro" vuelve al valor original: 4.

### Parte 4 - Los entrenadores

Finalmente tenemos todas nuestras aves, así que es hora de ponerlas a trabajar. Para eso, el ornitólogo contrató tres entrenadores: Mickey Goldmill, Víktor Tíjonov y Coco Basile. 

Todos los entrenadores entienden el mensaje "entrenar" y reciben por parámetro a un ave. Por ejemplo nos gustaría poder ejecutar:

```scala
>>> mickey.entrenar(pepita)
```

Durante el entrenamiento se ocupan de que las aves coman y vuelen, cada uno según su estrategia particular.

El entrenamiento de **Mickey** es así:

* Volar 10 metros
* Comer alpiste
* Volar otros 10 metros
* Comer una manzana

**Viktor** es más duro:

* Volar 2000 metros
* Comer alpiste
* Volar 3000 metros
* Comer... un vaso de agua (progamar el objeto agua haciendo que el "comer" sirva también para el agua... el agua tiene 0 calorías)
* Volar otros 1000 metros

Y el **Coco**... también tiene su visión del asunto:

* Comer una hamburguesa
* Volar 3 metros
* Comer... vaso de Whiskey (300 calorías)

Habiendo programado todos los entrenadores y aves, desde el REPL podemos jugar un poco a ver qué entrenador se lleva mejor con cada una de las aves.

## Ejercicio 2 – Tom y Jerry 

Implementar en Wollok un objeto que represente a Tom, que es un gato. Lo que nos interesa de Tom es conocer su consumo de energía.
Cuándo Tom come un ratón su energía aumenta 120 calorías mas el peso del ratón (en gramos).
Pero para comerse un ratón, Tom tiene que correr hacia donde este se encuentra.
La velocidad a la que corre Tom es de 5 metros por segundo, mas la energía que posee en ese momento dividido 10.

Cuando Tom corre, su energía disminuye en 0.5 x cantidad de metros que corrió. 

Queremos saber si a Tom le conviene comer a un ratón, que está a cierta distancia, es decir, un método que nos devuelva true si la energía que gana por comérselo es mayor a la que consume corriendo hasta donde está el ratón.

## Ejercicio 3 - El Sueldo de Pepe

Una empresa donde trabaja nuestro empleado ejemplar nos pide realizar un programa que permita calcular el sueldo que cobran sus empleados. Vamos a usar a nuestro empleado favorito Pepe como muestra representativa.

### Parte 1 - Sueldo Base

Lo primero que vamos a hacer es calcular el sueldo base de pepe en función de su categoría. Hay dos categorías:

* **Gerente**, que cobra 2500 de sueldo base.
* **Cadete**, que cobra 2700 de sueldo base.
Lo que tenemos que hacer es que Pepe nos responda a un mensaje con el sueldo que cobra ese mes. 
Por supuesto que la categoría es algo que el objeto Pepe sabe, ya que es una representación de la realidad que nos queda cómoda. También podemos probar con otros empleados. Recordemos que un empleado puede cambiar de categoría en cualquier momento. 

### Parte 2 - Otra nueva categoria

Ahora aparece una nueva categoría, la categoría jefe esta categoría tiene un sueldo base de 2600. 
Como se modifica el problema para resolver este nuevo cambio.

### Parte 3 - Calculo de presentismo.

En esta parte vamos a calcular el bonus por presentismo. Este calculo se base en las categorías y tiene la siguiente forma:

* **Gerente** no cobra bonus por presentismo
* **Cadete** cobra 500 si no falto nunca
* **Jefe** cobra 350 si falta hasta 2 veces.
Parte 4 - Bono por productividad

Cada empleado sabe el porcentaje de completitud de sus objetivos mensuales, de 0 a 100. Por lo tanto van a cobrar un porcentaje extra de su sueldo base. Para esto hay dos categorías, los empleados que cobran bono por productividad y los que no. 

El bono se calcula como un 10% del sueldo base si se llego al 50% de los objetivos y 25% del sueldo base si se llego al 100%.


## Ejercicio 4 – Celulares 

### Parte 1

Se pide representar con objetos a personas que hablan entre sí por celulares. 
Juliana tiene un Motorola U9, y Catalina tiene un iPhone. 
El Motorola U9 pierde 0,25 "puntos" de batería por cada llamada, y el iPhone pierde 0,1% de la duración de cada llamada en batería. Ambos celulares tienen 5 "puntos" de batería como máximo.

Implementar a Juliana, Catalina, el Motorola U9 de Juliana y el iPhone de Catalina en el Repl y hacer que Juliana y Catalina se hagan llamadas telefónicas de distintas duraciones y poder:

* Conocer la cantidad de batería de cada celular. 
* Saber si un celular está apagado (si está sin batería).
* Recargar un celular (que vuelva a tener su batería completa).
* Saber si Juliana tiene el celular apagado; saber si Catalina tiene el celular apagado.

### Parte 2

Ahora podemos también tener en cuenta el costo de las llamadas que se hacen entre Catalina y Juliana. 
Catalina tiene contratado como servicio de telefonía celular a Movistar, Juliana a Personal. 
Movistar cobra fijo $0,60 final el minuto, Claro cobra 0,50 el minuto + 21% de IVA y Personal $0,70 final los primeros 10 minutos que usaste el celu, y $0,40 el minuto el resto. 

Se pide hacer un diagrama de objetos que represente esto y saber cuánta plata gastó cada uno luego de haberse hecho varias llamadas entre sí. 
¿Qué objeto me conviene que conozca a la compañía telefónica? 
¿Qué debería pasar con los gastos de llamadas si a Juliana se le rompe su celular y se compra uno nuevo?


## Ejercicio 5 – Mudanzas

* Describa qué comportamiento espera una empresa de mudanzas de un objeto que representa una silla y otro que representa un televisor; o sea qué mensajes les podría enviar y qué respuestas serían razonables. ¿Hay comportamiento en común? ¿Hay interfaz en común? P.ej. de ambos me va a interesar el peso. 
* ¿Qué otros objetos que maneja la empresa de mudanzas podría interactuar con sillas y televisores? P.ej. camión ... el resto piénselo uds.. Pensar qué mensajes le enviarían estos objetos a sillas y televisores. 
* Implementar con el ObjectBrowser dos sillas y tres televisores, un camión, y alguna interacción entre los mismos, en particular, el control del peso máximo que puede transportar un camión. Se puede suponer que un camión puede llevar como máximo 3 cosas. 
Realice un diagrama de objetos con los objetos creados hasta ahora.

## Ejercicio 6 – Mueblería

Relacione sillas, mesas y televisores según la visión de un vendedor de una tienda de artículos para el hogar, respecto del acto de venderlos más que de los argumentos de venta (precio, hasta cuántas cuotas, etc.). Suponer que nos interesa: armar una venta que puede vender un artículo a un cliente, para la venta se pueden establecer condiciones particulares (p.ej. cantidad de cuotas, descuento, fecha de entrega); y también poder reservar un artículo para un cliente.

* ¿Qué comportamiento y características de los objetos le son interesantes al vendedor?
* Para definir una venta, además del artículo (mesa o silla) ¿qué objeto/s viene/n bien?
* ¿Qué colaboraciones puede encontrar?
* Implementar en el Repl una silla, una mesa, y lo que haga falta para reservarlas y venderlas.

## Ejercicio 7 - Pintores

Necesitamos realizar un programa que nos permita calcular los presupuestos de dos pintores que trabajan de forma independiente. Cada uno de ellos tiene una forma distinta de cotizar sus trabajos, pero tenemos que saber para cada uno cuanto nos cuesta un determinado trabajo. Para simplificar, vamos a considerar que cada trabajo es una sola habitación. Tenemos dos habitaciones:

* **Comedor**: que tiene una área de 50 metros cuadrados para pintar. Y tiene una altura de 3 metros.
* **Cocina**: que tiene 3 paredes de 2.5 x 3 m y una de 2.5 x 3.5, y tiene una altura de 2.75 metros.

Además tenemos los pintores.

* **Carlos**, calcula su precio como $25 por metro cuadrado, y agrega $150 si la altura es mayor a 2.80 ya que tiene que alquilar una escalera. 
* **Manuel**, calcula su precio como una base de $250 para un costo de hasta 20 metros cuadrados y $30 por cada metro cuadrado adicional.

Se pide:
* Que los pintores entiendan el mensaje cotizar, que recibe una habitación y nos devuelve el valor, por ejemplo

```scala
>>> carlos.cotizar(cocina)
```

Que es lo necesario para poder usar de forma polimórfica a las habitaciones y que ambos puedan cotizarlas.


## Ejercicio 8 - Descuentos

Queremos hacer un sistema para calcular los descuentos posibles, para distintos tipos de clientes. Cada cliente tiene una categoría y cierto conocimiento de las compras que hizo a lo largo del mes. 

Necesitamos que los objetos clientes entiendan el mensaje descuento, que recibe como parámetro el valor neto de la compra, y nos devuelve el valor en pesos a descontar del total. 

Las categorías que tenemos son las siguientes:

* **Cliente Base**, no recibe ningún tipo de descuentos
* **Cliente Preferencial**, siempre recibe un 5% de descuento.
* **Cliente Promoción**, recibe un 2% de descuento en todas las compras, si hizo más de 5 compras en el mes, el descuento es de 8%.
* **Cliente BancoX**, recibe un descuento de 6%, pero solo hasta que cubre los $100 de tope máximo de descuento mensual.

Los clientes, pueden cambiar de categorías mes a mes, y todos pueden ser de cualquiera de ellas. 

Además el cliente entiende un mensaje pagar, que recibe el valor neto de la compra (antes de los descuentos) y registra todos los datos de la misma. Este mensaje no devuelve nada.


Se pide hacer un programa que permita resolver este comportamiento, y mostrando al menos 3 clientes distintos y que se pueda cambiar de una categoría a la otra.

### Ejercicio 9 - Piratas!

Necesitamos un programa en objetos que modele algunos aspecto de la vida pirata de los viejos tiempos.
Tenemos un barco pirata, que tiene un tripulación de piratas, y una misión que cumplir. Esta misión puede cambiar.


Cada pirata puede llevar varios "items" consigo, por ejemplo, un mapa, una brújula, un loro, un cuchillo, una botella de grogXD, etc. Por ejemplo, el pirata Barbanegra, tiene una brújula, dos cuchillos, un diente de oro, y tres botellas de grogXD. Además, de cada pirata se conoce el nivel de ebriedad que tiene (que la vamos a medir de 1 a 5, donde 0 es totalmente sobrio y 5 es totalmente ebrio) y la cantidad de dinero que lleva consigo (que para simplificar, es un número de monedas).

Un barco, sólo puede agregar piratas a su tripulación si estos son capaces de cumplir con la misión asignada.

Existen tres tipos de misiones

* **Búsqueda del tesoro**: Para esta misión sólo serán útiles aquellos piratas que tengan una brújula, un mapa, o una botella de grogXD entre sus ítems y no tengan mas de 5 monedas. También se necesitan que tengan un nivel de ebriedad menor a 3.
Un barco con esta misión, la puede cumplir, si alguno de sus tripulantes tiene como item una llave de cofre.
* **Convertirse en leyenda**: Para cumplir esta misión, se necesita que los piratas tengan al menos 10 ítems, entre los cuáles, tiene que figurar sí o sí un ítem obligatorio que será definido dentro de la misión.
* **Saqueos**: Para esta misión, se necesitan piratas que cuentan con menos de 10 monedas. Por otro lado, se necesita que el pirata se anime a saquear a su víctima. Para que un pirata se anime a saquear un barco, debe tener un nivel de ebriedad de entre 2 y 3, y para saquear una ciudad, debe tener  2 o menos.
Para que un saqueo pueda ser realizado, la víctima debe ser vulnerable al barco saqueador.
Como ya vimos, las víctimas pueden ser de dos tipos: puede ser otro barco, o puede ser una ciudad.
Si la víctima es un barco, este es vulnerable si el barco saqueador es peligroso y tiene al menos dos tripulantes mas.
Si la víctima es una ciudad, esta es vulnerable si el barco saqueador tiene mas de 5 tripulantes, es peligroso, y por lo menos la mitad de sus tripulantes tiene un mapa.

Si todos los tripulantes de un barco, tienen 4 o mas puntos de ebriedad, entonces el barco ya no puede cumplir con la misión.
Un barco es peligroso si entre su carga, se pueden encontrar mas de 10 cuchillos, o si hay mas cuchillos que tripulantes.


Se pide:

* Saber si un pirata puede ser agregado a un barco.
* Incorporar a un pirata a un barco (si puede ser agregado).
* Saber si un barco puede cumplir con la misión que le fue encomendada.
* Hacer que un barco cambie de misión. Para esto, el barco debe echar a todos los piratas que no sirven para esta nueva misión.
* Saber cuál es el pirata mas ebrio de la tripulación de un barco.
* Hacer que un barco ancle en una ciudad costera. Cuándo los barcos anclan, toda la tripulación se toma un trago de grogXD, lo que hace que el nivel de ebriedad de todos los tripulantes suba un punto, y se gasten una moneda. Por supuesto, hay tripulantes que luego de esto, no podrán cumplir con la misión encomendada.
* Conocer, de un barco, todos los ítems que carga.
* Conocer, de un barco, todos los ítems diferentes que junta (es decir, sin contar los repetidos).
* Saber si un barco es peligroso.
* Obtener al tripulante mas débil de la tripulación. El más débil es aquel pirata con mayor nivel de ebriedad, y menor cantidad de dinero.


