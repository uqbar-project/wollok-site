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
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#panel6" role="tab"><i class="fa fa-check-circle"></i> Validador</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#panel7" role="tab"><i class="fa fa-medkit"></i> Quick Fix</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#panel7" role="tab"><i class="fa fa-indent"></i> Formatter</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#panel7" role="tab"><i class="fa fa-toggle-right"></i> Consola</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#panel7" role="tab"><i class="fa fa-gear"></i> Test runner</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#panel7" role="tab"><i class="fa fa-list-ul"></i> Outline</a>
        </li>
    </ul>
    <!-- Tab panels -->
    <div class="tab-content">
        <!--Panel 1-->
        <div class="tab-pane fade in show active" id="panel5" role="tabpanel">
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
                            <br> Ctrl + Shift + F3: busca cualquier elemento, puede ser un objeto o clase que creaste vos o bien 
                        cualquier otro elemento que esté dentro del ambiente (como la clase Date, o la clase Set que vienen con 
                    la biblioteca de Wollok).</figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                        <img src="/images/tour/editor5.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption"><br>Ctrl + O permite buscar dentro de un archivo todo tipo de elementos: 
                            definciones de objetos, clases, variables o métodos.</figcaption>
                    </figure>
                </div>
                <div class="col-md-6 mb-3">
                <p>
                    Otros shortcuts que pueden serte útiles:
                </p>
                TODO
                </div>
            </div>
    
        </div>
        <!--/.Panel 1-->
        <!--Panel 2-->
        <div class="tab-pane fade" id="panel6" role="tabpanel">
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.</p>
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

