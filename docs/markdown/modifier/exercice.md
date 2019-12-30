<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<h1>Step 17</h1>
<br>
<ul>
    <li>Nous avons ajouté un composant SearchBar</li>
    <li>Propagez un event search au composant People.vue en tapant sur la touche entrée dans la bar de recherche</li>
    <li>Dans le composant People, à l'écoute de l'event search, filtrez la liste des peoples</li>
</ul>
Notes
 - passez la valeur de l'input search lors de la propagation de l'event

Attirer l'attention sur la ligne 45 de People : vm._people = vm.people = people;
 - this._people est la liste complète des peoples (la sauvegarde que l'on ne modifie pas)
 - this.people est la liste à modifier qui est utilisée pour l'affichage des sfeir-card

##==##

<!-- .slide: class="sfeir-bg-blue exercice"-->
## Solution
<span class="full-center">localhost:8080/step17_solution</span>
