<!-- .slide: class="sfeir-basic-slide" -->
# Data Binding with Vue
<br><br>
<div class="full-center">
    <div>
        <img alt="h-700"src="assets/images/school/data-binding-template/vue.png">
    </div>
</div>

##==##

<!-- .slide: class="sfeir-basic-slide with code -->
# Explication syntaxique
<span><strong>Syntax de l'Interpolation</strong></span><br><br>
```html
<span>{{ name }}</span>
```
<br><br>
<span><strong>Syntax d'une propriété</strong></span><br><br>
```html
<button v-bind:disabled="!name">Sign-In</button>
```
<br><br>
<span><strong>Syntax de l'event</strong></span><br><br>
```html
<button v-on:click="signIn()" type="submit">
```

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Interpolation et Expression
<br><br><br>
<ul>
    <li>Interpolation:<br>
        - Se matérialise par les doubles accolades
    </li><br>
    <li>Expression: <br>
        - uniquement dans le composant courant<br>
        - Du JS => mais une seule expression
    </li>
</ul>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Properties binding
<br>
<img alt="center" src="assets/images/school/data-binding-template/properties_binding.png">
Notes:
 - Le binding s'effectue sur une proprité
 - La cible du properties binding s'effectue sur l'attribut d'un élément ou attribut d'un composant

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Event Binding
<br>
<img alt="center" src="assets/images/school/data-binding-template/event_binding.png">
Notes:
 - De préférence utiliser la convention kebab case pour créer nos events custom
 - $event permet de récupérer les datas emises par le mot clé $emit
 - On peut utiliser les events natives grâce au .native => @focus.native
