DAGitty is a browser-based environment for creating, editing, and analyzing causal diagrams (also known as directed acyclic graphs or causal Bayesian networks). The focus is on the use of causal diagrams for minimizing bias in empirical studies in epidemiology and other disciplines. For background information, see the "[learn](https://www.dagitty.net/learn/index.html)" page.

[![](DAGitty%20-%20drawing%20and%20analyzing%20causal%20diagrams%20(DAGs)/Rlogo.png)](https://github.com/jtextor/dagitty)  
The R package "dagitty" is available on [CRAN](https://cran.r-project.org/web/packages/dagitty/index.html) or [github](https://github.com/jtextor/dagitty).

DAGitty is developed and maintained by [Johannes Textor](http://johannes-textor.name/) ([Institute for Computing and Information Sciences](https://ru.nl/icis), [Radboud University](https://www.ru.nl/), and Medical BioSciences department, [Radboudumc](https://www.radboudumc.nl/), Nijmegen, The Netherlands).

Many algorithms implemented in DAGitty were developed in close collaboration with [Maciej Liśkiewicz](https://www.tcs.uni-luebeck.de/en/mitarbeiter/liskiewi/) and [Benito van der Zander](https://www.tcs.uni-luebeck.de/en/mitarbeiter/vanderzander/), University of Lübeck, Germany (see literature references below).

DAGitty development happens on [github](https://github.com/jtextor/dagitty). You can download all source code from there and also get involved.

## How can I get help?

If you encounter any problems using DAGitty, or would like to have a certain feature implemented, write to me on [Mastodon](https://mastodon.social/@johannes_textor), post on [github](https://github.com/jtextor/dagitty) or write to _"johannes {dot} textor {at} gmx {dot} de"._ Your feedback and bug reports are very welcome and contribute to making DAGitty a better experience for everyone. Past contributors are acknowledged in the [manual](https://www.dagitty.net/manual-3.x.pdf).

## Is it free?

Because the main purpose of DAGitty is facilitating the use of causal models in empirical studies, it is and will always be Free software (both "free as in beer" and "free as in speech"). You can copy, redistribute, and modify it under the terms of the [GNU general public license](http://www.gnu.org/licenses/gpl.html). Enjoy!

DAGitty development has been sponsored by the Leeds Institute for Data Analytics and by the Deutsche Forschungsgemeinschaft (DFG), grant [273587939](http://gepris.dfg.de/gepris/projekt/273587939).  

![](DAGitty%20-%20drawing%20and%20analyzing%20causal%20diagrams%20(DAGs)/Dfg_logo_schriftzug_blau.jpg)

## How can I cite DAGitty?

If you use DAGitty in your scientific work, please consider citing us:

Johannes Textor, Benito van der Zander, Mark K. Gilthorpe, Maciej Liskiewicz, George T.H. Ellison.  
[Robust causal inference using directed acyclic graphs: the R package 'dagitty'.](http://dx.doi.org/10.1093/ije/dyw341)  
_International Journal of Epidemiology_ 45(6):1887-1894, 2016.  
[PDF postprint](http://johannes-textor.name/papers/2017-ije.pdf)

## How can I learn more about how DAGitty works?

The algorithms used in DAGitty are described in more depth the following papers:

Johannes Textor, Maciej Liśkiewicz.  
[Adjustment Criteria in Causal Diagrams: An Algorithmic Perspective.](http://www.tcs.uni-luebeck.de/downloads/papers/2011/Textor_Liskiewicz_Adjustment_Criteria_in_Causal_Diagrams_An_Algorithmic_Perspective.pdf)  
In _Proceedings of the 27th Conference on Uncertainty in Artificial Intelligence (UAI 2011)_, pp. 681-688. AUAI press, 2011.

Benito van der Zander, Maciej Liśkiewicz, Johannes Textor.  
[Constructing Separators and Adjustment Sets in Ancestral Graphs.](http://auai.org/uai2014/proceedings/individuals/286.pdf)  
In _Proceedings of the 30th Conference on Uncertainty in Artificial Intelligence (UAI 2014)_, pp. 907-916. AUAI Press, 2014.

Benito van der Zander, Johannes Textor, Maciej Liśkiewicz.  
[Efficiently Finding Conditional Instruments for Causal Inference.](http://ijcai.org/papers15/Papers/IJCAI15-457.pdf)  
In _Proceedings of the 24th International Joint Conference on Artificial Intelligence (IJCAI 2015)_, pp. 3243-3249. AAAI Press, 2015.

Benito van der Zander, Maciej Liśkiewicz.  
[Separators and Adjustment Sets in Markov Equivalent DAGs.](https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/download/12363/12096)  
In _Proceedings of the Thirtieth AAAI Conference on Artificial Intelligence (AAAI 2016)_, pp. 3315-3321. AAAI Press, 2016.

## What other related software is out there?

There is currently quite a lot of activity in causal inference software. A few links:

-   [ggdag](https://cran.r-project.org/web/packages/ggdag/vignettes/intro-to-ggdag.html) is a nice R package based on dagitty but tidyverse-compatible and with much better plotting functionality.
-   [shinydag](https://www.gerkelab.com/project/shinydag/) is another GUI aimed at visualizing DAGs and exporting them in different publication-ready formats.
-   [TETRAD](http://www.phil.cmu.edu/projects/tetrad/)
-   [DAG program](http://epi.dife.de/dag/)
-   [dagR](http://journals.lww.com/epidem/Fulltext/2010/07000/dagR__A_Suite_of_R_Functions_for_Directed_Acyclic.26.aspx)
-   [daggle](https://cbdrh.shinyapps.io/daggle/) is a shiny app where you can practice the rules of DAG-based covariate selection.
-   [A JupyterLab extension to render dagitty models](https://github.com/krassowski/jupyterlab-dagitty)

Please contact me if you know of other programs that should be added to this list, or directly submit a pull request on github.

## Changelog

**2023-10-07**

Moved to a new webserver after 12 years.

**2023-07-11**

Version 3.1 is out, featuring selection variables.

**2020-01-09**

Version 3.0 has been released! Complete reimplementation of the interface, should work with mobile/touch now.

**2018-04-04**

Updated the development version and preparing for a long overdue release!

**2015-08-19**

Version 2.3 has been released! The most notable new feature: instrumental variables.

**2014-10-30**

Version 2.2 has been released!

**2014-10-05**

Version 2.2 is forthcoming and now available as the [Development version](https://www.dagitty.net/development/dags.html). This version features a new, SEM-like diagram drawing style and the ability to share your DAGs online.

**2014-04-14**

At "dagitty.net/learn", I am building some interactive tutorials using the forthcoming version 2.1 of DAGitty. That version will be embeddable into HTML pages, which will make it easy to include interactive DAG drawings into just about any webpage. Check it out! The first examples include an implementation of the "Simpson Machine" and an interactive version of a tutorial text on d-separation.

[View older entries ...](https://www.dagitty.net/changelog.html)