<!-- .slide: class="transition" -->
# Formulaires

##==##

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

<!-- .slide: class="transition-bg-grey-1" -->
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

