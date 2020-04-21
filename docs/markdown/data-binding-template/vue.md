<!-- .slide: class="" -->
# Data Binding with Vue
<br><br>

![h-700 full-center](assets/images/school/data-binding-template/vue.png)


##==##

<!-- .slide: class="with-code inconsolata " -->
# Explication syntaxique
<br><br>
<b>Syntaxe de l'interpolation</b><br>
```html
<span>{{ name }}</span>
```
<!-- .element: class="medium-code" -->
<br><br>
<b>Syntaxe d'une propriété</b><br>
```html
<button v-bind:disabled="!name">Sign-In</button>
```
<!-- .element: class="medium-code" -->
<br><br>
<b>Syntaxe de l'event</b><br>
```html
<button v-on:click="signIn()" type="submit">
```
<!-- .element: class="medium-code" -->

##==##

<!-- .slide -->
# Interpolation et Expression
<br><br><br>

- Interpolation:
    - Se matérialise par les doubles accolades <br><br>
- Expression:
    - Uniquement dans le composant courant
    - Du JS => mais une seule expression

##==##

<!-- .slide" -->
# Properties binding
<br><br><br>

![center](assets/images/school/data-binding-template/properties_binding.png)
Notes:
 - Le binding s'effectue sur une propriété
 - La cible du properties binding s'effectue sur l'attribut d'un élément ou attribut d'un composant

##==##

<!-- .slide" -->
# Event Binding
<br><br><br>

![center](assets/images/school/data-binding-template/event_binding.png)
Notes:
 - De préférence utiliser la convention kebab case pour créer nos events custom
 - $event permet de récupérer les datas emises par le mot clé $emit
 - On peut utiliser les events natives grâce au .native => @focus.native
