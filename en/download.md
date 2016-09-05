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

You need to install previously a Java Virtual Machine 1.8. [Click here to install it](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

* It must be Java **1.8** (not 1.7<)
* It has to be a **JDK** (Java Development Kit), with javac compiler program. A JRE (Java Runtime Environment) won't work.

As Wollok is an Eclipse-based platform, you install Wollok IDE uncompressing Zip / Tar.Gz file (depending on your OS platform):

* Linux: [32](http://download.uqbar.org/wollok/products/stable/wollok-linux.gtk.x86.zip) / [64 bits](http://download.uqbar.org/wollok/products/stable/wollok-linux.gtk.x86_64.zip)
* Mac [32](http://download.uqbar.org/wollok/products/stable/wollok-macosx.cocoa.x86.zip) / [64 bits](http://download.uqbar.org/wollok/products/stable/wollok-macosx.cocoa.x86_64.zip)
* Windows [32](http://download.uqbar.org/wollok/products/stable/wollok-win32.win32.x86.zip) / [64 bits](http://download.uqbar.org/wollok/products/stable/wollok-win32.win32.x86_64.zip)

<hr> 

# Troubleshooting

If your installed IDE doesn't allow you to create a Wollok project / Wollok class, maybe your Wollok environment is pointing to a non-Java 1.8 version, or just a JRE, so it can't compile wollok sources.

## JAVA_HOME environment variable

Sometimes, your Operating System is pointing to an old java installation. You have to check JAVA_HOME environment variable (and PATH variable too), in a command line tool:

```bash
$ env | grep JAVA   // Linux & Mac

> SET JAVA_HOME     // Windows
```

You can change to a JDK 1.8 installation, following [this instructions](https://docs.oracle.com/cd/E21454_01/html/821-2532/inst_cli_jdk_javahome_t.html)


## Eclipse JDK Configuration

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

