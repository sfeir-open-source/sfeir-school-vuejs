<!-- .slide: class="sfeir-basic-slide" -->
# Les modifiers: concepts et généralités
<br>
<ul>
    <li>Permet de customiser une directives</li>
    <li>Peuvent être chaînés</li>
    <li>Se place directement après un .</li>
</ul>
<br><br>
<img alt="center" src="assets/images/school/modifiers/modifiers_exemple.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les modifiers pour les events
<br>
<span>Les modifiers les plus courant pour les events sont les suivants</span>
<ul>
    <li>.stop</li>
    <li>.prevent</li>
    <li>.once</li>
    <li>.left, .right</li>
    <li>.middle</li>
</ul><br><br>
<span>Vous trouverez la liste complète des possibilités à cette page: https://vuejs.org/v2/guide/events.html#Event-Modifiers</span>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les modifiers sur le clavier
<br>
<ul>
    <li>S'implemente de la manière suivant: <strong>.(keyCode | keyAlias)</strong></li>
    <li>On peut définir des alias avec la syntax suivant: <strong>Vue.config.keyCodes.f1 = 112</strong></li>
</ul><br><br>
<img alt="center" src="assets/images/school/modifiers/modifiers_clavier.png">
Notes:
 - keyAlias peuvent être nombreux: .enter, .tab, .delete, .space, .up ....
 - Documentation suivant le lien suivant: https://vuejs.org/v2/guide/events.html#Key-Modifiers
