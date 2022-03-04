<!-- .slide -->
# Les modules
<br>
Pour éviter de mélanger des choux et des carottes dans le même store, on peut séparer les métiers par module
<br><br>

![h-400](assets/images/school/state-management/modules_declaration.png)
![h-400](assets/images/school/state-management/modules_use.png)

<br>
Attention: par défaut actions et mutations sont enregistrés sous le namespace global. 
Il faut utiliser <b>namespaced: true</b> si on veut que tout soit "namespacé"
