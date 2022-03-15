<!-- .slide" -->
# A quoi sert le lazy-loading
<br><br>

- Permet de charger les composants à la demande<br><br>
- Réduction du bundle js<br><br>


##==##

<!-- .slide -->
# Comment le mettre en place
<br><br>

- Async component <br><br>
- Dynamic import

##==##

<!-- .slide: class="two-column-layout" -->
# Async component
##--##
<br><br><br>

- Vue fournit une méthode utilitaire **defineAsyncComponent**
- Découpera le bundle final en "chunks"
- Appel réseau pour récupérer l'élément manquant
##--##
<br><br>

![h-600 center](assets/images/school/lazy-loading/async_component.png)


##==##

<!-- .slide: class="two-column-layout" -->
# Async component - Full
##--##
<br><br><br>

- On peut passer plus d'options
- 
##--##
<br><br>

![h-600 center](assets/images/school/lazy-loading/async_component_full.png)


##==##

<!-- .slide -->
# Import dynamique
<br>

![h-600 center](assets/images/school/lazy-loading/dynamic_import.png)

##==##

<!-- .slide -->
# Router vs Router avec lazy-loading
<br>

![h-600](assets/images/school/lazy-loading/router_js.png)
![h-600](assets/images/school/lazy-loading/router_lazy_import.png)
![h-600](assets/images/school/lazy-loading/router_lazy_loading.png)
