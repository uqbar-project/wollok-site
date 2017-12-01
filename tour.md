---
layout: hyde
title: 'Tour'
weight: 25
lang: 'es'
icon: 'bus'
--- 

<div class="container">
    <h1>Un tour por Wollok</h1>
    <br>
</div>

A continuación te vamos a contar cuáles son las principales herramientas con las que cuenta el entorno integrado de Wollok.

<!-- Nav tabs -->
<div class="container">
    <ul class="nav breadcrumb nav-tabs nav-justified" role="tablist">
        <li class="nav-item">
            <a class="nav-link active wollokNavLink" data-toggle="tab" href="#editor" role="tab"><i class="fa fa-edit"></i> Editor</a>
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
        <!--Panel 1-->
        <div class="tab-pane fade in show active" id="editor" role="tabpanel">
            <br>
            <p>
            El editor de Wollok ofrece desde ya coloreado de sintaxis, pero también viene con capacidades de autocompletado.
            
            <br>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                        <img src="/images/tour/editor1.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Por ejemplo, podemos crear a pepita, un ave que tiene energía y que sabe volar. Activamos el autocompletado
                                mediante las teclas <b>Ctrl + Barra</b> que habilita el autocomplete de los elementos sintácticos que tiene Wollok.</figcaption>
                    </figure>
                </div>
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                    <img src="/images/tour/editor2.gif" class="img-fluid z-depth-1" alt="Responsive image">
                        <figcaption class="figure-caption"><br>
                        También hay construcciones más interesantes, que nos permiten crear una estructura de control try/catch o una clase Ave
                        </figcaption>
                    </figure>
                </div>
            </div>

            <br>

            Aquí utilizamos asistentes de contenido un tanto más elaborados. Por eso es conveniente probar qué sugerencias
            tenemos, por ejemplo, para enviar mensajes a un objeto:
            <br>
            <br>
            
            <div class="container text-center">
                <img src="/images/tour/editor3.gif" class="img-fluid z-depth-1"/>
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
                        <figcaption class="figure-caption"><br> Ctrl + R: busca un recurso (archivo), filtrando por nombre o extensión. 
                            <br> Ctrl + Shift + F3: busca cualquier objeto, clase o mixin creado por vos o que venga con
                            la biblioteca de Wollok, como Date, Set o String.</figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                        <img src="/images/tour/editor5.gif" class="img-fluid z-depth-1">
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
                                    <td>Guarda todos los archivos</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + M</td>
                                    <td>Maximiza la ventana activa</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift +/-</td>
                                    <td>Manejo de zoom de la ventana (Agranda o achica el font).</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + PageDown / PageUp</td>
                                    <td>Avanza / Retrocede un tab en los archivos abiertos dentro del Editor.</td>
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
            Por supuesto que detecta construcciones erróneas (constructores en objetos, referencias inválidas, nombres
            con minúsculas o mayúsculas, y muchas otras más), también el chequeo de uso de variables o de referencias
            inicializadas que la mayoría de los entornos modernos manejan, pero Wollok lleva las validaciones a un nivel
            extra: evita malas prácticas como las construcciones "if (expresion) return true else false", 
            redefinir métodos que solo llamen a super, definir constructores que no inicialicen referencias constantes,
            tener referencias circulares en una jerarquías de clases, etc.
            </p>
            <p>
            Y lo más importante, cada año se incorporan y se revisan esas validaciones de acuerdo a los estándares 
            de los trabajos de los estudiantes que practican sobre el lenguaje.
            </p>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/validator1.gif" class="img-fluid z-depth-1">
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
            Si en algún momento querés armar una solución "de compromiso" o que te parece que se puede mejorar, podés
            escribir en el comentario las palabras TODO o FIXME. Cuando abras la solapa Tareas (Ventana > Mostrar vista > Otras > 
            buscamos Tareas) tendrás la lista completa de temas pendientes. Haciendo doble click sobre cada elemento te lleva directamente al 
            código.
            </p>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/todo.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br> Escribimos en el código los tags TODO (pendiente) o
                        FIXME (solucionar o mejorar) y aparecerá automáticamente en la vista Tareas.</figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            Para configurar otros valores, podés hacerlo desde
            Ventana > Preferencias > Etiquetas de Tareas (Task tags) y agregar o modificar los tags existentes.
            <br><br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/tasks.png" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br></figcaption>
                    </figure>
                </div>
            </div>
        </div>


        <!-- *****************************  QUICK FIXES ****************************************-->
        <div class="tab-pane fade" id="quickFix" role="tabpanel">
            <br>
            Detectar los errores es el primer paso, Wollok trae soluciones
            más comunes ante problemas frecuentes. Para activarlo, basta con ubicarse en la parte subrayada en rojo
            dentro del código y presionar <b>Ctrl + 1</b>, o bien dejar que se active el menú contextual. Entonces se
            habilita una serie de opciones (<i>quick fixes</i>) que permiten resolver ese conflicto.
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/quickFixes.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Desde un test podemos crear un wko, o una clase,
                        e inclusive agregarle métodos. </figcaption>
                    </figure>
                </div>
            </div>
            <br>
            <br>
            Crear una clase, un wko, agregar métodos, referencias (locales, de instancia, parámetros), eliminar
            construcciones redundantes, corregir llamadas a constructores, son solo alguna de las posibilidades
            que tenés, que te permiten concentrarte en el diseño y automatizar tareas repetitivas de implementación.
            <br>
            <br> 
        </div>

        <!-- *****************************  QUICK FIXES ****************************************-->
        <div class="tab-pane fade" id="formatter" role="tabpanel">
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/formatter.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Formateo básico de una clase. </figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Wollok tiene un formateador basado en su sintaxis que estiliza el código y le da un formato homogéneo,
            algo necesario en un lenguaje educativo que propone proyectos donde se conforma un grupo de trabajo.
            Para activarlo, ubicado sobre un archivo, presioná las teclas <b>Ctrl + Shift + F</b> (Format):
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/formatter2.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Formateando <i>closures</i> e if con o sin llaves.</figcaption>
                    </figure>
                </div>
            </div>
            <br>
        </div>

        <!-- *****************************  CONSOLE ****************************************-->
        <div class="tab-pane fade" id="consola" role="tabpanel">
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/consola.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Ejecutando en la consola un archivo .wlk. En la imagen se ve 
                        que la consola nos avisa si el contexto de ejecución está sincronizado con la última versión 
                        del archivo. </figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Una de las primeras herramientas para trabajar es la consola REPL (nombre que surge del acrónimo
            <b>R</b>ead, <b>E</b>valuate, <b>P</b>rint, <b>L</b>oop), que permite la interacción inicial entre
            el usuario y el intérprete Wollok. 
            <br>
            <br>
            Si bien tiene algunos alcances limitados (no posee por el momento opciones de autocompletado, y requiere
            reiniciarse cada vez que hagamos un cambio en el archivo original), es una forma de comenzar a conocer
            cómo responden los objetos ante el envío de un mensaje.
            <br>
            <br>
            Para utilizarla, basta con hacer click derecho sobre un archivo .wlk y elegir la opción "Ejecutar en consola REPL".
            También existe el botón "Play" en la barra de herramientas.
            <br>
            <div class="container text-center">
                <img src="/images/tour/runConsole.png" class="img-fluid z-depth-1">
            </div>
            <br><br>
            Podés enviar mensajes a objetos, crear referencias constantes o variables,
            probar cómo funcionan los números, las fechas y otros objetos que vienen con Wollok, etc. Para ello escribís
            la línea y al final presionás la tecla Enter. Con la flecha arriba te irán apareciendo
            los mensajes que enviaste anteriormente.
            <br><br>
            Recordá que cuando modifiques un archivo .wlk, debés reiniciar la consola para que tome
            los cambios. En la barra de herramientas a la derecha te dice si la consola está 
            sincronizada.
            <br>
            <hr>
            <h4>Exportar una sesión a un test</h4>
            Podemos exportar una sesión de nuestra consola a un test, mediante el botón específico
            en la barra de herramientas como se muestra a continuación:
            <br>
            <br>
            <div class="container text-center">
                <img src="/images/tour/console2.gif" class="img-fluid z-depth-1">
            </div>
            <br>
            <hr>
            <h4>Ejecutar una sesión sin un archivo asociado</h4>
            <br>
            Por último, tenés la posibilidad de ejecutar la consola sin necesidad de asociarlo a
            un archivo particular, mediante una opción específica en la barra:
            <br>
            <div class="container text-center">
                <img src="/images/tour/runConsole2.png" class="img-fluid z-depth-1">
            </div>
            <br><br>
        </div>

        <!-- *****************************  TEST RUNNER ****************************************-->
        <div class="tab-pane fade" id="testRunner" role="tabpanel">
            <br>
            La consola interactiva es útil para dar los primeros pasos, pero cuando necesitamos
            poder automatizar nuestras pruebas, el Test Runner de Wollok es la herramienta más
            adecuada para poder validar el software que construís.
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/testRunner.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Ejecutando un conjunto
                            de tests, vemos cómo se puede filtrar solo errores y fallas,
                            cómo se visualizan los errores y podemos navegar directamente
                            al código donde se originó el error, y cómo la ejecución de 
                            los tests es un proceso iterativo e incremental. </figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Si querés conocer más acerca del testeo unitario de Wollok te recomendamos que leas
             <a href="https://docs.google.com/document/d/1caDE_mlP1QMfzyVpyvh-tKshjAeYLXBkXDYrTX5zFUI/edit#">este apunte</a>. 
            <br>
            <hr>
            <h4>Ejecutando todos los tests de un proyecto o directorio</h4>
            Es posible ejecutar todos los tests de un proyecto, o bien los tests de un
            directorio (si organizaste en una carpeta varios .wlk), para eso tenés la opción
            desde el menú de opciones del navegador del proyecto (Package Explorer):
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/runAllTests.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Ejecutando todos los tests de un 
                        proyecto. Aquí vemos que corren además de los 3 tests del archivo
                    example.wtest, también se ejecutan los del archivo test.wtest</figcaption>
                    </figure>
                </div>
            </div>
        </div>  

        <!-- *****************************  DIAGRAMAS ****************************************-->
        <div class="tab-pane fade" id="diagramas" role="tabpanel">
            <br>
            Wollok trae también herramientas para comunicar el diseño, como el diagrama
            estático que está totalmente integrado con el editor. A medida que vayamos 
            escribiendo el diagrama estático se regenera y se guarda junto con el proyecto,
            y además podemos configurar qué variables, métodos y clases mostrar.
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/staticDiagram.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Una pequeña demostración
                        del diagrama estático de Wollok</figcaption>
                    </figure>
                </div>
            </div>
            <br>
            Para conocer en detalle todas las funcionalidades te recomendamos que leas
            <a href="https://docs.google.com/document/d/1K3A5kSZHZH7QmPHAQ-Hwt_t_5OKweeeaqF670DLS9Y0/edit">este apunte</a>.
            <br>
            <br>
        </div>  
                

    </div>

</div>

