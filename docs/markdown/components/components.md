<!-- .slide: class="two-column-layout" -->
# Un arbre de composants
##--##
<br><br>

- Une application Vue Js est une composition de composants<br><br>
- Les enfants sont ajoutés au parent s'ils sont dans le template parent<br><br>
- Tout composant doit être déclaré dans l'objet "components"<br>

##--##
<br><br>

![h-400](assets/images/school/components/child_component.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide -->
# Créer un composant / composant global
<br><br>

- Utilisation de Vue.component(tagname, optionObject)<br><br>
- Options identiques à celles de l'instance<br><br>
- Attention, l'option "data" doit être une fonction retournant un objet

##==##

<!-- .slide: class="two-column-layout" -->
# Créer un composant / composant monofichier
##--##
<br><br>

- Pourquoi ?
    - nom unique non obligatoire
    - template sous forme de chaîne de caractères
    - absence de support css
    - pas de système de build<br><br>
- Tous dans un même fichier<br><br>
- Plugin Webpack déjà présent

##--##
<br>

![h-900](assets/images/school/components/mono_fichier.png)
<!-- .element: class="align-image" -->
