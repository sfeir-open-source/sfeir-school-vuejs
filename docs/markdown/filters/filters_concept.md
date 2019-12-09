<!-- .slide: class="sfeir-basic-slide" -->
# Concept d'utilisation
<span class="full-center">Un filtre permet de <strong>transformer</strong> une donnée pour un affichage</span>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Exemple
<br><br>
<img alt="full-center full-height" src="assets/images/school/filters/exemple_filter_date.png">

##==##
<!-- .slide: class="sfeir-basic-slide" -->
# Exemple
<br><br>
<img alt="full-center full-height" src="assets/images/school/filters/exemple_filter_uppercase.png">

##==##
<!-- .slide: class="sfeir-basic-slide" -->
# Syntax
<br><br>
<ul>
    <li>A la suite d'une expression : <strong>{{ expression | filter }}</strong></li>
    <li>Possibilité de chaîner les filtres : <strong>{{ expression |filter1 |filter2 }}</strong></li>
    <li>Possibilité de passer des paramètres : <strong>{{ expression |filter(param1, param2) }}</strong></li>
</ul>
Notes:
 - le premier paramètre est toujours la valeur de l'expression c'est un paramètre implicite donc pas besoin de le passer à notre filtre

 ##==##

 <!-- .slide: class="sfeir-basic-slide" -->
 # Implémentation d'un filtre
 <br><br>
 <ul>
    <li>Dans la propriété filter du composant</li>
    <li>Le nom de la clé sera le nom du filtre dans le template</li>
    <li>Méthode qui prend des paramètres + paramètre implicite et retourne une nouvelle valeur</li>
 </ul>
 <img alt="center" src="assets/images/school/filters/filters_create.png">
 Notes:
  - un filtre peut également être définie de manière globale: Vue.filter(name, () => ())
  Il faudra penser à l'importer dans le main.js (fichier comportant l'instance principale de Vue JS)
