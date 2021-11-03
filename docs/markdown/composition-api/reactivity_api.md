# API de réactivité

Permet de définir le comportement d'objets javascript "à la façon Vue"
(peut être utilisé de façon indépendante d'un composant Vue)

![center](assets/images/school/composition-api/reactivity-example-ref.png)

##==##
<!-- .slide: class="two-column-layout" -->
# Computed

On retrouve le même principe pour tous les éléments d'un composant
##--##
![mt-150](assets/images/school/composition-api/reactivity-example-computed.png)
##--##

![mt-150](assets/images/school/composition-api/reactivity-example-watch.png)

##==##

# Avec l'API de composition

Le retour de la fonction **setup** ne doit pas contenir de type primitif non défini avec un `ref`

![h-800 center](assets/images/school/composition-api/reactivity-example-all-in-one.png)

##==##

# Nouveau problème

"Mais on n'a fait que déplacer le problème dans une grosse méthode setup"

![h-500 center](assets/images/school/composition-api/absolutely.gif)
