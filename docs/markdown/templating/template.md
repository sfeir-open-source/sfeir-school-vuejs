<!-- .slide" -->
# La directive v-if
<br>

- Peut s'appliquer à un composant 
- conditionne le rendu du composant dans le DOM
- <b>template</b> permet de permuter plusieurs éléments
- <b>v-if, v-else, else-if</b>

<br>

![h-500](assets/images/school/iterator/conditional_if.png)
![h-500](assets/images/school/iterator/conditional_if-else.png)

##==##

# La directive v-show
<br>

- Peut s'appliquer qu'à un composant 
- ne peut pas s'appliquer à un <b>template</b>
- élément dans le DOM et masqué via CSS

<br><br>

![center](assets/images/school/iterator/conditional_show.png)

##==##

<!-- .slide" -->
# La directive v-for
<br>

- Peut itérer sur un tableau, un objet, un nombre et une chaîne
- <b>in</b> sur un tableau / <b>of</b> sur un object
- Génère un template par élément
- <b>index, key, value</b>
- Attention, il est préférable d'identifier le template d'un élément de manière unique grâce :key

<br>

![h-500](assets/images/school/iterator/iterator_array.png)
![h-500](assets/images/school/iterator/iterator_object.png)
 
