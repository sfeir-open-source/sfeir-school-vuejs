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
    <li>Indiquez l'event qui déclenche les changements d'états ($touch: passe en dirty, $reset: passe en pristine)</li>
    <li>v-model pour le databinding</li>
</ul>
<br><br>
<img alt="center" src="assets/images/school/forms/vuelidate_template.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Implémentation dans le composant
<div>
    <ul>
        <li>Dans l'objet "validations" de l'instance de votre composant</li>
        <li>Description du model de formulaire</li>
        <li>Chaque champ est une clé avec ses contraintes</li>
    </ul>
</div>
<br>
<img alt="center h-700" src="assets/images/school/forms/vuelidate_component.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Gestion des erreurs
<br>
<ul>
    <li>Accès à la propriété $v dans le template pour avoir accès à chaque champ
        <div> - Objet $error sur le champ pour savoir s'il y a ou non erreur</div>
        <div> - Objet de contraintes sur un champ (required, minLength)</div>
    </li>
</ul><br><br>
<img alt="center" src="assets/images/school/forms/vuelidate_error_display.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les règles de validation
<br><br>
<span>Avec le plugin Vuelidate, les validateurs doivent être <strong>importés</strong></span><br>
<ul>
    <li>required</li>
    <li>maxLength, minLength</li>
    <li>between</li>
</ul>
<br><br>
<span>Pour plus d'information sur les règles de validation proposées par vuelidate: https://vuelidate.netlify.com/#sub-builtin-validators</span>

##==##

<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<br>
<ul>
    <li>Transformez le composant Form.vue pour correspondre au model-driven</li>
    <li>Utilisez la librairie Vuelidate</li>
    <li>Pensez à prendre le mode création</li>
    <li>Pas de pattern sur le champ phone</li>
</ul>

Notes
Pour voir les erreurs, pensez à mettre : <pre>:class="{ 'md-input-invalid': $v.person.firstname.$error }"</pre> sur les md-input-container qui entourent les champs

##==##

<!-- .slide: class="sfeir-bg-blue exercice" -->
## Solution
<span class="full-center">localhost:8080/step14_solution</span >

##==##

<!-- .slide: class="transition-white sfeir-bg-pink" -->
# Vuelidate validation personnalisée

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Validator custom = fonction
<ul>
    <li>Créer son propre validateur revient à écrire une fonction</li>
    <li>Retourne true si la validation est <strong>OK</strong></li>
    <li>Retourne false si la validation est <strong>KO</strong></li>
    <li>Elle peut prendre des paramètres</li>
</ul><br><br>
<img alt="center h-600" src="assets/images/school/forms/vuelidate_custom_function.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Implémentation du validateur dans un composant
<br>
<span>L'import se fait dans les règles de <strong>validation</strong></span>
<br><br>
<img alt="center" src="assets/images/school/forms/vuelidate_custom_function_implementation.png">

##==##

<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<ul>
    <li>Créez une class customValidator (dossier components/forms/validators)</li>
    <li>Créez un validator qui vérifie le format du téléphone</li>
    <li>Créez un validator qui vérifie le format de l'adresse e-mail (regex: /^\w+\.\w@sfeir\.com$/) </li>
    <li>Associez ces validateurs aux contrôles phoneFormat et sfeirMail</li>
    <li>Affichez les messages d'erreurs correspondants</li>
</ul>

##==##

<!-- .slide: class="sfeir-bg-blue exercice" -->
## Solution
<span class="full-center" >localhost:8080/step15_solution</span>
Notes:
 - A partir de la version 3 de vee-validate on peut également créer ses propres règles
