---
layout: default
home: true
---

<section class="content-section about-section" id="about-me" aria-labelledby="about-heading" markdown="1">
<h2 class="section-heading" id="about-heading">About</h2>
<div class="section-content" markdown="1">

My research focuses on automated reasoning, formal verification, logic, decision procedures, SAT and SMT solvers, and their interaction with AI.

I am a member of technical staff at [Axiom Math](https://axiommath.ai/), where I work on verification and automated reasoning toward our mission to formalize and prove everything. Previously, I was an Applied Scientist at AWS (2021–2026) and a computer scientist at SRI International's Computer Science Laboratory (2013–2021). I received my PhD in Computer Science from NYU in 2012 ([thesis](papers/jovanovic-thesis.pdf)), advised by [Clark Barrett](https://theory.stanford.edu/~barrett/), and my BSc in Computer Science from the Faculty of Mathematics, University of Belgrade, in 2003.

</div>
</section>

{% if site.posts.size > 0 %}
<section class="content-section writing-section" id="writing" aria-labelledby="writing-heading" markdown="1">
<h2 class="section-heading" id="writing-heading">Writing</h2>
<div class="section-content">
  <ul class="writing-list">
    {% for post in site.posts limit:3 %}
    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d, %Y' }}</time>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
      {% if post.description %}<p>{{ post.description | escape }}</p>{% endif %}
    </li>
    {% endfor %}
  </ul>
  <a class="quiet-link" href="{{ '/blog/' | relative_url }}">All writing →</a>
</div>
</section>
{% endif %}

<section class="content-section news-section" id="news" aria-labelledby="news-heading" markdown="1">
<h2 class="section-heading" id="news-heading">Lately</h2>
<div class="section-content" markdown="1">

* **October 2026** New preprint: [Scaling Lean Theorem Proving for Real-World Code Verification](papers/ganguly-arxiv2026.pdf), introducing EasyProver and the Aegis verification benchmark.
* **September 2026** I joined [Axiom Math](https://axiommath.ai/).
* **July 2026** Our paper [A Neurosymbolic Approach to Natural Language Formalization and Verification](https://www.amazon.science/publications/a-neurosymbolic-approach-to-natural-language-formalization-and-verification) appeared at CAV 2026.
* **May 2026** New preprint: [Nonlinear Arithmetic with SMTLIB Division is Undecidable](papers/jovanovic-arxiv2026.pdf).
* **October 2024** Our paper [Projective Model Counting for IP Addresses in Access Control Policies](https://www.amazon.science/publications/projective-model-counting-for-ip-addresses-in-access-control-policies) appeared at FMCAD 2024.

<details class="news-archive" markdown="1">
<summary>Earlier news &amp; highlights</summary>

* Yices2 wins 3 medals at the 2018 FLoC Olympic Games ([slides](http://smtcomp.sourceforge.net/2018/FLoC-2018.pdf))
* Best paper honorable mention for "Property-Directed k-Induction" at [FMCAD 2016](https://web.archive.org/web/20240503093027/http://www.cs.utexas.edu/users/hunt/FMCAD/FMCAD16/awards.html).
* Yices2 wins non-linear divisions of [SMT-COMP 2016](http://smtcomp.sourceforge.net/2016/) (QF\_{[NIA](http://smtcomp.sourceforge.net/2016/results-QF_NIA.shtml?v=1467876482),[NRA](http://smtcomp.sourceforge.net/2016/results-QF_NRA.shtml?v=1467876482),[UFNIA](http://smtcomp.sourceforge.net/2016/results-QF_UFNIA.shtml?v=1467876482), [UFNRA](http://smtcomp.sourceforge.net/2016/results-QF_UFNRA.shtml?v=1467876482)}).
* Talk on SMT at the 2016 edition of the [SAT/SMT/AR summer school](http://ssa-school-2016.it.uu.se/) ([slides](presentations/jovanovic-smt-summer-school-2016.pdf)).
* Co-chair of the [2015 edition of the SMT Workshop](https://web.archive.org/web/20210413145642/http://smt2015.csl.sri.com/)
* Talk on MCSAT at the 2015 edition of the [SAT/SMT summer school](https://web.archive.org/web/20210413145944/http://smt2015.csl.sri.com/school/) ([slides](presentations/jovanovic-smt-summer-school-2015.pdf)).
* Co-organizer of the [2014 edition of the SAT/SMT summer school](http://satsmt2014.forsyte.at/)

</details>

</div>
</section>

<section class="content-section projects-section" id="projects" aria-labelledby="projects-heading" markdown="1">
<h2 class="section-heading" id="projects-heading">Projects</h2>
<div class="section-content" markdown="1">

* <img class="project-mark" src="{{ '/assets/projects/arc.svg' | relative_url }}" alt="" width="40" height="40" loading="lazy"> [Automated Reasoning checks](https://www.amazon.science/publications/a-neurosymbolic-approach-to-natural-language-formalization-and-verification)
  Formalization of natural-language policies and verification of answers in Amazon Bedrock Guardrails.
* <img class="project-mark" src="{{ '/assets/projects/zelkova.svg' | relative_url }}" alt="" width="40" height="40" loading="lazy"> [Zelkova](https://www.amazon.science/publications/projective-model-counting-for-ip-addresses-in-access-control-policies)
  Automated reasoning about AWS access-control policies.
* <img class="project-mark" src="{{ '/assets/projects/solc-verify.svg' | relative_url }}" alt="" width="40" height="40" loading="lazy"> [solc-verify](https://github.com/SRI-CSL/solidity/)
  A Modular Verifier for Solidity Smart Contracts.
* <img class="project-mark" src="{{ '/assets/projects/sally.svg' | relative_url }}" alt="" width="40" height="40" loading="lazy"> [Sally](https://github.com/SRI-CSL/sally/)
  A model-checker for infinite-state systems.
* <img class="project-mark" src="{{ '/assets/projects/libpoly.svg' | relative_url }}" alt="" width="40" height="40" loading="lazy"> [LibPoly](https://github.com/SRI-CSL/libpoly)
  A library for advanced polynomial operations.
* <img class="project-mark" src="{{ '/assets/projects/yices.svg' | relative_url }}" alt="" width="40" height="40" loading="lazy"> [Yices](https://yices.csl.sri.com/)
  SMT solver from SRI.
* <img class="project-mark" src="{{ '/assets/projects/cvc4.svg' | relative_url }}" alt="" width="40" height="40" loading="lazy"> [CVC4](https://cvc4.github.io/)
  An SMT solver, succeeded by [cvc5](https://cvc5.github.io/).
* <img class="project-mark" src="{{ '/assets/projects/cutsat.svg' | relative_url }}" alt="" width="40" height="40" loading="lazy"> [cutsat](http://www.cs.nyu.edu/~dejan/cutsat/)
  A linear integer arithmetic solver.

</div>
</section>

<section class="content-section papers-section" id="papers" aria-labelledby="papers-heading" markdown="1">
<h2 class="section-heading" id="papers-heading">Publications</h2>
<div class="section-content" markdown="1">

Also available on [Google Scholar](https://scholar.google.com/citations?user=lWqzpFkAAAAJ).

<form class="publication-tools" role="search" aria-label="Search publications" hidden>
  <div class="publication-controls">
    <div class="search-field">
      <label class="sr-only" for="publication-search">Search titles, authors, and keywords</label>
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.75" stroke="currentColor" stroke-width="1.4"/><path d="m13 13 4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
      <input id="publication-search" type="search" placeholder="Title, author, or keyword" autocomplete="off" spellcheck="false">
    </div>
    <label class="sr-only" for="publication-year">Filter publications by year</label>
    <select id="publication-year"><option value="">All years</option></select>
  </div>
  <div id="publication-tag-filter" class="publication-tag-filter" role="group" aria-label="Filter publications by topic"></div>
  <p id="publication-count" class="publication-count" role="status" aria-live="polite" aria-atomic="true"></p>
</form>

1. [**Scaling Lean Theorem Proving for Real-World Code Verification**](papers/ganguly-arxiv2026.pdf)<br>
Debargha Ganguly, Divya Raghunathan, Dejan Jovanović, Vikash Singh, Soonho Kong, Aaron Tomb, Aman Goel, Ferhat Erata, Sam Bayless. Preprint, [arXiv:2610.38174](https://arxiv.org/abs/2610.38174), 2026. <span class="publication-tags" data-tags="lean ai program-verification"></span>
1. [**A Neurosymbolic Approach to Natural Language Formalization and Verification**](papers/an-cav2026.pdf)<br>
Chenyang An, Sam Bayless, Stefano Buliani, Darion Cassel, Byron Cook, Duncan Clough, Rémi Delmas, Nafi Diallo, Ferhat Erata, Nick Feng, Dimitra Giannakopoulou, Aman Goel, Aditya Gokhale, Joe Hendrix, Victor Heorhiadi, Marc Hudak, Dejan Jovanović, Andrew M. Kent, Benjamin Kiesl-Reiter, Jeffrey J. Kuna, Nadia Labai, Joseph Lilien, Divya Raghunathan, Zvonimir Rakamarić, Niloofar Razavi, Michael Tautschnig, Ali Torkamani, Nathaniel Weir, Michael W. Whalen, Jianan Yao. In _Proceedings of the 38th Conference on Computer Aided Verification (CAV)_, 2026. [Publication](https://www.amazon.science/publications/a-neurosymbolic-approach-to-natural-language-formalization-and-verification). <span class="publication-tags" data-tags="ai policies smt"></span>
1. [**Nonlinear Arithmetic with SMTLIB Division is Undecidable**](papers/jovanovic-arxiv2026.pdf)<br>
Dejan Jovanović. Preprint, [arXiv:2605.26181](https://arxiv.org/abs/2605.26181), 2026. <span class="publication-tags" data-tags="smt nonlinear"></span>
1. [**Projective Model Counting for IP Addresses in Access Control Policies**](papers/dantoni-fmcad2024.pdf)<br>
Loris D’Antoni, Andrew Gacek, Amit Goel, Dejan Jovanović, Rami Gökhan Kıcı, Dan Peebles, Neha Rungta, Yasmine Sharoda, Chungha Sung. In _Proceedings of the 24th Conference on Formal Methods in Computer-Aided Design (FMCAD)_, pages 208–216, 2024. [Publication](https://doi.org/10.34727/2024/isbn.978-3-85448-065-5_26). <span class="publication-tags" data-tags="policies smt"></span>
1. [**Interpolation and Model Checking for Nonlinear Arithmetic**](papers/jovanovic-cav2021.pdf)<br>
Dejan Jovanović, [Bruno Dutertre](https://www.csl.sri.com/people/bruno/). In _Proceedings of the 33rd Conference on [Computer Aided Verification](https://web.archive.org/web/20260224215956/http://i-cav.org/2021/)_, 2021. <span class="publication-tags" data-tags="model-checking interpolation nonlinear mcsat"></span>
1. [**Solving bitvectors with MCSAT: explanations from bits and pieces**](papers/graham-lengrand-ijcar2020.pdf)<br>
[Stéphane Graham-Lengrand](https://www.csl.sri.com/people/graham-lengrand/), Dejan Jovanović, [Bruno Dutertre](https://www.csl.sri.com/people/bruno/). In _Proceedings of the 10th [International Joint Conference on Automated Reasoning](https://ijcar2020.org/)_, 2020. <span class="publication-tags" data-tags="mcsat bit-vectors smt"></span>
1. [**Formal Specification and Verification of Solidity Contracts with Events**](papers/hajdu-fmbc2020.pdf)<br>
[Ákos Hajdu](https://hajduakos.github.io/), Dejan Jovanović, [Gabriela Ciocarlie](https://www.stevens.edu/profile/gciocarl). In _2nd Workshop on [Formal Methods for Blockchains](https://fmbc.gitlab.io/2020/)_, 2020. <span class="publication-tags" data-tags="solidity program-verification"></span>
1. [**SMT-Friendly Formalization of the Solidity Memory Model**](papers/hajdu-esop2020.pdf)<br>
[Ákos Hajdu](https://hajduakos.github.io/), Dejan Jovanović. In _Proceedings of the 29th European [Symposium on Programming](https://etaps.org/2020/esop)_, 2020. <span class="publication-tags" data-tags="solidity program-verification smt"></span>
1. [**Verifying Visibility-Based Weak Consistency**](papers/krishna-esop2020.pdf)<br>
Siddharth Krishna, Michael Emmi, Constantin Enea, Dejan Jovanović. In _Proceedings of the 29th European Symposium on Programming (ESOP)_, pages 280–307, 2020. [Preprint](https://arxiv.org/abs/1911.01508). <span class="publication-tags" data-tags="program-verification"></span>
1. [**solc-verify: A Modular Verifier for Solidity Smart Contracts**](papers/hajdu-vstte2019.pdf)<br>
[Ákos Hajdu](https://hajduakos.github.io/), Dejan Jovanović. In _Proceedings of the 11th Working Conference on [Verified Software: Theories, Tools, and Experiments](https://web.archive.org/web/20241006174059/https://sri-csl.github.io/VSTTE19/)_, 2019. <span class="publication-tags" data-tags="solidity program-verification"></span>
1. [**A Separation Logic with Data: Small Models and Automation**](papers/katelaan-ijcar2018.pdf)<br>
[Jens Pagel](https://www.forsyte.at/people/pagel/), Dejan Jovanović, [Georg Weissenbacher](https://www.georg.weissenbacher.science/). In _Proceedings of the 9th [International Joint Conference on Automated Reasoning](http://ijcar2018.org/)_, 2018. <span class="publication-tags" data-tags="program-verification smt"></span>
1. [**Verification of Fault-Tolerant Protocols with Sally**](papers/dutertre-nfm2018.pdf)<br>
[Bruno Dutertre](https://www.csl.sri.com/people/bruno/), Dejan Jovanović, [Jorge Navas](https://jorgenavas.github.io/). In _Proceedings of the Tenth [NASA Formal Methods Symposium](https://shemesh.larc.nasa.gov/NFM2018/)_, 2018. <span class="publication-tags" data-tags="model-checking"></span>
1. [**Selfless Interpolation for Infinite-State Model Checking**](papers/schindler-vmcai2018.pdf)<br>
[Tanja Schindler](https://swt.informatik.uni-freiburg.de/staff/schindler), Dejan Jovanović. In _Proceedings of the 19th Conference on [Verification, Model Checking, and Abstract Interpretation](https://popl18.sigplan.org/track/VMCAI-2018)_, 2018. <span class="publication-tags" data-tags="model-checking interpolation"></span>
1. [**Designing Theory Solvers with Extensions**](papers/reynolds-frocos2017.pdf)<br>
[Andrew Reynolds](https://homepage.divms.uiowa.edu/~ajreynol/), [Cesare Tinelli](https://homepage.divms.uiowa.edu/~tinelli/), Dejan Jovanović, [Clark Barrett](https://theory.stanford.edu/~barrett/). In _11th International Symposium on [Frontiers of Combining Systems](http://frocos2017.cic.unb.br/)_, 2017. <span class="publication-tags" data-tags="theory-combination smt"></span>
1. [**Abduction by Non-Experts**](papers/lpar2017.pdf)<br>
[Nikolaj Bjørner](https://www.microsoft.com/en-us/research/people/nbjorner/), Dejan Jovanović, [Tancrède Lepoint](https://tancre.de/), [Philipp Rümmer](http://www.philipp.ruemmer.org/), [Martin Schäf](https://www.martinschaef.de/). In _21st International Conference on Logic for Programming, Artificial Intelligence and Reasoning_, 2017. <span class="publication-tags" data-tags="program-verification"></span>
1. [**Solving Nonlinear Integer Arithmetic with MCSAT**](papers/jovanovic-vmcai2017.pdf)<br>
Dejan Jovanović. In _Proceedings of the 18th Conference on [Verification, Model Checking, and Abstract Interpretation](http://conf.researchr.org/home/VMCAI-2017)_, 2017. <span class="publication-tags" data-tags="mcsat nonlinear integer-arithmetic smt"></span>
1. [**LibPoly: A Library for Reasoning about Polynomials**](papers/jovanovic-smt2017.pdf)<br>
Dejan Jovanović, [Bruno Dutertre](https://www.csl.sri.com/people/bruno/). In _Proceedings of the 15th International Workshop on Satisfiability Modulo Theories (SMT)_, pages 28–39, 2017. <span class="publication-tags" data-tags="nonlinear"></span>
1. [**An MCSAT Treatment of Bit-Vectors**](papers/graham-lengrand-smt2017.pdf)<br>
[Stéphane Graham-Lengrand](https://www.csl.sri.com/people/graham-lengrand/), Dejan Jovanović. In _Proceedings of the 15th International Workshop on Satisfiability Modulo Theories (SMT)_, pages 89–100, 2017. <span class="publication-tags" data-tags="mcsat bit-vectors smt"></span>
1. [**Property-Directed k-Induction**](papers/jovanovic-fmcad2016.pdf)<br>
Dejan Jovanović, [Bruno Dutertre](https://www.csl.sri.com/people/bruno/). In _Proceedings of the 16th Conference on [Formal Methods in Computer-Aided Design](https://web.archive.org/web/20240413105645/http://www.cs.utexas.edu/users/hunt/FMCAD/FMCAD16/index.shtml)_, 2016. <span class="publication-tags" data-tags="model-checking"></span>
1. [**Finding Inconsistencies in Programs with Loops**](papers/kahsai-lpar2015.pdf)<br>
[Temesghen Kahsai](https://www.lememta.info/), [Jorge A. Navas](https://jorgenavas.github.io/), Dejan Jovanović, [Martin Schäf](https://www.martinschaef.de/). In _Proceedings of the 20th International Conferences on [Logic for Programming, Artificial Intelligence and Reasoning](http://www.lpar-20.org/)_, 2015. <span class="publication-tags" data-tags="program-verification"></span>
1. [**Conflict-Directed Graph Coverage**](papers/schwartz-narbonne-nfm2015.pdf)<br>
[Daniel Schwartz-Narbonne](https://github.com/danielsn), [Martin Schäf](https://www.martinschaef.de/), Dejan Jovanović, [Philipp Rümmer](http://www.philipp.ruemmer.org/), [Thomas Wies](https://cs.nyu.edu/~wies/). In _Proceedings of the [NASA Formal Methods Symposium](https://web.archive.org/web/20160111000923/http://nasaformalmethods.org/)_, 2015. <span class="publication-tags" data-tags="program-verification"></span>
1. [**Template-based circuit understanding**](papers/gascon-fmcad2014.pdf)<br>
[Adrià Gascón](https://www.turing.ac.uk/people/researchers/adria-gascon), [Pramod Subramanyan](https://www.iitk.ac.in/prof-pramod-subramanyan), [Bruno Dutertre](https://www.csl.sri.com/people/bruno/), [Ashish Tiwari](https://ashishxtiwari.github.io/), Dejan Jovanović, [Sharad Malik](https://www.princeton.edu/~sharad/). In _Proceedings of the 14th Conference on [Formal Methods in Computer-Aided Design](https://web.archive.org/web/20240527202350/http://www.cs.utexas.edu/users/hunt/FMCAD/FMCAD14/index.shtml)_, 2014. <span class="publication-tags" data-tags="hardware"></span>
1. [**A tale of two solvers: eager and lazy approaches to bit-vectors**](papers/hadarean-cav2014.pdf)<br>
[Liana Hadarean](https://www.amazon.science/author/liana-hadarean), [Kshitij Bansal](https://kshitij.io/), Dejan Jovanović, [Clark Barrett](https://theory.stanford.edu/~barrett/), [Cesare Tinelli](https://homepage.divms.uiowa.edu/~tinelli/). In _Proceedings of the 26th International Conference on [Computer Aided Verification](http://cavconference.org/)_, 2014. <span class="publication-tags" data-tags="bit-vectors smt"></span>
1. [**Safety envelope for security**](papers/tiwari-hicons2014.pdf)<br>
[Ashish Tiwari](https://ashishxtiwari.github.io/), [Bruno Dutertre](https://www.csl.sri.com/people/bruno/), Dejan Jovanović, [Thomas de Candia](https://archived.ai.sri.com/people/thomasd.html), [Patrick D Lincoln](https://www.csl.sri.com/users/lincoln/), [John Rushby](https://www.csl.sri.com/users/rushby/), [Dorsa Sadigh](https://www.cs.stanford.edu/people/dorsa-sadigh), [Sanjit Seshia](https://people.eecs.berkeley.edu/~sseshia/). In _Proceedings of the 3rd international conference on [High confidence networked systems](https://web.archive.org/web/20180511030643/http://www.hi-cons.org/)_, 2014. <span class="publication-tags" data-tags="security"></span>
1. [**The Design and Implementation of the Model Constructing Satisfiability Calculus**](papers/jovanovic-fmcad2013.pdf)<br>
Dejan Jovanović, [Clark Barrett](https://theory.stanford.edu/~barrett/), [Leonardo de Moura](https://leodemoura.github.io/). In _Proceedings of the 13th Conference on [Formal Methods in Computer-Aided Design](https://web.archive.org/web/20240304095010/http://www.cs.utexas.edu/users/hunt/FMCAD/FMCAD13/index.shtml)_, 2013. <span class="publication-tags" data-tags="mcsat smt"></span>
1. [**Cutting to the Chase: Solving Linear Integer Arithmetic**](papers/jovanovic-jar2013.pdf)<br>
Dejan Jovanović, [Leonardo de Moura](https://leodemoura.github.io/). In _[Journal of Automated Reasoning](http://rd.springer.com/article/10.1007%2Fs10817-013-9281-x)_, volume 51, issue 1, pages 79-108. Springer-Verlag, 2013. <span class="publication-tags" data-tags="integer-arithmetic smt"></span>
1. [**A Model-Constructing Satisfiability Calculus**](papers/mcsat-vmcai2013.pdf)<br>
[Leonardo de Moura](https://leodemoura.github.io/), Dejan Jovanović. In _Proceedings of the 14th International Conference on [Verification, Model Checking, and Abstract Interpretation](https://web.archive.org/web/20221205140847/http://vmcai13.di.univr.it/Home.html)_, volume 7737 of _Lecture Notes in Computer Science_, pages 1-12, 2013. <span class="publication-tags" data-tags="mcsat smt"></span>
1. [**Being careful about theory combination**](papers/jovanovic-fmsd2012.pdf)<br>
Dejan Jovanović, [Clark Barrett](https://theory.stanford.edu/~barrett/). In _[Formal Methods in System Design](http://www.springer.com/engineering/circuits+%26+systems/journal/10703)_, volume 42, pages 67-90. Springer-Verlag, 2013. <span class="publication-tags" data-tags="theory-combination smt"></span>
1. [**Solving Non-Linear Arithmetic**](papers/jovanovic-ijcar2012.pdf)<br>
Dejan Jovanović, [Leonardo de Moura](https://leodemoura.github.io/). In _Proceedings of the 6th International [Joint Conference on Automated Deduction](https://web.archive.org/web/20140331141503/http://ijcar.cs.manchester.ac.uk/)_, volume 7364 of _Lecture Notes in Computer Science_, pages 339-354. Springer-Verlag, 2012. <span class="publication-tags" data-tags="mcsat nonlinear smt"></span>
1. [**Sharing is Caring: Combination of Theories**](papers/jovanovic-frocos2011.pdf)<br>
Dejan Jovanović, [Clark Barrett](https://theory.stanford.edu/~barrett/). In _Proceedings of the 8th International Symposium [Frontiers of Combining Systems](http://www.mpi-inf.mpg.de/conferences/frocos2011/index.html)_, volume 6989 of _Lecture Notes in Computer Science_, pages 195-210. Springer-Verlag, 2011. <span class="publication-tags" data-tags="theory-combination smt"></span>
1. [**Cutting to the Chase: Solving Linear Integer Arithmetic**](papers/jovanovic-cade2011.pdf)<br>
Dejan Jovanović, [Leonardo de Moura](https://leodemoura.github.io/). In _Proceedings of the 23rd International [Conference on Automated Deduction](https://web.archive.org/web/20181124141452/http://cade23.ii.uni.wroc.pl/)_, volume 6803 of _Lecture Notes in Computer Science_, pages 338-353. Springer-Verlag, 2011. <span class="publication-tags" data-tags="integer-arithmetic smt"></span>
1. [**CVC4**](papers/cvc4-cav2011.pdf)<br>
[Clark Barrett](https://theory.stanford.edu/~barrett/), [Christopher L. Conway](https://www.linkedin.com/in/christopherleeconway), [Morgan Deters](https://cs.nyu.edu/home/people/in_memoriam/deters/index.html), [Liana Hadarean](https://www.amazon.science/author/liana-hadarean), Dejan Jovanović, [Tim King](https://research.google/people/timking/), [Andrew Reynolds](https://homepage.divms.uiowa.edu/~ajreynol/), [Cesare Tinelli](https://homepage.divms.uiowa.edu/~tinelli/). In _Proceedings of the 23rd International [Conference on Computer Aided Verification](http://www.cs.utah.edu/events/conferences/cav2011/)_, volume 6806 of _Lecture Notes in Computer Science_, pages 171-177. Springer-Verlag, 2011. <span class="publication-tags" data-tags="smt"></span>
1. [**Polite Theories Revisited**](papers/jovanovic-polite-2010.pdf)<br>
Dejan Jovanović, [Clark Barrett](https://theory.stanford.edu/~barrett/). In _Proceedings of the 17th International Conference on [Logic for Programming, Artificial Intelligence and Reasoning](http://www.computational-logic.org/lpar-17/)_, volume 6397 of _Lecture Notes in Computer Science_, pages 402-416. Springer-Verlag, 2010. [Technical report](papers/jovanovic-polite-tr2010.pdf). <span class="publication-tags" data-tags="theory-combination smt"></span>
1. [**Logical Analysis of Hash Functions**](papers/jovanovic-hashsat-2005.pdf)<br>
Dejan Jovanović, [Predrag Janičić](https://poincare.matf.bg.ac.rs/~janicic/). In Proceedings of the 5th International Workshop [_Frontiers of Combining Systems_](http://www.logic.at/frocos05/), volume 3717 of _Lecture Notes in Computer Science_, pages 200-215. Springer-Verlag, 2005. <span class="publication-tags" data-tags="sat security"></span>
1. [**Variable Neighborhood Search for the Probabilistic Satisfiability Problem**](papers/jovanovic-vns4psat-2005.pdf)<br>
Dejan Jovanović, [Nenad Mladenović](https://www.ae-info.org/ae/Member/Mladenovic_Nenad), [Zoran Ognjanović](https://www.mi.sanu.ac.rs/~zorano/). In _Proceedings of the 6th Metaheuristics International Conference_, 2005. <span class="publication-tags" data-tags="sat"></span>

<p id="no-publications" class="no-publications" hidden>No publications match. Try another keyword or year.</p>

</div>
</section>

<section class="content-section contact-section" id="contact" aria-labelledby="contact-heading" markdown="1">
<h2 class="section-heading" id="contact-heading">Get in touch</h2>
<div class="section-content" markdown="1">

<p class="contact-invitation">Always happy to connect.</p>
<a class="contact-email" href="mailto:dejan.jovanovic@gmail.com">dejan.jovanovic@gmail.com</a>
<div class="contact-links">
  <a href="https://github.com/dddejan">GitHub</a>
  <a href="https://scholar.google.com/citations?user=lWqzpFkAAAAJ">Google Scholar</a>
  <a href="https://www.linkedin.com/in/dejanjovanovic/">LinkedIn</a>
  <a href="https://x.com/dddejan">Twitter / X</a>
</div>

</div>
</section>
