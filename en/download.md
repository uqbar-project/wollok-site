---
layout: en/hyde
title: 'Download'
weight: 20
lang: 'en'
---

<div class="container">
	<!--Card-->
	<div class="card">
		<!--Card image-->
		<div class="view overlay hm-white-slight">
			<img src="/images/Wollok_Installation.jpg" class="img-fluid " width="100%">
		</div>
		<!--Card content-->
		<div class="card-body" >
			<!--Title-->
			<h4 class="card-title">Wollok Environment</h4>
			<hr>
			<!--Text-->
			<p>These are main instructions to get Wollok installed in your machine:</p>
			<ul>
				<li><a href="#jdk-18" class="wollokLink">Install JDK 1.8</a></li>
				<li><a href="#instalar-wollok" class="wollokLink">Install full Wollok environment</a> 
					(<a href="#actualizar-wollok" class="wollokLink">or update it</a> or <a href="#actualizar-desde-eclipse" class="wollokLink">add it as a plugin to an existing Eclipse installation</a>)
				</li>
				<li>
					Have you any problem? <a href="#troubleshooting" class="wollokLink">There is a quick troubleshooting guide</a>
				</li>
				<li>
					And there are finally <a href="#configuraciones-extras" class="wollokLink">a few things you can configure</a>
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
						Java Development Kit 1.8 (prerequisite)
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>
			<!-- Card body -->
			<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
				<div class="card-body grey lighten-5 transparent">
					<p>You need to previously install a Java Virtual Machine 1.8.</p>
					<a class="btn btn-primary" href="https://adoptium.net/temurin/releases/?version=8" target="_blank">Download it!</a>
					<p>
					<br/>
					<b>Note:</b> for Linux/Mac OS, the best option is to download the <code>.pkg</code> file, and for Windows, the <code>.msi</code> one. These are packages for each Operating System, respectivelly, that allow an easy installation of their contents. They also simplify some steps, such as setting the JAVA_HOME environment variable on Windows, or putting the executables in an easy to reach location on Linux/Mac OS.
					</p>
					<hr>
					<h4><span class="badge badge-pill red darken-3">FAQ</span></h4>
					<ul> 
						<li>Don't use Java Updates tools. Use above link.</li>
						<li>JDK <b>1.8</b> recommended (there could be potential problems with Wollok Game running 1.9 or newer versions, check the specific troubleshooting page)</li>
						<li>It has to be a <b>JDK</b> (Java Development Kit), since it has a compiler. A JRE (Java Runtime Environment) won't work.</li>
						<li>If you are already using Eclipse and Java 1.8, you can ignore this step.</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="card">
			<!-- Card header -->
			<div class="card-header mdb-color lighten-2 white-text" role="tab" id="headingTwo">
				<a data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
					<h4 class="card-header mdb-color lighten-2 white-text" id="jdk-18">
						Download Wollok
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>
			<!-- Card body -->
			<div id="collapseTwo" class="collapse show" role="tabpanel" aria-labelledby="headingTwo">
				<div id="instalar-wollok" class="card-body grey lighten-5 transparent">
					<h4 class="card-title">First time</h4>
					<p>As Wollok is an Eclipse-based platform, you cab install the Wollok IDE by uncompressing Zip / Tar.Gz file (depending on your OS platform) in a folder that <b>does not contain spaces in its name<b>, as this can lead to errors. Here are the compressed files ready to download:
					</p>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v3.0.0/wollok-win32.win32.x86_64.zip"><i class="fa fa-windows" aria-hidden="true"></i>&nbsp;&nbsp;Win 32</a>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v3.0.0/wollok-linux.gtk.x86_64.zip"><i class="fa fa-linux" aria-hidden="true"></i>&nbsp;&nbsp;Linux 32</a>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v3.0.0/wollok-macosx.cocoa.x86_64.zip"><i class="fa fa-apple" aria-hidden="true"></i>&nbsp;&nbsp;OS X</a>
					<hr>
					<h4 class="card-title" id="actualizar-wollok">Updates</h4>
					<p>As soon as a new version is available, IDE will ask you to update your environment:</p>
					<br><br>
					<div class="text-center">
						<img src="/images/updates/update_01.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					<br>
					<p>
					In this case double-click notification message to activate Update Process. You can also do this manually by activating Help > Check for Updates option. A Wizard is shown:
					</p>
					<br>
					<br>
					<div class="text-center">
						<img src="/images/updates/update_02.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					<br>
					<p>
					Go forward and press finish button. Before upgrade installation is complete a confirmation dialog will appear:
					</p>
					<br>
					<br>
					<div class="text-center">
						<img src="/images/updates/update_03.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					<br>
					<p>
					Click Ok, restart Wollok environment and then you will have the last upgrade correctly installed.
					</p>
					<hr>
					<h4 class="card-title" id="actualizar-desde-eclipse">Update Site Installation</h4>
					<p>
						This option is for advanced users who already have an Eclipse installation and want to add Wollok plugin. 
						<b>This step is not needed if you downloaded and installed Wollok compressed files successfully.</b>
						<br>
						<br>
						Update Site requires a JDT Eclipse Installation (since it is a Java-based platform). 
						In order to add Software Update Site please follow this steps:
					</p>
					<ul>
						<li>
							<a href="http://update.uqbar.org/wollok/stable" target="_blank">http://update.uqbar.org/wollok/stable</a> 
							last stable version (<b>recommended</b> for students)
						</li>
						<li>
							<a href="http://update.uqbar.org/wollok/dev" target="_blank">http://update.uqbar.org/wollok/dev</a> 
							if you want to get in process features (it may have errors until version gets stable)
						</li>
					</ul>
					<img src="/images/screencasts/Wollok-UpdateSite.gif" width="100%"/>
				</div>
			</div>
		</div>
		<div class="card">
			<!-- Card header -->
			<div class="card-header mdb-color lighten-2 white-text" role="tab" id="headingThree">
				<a data-toggle="collapse" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
					<h4 id="troubleshooting" class="card-header mdb-color lighten-2 white-text">
						Troubleshooting
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>
			<!-- Card body -->
			<div id="collapseThree" class="collapse show" role="tabpanel" aria-labelledby="headingThree">
				<div class="card-body grey lighten-5 transparent">
					<h4 class="card-title">Installing in a folder with spaces/Failed to find a Main Class in...</h4>
					<div class="text-center">
						<img src="/images/troubleshooting/wollok-carpeta-con-espacios.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<p>This error happens when Wollok is installed in a folder that contains spaces in its name. Please unzip and install Wollok in a folder with no spaces on the name.</p>
					<hr>
					<h4 class="card-title">IDE shows splash screen but does not start</h4>
					<p>
					If splash screen is shown but IDE doesn’t start, maybe you are not pointing to the right JDK, 
					so check this out in your <a href="#apuntando-la-jdk-correcta-en-tu-entorno" class="wollokLink">environment</a> 
					and <a href="#apuntando-la-jdk-correcta-en-ini-de-wollok" class="wollokLink">Wollok ini file</a>.
					</p>
					<hr>
					<h4 class="card-title">Cannot create a Wollok project</h4>
					<p>
					If your installed IDE doesn’t allow you to create a Wollok project / Wollok class, maybe your Wollok environment
					is pointing to a non-Java 1.8 version, or just a JRE, so it can’t compile wollok sources. Once again, 
					check JDK configuration in your <a href="#apuntando-la-jdk-correcta-en-tu-entorno" class="wollokLink">environment</a> 
					and <a href="#apuntando-la-jdk-correcta-en-ini-de-wollok" class="wollokLink">Wollok ini file</a>.
					</p>
					<hr>
					<h4 class="card-title">IDE does not start with exit code 13</h4>
					<p>
					If trying to start Wollok IDE you get an error like this:
					</p>
					<div class="text-center">
						<img src="/images/troubleshooting/exit-code-13.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					problem could be because
					<ul>
						<li>you are pointing to an unexistent JDK in wollok.ini (check -vm parameter). 
							Correct it <a href="#apuntando-la-jdk-correcta-en-ini-de-wollok" class="wollokLink">following this steps</a></li>
						<li>you invoke <em>"Java Updates"</em> application. 
						This is a <a href="http://stackoverflow.com/questions/27019786/eclipse-java-was-started-but-returned-error-code-13" target="_blank">known problem</a>. 
						In this case, solution should uninstall the current JDK, install the 1.8 JDK as shown in this page and start Wollok normally.</li>
					</ul>
					<hr>
					<h4 class="card-title">Missing dependencies to Wollok plugins while executing a file</h4>
					<p>
					It is certainly a non-descriptive message (we’ll work on it). Problem is you are trying to execute a test, program or 
					Wollok file that is not located in a source folder of your Wollok project.
					By default a standard Wollok project has a "src" source folder. If you create a file outside this folder, 
					it won’t be recognized as an executable one. To solve this you have to move the conflicting file(s) to src or any
					other source folder.	
					</p>
					<div class="text-center">
						<img src="/images/troubleshooting/wollok-launch.png" class="hoverable img-fluid z-depth-1"/>
					</div>		
					<hr>
					<h4 class="card-title">Mac: Wollok is damaged</h4>
					<p>
						First time you open Wollok executable program on your Mac, this window may show:
					</p>
					<div class="text-center">
						<img src="/images/troubleshooting/wollok-mac-garbage.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					<p>
					You can solve it opening a terminal and writing the following command, putting your path to the Wollok.app executable:
					</p>
					<div>
							<pre>xattr -d com.apple.quarantine /path/to/Wollok.app</pre>
					</div>
					<p>
					After that the executable file should open without any issue.
					</p>
					<hr>
					<h4 class="card-title">Mac: Failed to create the Java Virtual Machine</h4>
					<div class="text-center">
						<img src="/images/troubleshooting/mac_vm_error.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					<p>
					If this error appears when executing Wollok, make sure you configured ######.
					<br />
					If this error persists, follow <a href="https://www.pushing-pixels.org/2020/06/19/fixing-the-failed-to-create-the-java-virtual-machine-error-on-eclipse-startup-on-a-mac.html" target="_blank">this instructions</a>.
					</p>
					<hr>
					<h4 class="card-title">Mac: Executing unsigned application</h4>
					<p>
						Mac OS X implements a new security system only allowing the execution of application developed by registered developers. 
						Also the applications should be distributed by Apple validated channels, as App Store. As Wollok development team is 
						not registered an exception should be created in order to run Wollok.
					</p>
					<div class="text-center">
						<img src="/images/troubleshooting/aplicacionNoFirmada.png" class="hoverable img-fluid z-depth-1"/>
					</div>
					<br>
					<p>
						More details of how to configure the exception to run Wollok is available in the
						<a href="https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac" target="_blank">Apple support site</a>.
					</p>
					<hr>
					<h4 class="card-title">Mac: Translocation App Problem</h4>
					<p>
						Version 10.12 of OS X introduces a new security system called Gatekeeper. This new system has as objective
						avoiding the undesired execution of programs. So that, the downloaded applications cannot be executed from the
						Download folder, or any other folder where the browser originally put it. To be able to execute the application,
						it should be moved to another folder. This operation should be performed using Finder. Once it has done, Wollok
						is able to execute normally.							
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
				<a data-toggle="collapse" href="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
					<h4 class="card-header mdb-color lighten-2 white-text" id="configuraciones-extras">
						Custom configurations
						<i class="fa fa-angle-down rotate-icon"></i>
					</h4>
				</a>
			</div>
			<!-- Card body -->
			<div id="collapseFour" class="collapse show" role="tabpanel" aria-labelledby="headingFour">
				<div class="card-body grey lighten-5 transparent">
						<h4 class="card-title" id="apuntando-la-jdk-correcta-en-tu-entorno">Pointing to the right JDK in your environment</h4>
						<p>
						Sometimes, your Operating System is pointing to an old java installation. 
						You have to check JAVA_HOME environment variable (and PATH variable too), in a command line tool:
						<pre>
<span class="kd">$ </span>/usr/libexec/java_home -vm<span class="c"> // Linux & Mac</span>
<span class="kd">> </span>echo %JAVA_HOME%<span class="c"> // Windows cmd</span>
<span class="kd">> </span>echo $env:JAVA_HOME<span class="c"> // Windows PowerShell</span></pre>
						You can change to a JDK 1.8 installation, following 
						<a href="https://docs.oracle.com/cd/E21454_01/html/821-2532/inst_cli_jdk_javahome_t.html" target="_blank">this instructions.</a>
						</p>
						<hr>
						<h4 class="card-title" id="apuntando-la-jdk-correcta-en-ini-de-wollok">Pointing to the right JDK in Wollok</h4>
						<p>
						First, we need to know where is the Java executable located, which can be done following the <a href="#apuntando-la-jdk-correcta-en-tu-entorno">previous step</a>.
						</p>
						<p>
							<b>Linux/Mac OS</b>
							<br/>
							First, you need to right click on the app and click on <em>"Show Package Contents"</em>. There, inside the <code>Contents</code> folder, open the file <code>Info.plist</code> where there is a commented section with an example of how to point to the previously installed JDK 1.8. To know where to point it to, check the <a href="#apuntando-la-jdk-correcta-en-tu-entorno">pointing to the right JDK section</a>.
						</p>
						<b>Be careful: In this step, at the end of the JDK path, you need to add <code>/bin/java</code></b>. The <code>Info.plist</code> file should look like this:
						<img src="/images/troubleshooting/info-plist-en.svg" class="img-fluid"/>
						<p>
							<b>Windows</b>
							<br/>
							In the Wollok installation root folder, you can open a text editor for wollok.ini file. 
							Then you can point to a specific JDK 1.8 with -vm option:
						</p>
						<pre>
<span class="kd">-vm</span>
C:\Program Files\Eclipse Adoptium\jdk8u345-b01\bin\javaw.exe</pre>
						<p><b>Very important:</b> don't add any space or ENTER character in .ini file,
							otherwise future Wollok updates won't work (there will be a parse error)</p>
						<hr>
						<h4 id="configuracion-de-jdk-desde-eclipse" class="card-title">Eclipse JDK Configuration</h4>
						<p>
							Check this configuration: Windows > Preferences > java > Installed JREs. If you see no JDK at all, 
							or a non-1.8 JDK, you can change it this way:
							<ol>
								<li>Add > Standard VM > next</li>
								<li>Choose a JDK 1.8 installation directory. Eg: /Library/Java/JavaVirtualMachines/jdk1.8.0_91.jdk/Contents/Home</li>
							</ol>
						</p>
						<hr>
						<h4 class="card-title">English language setting</h4>
						<p>
							If you would like to run Wollok IDE in the english version, it is necessary to add the following instruction
							<b>as a new line at the end</b> of wollok.ini, located in same path where you downloaded Wollok:
							<pre><span class="kd">-D</span>user.language=en</pre>
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
		<h1>&nbsp;&nbsp;What should I do if I find a bug?</h1>
	<br/>
</div>

Wollok is a continuous evolving software, so it is likely you find problems, or enhancements to propose. Please feel free to report it in our [Issue Tracker](https://github.com/uqbar-project/wollok/issues). 

Some tips before you open a new issue:

* Most important thing is to put an intention-revealing title, explaining the problem and the steps to reproduce it. Without this is nearly impossible for us to solve errors.
* Write your issue in your favorite language, whichever it is.
* Before creating a new issue, take a time to see if it was already reported by someone else
* Labels also help to filter issues:
	* *Show stopper*: this issue should get maximum priority since it prevents people from working
	* *Bug*: a system error (nevertheless you can work)
	* *Usability*: when application has a confusing behavior for users.
	As Wollok is a didactic tool, consistency is a very important attribute.
	* *Enhancement*: if you want to request a new feature
	* *Nice to have*: for wished (but not prioritary) requirements
	* *Question*: when you doubt whether certain situation could be a bug or not.
