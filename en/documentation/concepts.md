---
layout: en/hyde
title: 'documentation'
lang: 'es'
---

<div class="container">
    <img src="/images/documentation/tutorial.png" height="64" width="64" align="left" style="padding: 0px;"/>
    <br>
    <h2>&nbsp;&nbsp;Basic Concepts Tutorial</h2>
    <br>
</div>

Meet basic concepts of Wollok in this quick tutorial.

<!-- Nav tabs -->
<div class="container">
    <ul class="nav breadcrumb nav-tabs nav-justified" role="tablist">
        <li class="nav-item">
            <a class="nav-link active wollokNavLink" data-toggle="tab" href="#introduccion" role="tab">Intro</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#objetos" role="tab">Objects</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#colecciones" role="tab">Collections</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#clases" role="tab">Classes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#avanzados" role="tab">Advanced</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#game" role="tab">Game</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#test" role="tab">Tests</a>
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
    <div class="tab-pane fade in show" id="test" role="tabpanel" style="padding: 1rem 1.5rem 1rem 1.5rem">
    </div>
</div>

<script>
    loadHtml("introduccion", "elements/index.html")
    loadHtml("objetos", "objetos/index.html")
    loadHtml("colecciones", "colecciones/index.html")
    loadHtml("clases", "clases/index.html")
    loadHtml("avanzados", "avanzados/index.html")
    loadHtml("game", "game/index.html")
    loadHtml("test", "test/index.html")
</script>