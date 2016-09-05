---
layout: hyde
---

# Ejercicios con clases

## Ejercicio 1 – Alquiler de vehículos 

Una empresa de alquiler de vehículos maneja bicicletas, motos y autos.
De cada vehículo interesa el gasto cada 100 km, la velocidad máxima y la cantidad de pasajeros que pueden llevar. 

Para las bicicletas: 

* la velocidad máxima es (rodado de la bicicleta 1.2), p.ej. para una bicicleta de rodado 20 la velocidad máxima es 24 km/h. 
* el gasto cada 100 km es 1 peso • pueden llevar un pasajero. 

Para las motos: 

* la velocidad máxima es (cilindrada / 5), p.ej. para una moto de 1000 cm3 de cilindrada la velocidad máxima es 200 km/h. 
* el gasto cada 100 km es 5 pesos + (cilindrada / 200), p.ej. para una moto de 1000 cm3 de cilindrada el gasto cada 100 km es 10 pesos. 
* las motos de hasta 150 cm3 de cilindrada pueden llevar un pasajero, las de mayor cilindrada pueden llevar dos pasajeros. 

Para los autos:

* la velocidad máxima y la cantidad de pasajeros que pueden llevar son específicas de cada auto.
* el gasto cada 100 km es 20 pesos + (capacidad en pasajeros 10), p.ej. para un auto que lleva 4 pasajeros el gasto cada 100 km es 60 pesos. 

Se pide conocer 

1. los vehículos con velocidad máxima mayor a un parámetro. 
1. los vehículos que cada 100 km consuman menos que un parámetro. 
1. el vehículo con mayor coeficiente de eficiencia, que se calcula así (cant. pasajeros * velocidad máxima) / gasto cada 100 km 
1. la cantidad total de pasajeros que pueden transportar los vehículos de la empresa a más de cierta velocidad, p.ej. "¿cuántos pasajeros podemos llevar a más de 80 km/h?".


## Ejercicio 2 - Más sobre atención de animales 

Agregar las siguientes funcionalidades al ejercicio sobre atención de animales de la guía de trabajo sobre clases.

#### a. 
Agregar lo que haga falta para que algún objeto pueda responder, dado un dispositivo: 

* si un animal o no fue atendido 
* cuántos animales fueron atendidos 
* el conjunto de los animales atendidos que conviene vacunar 
* el animal más pesado que atendió 
* el peso total de los animales atendidos 

También debe existir la capacidad de hacer, mediante un mensaje a un dispositivo, que atienda de nuevo a todos los animales que atendió. 

#### b. 
Cómo harías para conocer a dos dispositivos, para obtener:

* el conjunto de animales que fue atendido en los dos
* el conjunto de animales que fue atendido en uno sí y en el otro no Pensar en operaciones de conjuntos.

#### c. 
Cómo harías para obtener un conjunto con el animal más pesado de cada dispositivo.

#### d. 
Para cada estación de servicio, pasar de 3 dispositivos a una cantidad indeterminada de dispositivos, y agregar estos requerimientos:

* saber cuáles de los dispositivos de una estación necesitan recarga.
* obtener para una estación, el último animal ate


## Ejercicio 3 - Carga de camiones

Una empresa de transporte de cargas necesita un software que la ayude a organizarse con el llenado de las camiones que maneja. La empresa tiene varios depósitos, en cada depósito hay varios camiones. 

La empresa puede recibir bultos, cajas sueltas y bidones que transportan líquido, de ellos sabemos lo siguiente:

* Un bulto es una estructura de madera que arriba tiene un montón de cajas, se envuelve todo con plástico para que no se desbanden las cajas. Todas las cajas de un bulto pesan lo mismo. El peso de un bulto es (peso de cada caja * cant. cajas) + peso de la estructura de madera que va abajo. P.ej. un bulto de 50 cajas de 12 kg cada una con una estructura de 70 kg pesa en total 670 kg. Para cada bulto se informa el contenido de las cajas, p.ej. ketchup.
Todas las cajas de un mismo bulto llevan lo mismo.
* De cada caja suelta se informa el peso individualmente, son todas distintas. También se informa el contenido de las mismas, igual que los bultos.
* El peso de un bidón es su capacidad en litros por la densidad (o sea, cuántos kg pesa un litro) del líquido que se le carga. P.ej. si a un bidón de 200 l lo lleno de aceite, y el aceite tiene densidad 0,8; entonces su peso es 160 kg. Los bidones van siempre llenos hasta el tope. También se informa el contenido del bidón.
Cada camión puede llevar hasta una carga máxima medida en kg. 
Además, cada camión puede: estar disponible para la carga (en cuyo caso ya puede tener cosas cargadas), estar en reparación, o estar de viaje. 

Se pide: 

1. Saber si un camión puede aceptar un coso (es decir, que con el coso no supere la carga máxima, y el camión este disponible).
1. Cargar (si es posible) el camión con un “coso”, donde el coso puede ser un bulto, una caja suelta, o un bidón.
1. Hacer que el camión cambie de estado. Es decir, que pueda pasar de estar disponible a estar de Viaje, o pasar de estar en viaje a estar nuevamente disponible, etc.
1. Saber si un camión está listo para partir, esto es: si está disponible para la carga, y el peso total de lo que tiene cargado es de al menos 75% de su carga máxima.
1. Sacar se viaje a todos los camiones de un depósito que están listos para salir.
1. Saber de un depósito, la capacidad de carga que tiene en sus camiones (es decir, de todos los camiones disponibles, cuánto lugar disponible total queda).
1. Conocer cuáles son los contenidos que están cargados en un determinado camión (puede haber repetidos)
1. Saber qué camiones de un depósito (de los que se están cargando) contienen un determinado elemento, p.ej. ketchup o aceite.
1. Dados dos camiones, obtener los elementos que se transportan en los dos. Por ejemplo, si yo tengo un camión que transporta galletitas, raids, alfajores y aceite y tengo otro que transporta agua, galletitas, dentífrico y aceite lo que debería obtener es un conjunto con aceite y galletitas.
1. Para un camión, saber el coso (bulto, caja o bidón) más liviano que está siendo transportado.
1. Para un depósito, saber el camión que transporta mayor cantidad de cosos.

La empresa ahora decidió que haya camiones puedan tener mas de un destino, este tipo de camiones, sabe que cosos tiene que transportar a cada uno de los destinos. Modelar este nuevo requerimiento, y las operaciones necesarias para que un camión reutilizable llegue a destino y descargue ahí todo el contenido.
Tener en cuenta que al agregar este tipo de camiones, algunas operaciones se deben resolver de forma diferente. Por ejemplo, ahora para cargar un coso en un camión (de ser posible, esto no cambia), hay 
que indicar # el coso y el destino del coso. Cambiar y/o agregar todas las operaciones que sean ## * 

* necesarias. * * * 