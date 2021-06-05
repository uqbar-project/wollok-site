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
			<div class="mask flex-center waves-effect waves-light">
			</div>
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
					(o bien <a href="#actualizar-wollok" class="wollokLink">or update it</a> or <a href="#actualizar-desde-eclipse" class="wollokLink">add it as a plugin to an existing Eclipse installation</a>)
				</li>
				<li>
					Have you any problem? <a href="#troubleshooting" class="wollokLink">There is a quick troubleshooting</a>
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
					<p>You need to install previously a Java Virtual Machine 1.8. 
					</p>
					<a class="btn btn-primary" href="https://adoptopenjdk.net/">Download it!</a>
					<hr>
					<h4><span class="badge badge-pill red darken-3">FAQ</span></h4>
					<ul> 
						<li>Don't use Java Updates tools. Use above link.</li>
						<li>It has to be <b>1.8</b> version (neither 1.7 nor 1.9, at least for now)</li>
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
					<p>As Wollok is an Eclipse-based platform, you install Wollok IDE by uncompressing Zip / Tar.Gz file (depending on your OS platform):
					</p>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v2.0.2/wollok-win32.win32.x86_64.zip"><i class="fa fa-windows" aria-hidden="true"></i>&nbsp; Win 32</a>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v2.0.2/wollok-linux.gtk.x86_64.zip"><i class="fa fa-linux" aria-hidden="true"></i>&nbsp;Linux 32</a>
					<a class="btn btn-primary" href="https://github.com/uqbar-project/wollok/releases/download/v2.0.2/wollok-macosx.cocoa.x86_64.zip"><i class="fa fa-apple" aria-hidden="true"></i>&nbsp;OS X</a>
					<hr>
					<h4 class="card-title" id="actualizar-wollok">Updates</h4>
					<p>
						As soon as a new version is available, IDE will ask you to update your environment:
					</p>
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
					Click Ok, restart Wollok environment and then you will have last upgrade correctly installed.
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
							<a href="http://update.uqbar.org/wollok/stable">http://update.uqbar.org/wollok/stable</a> 
							last stable version (<b>recommended</b> for students)
						</li>
						<li>
							<a href="http://update.uqbar.org/wollok/dev">http://update.uqbar.org/wollok/dev</a> 
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
						<li>you invoke <i>"Java Updates"</i> application. 
						This is a <a href="http://stackoverflow.com/questions/27019786/eclipse-java-was-started-but-returned-error-code-13">known problem</a>. 
						In this case, solution should be a) uninstall current JDK, 
						b) install new JDK as shown in this page, and c) start Wollok normally.</li>
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
					<br>
					<hr>
					<h4 class="card-title">Warning Message Install Java 6 for Mac users</h4>
					<p>
						In Mac operating systems there is a weird message advising us to install Java 6
						<div class="text-center">
							<img src="/images/troubleshooting/java6.png" class="hoverable img-fluid z-depth-1"/>
						</div>
						<br>
						Well, that’s not true, you have to install JDK 1.8. We will correct it soon.
					</p>
					<hr>
					<h4 class="card-title">Executing non signed application (Mac)</h4>
					<p>
					Mac OS X implements a new security system only allowing the execution of application developed by registered developers. 
					Also the applications should be distributed by Apple validated channels, as App Store. As Wollok development team is 
					not registered an exception should be created in order to run Wollok.	
						<br>
						<div class="text-center">
							<img src="/images/troubleshooting/aplicacionNoFirmada.png" class="hoverable img-fluid z-depth-1"/>
						</div>
						<br>
						More details of how to configure the exception to run Wollok is available in  
						<a href="https://support.apple.com/kb/PH21769?locale=en_EN&viewlocale=en_EN">Apple support site</a>.
					</p>
					<hr>
					<h4 class="card-title">App Translocation Problem (Mac)</h4>
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
							<div class="language-javascript">	
									<div>
										<pre>
<span class="kd">$</span><span class="nx"> env | grep JAVA</span><span class="c"> // Linux & Mac</span>
<span class="kd">></span><span class="nx"> SET JAVA_HOME</span><span class="c"> // Windows</span></pre>
									</div>
								</div>
								You can change to a JDK 1.8 installation, following 
							<a href="https://docs.oracle.com/cd/E21454_01/html/821-2532/inst_cli_jdk_javahome_t.html">this instructions.</a>
						</p>
						<hr>
						<h4 class="card-title" id="apuntando-la-jdk-correcta-en-ini-de-wollok">Pointing to the right JDK in Wollok ini file</h4>
						<p>
							In Wollok installation root folder, you can open a text editor for wollok.ini file. 
							Then you can point to a specific JDK 1.8 with -vm option:
						</p>
						<div class="language-javascript">
							<div>
								<pre>
<span class="kd">-vm</span>
<span class="nx">D:\java8\bin\javaw.exe</span></pre>
							</div>
						</div>
						<p><b>Very important:</b> don't add any space or ENTER character in .ini file,
							otherwise future Wollok updates won't work (there will be a parse error)</p>
						<hr>
						<h4 id="apuntando-la-jdk-correcta-en-ini-de-wollok" class="card-title">Eclipse JDK Configuration</h4>
						<p>
							Check this configuration: Windows > Preferences > java > Installed JREs. If you see no JDK at all, 
							or a non-1.8 JDK, you can change it this way:
							<ul>
								<li>Add  > Standard VM > next</li>
								<li>Choose a JDK 1.8 installation directory. Eg: /Library/Java/JavaVirtualMachines/jdk1.8.0_91.jdk/Contents/Home</li>
							</ul>
						</p>
						<hr>
						<h4 class="card-title">English language setting</h4>
						<p>
							If you would like to run Wollok IDE in the english version, it is necessary to add the following instruction
							<b>as a new line at the end</b> of wollok.ini, located in same path where you downloaded Wollok:

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
		<h1>&nbsp;&nbsp;What should I do if I find a bug?</h1>
	<br/>
</div>

Wollok is a continuous evolving software, so it is likely you find problems, or enhancements to propose. Please feel free to report it in our  [Issue Tracker](https://github.com/uqbar-project/wollok/issues). 

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

