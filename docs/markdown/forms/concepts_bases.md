<!-- .slide: class="sfeir-basic-slide" -->
# Le rôle d'un formulaire
<br><br>
<div class="flex-row">
    <ul>
        <li>Collecter des données utilisateur</li><br>
        <li>Valider les données saisies par les utilisateurs</li>
    </ul>
    <img alt="h-600 center" src="assets/images/school/forms/google_forms.png">
</div>

##==##

<!-- .slide: class="transition-white sfeir-bg-pink" -->
# Collecter des données

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Un directive magique: v-model
<div>
    <div>Permet de réaliser un</strong> two-way databinding</strong></div><br><br>
    <img alt="center" src="assets/images/school/forms/v-model_basic.png">
</div>
Notes:
- un changement de détection two-way databinding permet de réaliser une liaison vue-controller controller-vue:
- Si le template est modifié, la modification est répercutée sur le controlleur
- Si le controlleur est modifié, la modification est répercutée sur le template

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# L'utilisation de v-model
<br>
<div>
    <ul>
        <li>Placement de cette directive sur input, textarea, checkbox, radio, select et composants</li>
        <li>Peut être combiné avec v-for pour lister les options (select box)</li>
        <li>Utilisation de v-bind pour associer des valeurs dynamiques (radio / checkbox)</li>
    </ul><br><br>
    <div class="flex-row">
        <img src="assets/images/school/forms/checkbox.png">
        <img src="assets/images/school/forms/radio.png">
    </div>
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les modifiers de v-model
<br><br>
<ul>
    <li>lazy => changement de stratégie de synchronisation</li>
    <li>number => caster obligatoirement en number</li>
    <li>trim => éliminer les espaces superflus</li>
</ul>
<br><br>
<img alt="center" src="assets/images/school/forms/v-model_modificators.png">

##==##

<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<br>
<ul>
    <li>Créez un composant monofichier Form.vue</li>
    <li>Appelez ce composant dans People.vue</li>
    <li>Propagez les events cancel et save au People.vue</li>
    <li>Implémentez la méthode add dans People.vue au moment de l'event save</li>
</ul>
Notes:
 - Le composant People.vue a été aggrementé de deux méthodes showDiaolog et hideDialog
 - style, html du formulaire se trouvent dans le dossier src/_static
 - un bouton pour afficher la modal du formulaire a été ajouté
 - Api à utiliser pour sauvegarder une personne => http://localhost:9000/api/peoples/ (pensez à implémenter une méthode create dans le fichier service people)

 ##==##

 <!-- .slide: class="sfeir-bg-blue exercice" -->
 ## Solution
 <span class="full-center">localhost:8080/step11_solution</span>

 ##==##

 <!-- .slide: class="sfeir-bg-pink exercice" -->
 ## Exercice
<ul>
    <li>Créez un composant monofichier Update (dans le dossier views)</li>
    <li>Mettez à jour le ficher router.js (#/edit/:id)</li>
    <li>Réalisez la navigation vers l'update au click sur l'icône pencil de CardPanel.vue</li>
    <li>Dans le Hook beforeRouteEnter, pensez à récupérer l'id et récupérez le détail d'une personne (Update.vue)</li>
</ul>
Notes:
 - Pensez à créer une methode fecthOne dans le people service
 - api à utiliser http://localhost:9000/api/peoples/:id (GET)

 ##==##

 <!-- .slide: class="sfeir-bg-pink exercice" -->
 ## Exercice
<ul>
    <li>Utilisez Form.vue dans Update.vue</li>
    <li>Passez la personne récupérée au composant Form.vue (props)</li>
    <li>Créez une computed method editMode qui return true comme valeur quand on est dans le cas d'un update</li>
    <li>Ajoutez un header à Form.vue qui ne s'affiche que si editMode est true</li>
    <li>Propagez l'event save dans Update.vue pour modifier une personne</li>
</ul>
Notes:
 - s'il y a une personne alors editMode true, si pas de personne editMode false (formulaire de création)
 - Pensez à créer une méthode update dans le fichier people service
 - api:  http://localhost:9000/api/peoples/:id (PUT)

 ##==##

 <!-- .slide: class="sfeir-bg-blue exercice" -->
 ## Solution
 <span class="full-center">localhost:8080/step12_solution</span>
