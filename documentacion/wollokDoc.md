---
layout: hyde
title: 'WollokDoc'
lang: 'es'
--- 

<div class="container">
<img src="/images/documentation/wollokDoc.png" height="64" width="64" align="left" style="padding: 0px;"/>
<br>
<h2>&nbsp;&nbsp;Guía completa del lenguaje</h2>
<br>
</div>

<div class="container">
<p>
	Esta es la guía completa de las bibliotecas de objetos y clases que vienen con Wollok.
</p>
</div>

<ul class="nav breadcrumb nav-tabs nav-justified" role="tablist">
	<li class="nav-item" id="lib">
		<a class="nav-link wollokNavLink " href="javascript:selectWollokDocFile('lib')">lib.wlk <span class="sr-only">(current)</span></a>
	</li>
	 <li class="nav-item" id="vm">
		<a class="nav-link wollokNavLink " href="javascript:selectWollokDocFile('vm')">vm.wlk <span class="sr-only">(current)</span></a>
	</li>
	 <li class="nav-item" id="lang">
		<a class="nav-link wollokNavLink active" href="javascript:selectWollokDocFile('lang')">lang.wlk <span class="sr-only">(current)</span></a>
	</li>
	 <li class="nav-item" id="mirror">
		<a class="nav-link wollokNavLink " href="javascript:selectWollokDocFile('mirror')">mirror.wlk <span class="sr-only">(current)</span></a>
	</li>
	 <li class="nav-item" id="game">
		<a class="nav-link wollokNavLink " href="javascript:selectWollokDocFile('game')">game.wlk <span class="sr-only">(current)</span></a>
	</li>
</ul>

<div class="tab-content card">
	<div id="content" class="container" style="padding-top: 1rem;"/>
</div>

<script>
selectWollokFile("lang")
</script>
