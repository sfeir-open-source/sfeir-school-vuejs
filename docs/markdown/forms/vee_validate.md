<!-- .slide -->
# Template driven form avec Vee-Validate
<br><br>

- Ajoutez la dépendance => <b> npm install vee-validate --save</b>
- Ajoutez vee-validate au projet (instance principale de vue)
<br><br>

![center](assets/images/school/forms/vee_validate_import.png)
Notes:
 - VeeValidate est en version 3 actuellement, à partir de cette version, les règles de validations, les validations, la validation sur plusieurs champs ont été séparés en plusieurs bundles.
 Afin de faciliter la compréhension de tous l'import de ces packages permet de récupérer la validations et les règles de validation en un seul import
 - ValidationProvider permet de faire un block contenant input + error
 - ValidationObserver permet de faire un block contenant plusieurs ValidationProvider et réaliser une validation sur tous les ValidationProviders formant ce block

##==##

<!-- .slide -->
# Configuration
<br><br>
La configuration <strong>n'est pas nécessaire</strong> pour lancer la validation ou le bon fonctionnement du plugin<br>

![center](assets/images/school/forms/vee_validate_config.png)

##==##

<!-- .slide" -->
# Les Validateurs (ValidationProvider)
<br><br>

- Composant wrapper : <b>ValidationProvider</b>
- rules : règles de validation
- v-slot : passe des propriétés au template transclude
<br><br>

![center h-500](assets/images/school/forms/vee_validate_validation.png)

Notes:
 - les règles peuvent être un template string comme de l'exemple ou un objet => :rules="{required: true, min:{ length: 3 }}"

##==##

<!-- .slide -->
# La gestion des erreurs
<br><br>

- Pour avoir l'erreur courante errors[0]
- Pour avoir toutes les erreurs, composez avec v-for et la props :bails
<br><br>

![center](assets/images/school/forms/vee_validate_error_display.png)

##==##
<!-- .slide: class="sfeir-basic-slide" -->
# Les règles de validation classique
<br><br>

- Vee Validate fournit plusieurs règles de validation, pour les plus classiques:
    - required
    - email
    - regex
    - min
    - max<br><br>

- Pour plus d'informations sur ces règles de bases => https://logaretm.github.io/vee-validate/api/rules.html
Notes:
 - il est possible de créer ses propres règles de validation avec extends

 ##==##

 <!-- .slide -->
# Valider l'ensemble d'un formulaire: ValidationObserver
<br><br>

![full-center](assets/images/school/forms/vee_validate_validation_observer.png)

##==##

<!-- .slide: class="exercice" -->
# Exercice 13
## Exercice
<br>

- Validez les champs suivants:
    - firstname : requis, taille minimum de 2 lettres
    - lastname : requis, taille minimum de 2 lettres
    - email : requis et de type email
    - phone : requis et 10 chiffres, utiliser la rules regex
- Affichez les erreurs 1 à 1
- Utilisez la classe md-input-invalid sur la balise md-input-container lors d'une erreur
- Désactivez le bouton de validation si le formulaire est invalide (wrappez la balise md-content avec ValidationObserver)

##==##

<!-- .slide: class="exercice" -->
# Exercice 13
## Solution
<b>localhost:8080/step13_solution</b>
<!-- .element: class="full-center" -->

