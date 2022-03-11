<!-- .slide: class="two-column-layout" -->
# Comment ?

##--##
- méthode d'instance nommée **setup**
- appelée AVANT la création du composant (mais après la résolution des propriétés)<br><br>



- prend en paramètre `props` et `context`
- tout ce qu'elle retourne sera disponible dans le composant
- ne pas utiliser **this** dans cette méthode

<br><br>
- en Typescript, encore moins de code (et pas besoin de return)

##--##
![](assets/images/school/composition-api/simple-setup.png)
![h-400](assets/images/school/composition-api/simple-setup-typescript.png)
