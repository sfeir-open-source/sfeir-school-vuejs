<!-- .slide: class="two-column-layout" -->
# L'instance
Une instance est composée de 3 grandes composantes
<!-- .element: class="center" -->

##--##
<br><br><br><br>

- Un Constructeur
- Une Api
- Etendable

##--##
<br><br>

![h-300](assets/images/school/vue-instance/constructor.png)
<!-- .element: class="align-image" -->

![h-300](assets/images/school/vue-instance/extend.png)
<!-- .element: class="align-image" -->

Notes:
Le constructor peut prendre plusieurs options :
 - des sélecteurs
 - propriétés
 - method
 - computed

##==##

<!-- .slide: class="two-column-layout" -->
# Les lifecycles

##--##
<br><br><br>

- Chaque instance de composant a un cycle de vie bien défini
    - created
    - mounted
    - updated
    - unmounted
- S'implémente directement dans les options de l'instance de vue

Notes: diagramme https://v3.vuejs.org/guide/instance.html#lifecycle-diagram

##--##
<br><br><br>

![h-500](assets/images/school/vue-instance/lifecycle.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Les propriétés

##--##
<br><br><br>
- Exposées dans l'objet data
- Réactives
- Propriétés d'instance :
    - $data

##--##
![h-400](assets/images/school/vue-instance/properties.png)
<!-- .element: class="align-image" -->

![h-400](assets/images/school/vue-instance/access_properties.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Les computed properties
<br>

__Qu'est ce que c'est?__
<!-- .element: class="center" -->

##--##
<br><br><br><br>

- Exposées dans l'objet computed
- Masque la logique de traitement (filtre)
- Utilisable dans le template
- Mise à jour quand les propriétés changent
- Logique Getter/Setter

##--##
<br><br>

![](assets/images/school/vue-instance/computed.png)
<!-- .element: class="align-image" -->
Notes:
Exemple de Getter / Setter sur une computed : https://vuejs.org/v2/guide/computed.html#Computed-Setter

##==##

<!-- .slide: class="two-column-layout" -->
# Les méthodes
<br>

__Qu'est ce que c'est ?__
<!-- .element: class="center" -->

##--##
<br><br><br><br>

- Exposées dans l'object "methods"
- Utilisables dans le template
- Méthodes d'instances
    - render (creation de template en javascript)
    - $emit
    - $watch
    - $forceUpdate / $nextTick

##--##
<br><br>

![h-800](assets/images/school/vue-instance/methods.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Les watchers
<br>

__Qu'est ce que c'est ?__
<!-- .element: class="center" -->

##--##
<br><br><br><br>

- S'implémente dans la définition du composant ou dans une méthode
- Opérations Asynchrone

##--##
<br><br>

![h-700](assets/images/school/vue-instance/watchers.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide -->
# Combat entre computed, watcher et methods
<br><br>

- Une propriété computed est recalculée seulement quand ses dépendances changent<br><br>
- Une méthode est rappelée à chaque fois qu'un élément change<br><br>
- Un watcher est privilégié pour des actions plus complexes (effet de bord ou appel asynchrone)
