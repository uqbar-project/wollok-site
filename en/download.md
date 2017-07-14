---
layout: en/hyde
title: 'Download'
weight: 20
lang: 'en'
---

<div class="slideLeft">
	<img src="/images/Wollok_Installation.jpg" width="100%"/>
</div>

# IDE

## Prerequisite : Install JDK 1.8

You need to install previously a Java Virtual Machine 1.8. [Click here to install it](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

* It must be Java **1.8** (not 1.7<)
* It has to be a **JDK** (Java Development Kit), with javac compiler program. A JRE (Java Runtime Environment) won't work.
* If you are already using Eclipse with Java 1.8, this step is not necessary.

> **IMPORTANT**: Don't install Java with Java Updates tool, use above link instead.

## Uncompressing Wollok environment

As Wollok is an Eclipse-based platform, you install Wollok IDE uncompressing Zip / Tar.Gz file (depending on your OS platform):

* Linux: [32](http://download.uqbar.org/wollok/products/stable/wollok-linux.gtk.x86.zip) / [64 bits](http://download.uqbar.org/wollok/products/stable/wollok-linux.gtk.x86_64.zip)
* Mac [64 bits](http://download.uqbar.org/wollok/products/stable/wollok-macosx.cocoa.x86_64.zip)
* Windows [32](http://download.uqbar.org/wollok/products/stable/wollok-win32.win32.x86.zip) / [64 bits](http://download.uqbar.org/wollok/products/stable/wollok-win32.win32.x86_64.zip)


<hr> 

# Troubleshooting

* [IDE shows splash screen but does not start](#ide-shows-splash-screen-but-does-not-start)
* [Cannot create a Wollok project](#cannot-create-a-wollok-project)
* [IDE does not start (exit code 13)](#ide-does-not-start-with-exit-code-13)
* [Missing dependencies to Wollok plugins (org.uqbar.project.wollok.launch) while executing a file](#missing-dependencies-to-wollok-plugins-while-executing-a-file)
* [Warning message: Install Java 6 for Mac users](#warning-message-install-java-6-for-mac-users)
* [JDK Checks](#jdk-checks)

<hr> 

## IDE shows splash screen but does not start ##

If splash screen is shown but IDE doesn't start, maybe you are not pointing to the right JDK, so check this out in your [environment](#pointing-to-the-right-jdk-in-your-environment) and [Wollok ini file](#pointing-to-the-right-jdk-in-wollok-ini-file).

## Cannot create a Wollok project ##

If your installed IDE doesn't allow you to create a Wollok project / Wollok class, maybe your Wollok environment is pointing to a non-Java 1.8 version, or just a JRE, so it can't compile wollok sources. Once again, check JDK configuration in your [environment](#pointing-to-the-right-jdk-in-your-environment) and [Wollok ini file](#pointing-to-the-right-jdk-in-wollok-ini-file).


## IDE does not start with exit code 13 ##
If trying to start Wollok IDE you get an error like this:

<div class="slide">
	<img src="/images/troubleshooting/exit-code-13.png"/>
</div>

problem could be because

* you are pointing to an unexistent JDK in wollok.ini (check -vm parameter)
* you invoke "Java Updates" application. This is a [known problem](http://stackoverflow.com/questions/27019786/eclipse-java-was-started-but-returned-error-code-13). In this case, solution should be a) uninstall current JDK, b) install new JDK as show in this page, and c) start Wollok normally.


## Missing dependencies to Wollok plugins while executing a file ##

<div class="slide">
	<img src="/images/troubleshooting/wollok-launch.png" style="width: 95%"/>
</div>

It is certainly a non-descriptive message (we'll work on it). Problem is you are trying to execute a test, program or Wollok file that is not located in a source folder of your Wollok project. By default a standard Wollok project has a "src" source folder. If you create a file outside this folder, it won't be recognized as an executable one (this could also happen if you checkout a SVN project pointing to root repository instead of trunk folder). To solve this you have to move the conflicting file to src or any other source folder. 


## Warning Message Install Java 6 for Mac users ##
In Mac operating systems there is a weird message advising us to install Java 6

<div class="slide">
	<img src="/images/troubleshooting/java6.png"/>
</div>

Well, that's not true, you have to install JDK 1.8. We will correct it soon.

<hr>

## JDK checks

### Pointing to the right JDK in your environment ###

Sometimes, your Operating System is pointing to an old java installation. You have to check JAVA_HOME environment variable (and PATH variable too), in a command line tool:

```bash
$ env | grep JAVA   // Linux & Mac

> SET JAVA_HOME     // Windows
```

You can change to a JDK 1.8 installation, following [this instructions](https://docs.oracle.com/cd/E21454_01/html/821-2532/inst_cli_jdk_javahome_t.html)

### Pointing to the right JDK in Wollok ini file ###

Ingresá al directorio de instalación de Wollok y abrir en un editor de texto el archivo wollok.ini. Entonces especificá el directorio de la JDK 1.8 mediante el parámetro -vm, por ejemplo:

```
-vm
D:\java8\bin\javaw.exe
```

Es importante que no agregues un espacio ni un enter de más en el .ini, porque de lo contrario no van a funcionar los updates de versiones posteriores de Wollok (da un error al parsear el .ini)


### Eclipse JDK Configuration ###

Check this configuration: Windows > Preferences > java > Installed JREs. If you see no JDK at all, or a non-1.8 JDK, you can change it this way:

* Add  > Standard VM > next 
* Choose a JDK 1.8 installation directory. Eg: /Library/Java/JavaVirtualMachines/jdk1.8.0_91.jdk/Contents/Home


<hr> 

# Update Site Installation

This option is for advanced users who already have an Eclipse installation and want to add Wollok plugin. **This step is not needed if you downloaded and installed Wollok compressed files successfully**.

Update Site requires a JDT Eclipse Installation (since it is a Java-based platform). In order to add Software Update Site please follow this steps:

* [http://update.uqbar.org/wollok/stable](http://update.uqbar.org/wollok/stable) : here is the last stable version (**recommended** for students).
* [http://update.uqbar.org/wollok/dev](http://update.uqbar.org/wollok/dev) : if you want to get last working process (it may have errors until version gets stable)

<img src="/images/screencasts/Wollok-UpdateSite.gif" width="100%"/>

<hr> 

# English settings

If you would like to run Wollok IDE in the english version, it is necessary to add the following instruction as a **new line at the end** of `wollok.ini`, located in the same path where you downloaded Wollok:

```bash
-Duser.language=en
```

<hr>

<div>
<img src="/images/bug.png" height="64" width="64" align="left"/>
<h1>&nbsp;&nbsp;What should I do if I find a bug?</h1>
</div><br>
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

