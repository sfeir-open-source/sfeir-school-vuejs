<!-- .slide: class="exercice" -->
# Exerice 9
## Exercice
<br><br>

- Dans un dossier composant, créez un monoficher CardPanel.vue qui prend en propriété "person"<br><br>
- Copier le html et css dupliqué dans Home.vue et People.vue<br><br>
- Utilisez card panel dans Home.vue et People.vue en lui passant une personne
Notes:
 - pour people utilisez la directive v-for sur le composant pour le répéter ;)

##==##

<!-- .slide: class="exercice" -->
# Exercice 10
## Solution
<b>localhost:8080/step09_solution</b>
<!-- .element: class="full-center" -->

##==##

<!-- .slide: class="exercice" -->
# Exercice 10
## Exercice
<br><br>

- Implémentez la méthode delete dans PeopleService.js<br><br>
- Sur l'icône trash du composant CardPanel, créez un event click<br><br>
- Au click, propagez un event qui s'appelle person-delete<br><br>
- A l'écoute de cet évènement, le composant People doit supprimer une personne<br><br>
- A l'écoute de cet évènement, le composant Home doit changer de personne

Notes:
- Route de l'api à appeler pour le delete: http://localhost:9000/api/peoples/:id
- Le delete de l'api renvoie la liste des personnes à jour

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 10
 ## Solution
<b>localhost:8080/step10_solution</b>
<!-- .element: class="full-center" -->
