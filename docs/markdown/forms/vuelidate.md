<!-- .slide: class="two-column-layout" -->
# Model driven form avec vuelidate
##--##
<br><br><br>

- Ajouter la dépendance => <b>npm install vuelidate --save</b><br><br>
- Ajouter vuelidate au projet

##--##
<br><br>

![](assets/images/school/forms/vuelidate_config.png)
<!-- .element: class="align-image" -->

##==##

<!-- .slide -->
# Implémentation dans le template
<br><br>

- Indiquez l'event qui déclenche les changements d'états ($touch: passe en dirty, $reset: passe en pristine)
- v-model pour le databinding
<br><br>

![center](assets/images/school/forms/vuelidate_template.png)

##==##

<!-- .slide" -->
# Implémentation dans le composant
<br>

- Dans l'objet "validations" de l'instance de votre composant
- Description du model de formulaire
- Chaque champ est une clé avec ses contraintes
<br><br>

![center h-700](assets/images/school/forms/vuelidate_component.png)

##==##

<!-- .slide -->
# Gestion des erreurs
<br>

- Accès à la propriété $v dans le template pour avoir accès à chaque champ
    - Objet $error sur le champ pour savoir s'il y a ou non erreur
    - Objet de contraintes sur un champ (required, minLength)
<br><br>

![center](assets/images/school/forms/vuelidate_error_display.png)

##==##

<!-- .slide -->
# Les règles de validation
<br><br>
Avec le plugin Vuelidate, les validateurs doivent être <b>importés</b></span><br><br>

- required
- maxLength, minLength
- between
<br><br>

Pour plus d'information sur les règles de validation proposées par vuelidate: https://vuelidate.netlify.com/#sub-builtin-validators

##==##

<!-- .slide: class="exercice" -->
# Exercice 14
## Exercice
<br><br>

- Transformez le composant Form.vue pour correspondre au model-driven<br><br>
- Utilisez la librairie Vuelidate<br><br>
- Pensez à prendre le mode création<br><br>
- Pas de pattern sur le champ phone
Notes: 
Pour voir les erreurs, pensez à mettre : <pre>:class="{ 'md-input-invalid': $v.person.firstname.$error }"</pre> sur les md-input-container qui entourent les champs

##==##

<!-- .slide: class="exercice" -->
# Exercice 14
## Solution
<b>localhost:8080/step14_solution</b>
<!-- .element: class="full-center" -->

##==##

<!-- .slide: class="transition-bg-grey-1" -->
# Vuelidate validation personnalisée

##==##

<!-- .slide -->
# Validator custom = fonction
<br><br>

- Créer son propre validateur revient à écrire une fonction
- Retourne true si la validation est <b>OK</b>
- Retourne false si la validation est <b>KO</b>
- Elle peut prendre des paramètres
<br><br>

![center h-600](assets/images/school/forms/vuelidate_custom_function.png)


##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Implémentation du validateur dans un composant
<br>
L'import se fait dans les règles de <b>validation</b>
<br><br>

![center](assets/images/school/forms/vuelidate_custom_function_implementation.png)

##==##

<!-- .slide: class="exercice" -->
# Exercice 15
## Exercice
<br><br>

- Créez une class customValidator (dossier components/forms/validators)
- Créez un validator qui vérifie le format du téléphone
- Créez un validator qui vérifie le format de l'adresse e-mail (regex: /^\w+\.\w@sfeir\.com$/)
- Associez ces validateurs aux contrôles phoneFormat et sfeirMail
- Affichez les messages d'erreurs correspondants
Notes:
Créer une propriété sfeirmail en plus dans l'objet validations.person.email, car il y a déjà "email" en validator.<br/><br/>
sfeirmail fait appel au customValidator qui effectue le test de la regexp

##==##

<!-- .slide: class="exercice" -->
# Exercice 15
## Solution
<b>localhost:8080/step15_solution</b>
<!-- .element: class="full-center" -->
Notes:
 - A partir de la version 3 de vee-validate on peut également créer ses propres règles
