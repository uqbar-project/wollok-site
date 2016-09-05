---
layout: hyde
---

# Ejercicios con objetos

## Ejercicio 1 - Pajarera

Del ejercicio de la Guía 1, donde vimos como se comportaban las golondrinas, ahora lo que necesitamos es una forma de que esas golondrinas (pepita, pepona y pepe) actúen en grupo. 
Para esto, nuestro ornitólogo mandó a hacer una pajarera para poder ejecutar determinadas acciones sobre todas las golondrinas al mismo tiempo. Las acciones que nuestro ornitólogo podrá realizar sobre la pajarera son:

* Saber la cantidad de golondrinas que tiene dentro de la pajarera.
* Agregar y sacar golondrinas de la pajarera.
* Alimentar a todas las golondrinas con alpiste.
* Para conocer el resultado de cualquier acción que se ejecute sobre las golondrinas, el ornitólogo necesitará el conjunto de todas las energías resultantes (es decir, una colección con contenga sólo las energías de cada una de las golondrinas)
* Hacer que todas las golondrinas vuelen 20 metros.
* Saber cuáles son las golondrinas saludables. Una golondrina saludable, son aquellas que tienen mas de 100 puntos de energías.
* Saber si todas sus golondrinas están por arriba del promedio de energía.
* Encontrar la golondrina con la mas baja energía, y alimentarla con alpiste hasta que supere el promedio.


## Ejercicio 2 - Delivery de empanadas

Un empresa de delivery de empanadas, necesita un sistema para optimizar su sistema de delivery, dado que como recién empieza, y tiene escasos transportes, y necesita saber cuál le conviene usar en un caso o en el otro.

### Parte 1

La empresa cuenta con: una bici bastante viejita, que si hay que viajar menos de 20 cuadras, se banca llevar hasta 24 empanadas, sino, lleva apenas 15. También tienen una bicicleta nueva, que lleva hasta 36 empanadas. Después cuenta con dos motos, una grande, y una chica, la grande lleva hasta 60, y la mas chica, hasta 50. Y si de última, el pedido lo lleva José, que es un empleado que trabajan allí, a pie. José lleva 24 empanadas si es el primer viaje, pero se va cansando, y por cada viaje que hace, lleva dos empanadas menos.

<div class="sidenote">
<h3>Nota</h3>
<p>Para esta parte,  en el caso de la bici vieja, trabajamos con una distancia fija. Lo mismo para José, arrancamos con una cantidad fija de viajes hechos</p>
</div>

Se desea saber:

* Cuál es la cantidad total de empanadas que se podrían transportar (es decir, si salen todos los transportes al mismo tiempo)
* Cuáles son los transportes que pueden transportar como mínimo dos docenas de empanadas.
* Dado un transporte, saber si puede realizar un pedido.
* Saber si es posible realizar un pedido (es decir, si hay algún transporte que cuente con al capacidad pedida)
* Conocer un transporte cualquiera, que pueda realizar el pedido.
* De un transporte que realiza un pedido, conocer el desperdicio del viaje (es decir, cuantas empanada mas podría en realidad llevar).
* De la misma manera, si mando a un determinado transporte para un pedido, cuantas empanadas me quedarían sin llevar (en el caso que el pedido supere la capacidad de dicho transporte).
* Cuál es el transporte con menos desperdicio para llevar un pedido.

La empresa ahora, está considerando la posibilidad de que ante un pedido grande, haya mas de un transporte que realice el pedido. Por lo que, necesitaríamos saber

* Qué conjunto de transportes necesitaríamos para llevar un pedido.
* El desperdicio de este conjunto.

### Parte 2

Después de tener estas cuestiones resueltas, el delivery se da cuenta que necesita mas cosas para darse cuente si algunos de sus transportes puede hacer un viaje o no (mas allá de la cantidad de empanadas a transportar).
Por ejemplo, hay que tener en cuenta la cantidad de viajes que lleva hechos José. La distancia que hay que recorrer en el caso de mandar a la bici vieja, y la cantidad de kilómetros que pueden recorrer las motos con el tanque lleno. La moto grande, puede recorrer hasta 500 cuadras, y la moto chica, hasta 200 cuadras. Cuándo se quedan sin nafta, quedan momentáneamente fuera de disponibilidad, hasta tanto se les cargue nafta. De todas maneras, este delivery sólo toma pedidos de hasta 50 cuadras.

* Modificar los métodos de la parte 1 que sean necesarios (por ejemplo los que validan si un transporte puede Llevar)
* Mandar a jose a llevar un pedido de 10 empanadas, a 5 cuadras de distancia.
* Mandar a la moto grande a llevar un pedido de 40 empanadas, a 30 cuadras.

**Bonus:** Resolver que conjunto de transportes es el mas óptimo, es decir, con la menor cantidad posible de desperdicio y de sobrante, para llevar un determinado pedido.


