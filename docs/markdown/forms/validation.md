<!-- .slide: class="transition-bg-grey-1 underline" -->
# La validation

##==##

<!-- .slide -->
# Les deux approches
<br><br><br>

- Template driven form (la validation est pilotée par le template): <b>vee-validate</b><br><br>
- Model driven form (la validation est pilotée par le controlleur): <b>vuelidate</b><br><br>
- <b>Attention</b> ces solutions ne sont officiellement pas supportées par la core Team Vue JS
Notes:
 - documentation officiel de vee-validate: https://baianat.github.io/vee-validate/
 - documentation officiel de vuelidate: https://vuelidate.netlify.com

##==##

<!-- .slide -->
# Les différents états d'un contôle
<br><br>

- <b>pristine</b> : l’utilisateur n’a pas interagi avec le contrôle<br><br>
- <b>dirty</b> : l’utilisateur a déjà interagi avec le contrôle<br><br>
- <b>touched</b> : le contrôle a perdu le focus<br><br>
- <b>untouched</b> : le contrôle n'a pas perdu le focus<br><br>
- <b>valid</b> : Le contôle est valide<br><br>
- <b>invalid</b> : Le contôle n'est pas valide

