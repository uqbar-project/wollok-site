---
layout: hyde
title: 'Instalación'
weight: 20
lang: 'es'
---

<div class="slideLeft">
	<img src="/images/Wollok_Installation.jpg" width="100%"/>
</div>

# Entorno de Programación

## Prerrequisito: JDK 1.8

Wollok está implementado dentro de la plataforma Eclipse y necesita instalar una Máquina Virtual de Java 1.8. La misma se puede descargar [aquí](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). 

> **IMPORTANTE:** No uses la herramienta Java Updates sino el link de arriba.

Algunas aclaraciones:

* Tiene que ser Java **1.8** (no puede ser una versión anterior)
* Tiene que ser una **JDK** (Java Development Kit), que viene con el compilador de Java. Una JRE (Java Runtime Environment) no te va a funcionar correctamente.
* Si ya estás usando Eclipse con Java 1.8, no hace falta que la descargues otra vez.

## Bajarse el entorno Wollok

Una vez que tengamos la VM de Java, se puede instalar Wollok descomprimiendo el contenido del archivo Zip o Tar.Gz (depende de la plataforma), en cualquier directorio. Te dejamos aquí las versiones ya empaquetadas (que solo hay que descomprimir):

* Linux: [32](http://download.uqbar.org/wollok/products/stable/wollok-linux.gtk.x86.zip) / [64 bits](http://download.uqbar.org/wollok/products/stable/wollok-linux.gtk.x86_64.zip)
* Mac [64 bits](http://download.uqbar.org/wollok/products/stable/wollok-macosx.cocoa.x86_64.zip)
* Windows [32](http://download.uqbar.org/wollok/products/stable/wollok-win32.win32.x86.zip) / [64 bits](http://download.uqbar.org/wollok/products/stable/wollok-win32.win32.x86_64.zip)

## Actualizaciones

Cada vez que se libere una nueva versión, el IDE te notificará que hay una actualización disponible:

![image](/images/updates/update_01.png)

En ese caso podés hacer click sobre la notificación para activar el proceso de actualización. Otra forma es desde el menú Help > Check for Updates (Ayuda > Buscar actualizaciones). En cualquiera de los dos casos aparece el siguiente asistente:

![image](/images/updates/update_02.png)

Hay que avanzar los pasos hasta Finalizar. Antes de instalar aparecerá una ventana de confirmación:

![image](/images/updates/update_03.png)

Aceptamos la acción, reiniciamos el entorno y ahora sí tendremos la última versión de Wollok.

<hr> 

# Problemas comunes al instalar Wollok

* [El IDE muestra una pantalla de bienvenida y no levanta](#el-ide-muestra-la-pantalla-de-bienvenida-y-no-levanta)
* [No puedo crear un proyecto Wollok](#no-puedo-crear-un-proyecto-wollok)
* [No levanta el IDE (exit code 13)](#no-levanta-el-ide-con-exit-code-13)
* [Falta la dependencia a plugins de Wollok (org.uqbar.project.wollok.launch) al ejecutar un archivo](#falta-la-dependencia-a-plugins-de-wollok-al-ejecutar-un-archivo)
* [Cartel de advertencia para instalar Java 6 (solo en Mac)](#cartel-de-advertencia-para-instalar-java-6-en-mac)
* [Ejecución de aplicación no firmada en Mac](#ejecución-de-aplicación-no-firmada-en-mac)
* [Problema con App Translocation (Mac)](#problema-con-app-translocation-mac)
* [Chequeos de la JDK](#chequeos-de-la-jdk)

<hr> 

## El IDE muestra la pantalla de bienvenida y no levanta ##

Si el IDE se queda trabado en la pantalla de bienvenida, puede ser que no estés apuntando a una instalación de JDK 1.8 correcta. En ese caso o [apuntás la JDK correcta en tu entorno](#apuntando-la-jdk-correcta-en-tu-entorno) o [debés apuntar la JDK correcta en el archivo ini de Wollok](#apuntando-la-jdk-correcta-en-ini-de-wollok).

## No puedo crear un proyecto Wollok ##

Si no te aparece la opción para crear un proyecto Wollok, ni tampoco una clase, hay que revisar si el entorno Wollok está apuntando a una JDK que además sea de Java 8 ó superior. Una JDK viene con el compilador, mientras que una JRE solo trae la versión "runtime" o de ejecución de los programas Java compilados previamente (los archivos _.class_). Una vez más o [apuntás la JDK correcta en tu entorno](#apuntando-la-jdk-correcta-en-tu-entorno) o [debés apuntar la JDK correcta en el archivo ini de Wollok](#apuntando-la-jdk-correcta-en-ini-de-wollok).

## No levanta el IDE con exit code 13 ##
Si al tratar de levantar Eclipse te aparece una pantalla de error como la siguiente:

<div class="slide">
	<img src="/images/troubleshooting/exit-code-13.png"/>
</div>

el problema puede darse porque 

* estás apuntando en el wollok.ini a una JDK inexistente (fijate qué dice el parámetro -vm). Para corregirlo [seguí estos pasos](#apuntando-la-jdk-correcta-en-ini-de-wollok).
* utilizaste la aplicación "Java Updates" en lugar de descargarlo de la página del JDK, como está documentado [en este link](http://stackoverflow.com/questions/27019786/eclipse-java-was-started-but-returned-error-code-13). En ese caso la solución es desinstalar la JDK actual, instalar la JDK según se sugiere en esta página y levantar el Wollok normalmente.


## Falta la dependencia a plugins de Wollok al ejecutar un archivo ##

<div class="slide">
	<img src="/images/troubleshooting/wollok-launch.png" style="width: 95%"/>
</div>

Aunque el error no es muy descriptivo -y trabajaremos para mejorar eso- el problema es que estás tratando de ejecutar un test, programa o archivo Wollok que no está en el source folder del proyecto. Por defecto el source folder de cualquier proyecto Wollok es "src", así que si creás un archivo fuera de esa carpeta no te lo va a reconocer como ejecutable (esto también te puede pasar si descargás un proyecto del svn apuntando al repositorio raíz en lugar de hacerlo a la carpeta trunk). La solución es mover el archivo a la carpeta src.


## Cartel de advertencia para instalar Java 6 en Mac ##
En máquinas Mac aparece un extraño cartel que indica que instalemos la versión de Java 6

<div class="slide">
	<img src="/images/troubleshooting/java6.png"/>
</div>

Esto no es cierto, hay que instalar JDK 1.8. A futuro solucionaremos este tema que puede prestar a confusión.

<hr>


## Ejecución de aplicación no firmada en Mac ##

Mac OS X implementa un sistema de seguridad que solo permite ejecutar aplicaciones desarrolladas por desarrolladores registrados en Apple, y estas aplicaciones deben estar distribuidas por el App Store. Como este no es el caso con Wollok, es necesario permitir ejecutar una aplicación no firmada. 

<div class="slide">
	<img src="/images/troubleshooting/aplicacionNoFirmada.png"/>
</div>

La forma de realizar esta operación esta explicado en la documentación de OS X. Existente en (https://support.apple.com/kb/PH21769?locale=es_ES&viewlocale=es_ES)

## Problema con App Translocation (Mac) ##

En la versión 10.12 de OS X se introdujo un sistema de seguridad llamado Gatekeeper. Este sistema tiene como objetivo evitar la ejecución de programas de forma no deseada. Por lo tanto los programas no ejecutan si son ejecutados o descomprimidos en la carpeta Download o donde los guarda el browser. Para poder ejecutarlo es solamente necesario mover la aplicación a otra carpeta, todo haciendolo desde Finder. De esta manera Wollok va a funcionar correctamente.

<div class="slide">
	<img src="/images/troubleshooting/gatekeeper.png"/>
</div>


## Chequeos de la JDK

### Apuntando la JDK correcta en tu entorno

A veces pese a instalar correctamente la JDK 1.8, el sistema operativo sigue utilizando por defecto otra instalación de Java, basado en la variable del entorno JAVA_HOME (y por ende, también la variable PATH). Para chequear esto, abrí una línea de comandos y revisá adónde apunta dicha variable:

```bash
$ env | grep JAVA   // Linux & Mac

> SET JAVA_HOME     // Windows
```

La podés cambiar para que apunte a tu instalación JDK 1.8, siguiendo [estos instructivos](https://docs.oracle.com/cd/E21454_01/html/821-2532/inst_cli_jdk_javahome_t.html)

### Apuntando la JDK correcta en ini de Wollok ###

Ingresá al directorio de instalación de Wollok y abrir en un editor de texto el archivo wollok.ini. Entonces especificá el directorio de la JDK 1.8 mediante el parámetro -vm, por ejemplo:

```
-vm
D:\java8\bin\javaw.exe
```

Es importante que no agregues un espacio ni un enter de más en el .ini, porque de lo contrario no van a funcionar los updates de versiones posteriores de Wollok (da un error al parsear el .ini)

## Configuración de la JDK desde Eclipse

Si en el entorno Wollok ingresás a esta configuración: Windows > Preferences > java > Installed JREs y no ves ninguna JDK o bien una JDK que no es 1.8, podés cambiarla de la siguiente manera:

* Add  > Standard VM > next 
* Elegir el directorio donde instalaron la JDK 1.8. Ej: /Library/Java/JavaVirtualMachines/jdk1.8.0_91.jdk/Contents/Home (eso dependerá del path donde lo descargaste)



<hr> 

# Instalación desde el Update Site

Esta opción es para aquellos usuarios avanzados que ya poseen una instalación de Eclipse y desean agregar la posibilidad de trabajar con Wollok (**no es necesario hacerlo si descargaste el entorno Wollok comprimido**).

El Update Site requiere instalarse en una instalación de JDT de Eclipse (o sea que tenga Java). Para hacer eso agregar como Software Update Site:

* [http://update.uqbar.org/wollok/stable](http://update.uqbar.org/wollok/stable) : para acceder a la última versión estable. Esta es la opción **recomendada**.
* [http://update.uqbar.org/wollok/dev](http://update.uqbar.org/wollok/dev) : si querés tener los últimos cambios en proceso (pueden aparecer errores hasta que la versión se estabilice)

<img src="/images/screencasts/Wollok-UpdateSite.gif" width="100%"/>

<hr> 

# Configuración en inglés

Si querés configurar Wollok para que levante el IDE en inglés, es necesario agregar una **nueva línea al final** del archivo de configuración `wollok.ini`, localizado en el mismo directorio donde descargaste Wollok, con la siguiente instrucción:

```bash
-Duser.language=en
```

<hr>

<div>
<img src="/images/bug.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;Encontré un Bug... ¿qué hago?</h1>
</div><br>
Wollok es una pieza de Software en constante mejora y crecimiento. Como todas las cosas que están en constante evolución es probable que encuentres problemas o se te ocurra una mejora posible que te gustaría ver. 

En caso de encontrar un error, es de mucha ayuda que lo reportes en la página de GitHub de Wollok. Para eso estamos usando un [Issue Tracker](https://github.com/uqbar-project/wollok/issues) (o sea un gestor de errores / incidentes). 

Para hacerlo, algunas recomendaciones:

* Lo más importante es ponerle un título descriptivo que explique el problema lo más claramente posible, y en la descripción indicar los pasos para reproducirlo. Sin esto es muy difícil que podamos solucionar los errores.
* Verás que muchos errores están en inglés, no te sientas intimidado por eso: sentite libre de escribir en castellano si no te sentís cómodo escribiendo en inglés.
* Siempre conviene mirar primero entre los bugs existentes, si alguien no reportó antes lo mismo que estás queriendo reportar.
* Si podés, asociale alguno de estos labels:
	* *Show stopper*: si es un problema que te impide trabajar o sospechás que le va a impedir trabajar a alguien más
	* *Bug*: un error en el sistema que no impide trabajar
	* *Usability*: cuestiones que pueden confundir a los usuarios. Dado que es una herramienta pensada para personas que están dando sus primeros pasos en la programación, presentar una interfaz consistente es muy importante.
	* *Enhancement*: nuevas características que se solicitan
	* *Nice to have*: características deseadas pero menos prioritarias
	* *Question*: dudas, por ejemplo algo que no estamos seguros si es un bug

