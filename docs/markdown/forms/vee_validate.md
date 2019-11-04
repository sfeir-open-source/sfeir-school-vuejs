<!-- .slide: class="sfeir-basic-slide" -->
# Template driven form avec Vee-Validate
<br><br>
<div class="flex-row">
    <ul>
        <li>Ajouter la dépendance => <strong> npm install vee-validate --save</strong></li>
        <li>Ajouter vee-validate au projet (instance principale de vue)
    </ul>
    <img src="assets/images/school/forms/vee_validate_import.png">
</div>
Notes: 
 - VeeValidate est en version 3 actuellement, à partir de cette version, les règles de validations, les validations, la validation sur plusieurs champs ont été séparé en plusieurs bundles.
 Afin de faciliter la compréhension de tous l'import de ces packages permet de récupérer la validations et les règles de validation en un seul import
 - ValidationProvider permet de faire un block contenant input + error
 - ValidationObserver permet de faire un block contenant plusieurs ValidationProvider et réaliser une validation sur tous les ValidationProviders formant ce block

##==##

<!-- .slide: class="sfeir-basic-slide " -->
# Configuration
<span>La configuration <strong>n'est pas nécessaire</strong> pour lancer la validation / ou le bon fonctionnement du plugin</span><br><br>
<img class="center" src="assets/images/school/forms/vee_validate_config.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les Validateurs (ValidationProvider)
<br><br>
<ul>
    <li>Composant wrapper <strong>ValidationProvider</strong>
    <li>rules: règles de validation</li>
    <li>v-slot: passe des propriété au template transclude</li>
</ul>
<img class="center" src="assets/images/school/forms/vee_validate_validation.png">
Notes: 
 - les règles peuvent être un template string comme de l'exemple ou un objet => :rules="{required: true, min:{ length: 3 }}"

##==##
<!-- .slide: class="sfeir-basic-slide" -->
# La gestion des erreurs
<br><br>
<ul>
    <li>Pour avoir l'erreurs courantes errors[0]</li>
    <li>Pour avoir toutes les erreurs, composer avec v-for et la props :bails</li>
</ul>
<img src="assets/images/school/forms/vee_validate_error_display.png">

##==##
<!-- .slide: class="sfeir-basic-slide" -->
# Les règles de validation classique
<span>Vee Validate fournis plusieurs règles de validations, pour les plus classique:</span><br>
<ul>
    <li>required</li>
    <li>email</li>
    <li>regex</li>
    <li>min</li>
    <li>max</li>
</ul>
<div>Pour plus d'information sur ces règles de base => https://logaretm.github.io/vee-validate/api/rules.html</div>
<br>
Notes: 
 - il est possible de créer ses propores règle de validation avec extends

 ##==##
 
 <!-- .slide: class="sfeir-basic-slide" -->
# Valider l'ensemble d'un formulaire grâce à ValidationObserver
<img class="center" src="assets/images/school/forms/vee_validate_validation_observer.png">

##==##
<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice

<ul>
    <li>Valider les champs suivant:
        <div> - firstname: requis, taille minimum de 2 lettres</div>
        <div> - lastname: requis, taille minimum de 2 lettres</div>
        <div> - email requis et de type email</div>
        <div> - phone requis et 10 chiffres, utiliser la rules regex</div>
    </li>
    <li>Afficher les erreurs 1 à 1 </li>
    <li>Utiliser la class md-input-invalid sur la balise md-input-container lors d'une erreur</li>
    <li>Désactiver le bouton de validation si le formulaire est invalid (ValidationObservser sur md-content)</li>
</ul>

##==##

<!-- .slide: class="sfeir-bg-blue exercice" -->
## Solution
<span class="full-center">localhost:8080/step13_solution</span>

