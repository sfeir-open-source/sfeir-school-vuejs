<!-- .slide: class="sfeir-basic-slide" -->
# Template driven form avec Vee-Validate
<br>
<div>
    <ul>
        <li>Ajoutez la dépendance => <strong> npm install vee-validate --save</strong></li>
        <li>Ajoutez vee-validate au projet (instance principale de vue)
    </ul>
</div>
<br>
<img alt="center" src="assets/images/school/forms/vee_validate_import.png">
Notes:
 - VeeValidate est en version 3 actuellement, à partir de cette version, les règles de validations, les validations, la validation sur plusieurs champs ont été séparés en plusieurs bundles.
 Afin de faciliter la compréhension de tous l'import de ces packages permet de récupérer la validations et les règles de validation en un seul import
 - ValidationProvider permet de faire un block contenant input + error
 - ValidationObserver permet de faire un block contenant plusieurs ValidationProvider et réaliser une validation sur tous les ValidationProviders formant ce block

##==##

<!-- .slide: class="sfeir-basic-slide " -->
# Configuration
<span>La configuration <strong>n'est pas nécessaire</strong> pour lancer la validation ou le bon fonctionnement du plugin</span><br><br>
<img class="center" src="assets/images/school/forms/vee_validate_config.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les Validateurs (ValidationProvider)
<br>
<ul>
    <li>Composant wrapper : <strong>ValidationProvider</strong>
    <li>rules : règles de validation</li>
    <li>v-slot : passe des propriétés au template transclude</li>
</ul>
<br><br>
<div>
    <img class="center h-500" src="assets/images/school/forms/vee_validate_validation.png">
</div>

Notes:
 - les règles peuvent être un template string comme de l'exemple ou un objet => :rules="{required: true, min:{ length: 3 }}"

##==##
<!-- .slide: class="sfeir-basic-slide" -->
# La gestion des erreurs
<br>
<ul>
    <li>Pour avoir l'erreur courante errors[0]</li>
    <li>Pour avoir toutes les erreurs, composez avec v-for et la props :bails</li>
</ul><br><br>
<div>
    <img alt="center" src="assets/images/school/forms/vee_validate_error_display.png">
</div>


##==##
<!-- .slide: class="sfeir-basic-slide" -->
# Les règles de validation classique
<br><br>
<span>Vee Validate fournit plusieurs règles de validation, pour les plus classiques:</span><br>
<ul>
    <li>required</li>
    <li>email</li>
    <li>regex</li>
    <li>min</li>
    <li>max</li>
</ul>
<div>Pour plus d'informations sur ces règles de bases => https://logaretm.github.io/vee-validate/api/rules.html</div>
<br>
Notes:
 - il est possible de créer ses propres règles de validation avec extends

 ##==##

 <!-- .slide: class="sfeir-basic-slide" -->
# Valider l'ensemble d'un formulaire grâce à ValidationObserver
<br><br>
<img class="center" src="assets/images/school/forms/vee_validate_validation_observer.png">

##==##
<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<ul style="font-size: 1.3em">
    <li>Validez les champs suivants :
        <div> - firstname : requis, taille minimum de 2 lettres</div>
        <div> - lastname : requis, taille minimum de 2 lettres</div>
        <div> - email : requis et de type email</div>
        <div> - phone : requis et 10 chiffres, utiliser la rules regex</div>
    </li>
    <li>Affichez les erreurs 1 à 1 </li>
    <li>Utilisez la classe md-input-invalid sur la balise md-input-container lors d'une erreur</li>
    <li>Désactivez le bouton de validation si le formulaire est invalide (wrappez la balise md-content avec ValidationObserver)</li>
</ul>

##==##

<!-- .slide: class="sfeir-bg-blue exercice" -->
## Solution
<span class="full-center">localhost:8080/step13_solution</span>

