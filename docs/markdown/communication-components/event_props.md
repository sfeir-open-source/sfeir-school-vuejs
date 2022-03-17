<!-- .slide -->
# Props et events
<br>

![center](assets/images/school/communication-components/communication_schema.png)

##==##

<!--.slide -->
# Les props (basique)
<br>

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
<br>

![h-750](assets/images/school/communication-components/complete_props.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide" -->
# Les events
<br>

- Le composant enfant envoie un event pour notifier le parent : this.$emit()
- Le composant parent écoute l'event grâce à __v-on__ ou __@__

<br><br>

![h-500](assets/images/school/communication-components/child_event.png)
![h-500](assets/images/school/communication-components/parent_event.png)
Notes:
 - par convention il est préférable d'utiliser la syntax kebab case pour décrire son évènement

##==##

<!-- .slide: class="two-column-layout" -->
# Gestion des évènements DOM

- Nom de l'event précédé par __v-on__ ou __@__(notation simplifiée)
- Event fait généralement référence à une fonction définie dans la propriété "methods" de l'instance de votre composant
- Récupération des datas de l'event dans le paramètre <strong>$event</strong>

##--##
<br><br><br><br><br><br>

![](assets/images/school/dom-event-gestion/event_html_definition.png)

##--##
<br><br><br><br><br><br>

![h-500](assets/images/school/dom-event-gestion/event_js_definition.png)
<!-- .element: class="align-image" -->
