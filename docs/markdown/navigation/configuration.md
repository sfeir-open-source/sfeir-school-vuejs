<!-- .slide -->
# Configuration de base du routing
<br>

- <b>Path</b>: l'url de la route, peut contenir des segments dynamiques : /people/:id<br><br>
- <b>Name</b>: le nom de la route<br><br>
- <b>Component</b>: le composant associé à la route<br><br>
- <b>Redirect</b>: path ou name de la page vers laquelle rediriger<br><br>
- <b>alias</b>: redirection sans changement d'url

##==##

<!-- .slide: class="sfeir-basic-slide -->
# Configuration avancée du routing
<br>

- <b>components</b>: objet avec le nom de l’emplacement dans lequel le composant doit s’afficher<br><br>
- <b>meta</b>: données associées à la route<br><br>
- <b>children</b>: un tableau de définitions des sous-routes
Notes:
 - https://router.vuejs.org/guide/essentials/named-views.html#nested-named-views

 ##==##

 <!-- .slide: class="sfeir-basic-slide -->
# Guards


- Intervenir avant ou après un changement de route<br><br>
- Global sur le router (beforeEach / afterEach)<br><br>
- Au niveau d'une route  (beforeEnter)<br><br>
- Au niveau d'un composant (beforeRouteEnter, beforeRouteUpdate, beforeRouteLeave)<br><br>
- Prend 3 arguments
 - to (route cible)
 - from (route précédente)
 - next (function de continuation)

Notes:
 - https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards
 - next peut prendre plusieurs paramètres:
    - false
    - path (string)
    - redirectionObject
    - error
    - fonction de callback

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Stratégies de Navigation
<br>
<b>2 stratégies de navigation :</b>
<br><br>

- Hash:
    - stratégie par défaut (localhost/#/people) <br><br>

- Path et push state:
    - localhost/people
    - mode : history dans la config du router
    - implique une règle côté serveur
