<!-- .slide -->
# Provide et Inject
<br>

- permet de fournir des informations à un enfant dans une structure de composants profondément imbriqués
- composant parent : __provide__
- composant enfant : __inject__

![center](assets/images/school/communication-components/provide-inject-schema.png)

##==##

<!-- .slide -->
# Provide et Inject / déclarations

![h-900](assets/images/school/communication-components/provide-inject-default.png)

##==##

<!-- .slide: class="two-column-layout" -->
# Provide et Inject / réactivité
##--##
<br><br>

- Provide / inject créé une liaison __non réactive__ par défaut
- utiliser une __computed__ de la Composition API pour rendre la liaison __réactive__



##--##
<br>

![h-900](assets/images/school/communication-components/provide-inject-reactive.png)
