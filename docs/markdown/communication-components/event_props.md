<!-- .slide -->
# Events and Props
<br><br>

![center](assets/images/school/communication-components/communication_schema.png)

##==##

<!--.slide -->
# Les props (basique)
<br><br>

- Passées dans la propriété props
- Tableau de chaînes de propriétés

<br><br>

![](assets/images/school/communication-components/template_child_props.png)
![](assets/images/school/communication-components/template_parent_props.png)


##==##

<!-- .slide: class="two-column-layout" -->
# Les props (complète)
##--##
<br><br>

- Props peut également être un objet pour plus de contrôle<br><br>
- Définition :
    - Nom de la prop
    - Objet avec comme propriétés:
        - type
        - required
        - validator (custom function)
##--##
<br><br>

![h-750](assets/images/school/communication-components/complete_props.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide" -->
# Les events
<br><br>

- Le composant enfant envoie un event pour notifier le parent : this.$emit()
- Le composant parent écoute l'event grâce à <b>v-on</b> ou <b>@</b>

<br><br>

![h-500](assets/images/school/communication-components/child_event.png)
![h-500](assets/images/school/communication-components/parent_event.png)
Notes:
 - par convention il est préférable d'utiliser la syntax kebab case pour décrire son évènement
