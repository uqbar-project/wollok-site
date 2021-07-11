---
layout: hyde
title: 'Tour'
weight: 25
lang: 'es'
icon: 'bus'
--- 

<div class="container">
    <h1>Un tour por el Wollok IDE</h1>
    <br>
</div>

A continuación te vamos a contar cuáles son las principales herramientas con las que cuenta el entorno integrado de Wollok. También tenés [este tutorial paso a paso que te ayudará a conocer las herramientas](https://docs.google.com/document/d/1LGJIRgLH_mRKXCYF4ztzgeNL0cjm0fD0BqjiAR84emY/edit#)

<!-- Nav tabs -->
<div class="container">
    <ul class="nav breadcrumb nav-tabs nav-justified" role="tablist">
        <li class="nav-item">
            <a class="nav-link active wollokNavLink" data-toggle="tab" href="#darkMode" role="tab"><i class="fa fa-adjust"></i> Dark Mode</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#editor" role="tab"><i class="fa fa-edit"></i> Editor</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#validador" role="tab"><i class="fa fa-check-circle"></i> Validador</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#quickFix" role="tab"><i class="fa fa-medkit"></i> Quick Fix</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#formatter" role="tab"><i class="fa fa-indent"></i> Formatter</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#consola" role="tab"><i class="fa fa-toggle-right"></i> Consola</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#testRunner" role="tab"><i class="fa fa-gear"></i> Test runner</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#diagramas" role="tab"><i class="fa fa-sitemap"></i> Diagramas</a>
        </li>
    </ul>
    <!-- Tab panels -->
    <div class="tab-content card container">
        <!-- *****************************  DARK MODE ****************************************-->
        <!--Panel 0-->
        <div class="tab-pane fade in show active" id="darkMode" role="tabpanel">
            <br>
            <p>
            Si querés trabajar con un tema oscuro, te recomendamos que te descargues <a href="/config/wollokDarkMode.epf">este archivo de configuración</a> y luego lo importes en tu entorno de trabajo, como lo muestra el siguiente video:
            </p>
            <br>
            <div class="container text-center">
                <img src="/images/tour/darkMode1.gif" class="img-fluid z-depth-1"/>
            </div>
            <br>
            <p>
            Una vez que importaste las preferencias, reiniciá Wollok, y al recargar vas a ver las herramientas adaptadas para visualizarse con un fondo oscuro:
            </p>
            <div class="container text-center">
                <img src="/images/tour/darkMode2.gif" class="img-fluid z-depth-1"/>
            </div>
            <br>
        </div>
        <!--/.Panel 0-->
        <!-- ********************************  EDITOR ****************************************-->
        <!--Panel 1-->
        <div class="tab-pane fade" id="editor" role="tabpanel">
            <br>
            <p>
            El editor de Wollok ofrece desde ya coloreado de sintaxis, pero también viene con capacidades de autocompletado.
            <br>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                        <img src="/images/tour/editor1_1.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Por ejemplo, podemos crear a pepita, un ave que tiene energía y que sabe volar. Activamos el autocompletado de los elementos sintácticos de Wollok 
                                mediante las teclas <b>Ctrl + Barra</b>.</figcaption>
                    </figure>
                </div>
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                    <img src="/images/tour/editor2.gif" class="img-fluid z-depth-1" alt="Responsive image">
                        <figcaption class="figure-caption"><br>
                        También con las teclas <b>Ctrl + Barra</b> podemos activar <i>autocompletes</i> más elaborados, como las estructuras de selección<i>(if)</i> o la creación de una clase
                        </figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Aquí utilizamos asistentes de contenido más específicos para, por ejemplo, saber qué mensajes enviar a un objeto:
            <br>
            <br>
            <div class="container text-center">
                <img src="/images/tour/editor3_1.gif" class="img-fluid z-depth-1"/>
            </div>
            <br>
            <br>
            Familiarizarse con el editor es fundamental para sentirnos cómodos en el ambiente de trabajo. Por eso te queremos
            contar algunos de los <i>shortcuts</i> que va a hacerte más feliz la estadía.
            </p>
            <hr>
            <h3>Herramientas para buscar...</h3>
            <div class="row">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/editor4.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br> Ctrl + Shift + R: busca un recurso (archivo), filtrando por nombre o extensión. 
                            <br> Ctrl + Shift + F3: busca cualquier elemento creado por vos o que venga con
                            la biblioteca de Wollok, como Date, Set o String.</figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                        <img src="/images/tour/editor5_1.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Ctrl + O permite buscar dentro de un archivo todo tipo de elementos: 
                            definiciones de objetos, clases, variables o métodos.</figcaption>
                    </figure>
                </div>
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                        <img src="/images/tour/editor6.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Un popurri de uso de shortcuts para borrar, intercalar líneas o comentar/descomentarlas.</figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <div class="container">
                <h3>
                    Resumen de shortcuts útiles
                </h3>
                <div class="card">
                    <div class="card-body">
                        <!--Table-->
                        <table class="table table-striped">
                            <!--Table head-->
                            <thead class="mdb-color lighten-4">
                                <tr>
                                    <th><b>Teclas</b></th>
                                    <th><b>¿Qué hacen?</b></th>
                                </tr>
                            </thead>
                            <!--Table head-->
                            <!--Table body-->
                            <tbody>
                                <tr>
                                    <td>Ctrl + Espacio</td>
                                    <td>Autocompletado</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + 1</td>
                                    <td>Ayuda contextual para resolver un problema (ver Quick Fixes)</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift + F3</td>
                                    <td>Busca un elemento (objeto, clase, etc.) dentro del ambiente</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + O</td>
                                    <td>Busca una definición dentro de un archivo</td>
                                </tr>
                                <tr>
                                    <td>F3</td>
                                    <td>Va de una referencia a su definición</td>
                                </tr>                                
                                <tr>
                                    <td>Alt + Flecha Arriba | Flecha Abajo</td>
                                    <td>Mueve toda la línea hacia arriba o abajo</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + D</td>
                                    <td>Elimina una línea</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift + C</td>
                                    <td>Comenta una línea</td>
                                </tr>
                                <tr>
                                    <td>Alt + Shift + R</td>
                                    <td>Renombra una referencia</td>
                                </tr>
                                <tr>
                                    <td>F2</td>
                                    <td>Renombra un archivo</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + S</td>
                                    <td>Guarda un archivo</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift + S</td>
                                    <td>Guarda todos los archivos modificados</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + M</td>
                                    <td>Maximiza la ventana activa</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift +/-</td>
                                    <td>Manejo de zoom de la ventana (Agranda o achica el font)</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + PageDown / PageUp</td>
                                    <td>Avanza / Retrocede un tab en los archivos abiertos dentro del Editor</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift + L</td>
                                    <td>Muestra la lista de shortcuts activos</td>
                                </tr>
                            </tbody>
                            <!--Table body-->
                        </table>
                        <!--Table-->
                    </div>
                </div>
            </div>
        </div>
        <!--/.Panel 1-->
        <!-- *****************************  VALIDATORS ****************************************-->
        <div class="tab-pane fade" id="validador" role="tabpanel">
            <br>
            <p>
            La detección temprana de errores es una herramienta que va orientando al desarrollador a construir software
            con mayor robustez. En Wollok este rol lo cumple el validador que está integrado totalmente con el editor.
            </p>
            <p>
            Detecta construcciones erróneas (constructores en objetos o tests, referencias inválidas, 
            envíos de mensajes incorrectos, entre otros), también chequea el uso o inicialización de variables y 
            constantes como la mayoría de los entornos modernos. Pero Wollok lleva las validaciones a un nivel
            extra: evita malas prácticas como las construcciones "if (expresion) return true else false", 
            redefinir métodos que solo llamen a super, definir constructores que no inicialicen referencias constantes,
            definir una estructura de clases con referencias circulares, etc.
            </p>
            <p>
            Y lo más importante, cada año se incorporan y se revisan esas validaciones de acuerdo a los  
            trabajos prácticos que realizan los estudiantes. Sí, el código escrito retroalimenta al lenguaje.
            </p>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/validator1Es2.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br> Una muestra de cómo funciona el validador. Al posicionarnos
                        con el mouse sobre la parte izquierda, se expande la descripción de la advertencia (en amarillo)
                        o el error (en rojo). En la solapa Problemas tenemos un resumen de todos los <i>issues</i> de
                        cada uno de los proyectos.</figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <h3>
            ¿Cómo visualizar la solapa Problemas?   
            </h3>
            <p>
            Para activarla, se debe ir al menú Ventana > Mostrar vista > Otras > y buscamos "Problemas". 
            Allí se agrupan los diferentes tipos de problema (error, advertencia, información).
            </p>
            <hr>
            <h3>
            ¿Puedo ejecutar un programa con errores o advertencias?   
            </h3>
            <p>
            La respuesta es sí: en el caso de las advertencias, se pasan por alto al ejecutar un programa, un test o 
            la consola REPL. En el caso del error, te aparecerá un mensaje de confirmación, ya que el error puede ser
            que impida la normal ejecución del software que creaste.
            </p>
            <hr>
            <h3>
            Tareas pendientes en el IDE 
            </h3>
            <p>
            Si en algún momento escribís código y no quedás del todo conforme, o bien querés avanzar y pensás mejorarlo más
            adelante, podés generar un recordatorio escribiendo un comentario con las palabras TODO o FIXME. Cuando abras la solapa Tareas (Ventana > Mostrar vista > Otras > buscamos Tareas) tendrás la lista completa de temas pendientes. Haciendo doble click sobre cada elemento te lleva directamente al código.
            </p>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/todoEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br> Escribimos en el código los tags TODO (pendiente) o
                        FIXME (solucionar o mejorar) y aparecerá automáticamente en la vista Tareas.</figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Para configurar que otras palabras clave aparezcan en la solapa Tasks, activás el menú
            Ventana > Preferencias > Buscas Códigos de Tarea (Task tags) y agregás o modificás las etiquetas existentes.
            <br><br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/tasksEs.png" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br></figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <!-- *****************************  QUICK FIXES ****************************************-->
        <div class="tab-pane fade" id="quickFix" role="tabpanel">
            <br>
            Detectar los errores es el primer paso, Wollok permite aplicar soluciones
            predefinidas a problemas frecuentes. Para activarlo, basta con ubicarse en la parte subrayada en rojo
            dentro del código y presionar <b>Ctrl + 1</b>, o bien dejar que se active el menú contextual. Entonces se
            habilita una serie de opciones (<i>quick fixes</i>) que permiten resolver ese conflicto.
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/quickFixes.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>En el ejemplo vemos cómo desde un test podemos crear un wko, o una clase,
                        y agregarle métodos nuevos. 
                        <br>
                        Esto podés hacerlo desde un WKO, clase o mixin.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Crear una clase, un wko, agregar métodos, referencias (locales, de instancia, parámetros), eliminar
            construcciones redundantes, corregir llamadas a constructores, son solo alguna de las posibilidades
            que tenés, que te permiten concentrarte en el diseño y automatizar tareas repetitivas de implementación.
            <br>
            <br> 
        </div>
        <!-- *****************************  FORMATTER ****************************************-->
        <div class="tab-pane fade" id="formatter" role="tabpanel">
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/formatter3.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Formateo básico de un elemento de Wollok. </figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Wollok tiene un formateador basado en su sintaxis que estiliza el código y le da un formato homogéneo,
            algo necesario en un lenguaje educativo que propone proyectos donde se conforma un grupo de trabajo.
            Para activarlo, ubicado sobre un archivo, presioná las teclas <b>Ctrl + Shift + F</b> (Format).
            <br>
            <br>
        </div>
        <!-- *****************************  CONSOLE ****************************************-->
        <div class="tab-pane fade" id="consola" role="tabpanel">
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/consoleIntroEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Ejecutando en la consola un archivo .wlk. 
                        <br>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Una de las primeras herramientas para trabajar es la consola REPL (nombre que surge del acrónimo
            <b>R</b>ead, <b>E</b>valuate, <b>P</b>rint, <b>L</b>oop), que permite la interacción inicial entre
            el usuario y el intérprete Wollok. 
            <br>
            <br>
            Si bien tiene algunos alcances limitados (como las opciones de autocompletado), es una forma de comenzar a conocer
            cómo responden los objetos ante el envío de un mensaje.
            <br>
            <br>
            Para utilizarla, basta con hacer click derecho sobre un archivo .wlk y elegir la opción "Ejecutar en consola REPL".
            También te aparecerá el botón "Play" en la barra de herramientas cuando estés en el
            Explorador de Paquetes.
            <br><br>
            <div class="container text-center">
                <img src="/images/tour/runConsole.png" class="img-fluid z-depth-1">
            </div>
            <br><br>
            Podés enviar mensajes a objetos, crear referencias constantes o variables,
            probar cómo funcionan los números, las fechas y otros objetos que vienen con Wollok, etc. Escribís
            la línea y al final presionás la tecla Enter. Con la flecha arriba te irán apareciendo
            los mensajes que enviaste anteriormente. También podés pegar código del portapapeles, y los errores
            se integran directamente con el editor.
            <br>
            <br>
            <div class="container text-center">
                <img src="/images/tour/consoleErrorsStackTrace.gif" class="img-fluid z-depth-1">
            </div>
            <br>
            Recordá que cuando modifiques un archivo .wlk, debés reiniciar la consola para que tome
            los cambios, vas a ver el mensaje en rojo en la consola o bien en la barra de herramientas arriba a la derecha. Las opciones en ese caso son: reiniciar desde cero tomando los nuevos cambios, o ejecutar automáticamente los mismos comandos que la última sesión.
            <br>
            <br>
            <div class="container text-center">
                <img src="/images/tour/consoleRestart.gif" class="img-fluid z-depth-1">
            </div>
            <br>
            <hr>
            <h4>Exportar una sesión a un test</h4>
            Podemos exportar una sesión de nuestra consola a un test, mediante el botón específico
            en la barra de herramientas como se muestra a continuación:
            <br>
            <br>
            <div class="container text-center">
                <img src="/images/tour/consoleExportSessionEs.gif" class="img-fluid z-depth-1">
            </div>
            <br>
            <hr>
            <h4>Ejecutar una sesión sin un archivo asociado</h4>
            <br>
            También tenés la posibilidad de ejecutar la consola sin necesidad de asociarlo a
            un archivo particular, mediante una opción específica en la barra:
            <br><br>
            <div class="container text-center">
                <img src="/images/tour/runREPLConsoleWithoutFile.png" class="img-fluid z-depth-1">
            </div>
            <br>
            <hr>
            <h4>
            Importando archivos desde la consola
            </h4>
            <p>
            Wollok es una herramienta de exploración, eso incluye hacer pruebas sobre un archivo de definiciones de un proyecto y luego ir importando otros archivos, como vemos en el ejemplo. Esta opción solo funciona si ejecutás la consola para un archivo .wlk de tu proyecto (no funciona cuando la consola no tiene asociado un archivo), y no podés importar archivos una vez que los modificaste, para eso te recomendamos que utilices los botones de reinicio.
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/consoleImportEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br> Importando archivos dinámicamente (disponible desde la versión 1.8 Hypatia)</figcaption>
                    </figure>
                </div>
            </div>
            <br>            
            <br>
        </div>
        <!-- *****************************  TEST RUNNER ****************************************-->
        <div class="tab-pane fade" id="testRunner" role="tabpanel">
            <br>
            La consola interactiva es útil para dar los primeros pasos, pero cuando necesitamos
            poder automatizar nuestras pruebas, el Test Runner de Wollok es la herramienta más
            adecuada para poder validar el software que construimos.
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/testRunnerIntroEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Ejecutando un conjunto
                            de tests: vemos que se puede navegar directamente al código donde se originó el error, copiar la pila de ejecución de un test que no terminó bien o ver el tiempo que demoró la ejecución de todos los tests.
                            Y el ejercicio de modificar el código y ejecutar
                            los tests es un proceso iterativo e incremental. </figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Si querés conocer más acerca del testeo unitario de Wollok te recomendamos que leas
             <a href="https://docs.google.com/document/d/1caDE_mlP1QMfzyVpyvh-tKshjAeYLXBkXDYrTX5zFUI/edit#">este apunte</a>. 
            <br>
            <br>
            <h4>Mostrar solo los tests con errores o fallas</h4>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/testRunnerFilterErrorsEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Cuando tenés muchos tests, podés filtrar solo aquellos que no anduvieron ok. </figcaption>
                    </figure>
                </div>
            </div>
            <br>            
            <hr>
            <h4>Ejecutar todos o algunos tests de un proyecto o directorio</h4>
            Es posible ejecutar todos los tests de un proyecto, los tests de un
            directorio o bien diferentes archivos .wtest, como te lo mostramos en este video:
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/testRunnerRunningSeveralFilesEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Ejecutando todos los tests de un 
                        proyecto, y luego seleccionamos dos de los tres archivos de test para ejecutarlos.</figcaption>
                    </figure>
                </div>
            </div>
            <br>            
            <hr>
            <h4>Ejecutar un solo test de un archivo</h4>
            Es posible ejecutar un solo test dentro de un archivo, escribiendo la palabra "only" antes del test en cuestión. Eso te permitirá concentrarte en ese test e incluso lo podrás integrar con el diagrama dinámico, que se explica en la siguiente solapa.
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/testRunnerOnlyEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Ejecutando un solo test en un archivo, eso activa la integración con el diagrama dinámico.</figcaption>
                    </figure>
                </div>
            </div>
        </div>  
        <!-- *****************************  DIAGRAMAS ****************************************-->
        <div class="tab-pane fade" id="diagramas" role="tabpanel">
            <br>
            Wollok trae también herramientas para comunicar el diseño, como el diagrama
            estático que está totalmente integrado con el editor. A medida que vamos 
            escribiendo el diagrama estático se regenera y se guarda junto con el proyecto.
            Podemos configurar qué variables, métodos y elementos (WKO, clases, mixins) mostrar.
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/staticDiagramEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Una pequeña demostración
                        del diagrama estático de Wollok</figcaption>
                    </figure>
                </div>
            </div>
            <br>            
            Para conocer en detalle todas las funcionalidades te recomendamos que leas
            <a href="https://docs.google.com/document/d/1K3A5kSZHZH7QmPHAQ-Hwt_t_5OKweeeaqF670DLS9Y0/edit">este apunte</a>.
            <br>
            <hr/>
            <br>
            Wollok cuenta también con un <b>Diagrama dinámico</b> que se integra con la consola REPL, que permite mostrar las referencias entre los diferentes objetos que están en el ambiente: los candados representan las referencias constantes, el diagrama permite ocultar objetos del diagrama y adaptarse mejor para personas con daltonismo.
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/dynamicDiagramEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Una pequeña demostración
                        del diagrama dinámico de Wollok: en azul aparecen los objetos creados por nosotros, en verde los que trae la biblioteca de Wollok.</figcaption>
                    </figure>
                </div>
            </div>
            <br>
        </div>  
    </div>
</div>

