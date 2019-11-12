<!-- .slide: class="sfeir-basic-slide" -->
# Events and Props
<br><br>
<img alt="center" src="assets/images/school/communication-components/communication_schema.png">

##==##

<!--.slide: class="sfeir-basic-slide" -->
# Les props (basique)
<div>
    <ul>
        <li>Passées dans la propriété props</li>
        <li>Tableau de chaînes de propriétes</li>
    </ul>
    <br><br>
    <div class="flex-row">
        <img src="assets/images/school/communication-components/template_child_props.png">
        <img src="assets/images/school/communication-components/template_parent_props.png">
    </div>
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les props (complète)
<div class="flex-row">
    <ul>
        <li>Props peut également être un object pour plus de contrôle</li>
        <li>Définition: nom de la prop: contraintes object: <br>
            <div>- type</div>
            <div>- required</div>
            <div>- validator custom function</div>
        </li>
    </ul>
    <img alt="h-750" src="assets/images/school/communication-components/complete_props.png">
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les events
<div>
    <ul>
        <li>Le composant enfant envoie un event pour notifier le parent: this.$emit()</li>
        <li>Le composant parent écoute l'event grâce à <strong>v-on</strong> ou <strong>@</strong></li>
    </ul>
    <br><br><br>
    <div class="flex-row">
        <img alt="h-400" src="assets/images/school/communication-components/child_event.png">
        <img alt="h-400" src="assets/images/school/communication-components/parent_event.png">
    </div>
</div>
Notes:
 - par convention il est préférable d'utiliser la syntax kebab case pour décrire son évènement
