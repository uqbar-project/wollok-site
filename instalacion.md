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
		<!--Card image-->
		<div class="view overlay hm-white-slight">
			<img src="/images/Wollok_Installation.jpg" class="img-fluid " width="100%">
			<div class="mask flex-center waves-effect waves-light">
			</div>
		</div>
		<!--Card content-->
		<div class="card-body" >
			<!--Title-->
			<h4 class="card-title">Entorno de programación</h4>
			<hr>
			<!--Text-->
			<p>A continuación te dejamos las instrucciones para poder instalar Wollok en tu máquina. Los pasos normales son</p>
			<ul>
				<li><a href="#jdk-18">Instalar Java 1.8 para desarrollar</a></li>
				<li><a href="#instalar-wollok">Instalar el entorno Wollok completo</a> 
					(o bien <a href="#actualizar-wollok">actualizarlo</a> o <a href="#actualizar-desde-eclipse">incorporarlo a un Eclipse que tengas</a>)
				</li>
				<li>
					Si tenés problemas en la instalación <a href="#troubleshooting">hay una guía de solución de problemas rápidos</a>
				</li>
				<li>
					Y por último te contamos <a href="#configuraciones-extras">qué otras cosas podés configurar</a>
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
			<div class="card-header mdb-color lighten-2 white-text" id="jdk-18" role="tab" id="headingOne">
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
					<a class="btn btn-primary" href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">Descargala aquí</a>
					<hr>
					<h4><span class="badge badge-pill red darken-3">Cosas a tener en cuenta</span></h4>
					<ul> 
						<li>No uses la herramienta Java Updates sino el link de arriba.</li>
						<li>Tiene que ser Java <b>1.8</b> (no puede ser una versión anterior)</li>
						<li>Tiene que ser una <b>JDK</b> (Java Development Kit), que viene con el compilador de Java. Una JRE (Java Runtime Environment) no te va a funcionar correctamente.</li>
						<li>Si ya estás usando Eclipse con Java 1.8, no hace falta que la descargues otra vez.</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="card">
			<!-- Card header -->
			<div class="card-header mdb-color lighten-2 white-text" id="instalar-wollok" role="tab" id="headingTwo">
				<a data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseThree">
					<h4 class="card-header mdb-color lighten-2 white-text" id="jdk-18">
						Bajar localmente el entorno Wollok
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>

			<!-- Card body -->
			<div id="collapseTwo" class="collapse show" role="tabpanel" aria-labelledby="headingTwo">
				<div class="card-body grey lighten-5 transparent">
					<h4 class="card-title">Primera vez</h4>
					<p>Una vez que tengamos la VM de Java, se puede instalar Wollok descomprimiendo el contenido del archivo Zip o Tar.Gz (depende de la plataforma), en cualquier directorio. Te dejamos aquí las versiones ya empaquetadas (que solo hay que descomprimir): 
					</p>
					<a class="btn btn-primary" href="http://download.uqbar.org/wollok/products/stable/wollok-win32.win32.x86.zip"><i class="fa fa-windows" aria-hidden="true"></i>&nbsp; Win 32</a>
					<a class="btn btn-primary" href="http://download.uqbar.org/wollok/products/stable/wollok-win32.win32.x86_64.zip"><i class="fa fa-windows" aria-hidden="true"></i>&nbsp; Win 64</a>
					<a class="btn btn-primary" href="http://download.uqbar.org/wollok/products/stable/wollok-linux.gtk.x86.zip"><i class="fa fa-linux" aria-hidden="true"></i>&nbsp;Linux 32</a>
					<a class="btn btn-primary" href="http://download.uqbar.org/wollok/products/stable/wollok-linux.gtk.x86_64.zip"><i class="fa fa-linux" aria-hidden="true"></i>&nbsp;Linux 64</a>
					<a class="btn btn-primary" href="http://download.uqbar.org/wollok/products/stable/wollok-macosx.cocoa.x86_64.zip"><i class="fa fa-apple" aria-hidden="true"></i>&nbsp;OS X</a>
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
							<a href="http://update.uqbar.org/wollok/stable">http://update.uqbar.org/wollok/stable</a> para acceder a la última versión estable. Esta es la opción <b>recomendada</b>.
						</li>
						<li>
							<a href="http://update.uqbar.org/wollok/dev">http://update.uqbar.org/wollok/dev</a> si querés tener los últimos cambios en proceso (pueden aparecer errores hasta que la versión se estabilice)
						</li>
					</ul>|
		
					<img src="/images/screencasts/Wollok-UpdateSite.gif" width="100%"/>
							
					</p>
				</div>
			</div>
		</div>

		<div class="card">
			<!-- Card header -->
			<div class="card-header mdb-color lighten-2 white-text" id="troubleshooting" role="tab" id="headingThree">
				<a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					<h4 class="card-header mdb-color lighten-2 white-text" id="jdk-18">
						Problemas comunes al instalar Wollok
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>

			<!-- Card body -->
			<div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
				<div class="card-body grey lighten-5 transparent">
					<h4 class="card-title">El IDE muestra la pantalla de bienvenida y no levanta</h4>
					<p>
					Si el IDE se queda trabado en la pantalla de bienvenida, puede ser que no estés apuntando a una instalación
					de JDK 1.8 correcta. En ese caso o <a href="#apuntando-la-jdk-correcta-en-tu-entorno">apuntás la JDK correcta en tu entorno</a>
					o <a href="#apuntando-la-jdk-correcta-en-ini-de-wollok">debés apuntar la JDK correcta en el archivo ini de Wollok</a>.
					</p>
					<hr>
					<h4 class="card-title">No puedo crear un proyecto Wollok</h4>
					<p>
					Si no te aparece la opción para crear un proyecto Wollok, ni tampoco una clase, hay que revisar si el entorno Wollok 
					está apuntando a una JDK que además sea de Java 8 ó superior. Una JDK viene con el compilador, mientras que una JRE
					solo trae la versión "runtime" o de ejecución de los programas Java compilados previamente (los archivos _.class_). 
					Una vez más o <a href="#apuntando-la-jdk-correcta-en-tu-entorno">apuntás la JDK correcta en tu entorno</a> o 
					<a href="#apuntando-la-jdk-correcta-en-ini-de-wollok">debés apuntar la JDK correcta en el archivo ini de Wollok</a>
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
					el problema puede darse porque 
					
					<ul>
						<li>estás apuntando en el wollok.ini a una JDK inexistente (fijate qué dice el parámetro -vm). Para corregirlo <a href="#apuntando-la-jdk-correcta-en-ini-de-wollok">seguí estos pasos.</a>..</li>
						<li>utilizaste la aplicación <i>"Java Updates"</i> en lugar de descargarlo de la página del JDK, como está documentado <a href="http://stackoverflow.com/questions/27019786/eclipse-java-was-started-but-returned-error-code-13">en este link</a>. 
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
					<h4 class="card-title">Cartel de advertencia para instalar Java 6 en Mac</h4>
					<p>
						En máquinas Mac aparece un extraño cartel que indica que instalemos la versión de Java 6
						<div class="text-center">
							<img src="/images/troubleshooting/java6.png" class="hoverable img-fluid z-depth-1"/>
						</div>
						<br>
						Esto no es cierto, hay que instalar JDK 1.8. 				
					</p>
					<hr>
					<h4 class="card-title">Ejecución de aplicación no firmada en Mac</h4>
					<p>
						Mac OS X implementa un sistema de seguridad que solo permite ejecutar aplicaciones desarrolladas por desarrolladores registrados en Apple, y estas aplicaciones deben estar distribuidas por el App Store. Como este no es el caso con Wollok, es necesario permitir ejecutar una aplicación no firmada. 
						
						<br>
						<div class="text-center">
							<img src="/images/troubleshooting/aplicacionNoFirmada.png" class="hoverable img-fluid z-depth-1"/>
						</div>
						<br>
		
						La forma de realizar esta operación esta explicado en 
						<a href="https://support.apple.com/kb/PH21769?locale=es_ES&viewlocale=es_ES">la documentación de <i>OS X</i> existente</a>
							
					</p>
					<hr>
					<h4 class="card-title">Problema con App Translocation (Mac)</h4>
					<p>
						En la versión 10.12 de OS X se introdujo un sistema de seguridad llamado Gatekeeper. Este sistema tiene como objetivo evitar la ejecución de programas de forma no deseada. Por lo tanto los programas no ejecutan si son ejecutados o descomprimidos en la carpeta Download o donde los guarda el browser. 
						Para poder ejecutarlo es solamente necesario mover la aplicación a otra carpeta, todo haciendolo desde Finder. De esta manera Wollok va a funcionar correctamente.
							
						<br>
						<div class="text-center">
							<img src="/images/troubleshooting/gatekeeper.png" class="hoverable img-fluid z-depth-1"/>
						</div>
						<br>
					</p>
				</div>
			</div>
		</div>

		<div class="card">
			<!-- Card header -->
			<div class="card-header mdb-color lighten-2 white-text" id="troubleshooting" role="tab" id="headingFour">
				<a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
					<h4 class="card-header mdb-color lighten-2 white-text" id="configuraciones-extras">
						Configuraciones extras
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>

			<!-- Card body -->
			<div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour">
				<div class="card-body grey lighten-5 transparent" id="apuntando-la-jdk-correcta-en-tu-entorno">
						<h4 class="card-title">Apuntando la JDK correcta en tu entorno</h4>
						<p>
							A veces pese a instalar correctamente la JDK 1.8, el sistema operativo sigue utilizando por defecto otra instalación de Java, basado en la variable del entorno JAVA_HOME (y por ende, también la variable PATH). 
							Para chequear esto, abrí una línea de comandos y revisá adónde apunta dicha variable:
							<div class="language-javascript">	
									<div>
										<pre>
			<span class="kd">$</span><span class="nx"> env | grep JAVA</span><span class="c"> // Linux & Mac</span>
			<span class="kd">></span><span class="nx"> SET JAVA_HOME</span><span class="c"> // Windows</span></pre>
									</div>
								</div>
							La podés cambiar para que apunte a tu instalación JDK 1.8, siguiendo 
							<a href="https://docs.oracle.com/cd/E21454_01/html/821-2532/inst_cli_jdk_javahome_t.html">estos pasos.</a>
						</p>
						<hr>
						<h4 class="card-title" id="apuntando-la-jdk-correcta-en-ini-de-wollok">Apuntando la JDK correcta en ini de Wollok</h4>
						<p>
							Ingresá al directorio de instalación de Wollok y abrir en un editor de texto el archivo wollok.ini. 
							Entonces especificá el directorio de la JDK 1.8 mediante el parámetro -vm, por ejemplo:
						</p>
						<div class="language-javascript">
							<div>
								<pre>
			<span class="kd">-vm</span>
			<span class="nx">D:\java8\bin\javaw.exe</span></pre>
							</div>
						</div>
						<p>Es importante que no agregues un espacio ni un enter de más en el .ini, 
							porque de lo contrario no van a funcionar los updates de versiones posteriores de Wollok 
							(da un error al parsear el .ini)</p>
						<hr>
						<h4 id="apuntando-la-jdk-correcta-en-ini-de-wollok" class="card-title">Configuración de la JDK desde Eclipse</h4>
						<p>
							Si en el entorno Wollok ingresás a esta configuración: 
							Windows > Preferences > java > Installed JREs y no ves ninguna JDK o bien una JDK que no es 1.8, 
							podés cambiarla de la siguiente manera:
							
							<ul>
								<li>Add  > Standard VM > next</li>
								<li>Elegir el directorio donde instalaron la JDK 1.8. Ej: /Library/Java/JavaVirtualMachines/jdk1.8.0_91.jdk/Contents/Home (eso dependerá del path donde lo descargaste)</li>
							</ul>
						</p>
						<hr>
						<h4 class="card-title">Configuración en inglés</h4>
						<p>
							Si querés configurar Wollok para que levante el IDE en inglés, es necesario agregar una <b>nueva línea al final</b> del archivo de configuración <i>wollok.ini</i>, localizado en el mismo directorio donde descargaste Wollok, con la siguiente instrucción:
			
							<div class="language-javascript">
									<div>
										<pre>
			<span class="kd">-D</span><span class="nx">user.language=en</span></pre>
									</div>
								</div>
						</p>
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

