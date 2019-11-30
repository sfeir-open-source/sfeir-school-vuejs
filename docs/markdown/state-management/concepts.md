<!-- .slide: class="sfeir-basic-slide" -->
# Les différents type de communication
<br><br>
<span>Il existe <strong>deux</strong> grandes familles de communication</span><br><br>
<ul>
    <li>Parents - enfants : (properties / event-custom)</li>
    <br>
    <li>Elements indépendants les uns des autres</li>
</ul>
Notes:
 - Dans notre cas nous allons nous intéresser particulièrement à la communication entre des éléments indépendants les uns des autres
 Pour ce faire, il existe deux grandes solutions
  - mise en place d'un bus de communication (service, instance de Vue, observables)
  - mise en place d'une architecture flux (provenant du monde React => problème de notifications)

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Créer sa propre communication
<br><br>
<ul>
    <li>Créer une instance de Vue dédiée pour la communication</li>
    <li>Importer cette instance dans différents composants</li>
    <li>Utiliser les méthodes $emit et $on</li>
</ul>
<div class="flex-row">
    <img src="assets/images/school/state-management/bus_instance.png">
    <img src="assets/images/school/state-management/bus_implementation.png">
</div>

Notes:
 - https://alligator.io/vuejs/global-event-bus/ permet de voir une implémentation complète
 - Il est judicieux de placer nos listener dans un hook Vue js (mounted est particulièrement indiqué)
 - $off permet de désouscrire à un event

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Utilisation de l'existant : VueX
<br><br>
<ul>
    <li>Permet de mettre en place une architecture dataflow first (similaire à redux)</li>
    <li>Librairie tiers <strong>MAIS</strong> officielle</li>
    <li>npm install --save vuex</li>
</ul>
<img alt="h-600 center"src="assets/images/school/state-management/dataflow_flux.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les composantes de VueX
<br><br>
<div class="flex-row">
    <ul>
        <li>State</li>
        <li>Getters</li>
        <li>Mutations</li>
        <li>Action</li>
    </ul>
    <img alt="h-800" src="assets/images/school/state-management/achitecture_vuex.png">
</div>
Notes:
Vuex impose de mettre en place un store. Ce store est composé de 4 composantes:
 - state (initialisation de nos données présentes dans notre vue)
 - getter (récupération total ou partiel d'un state, si une partie du state est modifié automatiquement le getters qui en dépend est "rafraîchit")
 - mutation (c'est dans ce fichier que le changement d'état de nos variables présentes dans notre state sont modifiées => opération synchrone)
 - action (c'est dans ce fichier que les appels vers nos api se font, ici se place tout ce qui est asynchrone)
