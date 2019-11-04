<!-- .slide: class="sfeir-basic-slide" -->
# Model driven form avec vuelidate
<br>
<div class="flex-row">
    <ul>
        <li>Ajouter la dépendance => <strong>npm install vuelidate --save</strong></li>
        <li>Ajouter vuelidate au projet</li>
    </ul>
    <img src="assets/images/school/forms/vuelidate_config.png">
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Implémentation dans le template
<br>
<ul>
    <li>Indiquer l'event qui déclanche les changements d'états ($touch: passer en dirty, $reset: passer en pristine)</li>
    <li>v-model pour le databinding</li>
</ul>
<img alt="center" src="assets/images/school/forms/vuelidate_template.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Implémentation dans le composant
<div class="flex-row">
    <ul>
        <li>Dans l'object validations</li>
        <li>Description du model de formulaire</li>
        <li>Chaque champs est un clé avec ses contraintes</li>
    </ul>
    <img src="assets/images/school/forms/vuelidate_component.png">
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Gestion des erreurs
<ul>
    <li>Accès à la propriété $v dans le template pour avoir accès à chaque champs
        <div> - object $error sur le champs pour savoir s'il y a ou non error</div>
        <div> - object de contrainte sur un champs (required, minLength)
    </li>
</ul>
<img alt="center" src="assets/images/school/forms/vuelidate_error_display.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les règles de validation
<br><br>
<span>Avec le plugin Vuelidate, les validateurs doivent être <strong>importer</strong></span><br>
<ul>
    <li>required</li>
    <li>maxLength, minLength</li>
    <li>between</li>
</ul>
<br><br>
<span>Pour plus d'information sur les règles de validations proposées par vuelidate: https://vuelidate.netlify.com/#sub-builtin-validators</span>

##==##

<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<br>
<ul>
    <li>Transfomer le composant Form.vue pour correspondre au model-driver</li>
    <li>Utiliser la librairie Vuelidate</li>
    <li>Penser à prendre le mode création</li>
    <li>Pas de pattern sur le champs phone</li>
</ul>

##==##

<!-- .slide: class="sfeir-bg-blue exercice" -->
## Solution
<span class="full-center">localhost:8080/step14_solution</span >

##==##

<!-- .slide: class="transition-white sfeir-bg-pink" -->
# Vuelidate validation personnalisé

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Validator custom = fonction
<br>
<ul>
    <li>Créer son propre validateur revient à écrire une fonction</li>
    <li>Retourne true si la validation est <strong>OK</strong></li>
    <li>Retourne false si la validation est <strong>KO</strong></li>
    <li>Elle peut prendre des paramètre</li>
<ul>
<img alt="center" src="assets/images/school/forms/vuelidate_custom_function.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Implémentation du validateur dans un composant
<span>L'import se fait dans les règles de <strong>validations</strong></span>
<br><br>
<img alt="center" src="assets/images/school/forms/vuelidate_custom_function_implementation.png">

##==##

<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<ul>
    <li>Créer une class customValidator (dossier components/forms/validators)</li>
    <li>Créer un validator qui vérifie le format de téléphone</li>
    <li>Créer un validator qui vérifie le format de l'addresse email (regex: /^\w+\.\w@sfeir\.com$/) </li>
    <li>Associer ces validateurs au control phoneFormat et sfeirMail</li>
    <li>Afficher les messages d'erreurs correspondants</li>
</ul>

##==##

<!-- .slide: class="sfeir-bg-blue exercice" -->
## Solution
<span class="full-center" >localhost:8080/step15</span>
Notes: 
 - A partir de la version vee-validate on peut également créer ses propres règles (réalisation de la démo en live)