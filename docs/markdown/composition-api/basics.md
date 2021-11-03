<!-- .slide: class="two-column-layout" -->
# Comment ?

##--##
- méthode d'instance nommée **setup**
- appelée AVANT la création du composant (mais après la résolution des propriétés)

_


- prend en paramètre `props` et `context`
- tout ce qu'elle retourne sera disponible dans le composant
- ne pas utiliser **this** dans cette méthode

##--##
![](assets/images/school/composition-api/simple-setup.png)
