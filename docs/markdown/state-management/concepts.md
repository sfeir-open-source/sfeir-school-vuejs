<!-- .slide -->
# Les différents type de communication
<br><br><br>

- Il existe <b>deux</b> grandes familles de communication: <br><br>
    - Parents - enfants : (properties / event-custom)<br><br>
    - Elements indépendants les uns des autres
Notes:
 - Dans notre cas nous allons nous intéresser particulièrement à la communication entre des éléments indépendants les uns des autres
 Pour ce faire, il existe deux grandes solutions
  - mise en place d'un bus de communication (service, instance de Vue, observables)
  - mise en place d'une architecture flux (provenant du monde React => problème de notifications)

##==##

<!-- .slide -->
# Créer sa propre communication
<br><br>

- Créer une instance de Vue dédiée pour la communication
- Importer cette instance dans différents composants
- Utiliser les méthodes $emit et $on
<br><br>

![](assets/images/school/state-management/bus_instance.png)
![](assets/images/school/state-management/bus_implementation.png)

Notes:
 - https://alligator.io/vuejs/global-event-bus/ permet de voir une implémentation complète
 - Il est judicieux de placer nos listener dans un hook Vue js (mounted est particulièrement indiqué)
 - $off permet de désouscrire à un event

##==##

<!-- .slide -->
# Utilisation de l'existant : VueX
<br>

- Permet de mettre en place une architecture dataflow first (similaire à redux)
- Librairie tiers <b>MAIS</b> officielle
- npm install --save vuex
<br><br>

![h-600 center](assets/images/school/state-management/dataflow_flux.png)

##==##

<!-- .slide: class="two-column-layout" -->
# Les composantes de VueX
##--##
<br><br>

- State<br><br>
- Getters<br><br>
- Mutations<br><br>
- Action

##--##
<br>

![h-800](assets/images/school/state-management/achitecture_vuex.png)

Notes:
Vuex impose de mettre en place un store. Ce store est composé de 4 composantes:
 - state (initialisation de nos données présentes dans notre vue)
 - getter (récupération total ou partiel d'un state, si une partie du state est modifié automatiquement le getters qui en dépend est "rafraîchit")
 - mutation (c'est dans ce fichier que le changement d'état de nos variables présentes dans notre state sont modifiées => opération synchrone)
 - action (c'est dans ce fichier que les appels vers nos api se font, ici se place tout ce qui est asynchrone)
