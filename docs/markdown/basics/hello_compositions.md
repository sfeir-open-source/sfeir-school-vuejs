<!-- .slide: class="sfeir-basic-slide" -->
# Composition d'un simple Hello World
<br><br>
<span> 3 composantes: <span>
<ul>
    <li>Le fichier source de Vue js</li><br>
    <li>Un template</li><br>
    <li>Un script de démarrage</li>
</ul>
Notes:
 - le fichier source de Vue js peut provenir de différentes sources Bower, CDN (google cloud storage source), npm (le plus commun)
 - Il existe deux types de sources (standalone = inclut le template compiler) et runtime (utilise uniquement les fonctions de render)

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les sources
<br>
<img alt="center h-800" src="assets/images/school/basics/source_exemple.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Le script
<div>
<br><br>
    Permet d'instancer une Vue avec différents options:
    <br><br>
    <ul>
        <li><strong>el</strong> pour cible l'élement ou doit être placé "la vue"<br>
        <li><strong>data</strong> pour exposer des datas
    <ul>
</div>
<div>
    <img alt="center" src="assets/images/school/basics/script_exemple.png">
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Le template
<br>
Le template Vue va se placer directement dans la page HTML:
<br><br>
<img alt="center h-700" src="assets/images/school/basics/template_exemple.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Le template
<br>
Le template Vue peut se passer en option à l'instance de vue:
<br><br>
<img alt="center" src="assets/images/school/basics/template_option_instance_exemple.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Le template
<br>
Le template peut se passer en utilisant une balise script de type <strong>x-template</strong>
<p class="inline-flex">
    <img alt="h-600" src="assets/images/school/basics/x-template_script_exemple.png">
    <img alt="h-600" src="assets/images/school/basics/x-template_html_exemple.png">
</p>



