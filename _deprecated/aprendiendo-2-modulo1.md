---
layout: hyde
---

# 1. Introducción a la programación orientada a objetos con Wollok
El objetivo de estas páginas es proveer una guía para aprender programación orientada a objetos utilizando el lenguaje Wollok.

### ¿Qué es Wollok?

Wollok es un lenguaje de programación orientado a objetos pensado para estudiantes iniciales de programación. Y también es un conjunto de herramientas de desarrollo, adaptadas a las necesidades de quienes están dando sus primeros pasos en programación.

¿Qué quiere decir eso de "programación orientada a objetos"? 

Los siguientes apartados intentarán responder detalladamente a esa pregunta, pero previamente conviene aclarar que es una de entre tantas formas de programar. 

Todas esas formas de programar (a las que llamamos paradigmas de programación) tienen en el fondo el mismo objetivo que es controlar lo que hace una computadora. Sin embargo, cada paradigma logra ese objetivo de formas muy distintas, usando distintas herramientas, distintos conceptos.

Por eso, si llegaste acá ya sabiendo programar en algún otro lenguaje o en algún otro paradigma, nuestra recomendación es que trates de "olvidarte" de lo que sabías de programación hasta acá, arrancar de cero. Más adelante, cuando uno está más canchero, es interesante comparar los paradigmas y lenguajes entre sí, pensar cuándo conviene uno u otro... pero por ahora, si ahora tu objetivo es dar los primeros pasos programando con objetos, es conveniente tratar de pensar en objetos, y no "traducir" lo nuevo que estoy aprendiendo a los conceptos que ya sabía de antes. 


### ¿Qué es un objeto?

El concepto más importante de la programación orientada a objetos (en adelante POO o coloquialmente "objetos") es... naturalmente, el **objeto**. En POO un programa es un conjunto de objetos (vamos a ir refinando esa definición).

¿Qué cosas pueden ser objetos? Todo. Al programar con objetos todo es un objeto. 
Algunos ejemplos:

* Si quiero programar el juego como el PacMan, tendría objetos que representen al propio pacman, a los fantasmistas, también las pastillas, las paredes. Cada cosa necesaria para que el juego funcione la voy a modelar como un objeto. 
* Si en cambio quiero hacer un sistema de inscripción a la universidad, tal vez tenga objetos que representen a los estudiantes y a las materias.


* ¿Qué es eso de "modelar"?
Un modelo es una simplificación de la realidad, un recorte. La realidad es muy compleja y muchas veces nos interesa una partecita de ella. Un buen modelo es el que captura la * parte de la realidad que es necesaria para que el programa funcione bien, descartando 
todo lo demás. 
Para entenderlo mejor vamos a introducir a la protagonista de nuestros primeros programas en **Wollok: pepita.**

### Pepita

Pepita es una golondrina, nosotros la conocimos a través de un ornitólogo. El ornitólogo quiere estudiar cómo varía la energía de pepita en función de cuánto come y cuánto vuela. Para eso nos describío a pepita en un modelo muy sencillo:

* Cuando pepita come incrementa su energía en tantas calorías como la comida que consumió. Por ejemplo si come un poco de alpiste, el alpiste le da 5 calorías, su energía sube en 5 calorías.
* Cuando pepita vuela su energía baja, 4 calorías por metro volado.

Es importante ver que el modelo de pepita no tiene todos los detalles del ave, sólo lo que nos interesa para el fin que perseguimos. No sabemos de qué color es, si tiene plumas, ni siquiera necesitamos hablar de alas para "hacerla volar". Simplemente sabemos que si come sube su energía y si vuela, baja. Es todo lo que necesitamos.

### Objetos y mensajes

Ok, tenemos a pepita con su energía, que vuela y come, ¿cómo la usamos?

En objetos, la única forma de interactuar con un objeto es a través de mensajes. Para cada cosa que necesitemos de pepita vamos a tener un mensaje. En nuestro caso, necesitamos que pepita entienda 3 mensajes:

* Queremos indicarle que vuele una cantidad de metros
* Queremos indicarle que coma algo
* Queremos preguntarle cuánta energía tiene.

Rápidamente vemos que los mensajes los podemos dividir en dos grupos. Los primeros dos mensajes son "ordenes", le pedimos a nuestro objeto pepita que haga algo. Esos mensajes tienen por objetivo producir un efecto, es decir, algo cambia cuando mandamos ese mensaje, en este caso cambia la energía de pepita. 
El último mensaje es una "pregunta". Lo que nos interesa en este caso es qué nos responde. Normalmente ante una pregunta pepita no debería cambiar. 
Dividir los mensajes de nuestros objetos entre órdenes y preguntas es una técnica para evitar posibles errores en un programa. Por ejemplo sabemos que si le damos de comer una vez a pepita no es lo mismo que si lo hacemos dos veces, la energía va a subir el doble. En cambio le puedo preguntar su energía todas veces que yo quiera, porque no tiene ningún efecto.

Cada mensaje tiene varias características:

* un **nombre** o **selector**: volar, comer, energia.
* **parámetros**, que permiten mandar información extra asociada a un mensaje. Por ejemplo para pedirle que vuele le tengo que decir "cuánto", eso es un parámetro del mensaje. De la misma manera para decirle que coma tengo que decirle qué comer, por ejemplo alpiste. El mensaje energía no necesita ningún parámetro, eso vale. También puede haber mensajes que reciban más de un parámetro, después vamos a ver muchos ejemplos de eso.
¿Qué son los parámetros? Son objetos, ¡todo es un objeto! O sea, el alpiste también es un objeto y la distancia a volar también es un objeto.
* Los mensajes que modelan preguntas, además tienen un **valor de retorno**, que es la respuesta a la pregunta que hicimos. Y que obviamente también tiene que ser un objeto. Todo es un objeto.

### ¿Y el código?

Ya suficiente teoría, bajemos un poco a la práctica: al código. El primer paso para familiarizarnos con wollok es jugar con objetos que ya están definidos. Para eso podemos buscar el ejemplo pepita.wlk y ejecutarlo en el REPL.

Este programa define tres objetos:
pepita, que entiende los mensajes comer, volar y energía
alpiste, que entiende el mensaje energía
hamburguesa, que también entiende el mensaje energía.
Además tenemos a disposición los números, que son objetos que vienen con Wollok.


Una vez dentro del REPL, podemos mandarle mensajes a cualquiera de nuestros objetos, por ejemplo podemos preguntar cuál es la energía que tiene pepita ya mismo. 

Y para poder "hablarle" a pepita, ¿cómo hacemos? ¡Le mandamos un mensaje!
Recordemos, **la única forma de interactuar con un objeto es mandándole un mensaje**.

Ok, pero... ¿cómo le mando un mensaje?
Hay que escribir:
El objeto, en nuestro caso podemos poner "pepita" (en realidad es una referencia al objeto, más sobre esto en el próximo módulo).
Luego viene un punto "." y el nombre del mensaje, para nosotros "energia"
Y finalmente los parámetros, entre paréntesis y si hubiera más de uno los separamos por comas. Como el mensaje energía no recibe parámetros nosotros ponemos simplemente "()".

En el REPL:

{% highlight scala %}
Wollok interactive console (type "quit" to quit): 
>>> pepita.energia()
100
{% endhighlight %}


Perfecto, la energía de pepita arranca en 100, hagámosla volar:

{% highlight scala %}
>>> pepita.volar(10)
Done!
{% endhighlight %}


¿Pero cuánta energía tiene pepita después de volar 10 metros?

{% highlight scala %}
>>> pepita.energia()
60
{% endhighlight %}


También podemos hacer que coma un poco de alpiste, y volvemos a ver cómo varía su energía:

{% highlight scala %}
>>> pepita.comer(alpiste)
60

>>> pepita.energia()
65
{% endhighlight %}


65... será porque la energía del alpiste es 5? Veamos...

{% highlight scala %}
>>> alpiste.energia()
5
{% endhighlight %}


###  Resumen

* En un programa orientado a objetos, todo es un objeto.
* Los objetos entienden mensajes, para poder interactuar con un objeto tengo que mandarle algún mensaje.
* Un mensaje tiene un nombre, puede tener uno o más parámetros y puede tener un valor de retorno.
* Tanto los parámetros como el valor de retorno son objetos.
(Casi) siempre, la sintaxis en objetos es objeto-mensaje-parámetros.


{% assign url_parts = page.url | split: '/' %}
{% assign url_parts_size = url_parts | size %}
{% assign rm = url_parts | last %}
{% assign base_url = page.url | replace: rm %}

<ul>
{% for node in site.pages %}
  {% if node.url contains base_url %}
    {% assign node_url_parts = node.url | split: '/' %}
    {% assign node_url_parts_size = node_url_parts | size %}
    {% assign filename = node_url_parts | last %}
    {% if url_parts_size == node_url_parts_size and filename != 'index.html' %}
      <li><a href='{{node.url}}'>{{node.title}}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

{% include aprendiendo-footer.html %}