<!-- .slide: class="two-column-layout" -->
# Le rôle d'un formulaire
##--##
<br><br><br>

- Collecter des données utilisateur<br><br>
- Valider les données saisies par les utilisateurs

##--##
<br><br><br>

![h-600 center](assets/images/school/forms/google_forms.png)
<!-- .element: align-image -->

##==##

<!-- .slide: class="transition-bg-grey-1 underline" -->
# Collecter des données

##==##

<!-- .slide -->
# Un directive magique: v-model
<br>

- Permet de réaliser un __two-way databinding__
<br><br>

![center](assets/images/school/forms/v-model_basic.png)
Notes:
- un changement de détection two-way databinding permet de réaliser une liaison vue-controller controller-vue:
- Si le template est modifié, la modification est répercutée sur le controlleur
- Si le controlleur est modifié, la modification est répercutée sur le template

##==##

<!-- .slide -->
# L'utilisation de v-model


- Placement de cette directive sur input, textarea, checkbox, radio, select et composants
- Peut être combiné avec v-for pour lister les options (select box)
- Utilisation de v-bind pour associer des valeurs dynamiques (radio / checkbox)
<br><br>

![](assets/images/school/forms/checkbox.png)
![](assets/images/school/forms/radio.png)

##==##

<!-- .slide -->
# Les modifiers de v-model

- lazy => changement de stratégie de synchronisation
- number => caster obligatoirement en number
- trim => éliminer les espaces superflus
<br><br>

![center](assets/images/school/forms/v-model_modificators.png)

##==##

<!-- .slide: class="exercice" -->
# Exercice 11
## Exercice
<br>

- Créez un composant monofichier Form.vue<br><br>
- Appelez ce composant dans People.vue<br><br>
- Propagez les events cancel et save au People.vue<br><br>
- Implémentez la méthode add dans People.vue au moment de l'event save<br><br>
Notes:
 - Api à utiliser pour sauvegarder une personne => POST http://localhost:9000/api/peoples/ (pensez à implémenter une méthode create dans le fichier service people)

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 11
 ## Solution
 __localhost:8080/step11_solution__
 <!-- .element: class="full-center" -->

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 12
 ## Exercice
 <br>

 - Créez un composant monofichier Update (dans le dossier views)<br><br>
 - Mettez à jour le ficher router.js (#/edit/:id)<br><br>
 - Réalisez la navigation vers l'update au click sur l'icône pencil de CardPanel.vue<br><br>
 - Dans le Hook beforeRouteEnter, pensez à récupérer l'id et récupérez le détail d'une personne (Update.vue)<br><br>
Notes:
 - Pensez à créer une methode fecthOne dans le people service
 - api à utiliser http://localhost:9000/api/peoples/:id (GET)

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 12 (suite)
 ## Exercice
 <br>

 - Utilisez Form.vue dans Update.vue<br><br>
 - Passez la personne récupérée au composant Form.vue (props)<br><br>
 - Créez une computed method editMode qui return true comme valeur quand on est dans le cas d'un update<br><br>
 - Ajoutez un header à Form.vue qui ne s'affiche que si editMode est true<br><br>
 - Propagez l'event save dans Update.vue pour modifier une personne
Notes:
 - s'il y a une personne alors editMode true, si pas de personne editMode false (formulaire de création)
 - Pensez à créer une méthode update dans le fichier people service
 - api:  http://localhost:9000/api/peoples/:id (PUT)

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 12
 ## Solution
 __localhost:8080/step12_solution__
 <!-- .element: class="full-center" -->
