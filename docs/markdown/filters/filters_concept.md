<!-- .slide -->
# Concept d'utilisation
Un filtre permet de <b>transformer</b> une donnée pour un affichage
<!-- .element: class="full-center" -->

##==##

<!-- .slide" -->
# Exemple
<br><br>

![full-center full-height](assets/images/school/filters/exemple_filter_date.png)

##==##
<!-- .slide: class="sfeir-basic-slide" -->
# Exemple
<br><br>

![full-center full-height](assets/images/school/filters/exemple_filter_uppercase.png)

##==##

<!-- .slide -->
# Syntax
<br><br>

- A la suite d'une expression : __{{ expression | filter }}__<br><br>
- Possibilité de chaîner les filtres : __{{ expression |filter1 |filter2 }}__<br><br>
- Possibilité de passer des paramètres : __{{ expression |filter(param1, param2) }}__<br><br>
Notes:
 - le premier paramètre est toujours la valeur de l'expression c'est un paramètre implicite donc pas besoin de le passer à notre filtre

 ##==##

 <!-- .slide -->
 # Implémentation d'un filtre
 - Dans la propriété filter du composant
 - Le nom de la clé sera le nom du filtre dans le template
 - Méthode qui prend des paramètres + paramètre implicite et retourne une nouvelle valeur
 <br><br>

 ![center](assets/images/school/filters/filters_create.png)

 Notes:
  - un filtre peut également être définie de manière globale: Vue.filter(name, () => ())
  Il faudra penser à l'importer dans le main.js (fichier comportant l'instance principale de Vue JS)
