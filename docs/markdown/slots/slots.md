<!-- .slide: class="two-column-layout" -->
# Slots / principe
##--##
<br><br>

- permet d'avoir des zone de ditribution  de contenu dans les composants
- espace réservé, rempli par le composant parent
- peut inclure du texte, de l'HTML et d'autres composants
<br><br>

![h-400](assets/images/school/slots/slot-base-component.png)
<!-- .element: class="align-image" -->

##--##
<br>

![h-800](assets/images/school/slots/slot-base-usages.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Slots / valeur par défaut
##--##
<br>

- Définir un contenu par défaut
- Contenu affiché si le composant parent n'injecte rien dans le slot
<br><br>

![h-400](assets/images/school/slots/slot-default-component.png)

##--##
<br>

![h-700](assets/images/school/slots/slot-default-usage.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Slots / slots només
##--##
<br>

- directive <b>v-slot</b> sur un <b>&lt;template&gt;</b> avec le nom du slot en argument
- le contenu hors template sera déstiné au slot par défaut 
- la syntaxe abréviée de <b>v-slot:header</b> est <b>#header</b>

<br>

![h-500](assets/images/school/slots/slot-named-component.png)

##--##
<br>

![h-800](assets/images/school/slots/slot-named-usage.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Slots / porté des données 
##--##
<br><br>

- le slot a accès à la même portée que le reste du template
- le slot n'accede pas à la portée du composant

<br>

![h-500](assets/images/school/slots/slot-scope-ko.png)

##--##
<br>

![h-800](assets/images/school/slots/slot-scope-ok.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Slots / slots avec portée
##--##
<br>

- permet d'acceder au données du composant enfant dans le parent
- props de slot : attibuts liés à l'élément <b>slot</b>
- les props de slot peuvent ête déconstruite pour simplifier l'écriture

<br>

![h-500](assets/images/school/slots/slot-props-compoment.png)

##--##
<br>

![h-900](assets/images/school/slots/slot-props-usage-complete.png)
<!-- .element: class="align-image" -->
