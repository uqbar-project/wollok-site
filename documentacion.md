---
layout: hyde
title: 'Documentación'
weight: 35
lang: 'es'
icon: 'info-circle'
---

<h1>
<img src="/images/documentation.ico" align="left" height="64" width="64"/>
&nbsp;&nbsp;Documentación de Wollok
</h1>
<br>
<p>
Wollok cuenta con una gran cantidad de información para que puedas aprender los conceptos de la programación orientada a objetos.

<ul>
    <li>
        En la solapa <b>Conceptos</b> tenés un tutorial de cada uno de los temas más importantes de esta tecnología, para poder iniciarte en forma rápida.
    </li>
    <li>
        En la solapa <b>Apuntes</b> encotrarás explicaciones más detalladas de los contenidos temáticos, más aptos para una materia de una carrera de altos estudios.
    </li>
    <li>
        En la solapa <b>Guía completa del lenguaje</b> accedés a la documentación completa de la biblioteca de clases y objetos que vienen con Wollok.
    </li>
</ul>
</p>

<div class="container">
    <ul class="nav breadcrumb nav-tabs nav-justified" role="tablist">
        <li class="nav-item">
            <a class="nav-link active wollokNavLink" data-toggle="tab" href="#conceptos" role="tab"><i class="fa fa-dot-circle-o"></i>&nbsp;Conceptos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#apuntes" role="tab"><i class="fa fa-file-text-o"></i>&nbsp;Apuntes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#wollokDoc" role="tab"><i class="fa fa-book" aria-hidden="true"></i>&nbsp;Guía completa del lenguaje</a>
        </li>
    </ul>
    <!-- Tab panels -->
    <div class="tab-content">
        <div class="tab-pane fade in show active" id="conceptos" role="tabpanel"></div>
        <div class="tab-pane fade" id="apuntes" role="tabpanel"></div>
        <div class="tab-pane fade" id="wollokDoc" role="tabpanel"></div>
    </div>

</div>
    
<script>
    loadHtml("conceptos", "conceptos/index.html")
    loadHtml("apuntes", "apuntes/index.html")
    loadHtml("wollokDoc", "wollokDoc/index.html")
</script>
        