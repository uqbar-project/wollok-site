---
layout: hyde
---

# 2. Definir Objetos en Wollok

En el primer módulo aprendimos sobre objetos y mensajes, y algunos conceptos básicos sobre la sintaxis de Wollok. También pudimos jugar, desde el REPL, con objetos que ya estaban definidos. El siguiente paso es aprender a definir nuestros propios objetos, para ello continuamos jugando con nuestra golondrina amiga: Pepita.

### Definición de un objeto

Las definiciones de objetos deben ir en un archivo Wollok. Entonces para poder definir un objeto necesitamos crear un archivo de definiciones.

Lo mínimo que tenemos que hacer para definir un objeto es:
La palabra object
El nombre del objeto, en nuestro caso "pepita"0
A continuación, entre llaves, tenemos que describir comportamiento del objeto, por ahora podemos dejar vacía esta parte.
Nuestra definición de objeto debería verse así:

{% highlight scala %}
object pepita {
}
{% endhighlight %}

Por sencillo que parezca, este ya es nuestro primer programa y lo podemos ejecutar:

{% highlight scala %}
Wollok interactive console (type "quit" to quit): 
>>> pepita
pepita{}
{% endhighlight %}

### Métodos

Por supuesto nos gustaría poder mandarle un mensaje a pepita. Para que pepita entienda algún mensaje, tenemos que agregarle un método con el mismo nombre que el mensaje, vamos a comenzar por crear el método energia.

<div class="sidenote">
<h3>Métodos y mensajes</h3>
<p>
Seguramente, en este momento, todavía no se entienda el por qué de esta diferenciación entre método y mensaje. 

Sin embargo, es importante entender el rol de cada uno desde ahora, porque la diferencia entre mensaje y método es una de las características más importantes de la programación orientada a objetos. 

A lo largo del curso vamos a volver varias veces sobre este punto.
</p>
</div>

Para poder definir un método debemos escribir:
La palabra method
El nombre del método, en este caso "energia"
Entre llaves, el código que queremos que se ejecute cuando el objeto reciba el mensaje "energía". 
Por ahora sólo vamos a hacer que devuelva 100. Para que un método devuelva algo, utilizamos la palabra return. Entonces el código de nuestro método energía queda así:

{% highlight scala %}
object pepita {
 method energia() {
     return 100
 }
}
{% endhighlight %}

Sigue siendo es un programa muy simple, pero si volvemos a ejecutarlo, desde el REPL ya le podemos mandar un mensaje a nuestra pepita:

{% highlight scala %}
Wollok interactive console (type "quit" to quit): 
>>> pepita.energia()
100
{% endhighlight %}

### Estado interno

A continuación nos gustaría poder hacer que pepita pueda volar. ¿Qué debería hacer pepita al volar?
Recordemos: "al volar pepita disminuye su energía, en 4 calorías por cada metro recorrido".

El problema del método volar, es que su "efecto" no se ve al momento de volar, si no después. Es decir, si le pregunto la energía antes y después de volar debería contestarme cosas distintas. Entonces para poder volar tengo que cambiar también el método energía.... de alguna manera necesitamos que pepita se acuerde de que voló, y disminuya su energía en consecuencia.

Una forma (entre varias posibles) de lograr esto es que pepita "se acuerde" la energía que tiene. Para poder acordarse cosas, los objetos utilizan su estado interno. El estado interno consiste de referencias a otros objetos. Una referencia es simplemente un nombre que "apunta" a otro objeto. Algunas de esas referencias pueden cambiar (o sea, apuntan primero a un objeto y luego a otro), a esas referencias las llamamos variables. Otras se utilizan para guardar una referencia que nunca cambia y las llamamos constantes. 

La forma de agregar una referencia en el estado interno de pepita es mediante una definición así:
La palabra var (para una referencia variable) o val (para una referencia constante).
Un nombre, para nosotros "energia"
Opcionalmente se puede poner un igual "=" y una expresión que determina el valor inicial de la referencia (en el caso de las constantes es obligatorio tener un valor inicial).

<div class="sidenote">
<h3>Expresiones</h3>
<p>
Una expresión es cualquier porción de código que al evaluarla da como resultado un objeto.
</p>

<p>
Hasta acá conocemos 4 tipos de expresiones:

<ul>
<li>Los nombres de los objetos definidos, por ejemplo "pepita" es una expresión que permite referenciar al obj de pepitaeto definido mediante object pepita { ... }</li>
<li>Los literales de números, por ejemplo: 1, 2, 100 (también hay más variantes de literales).</li>
<li>Los envíos de mensajes (a mensajes que devuelvan un objeto), por ejemplo: pepita.energia() o 1+2</li>
<li>Las variables y constantes contenidas en el estado interno de los objetos.</li>
</ul>
</p>
</div>

Entonces agregamos la variable pepita a la definición. También aprovechamos para modificar el método energía, de forma que ya no devuelva siempre 100 fijo, sino devuelva la energía almacenada en el estado interno:

{% highlight scala %}
object pepita {
 var energia = 100
 
 method energia() {
     return energia
 } 
}
{% endhighlight %}


Tal vez vale la pena mencionar que el método y la variable se llaman exactamente igual. Eso suele pasar y no es un problema: la forma del lenguaje no da lugar a dudas dudas sobre cuándo estoy refiriéndome a un mensaje o a una variable.

Hecho esto, podemos hacer el volar, que modifica la energía.

{% highlight scala %}
object pepita {
 // ... 

 method volar(metros) {
     energia = energia - 4 * metros
 }
}
{% endhighlight %}


En este método aparecen dos cosas nuevas: en primer lugar el método tiene parámetros, por otro lado hay un manejo de operaciones numéricas que no habíamos visto hasta acá. Vamos a estudiar cada una por separado.

### Métodos con parámetros

¿Qué significa "metros" entre paréntesis en la definición del método volar? 

Este método recibe un parámetro. Eso es lo que nos habilita a pasarle parámetros a pepita cuando le mandamos el mensaje "pepita.volar(10)". Obviamente tiene que haber una coincidencia entre los parámetros que espera el método y los que le mandamos al enviar el mensaje, de lo contrario vamos a recibir un error.


En Wollok (como en la mayoría de los lenguajes orientados a objetos) los parámetros se pasan por referencia. Durante la ejecución del método volar, la referencia metros apunta exactamente al mismo objeto que le pasaron por parámetro. Sin embargo, son dos referencias distintas... este es otro concepto sobre el que vamos a "machacar" mucho.


### Los números también son objetos

Como ya dijimos, en Wollok todo es un objeto.... por lo tanto, los números no pueden ser otra cosa que objetos. Pero entonces, ¿qué es eso de 4 * metros? Fácil:

#### Objetos vs. referencias
En realidad, si queremos ser más precisos, tanto "4" como "metros" o incluso "pepita" son **referencias a objetos**. 

Es más, en nuestro código nunca aparecen directamente los objetos, sino que siempre usamos referencias. La referencia es la única forma en la que yo puedo mencionar a un objeto en mi código. 

* El 4 es un objeto
* &#42; es un mensaje
* y metros es otro objeto, que va a ser el parámetro del mensaje.

¿Y por qué no se escribe como los demás mensajes?

Es simplemente una cuestión sintáctica. Es decir, se escribe distinto, pero siguen siendo objetos y mensajes. 

¿Por qué se escribe distinto? 

Porque los números se usan mucho y porque uno ya está acostumbrado a la sintaxis de la matemática que aprendimos en la primaria, entonces es más claro escribir:

{% highlight scala %}
energia - 4 * metros
{% endhighlight %}

En lugar de algo como:

{% highlight scala %}
energia.subtract(4.multiply(metros))
{% endhighlight %}


Incluso se respeta las reglas de precedencia que sabemos desde siempre: primero se hace la multiplicación y después la suma. No hace falta poner paréntesis para indicar eso.

### Y la asignación... ¿es un mensaje?

No.

De hecho es una operación bastante particular, que conviene entender bien. Repasemos: 
(casi) todo lo que hacemos en objetos es mandar mensajes a objetos.
Pero siempre, para mandar un mensaje a un objeto lo hacemos a través de una referencia.
Sin embargo, el mensaje le llega al objeto y afecta al objeto.
En cambio, cuando hago una asignación, eso **afecta a la referencia y no al objeto**. El objeto al que apuntaba la referencia antes no se ve alterado por esto (aunque... si no tengo más referencias a ese objeto es posible que ya no pueda hablarle nunca más, lo pierdo).


De paso, para la asignación de números tenemos también una sintaxis especial que podemos usar para hacer nuestro código más compacto:

{% highlight scala %}
energia = energia - 4 * metros
{% endhighlight %}

es lo mismo que

{% highlight scala %}
energia -= 4 * metros
{% endhighlight %}

De nuevo, sólo son objetos y mensajes (y una asignación), nada cambia, sólo es una forma más corta de escribir lo mismo.

### Más métodos

Para completar nuestro ejemplo, nos faltaría programar el método comer. A diferencia de volar, no queremos que comer reciba un número por parámetro sino un objeto que represente directamente a una comida, por ejemplo: alpiste. Esto es, nos gustaría poder decir:

#### ¿Vale la pena modelar el alpiste?
Depende.

En general, **es importante detectar cuáles son las tareas que debe realizar el sistema y cuáles son las que el sistema exige que realice el usuario**. Este tipo de preguntas se van a presentar habitualmente al modelar.

En este caso, si el sistema puede calcular (o conocer de antemano) las calorías del alpiste. El sistema que me permite hablar de alpiste es un sistema mejor que el que me obliga a recordar ese número por mí mismo.   

{% highlight scala %}
>>> pepita.comer(alpiste)
{% endhighlight %}

Y que pepita obtenga 5 calorías (que es la cantidad de calorías de una porción de alpiste) en lugar de decir:

{% highlight scala %}
>>> pepita.comer(5) 
{% endhighlight %}

Al hacerlo de esta manera simplificamos la tarea del ornitólogo: no necesita recordar cuántas calorías tiene una porción de alpiste, simplemente usa el objeto alpiste ya definido.

Podemos definir el alpiste así:

{% highlight scala %}
object alpiste {
 method energia() {
     return 5
 }
}
{% endhighlight %}


El siguiente paso es agregar a pepita un método que pueda recibir el alpiste

{% include aprendiendo-footer.html %}

