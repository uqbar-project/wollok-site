---
layout: hyde
title: 'Conceptos'
lang: 'es'
---

<div class="container">
    <img src="/images/documentation/tutorial.png" height="64" width="64" align="left" style="padding: 0px;"/>
    <br>
    <h2>&nbsp;&nbsp;Tutorial breve de conceptos básicos</h2>
    <br>
</div>

Este tutorial explica conceptos básicos y cómo podemos iniciarnos en el mundo de la programación con Wollok.

<!-- Nav tabs -->
<div class="container">
    <ul class="nav breadcrumb nav-tabs nav-justified" role="tablist">
        <li class="nav-item">
            <a class="nav-link wollokNavLink active" data-toggle="tab" href="#introduccion" role="tab">Intro</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#objetos" role="tab">Objetos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#colecciones" role="tab">Colecciones</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#clases" role="tab">Clases</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#avanzados" role="tab">Avanzados</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#game" role="tab">Game</a>
        </li>
    </ul>
</div>
    

<!-- Tab panels -->
<div class="tab-content card">
    <!--Panel 1-->
    <div class="tab-pane fade in show active" id="introduccion" role="tabpanel" style="padding: 1rem 1.5rem 1rem 1.5rem">
    </div>
    <!--/.Panel 1-->
    <div class="tab-pane fade in show" id="objetos" role="tabpanel" style="padding: 1rem 1.5rem 1rem 1.5rem">
    </div>
    <div class="tab-pane fade in show" id="colecciones" role="tabpanel" style="padding: 1rem 1.5rem 1rem 1.5rem">
    </div>
    <div class="tab-pane fade in show" id="clases" role="tabpanel" style="padding: 1rem 1.5rem 1rem 1.5rem">
    </div>
    <div class="tab-pane fade in show" id="avanzados" role="tabpanel" style="padding: 1rem 1.5rem 1rem 1.5rem">
    </div>
    <div class="tab-pane fade in show" id="game" role="tabpanel" style="padding: 1rem 1.5rem 1rem 1.5rem">
    </div>
</div>

<script>
    loadHtml("introduccion", "elements/index.html")
    loadHtml("objetos", "objetos/index.html")
    loadHtml("colecciones", "colecciones/index.html")
    loadHtml("clases", "clases/index.html")
    loadHtml("avanzados", "avanzados/index.html")
    loadHtml("game", "game/index.html")
</script>