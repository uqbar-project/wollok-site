---
layout: hyde
title: 'Instalación'
weight: 20
lang: 'es'
icon: 'cloud-download' 
---

<div class="container">
	<!--Card-->
	<div class="card">
		<!--Card content-->
		<div class="card-body" >
			<!--Title-->
			<h4 class="card-title">Entorno de programación</h4>
			<hr>
			<!--Text-->
			<p>A continuación te dejamos las instrucciones para poder instalar Wollok en tu máquina. Los pasos normales son</p>
			<ul>
				<li><a href="#jdk-18" class="wollokLink">Instalar Java 1.8 para desarrollar</a></li>
				<li><a href="#instalar-wollok" class="wollokLink">Instalar el entorno Wollok completo</a> 
					(o bien <a href="#actualizar-wollok" class="wollokLink">actualizarlo</a> o <a href="#actualizar-desde-eclipse" class="wollokLink">incorporarlo a un Eclipse que tengas</a>)
				</li>
				<li>
					Si tenés problemas en la instalación <a href="#troubleshooting" class="wollokLink">hay una guía de solución de problemas rápidos</a>
				</li>
				<li>
					Y por último te contamos <a href="#configuraciones-extras" class="wollokLink">qué otras cosas podés configurar</a>
				</li>
			</ul>
		</div>
	</div>
	<!--/.Card-->
	<br>
	<!--Panel-->
	<div class="accordion" id="accordionInstalacion" role="tablist" aria-multiselectable="true">
		<div class="card">
			<!-- Card header -->
			<div class="card-header mdb-color lighten-2 white-text" role="tab" id="headingOne">
				<a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					<h4 class="card-header mdb-color lighten-2 white-text" id="jdk-18">
						Java Development Kit 1.8 (pre-requisito)
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>
			<!-- Card body -->
			<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
				<div class="card-body grey lighten-5 transparent">
					<p>Wollok está implementado dentro de la plataforma Eclipse y necesita instalar una Máquina Virtual de Java 1.8. 
					</p>
					<a class="btn btn-primary" href="https://adoptium.net/temurin/releases/?version=8" target="_blank">Descargala aquí</a>
					<p>
					<br/>
					<b>Nota:</b> para Linux/Mac OS, la mejor opción es descargar el archivo <code>.pkg</code> y para Windows, <code>.msi</code>. Estos son formatos empaquetados para cada uno de los sistemas operativos, y permiten instalar fácilmente sus contenidos. Estos simplifican casos como agregar las variables JAVA_HOME y editar el PATH en Windows, o poner los archivos en una carpeta específica para Linux/Mac OS.
					</p>
					<hr>
					<h4><span class="badge badge-pill red darken-3">Cosas a tener en cuenta</span></h4>
					<ul> 
						<li>No uses la herramienta Java Updates sino el link de arriba.</li>
						<li>Es recomendable usar la versión Java <b>1.8</b> (algunas versiones superiores pueden tener inconvenientes al ejecutar programas con Wollok Game)</li>
						<li>Tiene que ser una <b>JDK</b> (Java Development Kit), que viene con el compilador de Java. Una JRE (Java Runtime Environment) no te va a funcionar correctamente.</li>
						<li>Si ya estás usando Eclipse con Java 1.8, no hace falta que la descargues otra vez.</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="card">
			<!-- Card header -->
			<div class="card-header mdb-color lighten-2 white-text" role="tab" id="headingTwo">
				<a data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseThree">
					<h4 class="card-header mdb-color lighten-2 white-text" id="jdk-18">
						Bajar localmente el entorno Wollok
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>
			<!-- Card body -->
			<div id="collapseTwo" class="collapse show" role="tabpanel" aria-labelledby="headingTwo">
				<div id="instalar-wollok" class="card-body grey lighten-5 transparent">
					<h4 class="card-title">Primera vez</h4>
					<p>Una vez que tengamos la VM de Java, se puede instalar Wollok descomprimiendo el contenido del archivo Zip o Tar.Gz (depende de la plataforma) en cualquier directorio <b>que no contenga espacios</b>, ya que esto puede llevar a errores. Te dejamos aquí las versiones ya empaquetadas (que solo hay que descomprimir): 
					</p>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v3.0.0/wollok-win32.win32.x86_64.zip"><i class="fa fa-windows" aria-hidden="true"></i>&nbsp;&nbsp;Win 64</a>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v3.0.0/wollok-linux.gtk.x86_64.zip"><i class="fa fa-linux" aria-hidden="true"></i>&nbsp;&nbsp;Linux 64</a>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v3.0.0/wollok-macosx.cocoa.x86_64.zip"><i class="fa fa-apple" aria-hidden="true"></i>&nbsp;&nbsp;OS X</a>
					<br>
					<p><em>Si tenés versiones anteriores, te recomendamos que borres la carpeta e instales la última desde cero.</em></p>
					<hr>
					<h4>Versión histórica 1.9.2 para 32 bits</h4>
					<p>Si tenés un sistema operativo de 32 bits, la última versión disponible es la 1.9.2 (Hypatia). <b>Te recomendamos fuertemente que instales un sistema operativo de 64 bits</b> y el Wollok correspondiente para tener acceso a las últimas novedades.
					</p>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v1.9.2/wollok-win32.win32.x86.zip"><i class="fa fa-windows" aria-hidden="true"></i>&nbsp;&nbsp;Win 32</a>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v1.9.2/wollok-linux.gtk.x86.zip"><i class="fa fa-linux" aria-hidden="true"></i>&nbsp;&nbsp;Linux 32</a>
					<hr>
					<h4 class="card-title" id="actualizar-wollok">Actualizaciones</h4>
					<p>
						Cada vez que se libere una nueva versión, el IDE te notificará que hay una actualización disponible:
						<br><br>
						<div class="text-center">
							<img src="/images/updates/update_01.png" class="hoverable img-fluid z-depth-1"/>
						</div>
						<br>
						<br>
						En ese caso podés hacer click sobre la notificación para activar el proceso de actualización. Otra forma es desde el menú Help > Check for Updates (Ayuda > Buscar actualizaciones). En cualquiera de los dos casos aparece el siguiente asistente:
						<br>
						<br>
						<div class="text-center">
							<img src="/images/updates/update_02.png" class="hoverable img-fluid z-depth-1"/>
						</div>
						<br>
						<br>
						Hay que avanzar los pasos hasta Finalizar. Antes de instalar aparecerá una ventana de confirmación:
						<br>
						<br>
						<div class="text-center">
							<img src="/images/updates/update_03.png" class="hoverable img-fluid z-depth-1"/>
						</div>
						<br>
						<br>
						Aceptamos la acción, reiniciamos el entorno y ahora sí tendremos la última versión de Wollok.</p>
						<hr>
						<h4 class="card-title" id="actualizar-desde-eclipse">Instalación desde el Update Site</h4>
						<p>
						Esta opción es para aquellos usuarios avanzados que ya poseen una instalación de Eclipse y desean agregar 
						la posibilidad de trabajar con Wollok (<b>no es necesario hacerlo si descargaste el entorno Wollok comprimido</b>).
						El Update Site requiere instalarse en una instalación de JDT de Eclipse (o sea que tenga Java). Para hacer eso agregar como Software Update Site:
						<ul>
							<li>
								<a href="http://update.uqbar.org/wollok/stable" target="_blank">http://update.uqbar.org/wollok/stable</a> para acceder a la última versión estable. Esta es la opción <b>recomendada</b>.
							</li>
							<li>
								<a href="http://update.uqbar.org/wollok/dev" target="_blank">http://update.uqbar.org/wollok/dev</a> si querés tener los últimos cambios en proceso (pueden aparecer errores hasta que la versión se estabilice)
							</li>
						</ul>
						<img src="/images/screencasts/Wollok-UpdateSite.gif" width="100%"/>
					</p>
				</div>
			</div>
		</div>
		<div class="card">
			<!-- Card header -->
			<div class="card-header mdb-color lighten-2 white-text" role="tab" id="headingThree">
				<a data-toggle="collapse" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
					<h4 id="troubleshooting" class="card-header mdb-color lighten-2 white-text">
						Problemas comunes al instalar Wollok
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>
			<!-- Card body -->
			<div id="collapseThree" class="collapse show" role="tabpanel" aria-labelledby="headingThree">
				<div class="card-body grey lighten-5 transparent">
					<h4 class="card-title">Instalar en carpeta con espacios/No se pudo encontrar la Clase Main en...</h4>
					<div class="text-center">
						<img src="/images/troubleshooting/wollok-carpeta-con-espacios.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<p>Este error pasa cuando instalamos Wollok en una carpeta con espacios. Para evitarlo, rogamos descomprimir e instalar en una carpeta cuya ruta entera no posea espacios.</p>
					<hr>
					<h4 class="card-title">El IDE muestra la pantalla de bienvenida y no levanta</h4>
					<p>
					Si el IDE se queda trabado en la pantalla de bienvenida, puede ser que no estés apuntando a una instalación
					de JDK 1.8 correcta. En ese caso o <a href="#apuntando-la-jdk-correcta-en-tu-entorno" class="wollokLink">apuntás la JDK correcta en tu entorno</a>
					o <a href="#apuntando-la-jdk-correcta-en-ini-de-wollok" class="wollokLink">debés apuntar la JDK correcta en el archivo ini de Wollok</a>.
					</p>
					<hr>
					<h4 class="card-title">No puedo crear un proyecto Wollok</h4>
					<p>
					Si no te aparece la opción para crear un proyecto Wollok, ni tampoco una clase, hay que revisar si el entorno Wollok 
					está apuntando a una JDK que además sea de Java 8 ó superior. Una JDK viene con el compilador, mientras que una JRE
					solo trae la versión "runtime" o de ejecución de los programas Java compilados previamente (los archivos <em>.class</em>). 
					Una vez más o <a href="#apuntando-la-jdk-correcta-en-tu-entorno" class="wollokLink">apuntás la JDK correcta en tu entorno</a> o 
					<a href="#apuntando-la-jdk-correcta-en-wollok" class="wollokLink">debés apuntar la JDK correcta en el archivo ini de Wollok</a>.
					</p>
					<hr>
					<h4 class="card-title">No levanta el IDE con exit code 13</h4>
					<p>
					Si al tratar de levantar Eclipse te aparece una pantalla de error como la siguiente:
					</p>
					<div class="text-center">
						<img src="/images/troubleshooting/exit-code-13.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					El problema puede darse porque 
					<ul>
						<li>estás apuntando en el _wollok.ini_ a una JDK inexistente (fijate qué dice el parámetro -vm). Para corregirlo <a href="#apuntando-la-jdk-correcta-en-wollok" class="wollokLink" target="_blank">seguí estos pasos</a>.</li>
						<li>utilizaste la aplicación <em>"Java Updates"</em> en lugar de descargarlo de la página del JDK, como está documentado <a href="http://stackoverflow.com/questions/27019786/eclipse-java-was-started-but-returned-error-code-13" target="_blank">en este link</a>. 
						En ese caso la solución es desinstalar la JDK actual, instalar la JDK según se sugiere en esta página y levantar el Wollok normalmente.</li>
					</ul>
					<hr>
					<h4 class="card-title">Falta la dependencia a plugins de Wollok al ejecutar un archivo</h4>
					<p>
					Aunque el error no es muy descriptivo -y trabajaremos para mejorar eso- el problema es que estás tratando de
					ejecutar un test, programa o archivo Wollok que no está en el source folder del proyecto. 
					Por defecto el source folder de cualquier proyecto Wollok es "src", así que si creás un archivo fuera
					de esa carpeta no te lo va a reconocer como ejecutable. La solución es mover todos los archivos
					.wlk, .wtest y .wpgm al directorio "src".
					</p>
					<div class="text-center">
						<img src="/images/troubleshooting/wollok-launch.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					<hr>
					<h4 class="card-title">Mac: Wollok está dañado / Wollok is damaged</h4>
					<p>
						Al tratar de ejecutar el archivo wollok te va a aparecer este desagradable mensaje de error:
					</p>
					<div class="text-center">
						<img src="/images/troubleshooting/wollok-mac-garbage.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					<p>
					La forma de destrabarlo forma es abrir una consola y escribir el siguiente comando, reemplazando la ruta al <code>Wollok.app</code> correctamente:
					</p>
					<pre>xattr -d com.apple.quarantine /ruta/a/Wollok.app</pre>
					<p>
					Luego deberías poder abrir el aplicativo normalmente.
					</p>					
					<hr>
					<h4 class="card-title">Mac: Ejecución de aplicación no firmada</h4>
					<p>
						Mac OS X implementa un sistema de seguridad que solo permite ejecutar aplicaciones desarrolladas por desarrolladores registrados en Apple, y estas aplicaciones deben estar distribuidas por el App Store. Como este no es el caso con Wollok, es necesario permitir ejecutar una aplicación no firmada. 
					</p>
					<br>
					<div class="text-center">
						<img src="/images/troubleshooting/aplicacionNoFirmada.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					<p>
						La forma de realizar esta operación esta explicado en 
						<a href="https://support.apple.com/es-es/guide/mac-help/mh40616/mac" target="_blank">la documentación de OS X existente</a>
					</p>
					<hr>
					<h4 class="card-title">Mac: Failed to create the Java Virtual Machine</h4>
					<div class="text-center">
						<img src="/images/troubleshooting/mac_vm_error.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br/>
					<p>
					Si al ejecutar Wollok en Mac te aparece este mensaje de error, primero tenés que asegurarte de estar apuntando correctamente al ejecutable de Java en Wollok. Eso está descripto en <a href="#apuntando-la-jdk-correcta-en-wollok">la siguiente sección sobre cómo apuntar a la jdk correcta en Wollok</a>.
					<br />
					Si el error persiste, seguí las instrucciones que están en <a href="https://www.pushing-pixels.org/2020/06/19/fixing-the-failed-to-create-the-java-virtual-machine-error-on-eclipse-startup-on-a-mac.html" target="_blank">esta página</a>.
					</p>
					<hr>
					<h4 class="card-title">Mac: Problema con App Translocation</h4>
					<p>
						En la versión 10.12 de OS X se introdujo un sistema de seguridad llamado Gatekeeper. Este sistema tiene como objetivo evitar la ejecución de programas de forma no deseada. Por lo tanto los programas no ejecutan si son ejecutados o descomprimidos en la carpeta Download o donde los guarda el browser. 
						Para poder ejecutarlo es solamente necesario mover la aplicación a otra carpeta, todo haciendolo desde Finder. De esta manera Wollok va a funcionar correctamente.
					</p>
					<br>
					<div class="text-center">
						<img src="/images/troubleshooting/gatekeeper.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
				</div>
			</div>
		</div>
		<div class="card">
			<!-- Card header -->
			<div class="card-header mdb-color lighten-2 white-text" id="troubleshooting" role="tab" id="headingFour">
				<a data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
					<h4 class="card-header mdb-color lighten-2 white-text" id="configuraciones-extras">
						Configuraciones extras
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>
			<!-- Card body -->
			<div id="collapseFour" class="collapse show" role="tabpanel" aria-labelledby="headingFour">
				<div class="card-body grey lighten-5 transparent">
					<h4 class="card-title" id="apuntando-la-jdk-correcta-en-tu-entorno">Apuntando la JDK correcta en tu entorno</h4>
					<p>
						A veces pese a instalar correctamente la JDK 1.8, el sistema operativo sigue utilizando por defecto otra instalación de Java, basado en la variable del entorno JAVA_HOME (y por ende, también la variable PATH). 
						Para chequear esto, abrí una línea de comandos y revisá adónde apunta dicha variable:
					</p>
					<pre>
<span class="kd">$ </span>/usr/libexec/java_home -vm<span class="c"> // Linux & Mac</span>
<span class="kd">> </span>echo %JAVA_HOME%<span class="c"> // Windows cmd</span>
<span class="kd">> </span>echo $env:JAVA_HOME<span class="c"> // Windows PowerShell</span></pre>
					Si devuelve vacio o la querés cambiar, podés hacer que apunte a tu instalación JDK 1.8, siguiendo 
					<a href="https://docs.oracle.com/cd/E21454_01/html/821-2532/inst_cli_jdk_javahome_t.html" target="_blank">estos pasos</a>.
					Una vez realizados, reiniciar la consola y volver a ejecutar el comando correspondiente para verificar que se hizo correctamente.
					<hr>
					<h4 class="card-title" id="apuntando-la-jdk-correcta-en-wollok">Apuntando la JDK correcta en Wollok</h4>
					<p>Primero, debemos obtener dónde está instalado Java en nuestra computadora, que podemos saberlo realizando <a href="#apuntando-la-jdk-correcta-en-tu-entorno">el paso anterior</a>
					</p>
					<p>
						<b>Linux/Mac OS</b>
						<br/>
						 Para tenés que darle click derecho a la aplicación Wollok.app, y clickear en <em>"Show Package Contents"</em> o <em>"Mostrar Contenidos del Paquete"</em>. Dentro de carpeta <code>Contents</code> está el archivo <code>Info.plist</code> donde hay que editar la sección comentada para que apunte al JDK 1.8 instalado previamente. Para encontrar a dónde debe apuntar, podés revisar en <a href="#apuntando-la-jdk-correcta-en-tu-entorno">la sección de apuntar correctamente el JDK</a>.
					</p>
					<p><b>Cuidado: Esto tiene que apuntar al <b>ejecutable</b>, es decir, que termine con <code>/bin/java</code></b>. El archivo <code>Info.plist</code> debería quedar así: 
					</p>
					<img src="/images/troubleshooting/info-plist-es.svg" class="img-fluid"/>
					<p>
						<b>Windows:</b>
						<br/>
						Ingresá al directorio de instalación de Wollok y abrí en un editor de texto el archivo wollok.ini. 
						Entonces especificá el directorio de la JDK 1.8 que obtuviste en el paso anterior
						mediante el parámetro -vm, por ejemplo:
					</p>
					<pre>
<span class="kd">-vm</span>
C:\Program Files\Eclipse Adoptium\jdk8u345-b01\bin\javaw.exe</pre>
					<p>Es importante que no agregues un espacio ni un enter de más en el .ini, 
						porque de lo contrario no van a funcionar los updates de versiones posteriores de Wollok 
						(da un error al parsear el .ini).						
					</p>
					<hr>
					<h4 id="configuracion-de-jdk-desde-eclipse" class="card-title">Configuración de la JDK desde Eclipse</h4>
					<p>
						Si en el entorno Wollok ingresás a esta configuración: 
						<code>Windows > Preferences > Java > Installed JREs</code> y no ves ninguna JDK o bien una JDK que no es 1.8, 
						podés cambiarla de la siguiente manera:
						<ol>
							<li>Add > Standard VM > next</li>
							<li>Elegir el directorio donde instalaron la JDK 1.8. Ej: /Library/Java/JavaVirtualMachines/jdk1.8.0_91.jdk/Contents/Home (eso dependerá del path donde lo descargaste)</li>
						</ol>
					</p>
					<hr>
					<h4 class="card-title">Configuración en inglés</h4>
					<p>
						Si querés configurar Wollok para que levante el IDE en inglés, es necesario agregar una <b>nueva línea al final</b> del archivo de configuración <em>wollok.ini</em>, localizado en el mismo directorio donde descargaste Wollok, con la siguiente instrucción:
					</p>
						<pre><span class="kd">-D </span>user.language=en</pre>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container">
		<hr>
		<br>
		<img src="/images/bug.png" height="64" width="64" align="left"/>
		<h1>&nbsp;&nbsp;Encontré un Bug... ¿qué hago?</h1>
	<br/>
</div>

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