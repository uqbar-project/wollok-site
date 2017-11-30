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
        <!--Panel 2-->
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
        <!--/.Panel 2-->
        <!--Panel 3-->
        <div class="tab-pane fade" id="panel7" role="tabpanel">
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
        </div>
        <!--/.Panel 3-->
    </div>

</div>

