<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<h1>Step 09</h1>
<ul>
    <li>Dans un dossier "components", créez un monoficher CardPanel.vue qui prend en propriété "person"</li>
    <li>Copier le html et css dupliqué dans Home.vue et People.vue</li>
    <li>Utilisez card panel dans Home.vue et People.vue en lui passant une personne</li>
</ul>
Notes:
 - pour people utilisez la directive v-for sur le composant pour le répéter ;)

##==##

<!-- .slide: class="sfeir-bg-blue exercice" -->
## Solution
<span class="full-center">localhost:8080/step09_solution</span>

##==##

<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<h1>Step 10</h1>
<ul>
    <li>Implémentez la méthode delete dans PeopleService.js</li>
    <li>Sur l'icône trash du composant CardPanel, créez un event click</li>
    <li>Au click, propagez un event qui s'appelle person-delete</li>
    <li>A l'écoute de cet évènement, le composant People doit supprimer une personne</li>
    <li>A l'écoute de cet évènement, le composant Home doit changer de personne</li>
</ul>
Notes
- Route de l'api à appeler pour le delete: http://localhost:9000/api/peoples/:id
- Le delete de l'api renvoie la liste des personnes à jour

 ##==##

 <!-- .slide: class="sfeir-bg-blue exercice" -->
 ## Solution
<span class="full-center">localhost:8080/step10_solution</span>
