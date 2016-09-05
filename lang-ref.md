---
layout: hyde
title: 'Documentación'
weight: 30
lang: 'es'
---

<h1>
<img src="/images/documentation.ico" align="left" height="64" width="64"/>
&nbsp;&nbsp;Documentación oficial de Wollok
</h1>
<br>
<p>A continuación presentamos una serie de capítulos que integran los principales conceptos de Wollok:
</p>

* [Objetos. Mensajes. Métodos.](https://docs.google.com/document/d/1RBfNmKZFKZ90XvfQsN7zhtuUPV2Mvj7t-iyZiL2bClQ/edit?usp=drive_web)
* [Referencias. Estado. Compartir objetos. Identidad.](https://docs.google.com/document/d/14092iRsXDXih8-q_0UEXIGRSQmGtxL9pay1VXX4ceJg/edit?usp=drive_web)
* [Polimorfismo. Manejo básico de colecciones.](https://docs.google.com/document/d/1HiYxLswd4O0MBqnT3jGo2K9e_4FE73RXF_lf8NWVOSE/edit?usp=drive_web)
* [Clases. Method lookup y polimorfismo con clases.](https://docs.google.com/document/d/1Dgq_PfCbJHO1M7dXe-vGXtj4mbEUWlYhfvQ2i0RWOsk/edit#)
* [Herencia. Self, super. Redefinición.](https://docs.google.com/document/d/1KdG7NrKPgPh4bAcyLuDG2G1iWP7Ze2GFs91qzlvDKqI/edit?usp=drive_web)
* [Colecciones. Bloques de código.](https://docs.google.com/document/d/1MLbx1Fxt7I_uVg6Yv9hYfIu2IIbUQqqICbOM3s969D8/edit?usp=drive_web)
* [Manejo de errores](https://docs.google.com/document/d/1T87tmdXv_39RoE_zR7alVFK8TUl-KJYOhdoIsoVTRb4/edit?usp=drive_web)
* [Constructores. Mutabilidad. Igualdad e identidad. Elementos de Diseño.](https://docs.google.com/document/d/156PsLi7v5LPFJ5oVy6SPwH8cQRZaBqJh-aosZjUbE4s/edit#)
* [Testing](https://docs.google.com/document/d/1caDE_mlP1QMfzyVpyvh-tKshjAeYLXBkXDYrTX5zFUI/edit#)
* [Tutorial de SVN para Wollok](https://docs.google.com/document/d/1uisxrnkFdC2uBexBChSKpxYohjd90-tejALOSAVZodo/edit?usp=sharing) 

<hr>

<h1>
<img src="/images/langref.png" align="left" height="64" width="64"/>
&nbsp;&nbsp;Guía de Referencia del Lenguaje
</h1>
<br>
Esta es la guía de referencia de Wollok.

# Indice rápido

* Elementos del lenguaje
    * [Programas Wollok](#programas-wollok)
    * [Referencias variables y constantes](#referencias-variables-y-constantes)
    * [Comentarios](#comentarios)
* Objetos básicos
    * [Números](#numeros)
    * [Booleanos](#booleanos)
    * [Strings](#strings)
* [Objetos definidos por el desarrollador](#user-objects)
    * [WKO](#wko)
    * [Objetos literales](#objetos-como-literales)
* Definición de un objeto Wollok
    * [Métodos](#metodos)
    * [Simple return method](#simple-return-method) 
    * [Variables de instancia](#variables-de-instancia)
    * [Mensajes](#mensajes)
    * [Self](#self)
    * [Polimorfismo con objetos](#polimorfismo-con-objetos)
    * [If](#if)
* [Colecciones](#colecciones)
    * [Conjuntos](#conjuntos)
    * [Closures](#closures)
    * [Closures y colecciones](#closures-y-colecciones)
* [Clases](#clases)
    * [Herencia](#herencia)
    * [Métodos abstractos y clases](#metodos-abstractos-y-clases)
    * [Redefinición y super](#redefinicion-y-super)
    * [Constructores](#constructores)
        * [Constructor simple](#constructor-simple)
        * [Constructor por defecto](#constructor-por-defecto)
        * [Múltiples constructores](#multiples-constructores)
        * [Constructor delegation](#constructor-delegation)
        * [Inicialización de variables en los constructores](#incializacion-de-variables-en-los-constructores)
    * [Herencia de objetos](#herencia-de-objetos)
* [Polimorfismo con clases](#polimorfismo-con-clases)  
* [Modularización](#modularizacion)
    * [Packages](#packages)
    * [Imports](#imports)
* Funcionalidades avanzadas
    * [Type system](#type-system)
    * [Wollokdocs](#wollokdocs)
    * [Mecanismo de excepciones](#mecanismo-de-excepciones)
    * [Identidad vs. igualdad](#identidad-vs-igualdad)


<hr>

# Archivos Wollok #

Wollok tiene actualmente estos tipos de archivo, cada uno representa un concepto diferente:

* un **Programa Wollok** (.wpgm)
* un **Módulo o Biblioteca Wollok** (.wlk)
* un **Test Wollok** (.wtest)

En las siguientes secciones se explicarán más en detalle.

# Programas Wollok #

Un programa es una pieza de código ejecutable que consiste en una serie de expresiones que serán evaluadas en forma secuencial. Se puede pensar como el punto de entrada principal (o _main_) de un programa en otros lenguajes.

Por ejemplo:

```scala
program helloWorld {
   console.println("Hola mundo")
}
```

Este programa simplemente escribe "Hola mundo" en la consola. Las secciones siguientes explicarán cómo entender cada una de las partes que componen la expresión "console.println(...)". Por el momento, se puede pensar como una instrucción de alto nivel que está disponible en cualquier programa.

# Referencias variables y constantes #

En Wollok existen dos tipos de referencias posibles: variables y constantes. 

Una **variable** es una referencia cuyo valor puede cambiar en cualquier momento. Lo que cambia no es el objeto en sí, sino a qué objeto estoy apuntando con mi referencia.

```scala
var edad = 10
edad = 11
edad = edad + 1
```

Una **constante** es una referencia que siempre apunta al mismo objeto, por lo tanto es necesario definir el objeto apuntado en el momento de inicializar la referencia. No es una operación válida tratar de cambiar la referencia para apuntar a otro objeto.

Lo que es constante no es el objeto apuntado (que puede cambiar su estado interno) sino la referencia.

```scala
const edadAdulta = 21

edadAdulta = 18  // ¡ ESTO NO COMPILA !
```

# Comentarios #

Hay tres tipos de comentarios

* comentarios de una sola línea utilizan la doble barra (//)
* comentarios que ocupan muchas líneas comienzan con /* y terminan con */
* comentarios "wollok-docs" comienzan con /** y terminan con */. Los veremos más adelantes

Ejemplos:

```scala
const edadAdulta = 21   // comentario de una sola línea

/*
 comentario
 de muchas
 líneas
 */
edadAdulta = 18
```

# Objetos básicos #

Ahora hablaremos de los objetos básicos que vienen con la distribución de Wollok. 

## Números ##

Los números entienden una gran variedad de mensajes, como las operaciones matemáticas para sumar, restar, etc. Son objetos inmutables, esto quiere decir que 

* una vez inicializado un número, su estado interno no cambia
* la suma de 1 + 2 resulta en un nuevo número que representa al 3. 

```scala
const a = 1
var b = a + 10  // suma
b = b - 1       // resta
b = b * 2       // multiplicación
b = b / 2       // división
b = b % 2       // resto
b = b ** 3      // elevado a (3 en este caso)
5.between(2, 7) // preguntamos si 5 está entre 2 y 7 ==> sí
3.min(6)        // el menor número entre 3 y 6 ==> 3
3.max(6)        // el menor número entre 3 y 6 ==> 6
```

Además, Wollok soporta **operadores sufijos** así como también **la operación +=** entre otras tantas variantes, que son _shortcuts_ de otras expresiones.

```scala
b++             // b = b + 1
b--             // b = b - 1

b += 2          // b = b + 2
b -= 1          // b = b - 1
b *= 3          // b = b * 3
b %= 2          // b = b % 2
b /= 2          // b = b / 2
```

## Valores Booleanos ##

Hay dos objetos booleanos representados con los literales "true" y "false". Al igual que los números también son objetos inmutables, la expresión ```(true || false)``` devuelve un nuevo objeto true.

```scala
const hecho = true and true
const esTrue = true
const esFalse = false

const seraFalse = esTrue and esFalse

const seraTrue = esTrue or esFalse

const seraTrue = not false
```

Para aquellos que estén acostumbrados a los operadores con símbolos (en lenguajes como C o java) pueden usar esa sintaxis si se sienten más cómodos:

* **and**: ```a && b```
* **or**: ```a || b```
* **not**: ```!a```

Todas las [operaciones de igualdad](#comparar-objetos-iguales) y [comparación](#comparar-objetos-en-general) se evalúan con objetos booleanos.

## Strings ##

Las cadenas de caracteres se delimitan con una o dos comillas. 

```scala
const unString = "hola"
const otroString = 'mundo'
```

También son objetos inmutables (al concatenar "hola" y "mundo" tenemos un nuevo String "holamundo"). 

```scala
const holaMundo = unString + otroString + " !"
```

## Comparar objetos iguales ##

Las siguientes expresiones comparan si dos objetos son iguales resultan en valores booleanos:

```scala
const uno = 1
const dos = 2

const esFalso = (uno == dos)

const esVerdadero = uno == 1

const esVerdadero = (uno != dos)
```

* == nos dice cuándo dos objetos **son iguales**
* != nos dice cuándo dos objetos **no son iguales**

Luego de introducir objetos y clases repasaremos este concepto.

## Comparar objetos en general ##

También tenemos otras expresiones que permiten comparar objetos (por lo general números, pero también Strings y fechas)

```scala
const esCierto = 23 < 24      // menor que
const esCierto = 23 <= 24     // menor o igual que
const esCierto = 24 > 10      // mayor que
const esCierto = 24 >= 10     // mayor o igual que
```

# User Objects #

Además de los objetos predefinidos recientemente visto, cualquier lenguaje orientado a objetos debe permitir que el desarrollador puede crear sus propios objetos.

Esto puede hacerse de dos maneras ligeramente diferentes:

* Objetos como literales
* _Named objects_ o WKO

## WKO ##

Los _Named Objects_ también se conocen como "Well-Known Objects" o "WKOs".

Para definir un objeto y asignarle una referencia global a él utilizamos esta construcción:

```scala
object miObjeto {
    // aquí va el código del objeto miObjeto
}
console.println(miObjeto)
```

A partir de aquí podemos acceder en cualquier parte del programa a la referencia "miObjeto".

## Objetos como literales ##

Otra opción es utilizar objetos literales sin explícitamente darle un nombre. Esto permite asignarlo a una variable de alcance más limitado que el global.

```scala
const miObjeto = object {
    // código aquí
}
console.println(miObjeto)
```

El objeto creado sirve a modo de ejemplo didáctico, ya que es un objeto vacío. En la consola sólo se verá

```
anObject{}
```

## Metodos ##

Dentro de las llaves de un objeto se puede definir su comportamiento mediante la implementación de métodos. Por ejemplo representaremos un pájaro:

```scala
const unAve = object {
    method volar(metros) {
        return "acabo de volar " + metros +  " metros"
    }
}

const resultado = unAve.volar(23)
console.println(resultado)
```

Los métodos se definen mediante la palabra **method**. Pueden recibir de 0 a n parámetros y opcionalmente devolver un valor. Los tipos de los parámetros no hay que definirlos. En el caso de arriba, el nombre del parámetro es "metros", una referencia que estará presente en el contexto del método a evaluar.

En el caso de que el método devuelva un valor es obligatorio escribir una sentencia **return**, a excepción de los [simple return method](#simple-return-method) explicados en la siguiente sección.

### Simple Return Method ###

Hay un _shortcut_ para definir métodos simples que solo devuelven valores.

```scala
const unAve = object {
    method volar(metros) = "acabo de volar " + metros +  " metros"
}
```

El lector podrá notar que no es necesario escribir return, ni tampoco las llaves que encierren el cuerpo del método. Las llaves se reemplazan por el símbolo =, que indica que la evaluación de la parte derecha del método será el valor devuelto.

Esta sintaxis es cómoda para métodos de una sola línea que solo calculan valores.

## Variables de instancia ##

Hasta el momento nuestro pájaro no hace demasiado, así que le agregaremos "estado", mediante las variables de instancia. Algunos métodos harán que el estado del objeto cambie.

```scala
const unAve = object {
    var energia = 0
    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(gramos) {
        energia += gramos
    }
}

unAve.volar(23)
unAve.comer(10)
```

Las referencias de la instancia se declaran en un objeto, justo antes del primer método. [Como hemos visto](#referencias-variables-y-constantes), las referencias pueden ser **var** o **const**.

**Todas las referencias de instancia son solo visibles para los métodos de un objeto**.

Esto no es válido

```scala
unAve.energia
```

Para poder acceder a la energía del pájaro, el objeto debe publicar esa información mediante un método.

```scala
const unAve = object {
    var energia = 0
    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(gramos) {
        energia += gramos
    }
    method energia() {
        return energia
    }
}

unAve.volar(23)
unAve.comer(10)

const e = unAve.energia()
```

# Mensajes #

Uno de los conceptos más importantes de la programación orientada a objetos son los **mensajes**. En Wollok, (casi) todo lo que uno hace es enviar mensajes a objetos.

Al enviar el mensaje a un objeto se ejecuta la definición del método. 

Para enviar un mensaje la sintaxis es:

```scala
objeto.mensaje(param1, param2, ...)
```

Estas variantes **no son válidas**:

```scala
mensaje(param1, param2)   // falta el objeto receptor
objeto.mensaje            // faltan paréntesis
```

## Self ##

¿Qué pasa cuando estoy en un objeto y quiero enviarme un mensaje a mí mismo para aprovechar un método existente?

En ese caso utilizamos **self** que es una referencia que apunta al objeto donde estamos escribiendo el código.

```scala
const unAve = object {
    var energia = 0
    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(gramos) {
        energia += gramos
    }
    method energia() {
        return energia
    }
    // NUEVO METODO
    method volarYComer(metrosAVolar, gramosAComer) {
        self.volar(metrosAVolar)
        self.comer(gramosAComer)
    }
}

unAve.volarYComer(23, 10)
```

# Polimorfismo con objetos #

El **polimorfismo** es la capacidad de un objeto de ser intercambiable con otro, sin que un tercero que los usa se vea afectado.

Wollok comparte algunas características con los lenguages dinámicamente tipados, ya que tiene un [Pluggable Type System](http://bracha.org/pluggableTypesPosition.pdf). Esto significa que si dos objetos entienden los mismos mensajes, entonces no necesitamos nada más para que un tercero los use en forma polimórfica.

Por ejemplo, cambiaremos nuestro pájaro para agregar el concepto Comida, en lugar de solamente comer una cantidad de gramos.

```scala
const unAve = object {
    var energia = 0
    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(comida) {
        energia += comida.energia() // una "comida" es algo que provee "energia"
    }
    method energia() {
        return energia
    }
}
```

Una comida es cualquier objeto que entienda el mensaje energia() y devuelva un número (la cantidad de energía que provee). 

Entonces podemos tener dos objetos que representen comida específica:

```scala
const alpiste = object {
    method energia() { return 5 } 
}

const arroz = object {
    method energia() { return 2 }
}

unAve.comer(aveseed)
unAve.comer(rice)
```

Aquí tanto "alpiste" como "arroz" son polimórficos respecto a "unAve".

# If

La expresión **if** permite evaluar una condición booleana y realizar diferentes acciones para el caso verdadero y falso respectivamente.

Por ejemplo:

```scala
if (self.estaLloviendo()) {
    self.irACasaEn(self.auto())
}
else 
    self.irACasaEn(self.bicicleta())
```

En Wollok el "if" no es una sentencia (que controla el flujo) sino más bien una expresión. Esto implica que devuelve un valor, lo que permite cambiar el ejemplo a esta otra forma:

```scala
const transporte = 
   if (self.estaLloviendo()) self.auto() else self.bicicleta()

self.irACasaEn(transporte)
```

# Colecciones #

Wollok provee un literal para los **objetos Lista**, una colección que respeta el orden de los elementos ingresados.

La sintaxis es:

```scala
[ elemento1, elemento2, ..., elementoN ]
```

Por ejemplo:

```scala
const numeros = [2, 23, 25]

numeros.size() == 3   // true !
numeros.contains(23)  // true !

numeros.remove(23)
numeros.size() == 2   // true

numeros.clear()
numeros.size() == 0   // true
numeros.isEmpty()     // true
```

Como las listas son objetos (una vez más), la forma de interactuar con las listas es a través de los mensajes. 

Ṕara poder utilizar mensajes más interesantes, necesitamos conocer otro objeto muy importante: ¡los [closures](#closures)!

## Conjuntos

Wollok también provee un literal para los **objetos Set**, una colección sin elementos duplicados ni orden.

La sintaxis es

```scala
const numeros = #{2, 23, 25}
```

Nótese tanto el numeral inicial como las llaves que encierran los elementos del conjunto.

## Closures ##

Un _closure_ es un objeto que representa una _porción de código_ que puede evaluarse en cualquier momento, todas las veces que uno quiera. También pueden asignarse a referencia, pasarse como parémtros y ser devueltas como resultado de los métodos.

Para una explicación más detallada véase [wikipedia](http://en.wikipedia.org/wiki/Closure_(computer_programming)).

Wollok soporta closures mediante el uso de literales. 

Veamos un ejemplo:

```scala
const helloWorld = { "helloWorld" }
const response = helloWorld.apply()		

response == "helloWorld"      // true
```

La primea línea define un closure "helloWorld" que no recibe parámetros. 
La segunda ejecuta el closure enviándole el mensaje **apply()**.

Aquí vemos otro ejemplo con un closure que recibe un parámetro:

```scala
const helloWorld = { to => "hello " + to }
const response = helloWorld.apply("world")

response == "hello world"      // true
```

Entonces, la sintaxis para closures es:

```groovy
{param1, param2, ..., paramN => /* code */ }
```

Un dato importante de los closures es que no solo acceden a sus parámetros, sino también a cualquier otra referencia en el contexto donde fueron definidas. Esto las vuelve realmente poderosas. Veamos un ejemplo muy sencillo:

```scala
var to = "world"
const helloWorld = { "hello " + to }
			
helloWorld.apply() == "hello world"      // true
		
to = "someone else"
helloWorld.apply() == "hello someone else"      // true
```

Se podrá ver que el closure accede a la variable "to" que es definida fuera del contexto del closure mismo, dentro del programa. 

Si cambiamos esta referencia, este efecto se propaga al closure (como se muestra en la segunda llamada, el valor devuelto es diferente).


## Closures y colecciones ##

Como la mayoría de los lenguajes, Wollok provee una rica interfaz para operar con colecciones. Esto evita escribir código tedioso y repetitivo para filtrar, transformar, sumar elementos de una colección. La mayoría de estos mensajes recibe closures como parámetro.

Por ejemplo, para realizar una cierta lógica en cada uno de los elementos, existe el método **forEach**:

```scala
const numeros = [23, 2, 1]

var suma = 0
numeros.forEach({ n => suma += n })
			
sum == 26      // true
```

En el caso de que el único parámetro que se envíe sea un closure, se pueden evitar los paréntesis. El ejemplo anterior también se puede escribir

```scala
numeros.forEach { n => sum += n }
```

Para saber si todos los elementos cumplen una determinada condición, existe el mensaje "all"

```scala
[3, 1].all { n => n > 0 } // true
```

**filter** devuelve una nueva colección con los elementos que cumplen un criterio.

```scala
const mayoresAUno = [3, 1].filter { n => n > 1 }
mayoresAUno.size() == 1      // TRUE
```

**map** devuelve una nueva colección aplicando una transformación a los elementos de la colección original. La transformación se modela mediante un _closure_.

```scala
var mitades = [10, 20].map { n => n / 2 }
	
mitades.contains(5)       // TRUE
mitades.contains(10)      // TRUE
mitades.contains(15)      // FALSE
```

# Clases #

Las clases comparten algunas características con los objetos literales: definen variables de instancia y métodos. Pero no son expresiones (no pueden asignarse a variables), sino más bien **definiciones**.

Veamos un ejemplo:

```scala
class Ave {
    var energia = 0

    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(comida) {
        energia += comida.energia()
    }
    method energia() {
        return energia
    }
}
```
Para tener un Ave, creamos un objeto que es instancia de esa clase:

```scala
const pepita = new Ave()
pepita.volar(23)
```

## Herencia ##

Las clases pueden heredar de otras superclases. Esto permite tomar las definiciones existentes tanto de las variables como de los métodos. 

Las variables de instancia son visibles desde la subclase. Para aquellos familiarizados con Java, son variables con visibilidad "protected".

Todos los métodos en Wollok son públicos.

Ejemplos:

```scala
class AveNadadora inherits Ave {

   method nadar(metros) {
       energia -= metros * 1.2
   }
}

const eva = new AveNadadora()
eva.nadar(10)
eva.volar(50)
```

Las subclases pueden agregar nuevos métodos y variables y pueden redefinir métodos existentes (para más información ver [Redefinición y super](#redefinicion-y-super)).

## Metodos abstractos y clases ##

Un **método abstracto** declara su nombre y sus parámetros, sin implementarse. Es tarea de cada subclase proveer una implementación del método mediante la [redefinición](#redefinicion-y-super)

Para definir un método abstract en Wollok, simplemente no se escribe el cuerpo del método (no existe la palabra reservada **abstract**).

```scala
class MyClass {

   method anAbstractMethod(param)

}
```

Una clase con al menos un método abstracto se considera una **clase abstracta**. De nuevo, no hay una palabra reservada **abstract** para indicar que una clase es abstracta, ya que es información que se puede inferir de la definición misma de la clase.

## Redefinicion y super ##

Las subclases pueden redefinir métodos ya implementados por su superclase. Para ello, debe explícitamente usar la palabra "override" antes de la definición del método.

```scala
class AveEficiente inherits Ave {

    override method volar(metros) {
        energia -= metros / 2
    }

}
```

Si al redefinir un método necesitamos invocar al método original, podemos utilizar la palabra reservada **super**:

```scala
class Ave {
    var energia = 0

    method volar(metros) {
        energia -= 2 + metros
    }
    method comer(comida) {
        energia += self.energiaObtenida(comida)
    }

    method energiaObtenida(comida) {
        return comida.energia()
    }

}

class AveEficiente inherits Ave {

    override method energiaGain(comida) {
        super(comida) / 2
    }
}
```

Como puede verse, no es necesario especificar el nombre del método. En Wollok solo puede invocarse al método sobreescrito usando **super**. No es válido usar super para llamar a cualquier otro método en la superclase (porque además conceptualmente no es correcto).

Esto mantiene simple el lenguaje.

De la misma manera, super solo puede utilizarse en el contexto de un método que redefine otro.

## Constructores ##

Un constructor es un tipo especial de método que se llama para crear e inicializar una nueva instancia de una clase.

Wollok permite:

* **Múltiples constructores:** esto implica que se puede proveer más de un constructor con diferente número de argumentos
* **Delegación de constructores**: un costructor puede llamar a otro para reutilizar código.
* **Delegación a constructores implícitos**: para los constructores sin parámetros.

Veremos cada uno en las secciones siguientes.

### Constructor simple ###

Aquí tenemos una clase Point con un constructor

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
}
```

Ahora podemos hacer:

```scala
   const p = new Point(2, 1)
```

### Constructor por defecto

Una clase que no define un constructor por defecto tiene implícitamente un constructor vacío (sin argumentos).

Esto

```scala
class Point {
}
```

es lo mismo que

```scala
class Point {
    constructor() {}
}
```

Por este motivo en ambos casos esto funciona correctamente

```scala
   const p = new Point()
```

Una vez que se especifica un constructor, esto implica que la responsabilidad ya pasa a ser de quien construyó la clase, y no existen más constructores implícitos.

### Multiples constructores ###

Podemos tener tantos constructores como queramos, siempre que respetemos que cada constructor debe tener distinta cantidad de parámetros.

Agreguemos un constructor a nuestro punto

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
    constructor(p) {
        x = p.getX()
        y = p.getY()
    }
    method getX() { return x }
    method getY() { return y }
}
```

Ahora podemos instanciar un punto de dos maneras diferentes:

```scala
   var p1 = new Point(1,2)
   var p2 = new Point(p1)
```

### Constructor Delegation ###

En el ejemplo anterior habrán notado que en los constructores se repite código. En ambos constructores estamos cambiando las referencias a la variables de instancia. Siempre es una buena práctica evitar la repetición de código (o de ideas). Para eso, tenemos que abstraer funcionalidades comunes, aplicando el principio D.R.Y. (Don't repeat yourself).

Para eso, Wollok provee un mecanismo para que un constructor llame y delegue **primero** a otro constructor.

Hay dos tipos de situación:

* **Delegar a otro constructor en la misma clase**
* **Delegar a un constructor en la superclase**

Para nuestra clase Point veremos el primer caso:

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
    constructor(p) = self(p.getX(), p.getY()) {
       // algún comportamiento aquí
    }
    method getX() { return x }
    method getY() { return y }
}
```

Nótese la sintaxis:

```scala
   constructor(...params...) =  self(...paramsToOther...) {
      body
   }
```

Esto significa que el cuerpo de nuestro constructor se ejecutará DESPUÉS de la ejecución del constructor al que delegamos. La delegación, entonces, es la primera cosa que ocurre.

El segundo caso es la delegación a un constructor de la superclase:

```scala
class Point {
    var x
    var y

    constructor(_x, _y) {
        x = _x
        y = _y
    }
}

class Circle inherits Point {
    var r
    constructor(_x, _y_, _r) = super(_x, _y) {
        r = _r
    }
}
```

Nótese que la delegación se define a partir del uso de la palabra reservada **super**. Este uso de super es similar al de la redefinición de los métodos, con la salvedad de que podemos agregar o quitar parámetros en la llamada. 

A veces es necesario declarar explícitamente un constructor que delegue a la superclase si la superclase no define un constructor vacío. 

### No hay herencia de constructores ###

Si bien los constructores son una especie de métodos especiales, no comparten todas las características de los métodos. Por ejemplo, los constructores no pueden heredarse. Cada clase define sus propios constructores, que como hemos visto pueden delegar al constructor de la superclase, esto **no implica que se hereden**. 

### Inicialización de variables en los constructores ###

Hemos visto que hay un tipo de referencia inmutable: los **const**.
Al definir una clase, podemos esperar al momento de la construcción para asignar las referencias constantes. Entonces el objeto construye sus referencias inmutables en la instanciación y luego no las modifica más.

Aquí vemos un ejemplo:

```scala
class ImmutablePoint {
    const x
    const y
    
    constructor(_x, _y) {
        x = _x
        y = _y
    }
}
```

Puede parecer extraño que permitimos asignar un valor a una referencia que no puede cambiar, pero es totalmente válido hacerlo en el momento de la construcción.

Una vez asignada la referencia, ya sí no puede cambiar más. Esta sintaxis permite evitar código repetitivo.

### Herencia de Objetos ###

Los [WKO](#wko) pueden definirse en base a una clase existente.

```scala
object lassie inherits Dog {
   // ...
}
```

Esto permite la migración natural de objetos a clases de un programa que inicialmente comienza con objetos y luego parte del comportamiento se muda a definiciones de clase para reutilizar código. A veces no es necesario convertir todos los objetos a clases, Wollok permite combinar ambos en conjunto.

Hay un caso especial cuando una clase define constructores explícitos. Aquí está la sintaxis para eso:

```scala
object lassie inherits Dog("Lassie", 3) {
   // ...
}

class Dog {
   constructor(name, age) {
      // ...
   }
}
```

# Polimorfismo con clases #

Wollok combina objetos y clases en un solo lenguaje. El polimorfismo con clases funciona de la misma manera que con los objetos. No importa si un objeto es instancia de una clase, de un WKO o de un objeto anónimo, todos pueden ser potencialmente usados en forma polimórfica.

**Dos objetos pueden usarse en forma polimórfica si todos entienden un conjunto común de mensajes**

```scala
package aves {

   class Ave {
        method volar() {
             // ...
        }
   }

   class Avion {
        method volar() {
            // ...
        }
   }

}
```
Entonces:

```scala
    const avion = new Avion()
    const pepita = new Ave()

    const objetosQueVuelan = [ avion, pepita ]

    objetosQueVuelan.forEach { o => o.volar() }
```

No es necesario tener una superclase común para objetos para ser tratados polimórficamente. Como se dijo antes, lo único importante son los mensajes que un objeto entiende. *Olvídense de la clase, ¡podría ni siquiera tenerla!*

Tanto las clases Avion como Ave son parte de diferentes jerarquías, pero sus instancias siguen siendo polimórficas para cualquier otro objeto que las quiera hacer volar.

Algunos lenguajes como Java fuerzan a definir un tipo, una interface, para que puedan ser polimórficas. Wollok no.

Aun así, el compilador es capaz de chequear si el mensaje que enviamos es válido.

Además de las clases, puede haber polimorfismo entre clases y objetos:

```scala
    const boomerang = object {
          method volar() {
               // ... va, y viene
          }
    }

    const objetosQueVuelan = [ avion, pepita, boomerang ]

    objetosQueVuelan.forEach { o | o.volar() }

```

# Modularización

Wollok provee una serie de reglas y construcciones del lenguaje para fomentar programas modulares: separar clases y programas para ser usado por otros programas / librerías.

## Packages

Un package es una unidad lógica que agrupa varias clases y/o WKOs.

```scala
package aves {

   class Ave {
        // ...
   }

   class AveQueNada inherits Ave {
        // ...
   }

   // ...

}
```

Cuando se crea un archivo .wlk, el nombre del archivo define el nombre del package por defecto. Ejemplo: si creo un archivo aves.wlk, esto implica definir un package aves...

Un archivo Wollok puede definir más de un package

```scala
package aves {
    // ...
}

package entrenadores {
    // ...
}

package ambiente {
    // ...
}
```

Cada package tiene un nombre ("aves", "entrenadores", etc.). Cada clase definida dentro toma el nombre del package como prefijo, lo que introduce el **fully qualified name** (FQN) de una clase.

Ejemplo:

```scala
package aves {

   class AveQueNada {
       // ...
   }

}
```

El FQN de la clase es: **aves.AveQueNada**

Al codificar dentro de un package, podemos referirnos a las clases por su **nombre corto** (en el ejemplo, AveQueNada). Esto es válido mientras estemos dentro del mismo paquete.

Para referirnos a una clase que está fuera del package DEBEMOS usar su FQN. Para evitar escribir una y otra vez los FQN de la clase, podemos usar los [imports](imports), como se describe a continuación.


## Librerías vs Programas ##

// TODO

## Imports ##

Para poder acceder a las definiciones de distintas clases, es necesario decirle a Wollok dónde encontrarlas mediante el mecanismo de imports. Por defecto cada archivo Wollok (.wlk) define un package, por lo que al importar definiciones de un archivo tenemos acceso a todos los packages contenidos en él.

Ejemplo: tenemos un archivo definiciones.wlk

```scala
object pepita {
   var energia = 0
   method volar() { energia -= 10 }
}
```

En otro archivo objects.wlk podemos acceder a pepita mediante un import:

```scala
import definiciones.* // tomar todas las definiciones escritas en definiciones.wlk

object entrenador {
    method entrenar() {
        pepita.volar()
    }
}
```

En el caso de tener varios packages en el mismo archivo, debemos hacer el import de cada uno de los packages involucrados. Si nuestro archivo definiciones.wlk tiene estos packages:

```scala
package points {
    class ImmutablePoint {
    }
}

package aves {
    object pepita {
        var energia = 0
        method volar() {
            energia -= 10   
        }
    }
}
```

Entonces debemos cambiar nuestro import del archivo objects.wlk de la siguiente manera:

```scala
import definiciones.aves.*

object entrenador {
    method entrenar() {
        pepita.volar()
    }
}
```

# Funcionalidades avanzadas #

## Type System ##

El sistema de tipos de Wollok (Wollok Type System) es una funcionalidad opcional, que puede activarse o desactivarse. El sistema de tipos permite ocultar la información explícita de tipos, ya que para los desarrolladores novatos esto implica tener que explicar/entender un nuevo concepto.

De esa manera los tipos se introducen gradualmente a lo largo de la cursada, lo que constituye un desafío importante.

### Type System - Parte I #

En un primer momento, se comienza a partir de un sistema de tipos que solo incluye objetos predefinidos, objetos definidos por el usuario y literales: números, strings, booleanos, listas, conjuntos, closures, entre otros.

### Type System - Parte II #

El sistema de tipos de Wollok permite combinar clases con objetos, chequear que los envíos de mensajes sean correctos y que los tipos en las asignaciones sean compatibles. 

Todo esto sin necesidad de anotar ningún tipo en las definiciones de las variables, los parámetros o los valores devueltos por los métodos.

Por ejemplo 

```scala
   class Ave {
       method volar() { ... }
       method comer() { ... }
   }

   class AveQueNada inherits Ave {
       method nadar() { ... }
   }

   const pepita = new Ave()
   const pato = new AveQueNada()

   class Superman() {
       method volar() { ... }
       method tirarLaserDeLosOjos() { ... }
   }

  var volador = pepita
  volador = new Superman()
```

**Aclaración:** Wollok obliga a definir el programa y las clases en diferentes archivos, pero sirve para la presente explicación ver todo el código en conjunto.

Estos son los tipos que infiere Wollok:

* pepita : se tipa a **Ave**
* pato : se tipa a **AveQueNada**
* volador : se tipa a **{ volar() }**, que significa "cualquier objeto que entienda el mensaje volar sin parámetros". Esto es básicamente los mensajes en común que tienen las clases Ave y Superman. El sistema de tipos infiere esto porque nuestra referencia a "volar" se asignar a "pepita" y "new Superman()" en nuestro programa. Entonces, enviar cualquier mensaje además de  "volar()" resultará en un error de compilación.

Esto compila

```scala
volador.volar()
```

mientras que esto no

```scala
volador.comer()
// o
volador.tirarLaserDeLosOjos()
```

Y esto compila perfecto:

```scala
volador = object {
    method volar() { ... }
    method otroMetodo() { ... }
}
```

Ya que el objeto cumple con la definición del tipo estructural { volar() }

## WollokDocs ##

Wollok tiene una sintaxis especial para documentar los elementos del lenguaje.

Por ejemplo, las clases:

```scala
/**
 * A bird knows how to fly and eat. 
 * It also has energy. 
 *
 * @author jfernandes
 */
class Bird {
   // ...
}
```

Los métodos y las referencias (variables de instancia) también pueden tener este tipo de documentación. Esto facilita el entendimiento posterior para quien lo quiera usar después, ya que el IDE muestra esa documentación en los _tooltips_ y otras partes visuales.


## Mecanismo de excepciones ##

Wollok provee un mecanismo de excepciones similar al de Java / Python.

Una excepción representa una condición en la que no pueden continuar enviándose mensajes los objetos involucrados en resolver un requerimiento, por lo tanto **tira una excepción**.

Eventualmente en alguna otra parte un interesado podrá manejar esta situación para reintentar la operación, tratar de resolverlo, avisar al usuario, etc.

Así que estas son las dos operaciones básicas que pueden hacerse con una excepción:

* **throw**: "tirar" una excepción hasta que alguien la atrape
* **catch**: atrapar la excepción que se encuentra en la pila de ejecución, definiendo código para manejar esa excepción.

### Throw ###

Veamos un código de ejemplo de la sentencia throw:

```scala
class MyException inherits wollok.lang.Exception {}
class A {
	method m1() { 
		throw new MyException()
	}
}
```

Aquí el método m1() siempre tira una excepción, que es una instancia de MyException. 

**Importante:** solo puede hacerse throw de instancias que formen parte de la jerarquía de *wollok.lang.Exception* (esto es Exception o sus subclases).


### Try-Catch ###

Aquí tenemos un ejemplo de cómo atrapar una excepción:

```scala
program p {
	const a = new A()
    const otroA = new A(5)
	
	try {
		a.m1()
		...
	}
	catch e : MyException {
		otroA.m1()
	}
}
```

Este programa atrapa cualquier MyException que se tire dentro del código encerrado en el **try**.

### Then Always ###

Además del bloque "catch", un bloque "try" puede definir un bloque "always", que **siempre** se ejecutará sin importar si hubo un error o no.

```scala
try {
	a.m1()
}
catch e : MyException
	console.println("Exception raised!") // OK!
then always
	counter = counter + 1
}
```

### Catchs multiples ###

Un bloque try puede tener más de un catch, en caso de necesitar manejar diferentes tipos de excepción de distinta manera:

```scala
try 
	a.m1()
catch e : MySubclassException
	result = 3
catch e : MyException
	result = 2
```

## Sobrecarga de operadores ##

// TODO

## Identidad vs Igualdad ##

Wollok sigue las convenciones de igualdad e identidad que tienen Java / Smalltalk. Por defecto, dos objetos son iguales si son el mismo objeto.

```scala
var pepita = new Ave()
const amiga = pepita
amiga == pepita   ==> true, son el mismo objeto
```

Pero la igualdad es posible redefinirse, por ejemplo dos strings son iguales si tienen los mismos caracteres:

```scala
var unString = "hola"
var otroString = "hola"
unString == otroString ==> true, tienen los mismos caracteres
```

El operador == es equivalente al mensaje equals:

```scala
var unString = "hola"
var otroString = "hola"
unString.equals(otroString) ==> true, tienen los mismos caracteres
```

Para saber si dos referencias apuntan al mismo objeto, se utiliza el operador ===

```scala
var unString = "hola"
var otroString = "hola"
unString === otroString  ==> false, no apuntan al mismo objeto
otroString = unString
unString === otroString  ==> true (ahora sí)
```

En general, hay objetos que representan valores: los números, los strings, los booleanos, y los [value objects](https://en.wikipedia.org/wiki/Value_object), a ellos se les suele redefinir el == / equals en base a su estado. 

Para más información ver el paper de Wollok en el que se habla de [igualdad e identidad](https://docs.google.com/document/d/156PsLi7v5LPFJ5oVy6SPwH8cQRZaBqJh-aosZjUbE4s/edit#heading=h.hryrt6t60c2h) entre otros conceptos.

