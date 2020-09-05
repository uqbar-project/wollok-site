---
layout: null
---

## Indice rápido ##

* <a href="#user-objects" class="wollokLink">Objetos definidos por el desarrollador</a>
    * <a href="#objetos-autodefinidos" class="wollokLink">Objetos autodefinidos</a>
    * <a href="#objetos-anonimos" class="wollokLink">Objetos anonimos</a>
* Definicion de un objeto 
    * <a href="#metodos" class="wollokLink">Métodos</a>
        * <a href="#simple-return-method" class="wollokLink">Simple return method</a> 
    * <a href="#atributos" class="wollokLink">Atributos</a>
    * <a href="#mensajes" class="wollokLink">Mensajes</a>
    * <a href="#self" class="wollokLink">Self</a>
    * <a href="#polimorfismo" class="wollokLink">Polimorfismo</a>
    * <a href="#if" class="wollokLink">If</a>
    * <a href="#propiedades" class="wollokLink">Propiedades</a>

___

## User Objects ##

Además de los objetos predefinidos recientemente vistos, cualquier lenguaje orientado a objetos debe permitir que el desarrollador puede crear sus propios objetos.

Esto puede hacerse de dos maneras ligeramente diferentes:

* Objetos autodefinidos
* Objetos anónimos

### Objetos autodefinidos ###

Los objetos autodefinidos, también llamados _Named Objects_ o "Well-Known Objects", y más sintéticamente "WKOs". También se los puede denominar "singleton".

Para definir un objeto utilizamos esta construcción:

```wollok
object miObjeto {
    // aquí va el código del objeto miObjeto
}

```

A partir de aquí podemos acceder en cualquier parte del programa al objeto "miObjeto".


### Mensajes ###

Uno de los conceptos más importantes de la programación orientada a objetos son los **mensajes**. En Wollok, (casi) todo lo que uno hace es enviar mensajes a objetos.

Al enviar el mensaje a un objeto se ejecuta la definición del método. 

Para enviar un mensaje la sintaxis es:

```wollok
objeto.mensaje(param1, param2, ...)
```

Estas variantes **no son válidas**:

```wollok
mensaje(param1, param2)   // falta el objeto receptor
objeto.mensaje            // faltan paréntesis
```

### Metodos ###

Dentro de las llaves de un objeto se puede definir su comportamiento mediante la implementación de métodos. Por ejemplo representaremos a pepita:

```wollok
object pepita{
    method estasFeliz() {
        return true 
    }
    method saluda(nombre) {
        return "hola " + nombre
    }

}

pepita.estasFeliz()    // se obtiene true
pepita.saluda("pepona") // se obtiene "hola pepona"
```

Los métodos se definen mediante la palabra **method**, seguida de un indentificador, los _()_ para agrupar los parámetros y luego entre _{}_ el código del método propiamente dicho.
Los métodos especifican la forma en que un objeto reacciona frente a los mensajes que recibe. Para los mensajes que son _preguntas_, en los que se espera que el objeto devuelva un valor, se debe escribir una sentencia **return** seguida del valor a retornar. Se la indica generalmente como última sentencia, ya que interrumpe la ejecución del método. 
En los mensajes que representan _órdenes_, es decir que indican que el objeto debe realizar alguna acción o causar algún efecto, no se espera que retornen nada. Suelen tener una sentencia de asignación, con un _=_, para modificar el valor de una referencia, o delegan en otro método que es donde finalmente se realiza la modificación del estado. 
Los métodos pueden recibir o no parámetros. En caso afirmativo, entre los _()_ que siguen al identificador del método y separados por comas, se definen los parámetros con los que se hace referencia a cada uno de los valores que se reciben. La asociación se hace uno a uno según la posición y sin especificaciones de tipo, por lo que la cantidad de parámetros utilizados debe coincidir entre el envío del mensajes y la definición del método. Cada parámetro es una referencia constante que estará presente en el contexto del método.


### Atributos ###

Hasta el momento pepita no hace cosas muy interesantes, retorna siempre lo mismo o sólo dependiendo de los parámetros que recibe en los mensajes. Así que le agregaremos "estado" al objeto, mediante atributos, también llamados variables de instancia, en los cuales va a guardar valores, recordar información y en definitiva hacer referencia a otros objetos. Algunos métodos harán que el estado del objeto cambie, asignándole nuevos valores a los atributos. A su vez, el mismo estado del objeto influirá en la respuesta de otros métodos.

```wollok
object pepita {
    var energia = 100
    method volar(metros) {
        energia = energia - 2 + metros
    }
    method comer(gramos) {
        energia = energia + gramos
    }
    method estaFeliz() {
        return energia > 50
    }
}

pepita.volar(23)
pepita.comer(10)
pepita.estaFeliz()
```

El atributo **energia** inicialmente tiene un valor de 100, cada vez que se le envía el mensaje **volar()** o **comer()** a pepita el valor al que hace referencia energía va cambiando y cuando se le pregunta por **estaFeliz()**, la respuesta depende del valor de energía del momento.

Los atributos se declaran en un objeto, justo antes del primer método. [Como hemos visto](#referencias-variables-y-constantes), las referencias pueden ser **var** o **const**.

**Todas las referencias de instancia son sólo visibles dentro del mismo objeto**, se pueden acceder desde cualquiera de sus métodos.

Estas expresiones **no son válidas**.

```wollok
pepita.energia 
pepita.energia = 200
pepita.energia() //sería válido si se definiese un método llamado energia()
```

### Self ###

¿Qué pasa cuando estoy en un objeto y quiero enviarme un mensaje a mí mismo para aprovechar un método existente?

En ese caso utilizamos **self** que es una referencia que apunta al objeto donde estamos escribiendo el código.

```wollok
object pepita {
    var energia = 100
    method volar(metros) {
        energia = energia - 2 + metros
    }
    method comer(gramos) {
        energia = energia + gramos
    }
    method estaFeliz() {
        return energia > 50
    }

    // NUEVO METODO
    method volarYComer(metrosAVolar, gramosAComer) {
        self.volar(metrosAVolar)
        self.comer(gramosAComer)
    }
}

pepita.volarYComer(23, 10)
```

### Polimorfismo  ###

El **polimorfismo** es la capacidad de un objeto de ser intercambiable con otro, sin que un tercero que los usa se vea afectado.

Wollok comparte algunas características con los lenguages dinámicamente tipados, ya que tiene un [Pluggable Type System](http://bracha.org/pluggableTypesPosition.pdf). Esto significa que si dos objetos entienden los mismos mensajes, entonces no necesitamos nada más para que un tercero los use en forma polimórfica.

Por ejemplo, cambiaremos la forma de comer de pepita. En vez de directamente decirle la cantidad de gramos que come, se le indica qué cosa comer, de manera que la cantidad de gramos va a depender de la comida que se le pase por parámetro. 

```wollok
object pepita {
    var energia = 100
    method volar(metros) {
        energia = energia - 2 + metros
    }
    method comer(comida) {
        energia = energia + comida.energia() // una "comida" es algo que provee "energia"
    }
    method estaFeliz() {
        return energia > 50
    }
}
```

El método **comer()** puede recibir en el parámetro **comida** cualquier objeto que entienda el mensaje **energia()** y devuelva un número (la cantidad de energía que provee). 

Por ejemplo, se puede tener diferentes objetos que representen cosas que pepita pueda comer:

```wollok
object alpiste{
    var peso = 2
    method energia() { peso * 5 } 
}

object arroz {
    method energia() { return 2 }
}

pepita.comer(alpiste)
pepita.comer(arroz)
pepita.comer(object{method energia() = 1000}) // También puede ser un objeto anónimo
```

Aquí tanto **alpiste** como **arroz** son polimórficos respecto a **pepita** en el mensaje **comer()**.

### If ###

La expresión **if** permite evaluar una condición booleana y realizar diferentes acciones para el caso verdadero y falso respectivamente.

Por ejemplo:

```wollok
if (self.estaLloviendo()) {
    self.irACasaEn(self.auto())
}
else 
    self.irACasaEn(self.bicicleta())
```

En Wollok el "if" no es una sentencia (que controla el flujo) sino más bien una expresión. Esto implica que devuelve un valor, lo que permite cambiar el ejemplo a esta otra forma:

```wollok
const transporte = 
   if (self.estaLloviendo()) self.auto() else self.bicicleta()

self.irACasaEn(transporte)
```

### Propiedades ###

Una facilidad que ofrece wollok es definir los atributos como propiedades, lo que asume automáticamente la existencia de métodos de acceso, sin tener que explicitarlos en el código, (tarea que suele ser repetitiva para escribir y molesta para leer). Se declaran con la palabra **property** antes del nombre de la referencia. En el caso de las variables incluye **getters** y **setters**, en el caso de las constantes, solo los **getters**


El siguiente ejemplo...

```wollok
object pepita {
    var energia = 100
    const rendimiento = 5

    method energia() {
        return energia
    }
    method energia(nuevaEnergia){
        energia = nuevaEnergia
    }
    method rendimiento() {
        return rendimiento
    }
} 
```
... sin perder funcionalidad, puede reescribirse así:

```wollok
object pepita {
    var property energia = 100
    const property rendimiento = 5
} 
```

En ambos casos es equivalente consultar: 

```wollok
pepita.energia() 
```

### Objetos anonimos ###

Otra opción es utilizar objetos literales sin explícitamente darle un nombre. Esto permite usarlos en el momento sin utilizar una referencia o asignarlo a una variable de alcance más limitado que el global.

```wollok
console.println( object { /* código aquí*/ }
)
```

El objeto creado sirve a modo de ejemplo didáctico, ya que es un objeto vacío. En la consola sólo se verá

```
anObject{}
```

#### Simple Return Method ####

Hay un _shortcut_ para definir métodos simples de una línea que sólo devuelven valores.

```wollok
object pepita {
    method estaFeliz() = true
    method saluda(nombre) = "hola " + nombre
}
```

El lector podrá notar que no es necesario escribir return, ni tampoco las llaves que encierren el cuerpo del método. Las llaves se reemplazan por el símbolo =, que indica que la evaluación de la parte derecha del método será el valor devuelto.

