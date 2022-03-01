<!-- .slide: class="exercice" -->
# Exercice 07-props
## Exercice
<br>

- Dans un dossier composant, créez un monoficher CardPanel.vue qui prend en propriété "person"<br><br>
- Copier le html et css dupliqué dans Home.vue et People.vue<br><br>
- Utilisez card panel dans Home.vue et People.vue en lui passant une personne
Notes:
 - pour people utilisez la directive v-for sur le composant pour le répéter ;)

##==##

<!-- .slide: class="exercice" -->
# Exercice 07-props
## Solution
**07-props-solution**
<!-- .element: class="full-center" -->

##==##

<!-- .slide: class="exercice" -->
# Exercice 08-events
## Exercice
<br>

- Un bouton random a été ajouté <br><br>
- Créez une action "random" sur le clic du bouton pour afficher une personne au hasard <br><br>

 ##==##

<!-- .slide: class="exercice" -->
# Exercice 08-events
## Exercice
<br>

- Sur l'icône trash du composant CardPanel, créez un event click<br><br>
- Au click, propagez un event qui s'appelle person-delete<br><br>
- A l'écoute de cet évènement, le composant People doit supprimer une personne<br><br>
- A l'écoute de cet évènement, le composant Home doit changer de personne

 ##==##
vue
 <!-- .slide: class="exercice" -->
 # Exercice 08-events-solution
 ## Solution
**08-events-solution**
<!-- .element: class="full-center" -->
