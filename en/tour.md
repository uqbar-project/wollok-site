---
layout: en/hyde
title: 'Tour'
weight: 25
lang: 'es'
icon: 'bus'
--- 

<div class="container">
    <h1>Take the Wollok IDE tour!</h1>
    <br>
</div>

These are the main tools of Wollok Integrated Development Environment.

<!-- Nav tabs -->
<div class="card">
    <ul class="nav nav-tabs nav-justified" role="tablist">
        <li class="nav-item">
            <a class="nav-link active wollokNavLink" data-toggle="tab" href="#darkMode" role="tab"><i class="fa fa-adjust"></i> Dark Mode</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#editor" role="tab"><i class="fa fa-edit"></i> Editor</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#validador" role="tab"><i class="fa fa-check-circle"></i> Validator</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#quickFix" role="tab"><i class="fa fa-medkit"></i> Quick Fix</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#formatter" role="tab"><i class="fa fa-indent"></i> Formatter</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#consola" role="tab"><i class="fa fa-toggle-right"></i> Console</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#testRunner" role="tab"><i class="fa fa-gear"></i> Test runner</a>
        </li>
        <li class="nav-item">
            <a class="nav-link wollokNavLink" data-toggle="tab" href="#diagramas" role="tab"><i class="fa fa-sitemap"></i> Diagrams</a>
        </li>
    </ul>
    <!-- Tab panels -->
    <div class="tab-content container">
        <!-- ***************************** DARK MODE ****************************************-->
        <!--Panel 0-->
        <div class="tab-pane fade in show active" id="darkMode" role="tabpanel">
            <br/>
            <p>
            Wollok has a dark mode theme. You can download <a href="/config/wollokDarkMode.epf">this config file</a> and import it in your local environment:
            </p>
            <div class="container text-center">
                <img src="/images/tour/darkMode1.gif" class="img-fluid z-depth-1"/>
            </div>
            <br/>
            <p>
            After importing these preferences, you can restart Wollok and <em>voilà</em> :
            </p>
            <div class="container text-center">
                <img src="/images/tour/darkMode2.gif" class="img-fluid z-depth-1"/>
            </div>
            <br>
        </div>
        <!--/.Panel 0-->
        <!--Panel 1-->
        <div class="tab-pane fade in show" id="editor" role="tabpanel">
            <br>
            <p>
            Wollok editor comes not only with syntax colouring but also with autocompletion. 
            </p>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                        <img src="/images/tour/editor1_1.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            We can create 'pepita', a bird with energy and fly capabilities. We activate 
                            syntactic elements autocomplete by pressing <b>Ctrl + Space</b> keys.
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                    <img src="/images/tour/editor2.gif" class="img-fluid z-depth-1" alt="Responsive image">
                        <figcaption class="figure-caption">
                            <br>
                            There are also more complex autocomplete actions, such as control structures <em>(if)</em> or class creation
                        </figcaption>
                    </figure>
                </div>
            </div>
            <p>
            Here we use autocomplete to send a message to a well-known object:
            </p>
            <div class="container text-center">
                <img src="/images/tour/editor3_1.gif" class="img-fluid z-depth-1"/>
            </div>
            <br/>
            <p>
            Getting used to editor is essential to feel comfortable in your everyday work. That's why we want to 
            tell you most common <em>shortcuts</em> of Wollok's environment.
            </p>
            <hr>
            <h4>Search tools...</h4>
            <div class="row">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/editor4.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Ctrl + Shift + R: looks for a resource / file, filtering by name or extension. 
                            <br>
                            Ctrl + Shift + F3: looks for any custom or library element, such as Date, Set o String.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                        <img src="/images/tour/editor5_1.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Ctrl + O looks inside a file all kind of definitions: objects, classes, variables or methods.
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-6 mb-3">
                    <figure class="figure">
                        <img src="/images/tour/editor6.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Several uses of shortcuts: deleting or moving lines, add comments, etc.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <div class="container">
                <h4>Useful shortcuts guide</h4>
                <div class="card">
                    <div class="card-body">
                        <!--Table-->
                        <table class="table table-striped">
                            <!--Table head-->
                            <thead class="mdb-color lighten-4">
                                <tr>
                                    <th><b>Keys</b></th>
                                    <th><b>What do they do</b></th>
                                </tr>
                            </thead>
                            <!--Table head-->
                            <!--Table body-->
                            <tbody>
                                <tr>
                                    <td>Ctrl + Space</td>
                                    <td>Autocomplete</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + 1</td>
                                    <td>Contextual help. Quick Fix.</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift + F3</td>
                                    <td>Looks for an element (object, class, etc.) in whole environment</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + O</td>
                                    <td>Looks for a definition inside a file</td>
                                </tr>
                                <tr>
                                    <td>F3</td>
                                    <td>Goes to the definition of a reference</td>
                                </tr>
                                <tr>
                                    <td>Alt + Arrow Up | Arrow Down</td>
                                    <td>Moves the whole line up or down</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + D</td>
                                    <td>Deletes current line</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift + C</td>
                                    <td>Adds a comment to current line</td>
                                </tr>
                                <tr>
                                    <td>Alt + Shift + R</td>
                                    <td>Renames a reference</td>
                                </tr>
                                <tr>
                                    <td>F2</td>
                                    <td>Renames a file</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + S</td>
                                    <td>Saves a file</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift + S</td>
                                    <td>Saves all modified files</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + M</td>
                                    <td>Maximizes current window</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift +/-</td>
                                    <td>Window Zoom in / out (font size increases / decreases)</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + PageDown / PageUp</td>
                                    <td>Goes next / previous files of editor</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Shift + L</td>
                                    <td>Shows list of active shortcuts</td>
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
        <!-- ***************************** VALIDATORS ****************************************-->
        <div class="tab-pane fade" id="validador" role="tabpanel">
            <br>
            <p>
            Wollok's validator is fully integrated with editor. 
            It has an early error detection that helps developers to build better and robust software. 
            </p>
            <p>
            Invalid constructions (like constuctors in objects or tests, invalid references, missing methods, 
            among others), and also variables and constants uses and initialization are some of this static checks.
            But Wollok enforces good programming practices, avoiding "if (expression) return true else false" bad 
            smell, overriding methods just to call super, define constructors without initializating constants 
            references, define a cyclic hierarchy of classes, etc.
            </p>
            <p>
            And most importantly, every year we review and add new validations according to the work of our
            students, so written code gives feedback to the language. 
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/validator1Es2.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            This is how the validator works. Locating the mouse over left border, you can see warning and
                            error messages. In Problems view we can see all projects issues.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <h4>How to show Problems view?</h4>
            <p>
            To activate it, go menu Window > Show View > Other... and search "Problems". There you will
            see every kind of problem (error, warning, information).
            </p>
            <hr>
            <h4>Can I execute a program if it has errors or warning? </h4>
            <p>
            Short answer: yes, you can. In case of warnings, they may be just a bad smell indication or the
            origin of a future problem. In case of an error, you have to confirm your execution, because this
            error could lead to undesired behavior of your program, test or REPL console.
            </p>
            <hr>
            <h4>Pending tasks</h4>
            <p>
            If you would like to record reminders to follow up something later, add it to the Tasks view using
            a comment with a TODO or FIXME keyword. When you open Tasks view (Window > Show view > Other ... and search for
            Tasks), you'll have the full list of pending tasks. Double click on each element will lead you directly to the code. 
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/todo.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Writing down in code TODO and FIXME tags will add a task in Tasks View.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <p>
            If you want to configure new keywords for tasks view, go menu Window > Preferences > Task tags and add or 
            update existing tags.
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/tasks.png" class="img-fluid z-depth-1">
                    </figure>
                </div>
            </div>
        </div>
        <!-- ***************************** FIXES ****************************************-->
        <div class="tab-pane fade" id="quickFix" role="tabpanel">
            <br>
            <p>
            Error detection is our first step. Wollok has common solutions to frequent problems.
            You just have to point your mouse over red line in code and press <b>Ctrl + 1</b>, or 
            let the contextual menu appear. All feasible options to fix this conflict will be shown.
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/quickFixes.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            In this example we create a wko / class from a test, and then we add new methods to it. 
                            <br>
                            This can be done from any WKO, class or mixin.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <p>
            Create a class, a WKO, add methods, local or instance references, parameters, delete redundant 
            expressions, correct or adapt constructor calls, are only one of many possibilities you have,
            to automate tedious implementation tasks and let you focus on design and modeling activities.
            </p>
        </div>
        <!-- ***************************** QUICK FIXES ****************************************-->
        <div class="tab-pane fade" id="formatter" role="tabpanel">
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/formatter3.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Basic formatting of an element.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <p>
            Wollok has a formatter based on its syntax, so code will be stylized and homogeneous, something
            very useful while working in a programming team. You can use it by pressing <b>Ctrl + Shift + F</b> keys.
            </p>
            <p>
            There is another alternative, that is to enable this quick formatting on file save. For this, we need to go
            to Settings > Java > Editor > Save Actions; enable the actions on save and all the other actions we want performed.
            </p>
            <ul>
                <li>
                    <b>Format source code:</b>: This is the same as pressing Ctrl + Shift + F. Chosing the first option below it will format the entire
                    code, the second only the sections we edited.
                </li>
                <li>
                    <b>Organize imports:</b> Orders imports according to the Wollok IDE preferences
                </li>
                <li>
                    <b>Additional Actions:</b> Here we can specify any extra actions we want to run on save
                </li>
            </ul>
            <div class="container text-center">
                <img src="/images/tour/save-actions.png" class="img-fluid z-depth-1">
            </div>
        </div>
        <!-- ***************************** CONSOLE ****************************************-->
        <div class="tab-pane fade" id="consola" role="tabpanel">
            <br>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/consoleIntroEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Executing a .wlk file in REPL console. 
                            <br>
                            In image you can see console warns us if execution context is synchronized with last version
                            of wlk file.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <p>
            One of the first tools we use to test our definitions is REPL console. REPL stands for  
            <b>R</b>ead, <b>E</b>valuate, <b>P</b>rint, <b>L</b>oop) acronym, so user can interact with Wollok interpreter
            easily. 
            </p>
            <p>
            It has some limitations: it has no autocomplete options, and you must restart console every time you make a 
            change in a file. Nevertheless it is a good start to know how objects respond to messages.
            </p>
            <p>
            If you want to use it, right click over a .wlk file and choose "Run in REPL console" option. You can also
            use "Play" button in toolbar.
            </p>
            <div class="container text-center">
                <img src="/images/tour/runConsole.png" class="img-fluid z-depth-1">
            </div>
            <br />
            <p>
            You can send messages to any object, create constant or variable references, test how numbers, dates and
            other Wollok library objects work, etc. You just have to write a line and press Enter. If you press Arrow Up
            key you will get last line written, and clipboard facilities are also provided. All errors are directly linked
            to editor.
            </p>
            <div class="container text-center">
                <img src="/images/tour/consoleErrorsStackTrace.gif" class="img-fluid z-depth-1">
            </div>
            <br/>
            <p>
            Reminder: every time you change a .wlk file, you must restart console to consider this updates. 
            Console's toolbar shows synchronization status of .wlk file, as well as a warning message anytime you change a file. You can either restart repeating last session commands or just restart a fresh session.
            </p>
            <div class="container text-center">
                <img src="/images/tour/consoleRestart.gif" class="img-fluid z-depth-1">
            </div>
            <hr>
            <h4>Exporting console session to a test</h4>
            <p>
            We can export a console session into a test file, by pressing a specific button in toolbar, as showed below:
            </p>
            <div class="container text-center">
                <img src="/images/tour/consoleExportSessionEs.gif" class="img-fluid z-depth-1">
            </div>
            <hr>
            <h4>Executing a session without a file</h4>
            <p>
            You can execute REPL console without selecting a file at all. Just press this button in toolbar.
            </p>
            <div class="container text-center">
                <img src="/images/tour/runREPLConsoleWithoutFile.png" class="img-fluid z-depth-1">
            </div>
            <hr>
            <h4>Importing files directly from REPL console</h4>
            <p>
            You can manually import definitions from other files. This option will not work if you are running a REPL session without any associated wlk file, and unfortunately you cannot override existing definitions: in that case you must use restart buttons from the toolbar.
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/consoleImportEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Manually importing files
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <!-- ***************************** TEST RUNNER ****************************************-->
        <div class="tab-pane fade" id="testRunner" role="tabpanel">
            <br>
            <p>
            Interactive console is useful at first beginning, but soon we discover that test
            automation is a need. Wollok Test Runner is the more suitable tool to validate the software we build.
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/testRunnerIntroEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Executing a test suite: stack trace leads to the code in editor, tests execution is an iterative and incremental process.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <p>
            If you want to get deep into unit testing we recommend you to read 
             <a href="https://docs.google.com/document/d/1caDE_mlP1QMfzyVpyvh-tKshjAeYLXBkXDYrTX5zFUI/edit#">this article</a> (in spanish). 
            </p>
            <hr>
            <h4>Show only errors or failures</h4>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/testRunnerFilterErrorsEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            If you have several tests, you can filter only those who failed or errored.
                        </figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <h4>Executing all project or folder tests</h4>
            <p>
            You can execute all tests of a certain project, or all tests of .wtest files grouped in a folder, 
            from contextual menu in Package Explorer:
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/testRunnerRunningSeveralFilesEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Executing all project tests
                        </figcaption>
                    </figure>
                </div>
            </div>
            <hr>
            <h4>Execute a single test in a file</h4>
            <p>
            Writing "only" before your test allows to run a single test within a file. It will also allow you to integrate with dynamic diagram, as show below:
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/testRunnerOnlyEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Executing a single file.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <!-- ***************************** DIAGRAMS ****************************************-->
        <div class="tab-pane fade" id="diagramas" role="tabpanel">
            <br>
            <h4>Static Diagrams</h4>
            <p>
            Wollok has also design communication tools, like the static diagram, fully integrated with editor.
            As soon as you write in editor, static diagram is updated and saved into the project.
            We can configure which variables, methods and elements (WKO, classes, mixins) must appear.
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/staticDiagramEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            A small static diagram demo
                        </figcaption>
                    </figure>
                </div>
            </div>
            <p>
            If you want to know all static diagram features you can read
            <a href="https://docs.google.com/document/d/1K3A5kSZHZH7QmPHAQ-Hwt_t_5OKweeeaqF670DLS9Y0/edit">this article</a> (in spanish).
            </p>
            <hr/>
            <h4>Dynamic Diagrams</h4>
            <p>
            Wollok has a <b>Dynamic Diagram</b> which is integrated with REPL console. Here you can see all objects and references in Wollok environment.
            </p>
            <div class="row text-center">
                <div class="col-md-12 mb-6">
                    <figure class="figure">
                        <img src="/images/tour/dynamicDiagramEs.gif" class="img-fluid z-depth-1">
                        <figcaption class="figure-caption">
                            <br>
                            Small demo showing the dynamic diagram
                        </figcaption>
                    </figure>
                </div>
            </div>
            <p>
            Custom objects are blue-colored, numbers, booleans, strings, dates and pairs are appear in green, crimson is the color for collections (rectangle-shaped) and pink is the color for the remaining objects.
            </p>
        </div>
    </div>
</div>
