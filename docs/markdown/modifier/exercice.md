<!-- .slide: class="exercice" -->
# Exercice 17
## Exercice
<h1>Step 17</h1>
<br>
Nous avons ajouté un composant SearchBar<br><br>
<br><br>

- Propagez un event search au composant People.vue en tapant sur la touche entrée dans la bar de recherche <br><br>
- Dans le composant People, à l'écoute de l'event search, filtrez la liste des peoples
Notes:
 - passez la valeur de l'input search lors de la propagation de l'event

Attirer l'attention sur la ligne 45 de People : vm._people = vm.people = people;
 - this._people est la liste complète des peoples (la sauvegarde que l'on ne modifie pas)
 - this.people est la liste à modifier qui est utilisée pour l'affichage des sfeir-card

##==##

<!-- .slide: class="exercice"-->
# Exercice 17
## Solution
<b>localhost:8080/step17_solution</b>
<!-- .element: class="full-center" -->
