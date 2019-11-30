<!-- .slide: class="transition-white sfeir-bg-pink" -->
# La validation

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les deux approches
<br><br>
<ul>
    <li>Template driven form (la validation est pilotée par le template): <strong>vee-validate</strong></li><br>
    <li>Model driven form (la validation est pilotée par le controlleur): <strong>vuelidate</strong></li><br>
    <li><strong>Attention</strong> ces solutions ne sont officiellement pas supportées par la core Team Vue JS</li>
</ul>
Notes:
 - documentation officiel de vee-validate: https://baianat.github.io/vee-validate/
 - documentation officiel de vuelidate: https://vuelidate.netlify.com

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les différents états d'un contôle
<br>
<ul>
    <li><strong>pristine</strong> : l’utilisateur n’a pas interagi avec le contrôle</li>
    <li><strong>dirty</strong> : l’utilisateur a déjà interagi avec le contrôle</li>
    <li><strong>touched</strong> : le contrôle a perdu le focus</li>
    <li><strong>untouched</strong> : le contrôle n'a pas perdu le focus</li>
    <li><strong>valid</strong> : Le contôle est valide</li>
    <li><strong>invalid</strong> : Le contôle n'est pas valide</li>
</ul>
