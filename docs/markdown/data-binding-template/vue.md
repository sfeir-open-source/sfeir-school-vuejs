<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Data Binding with Vue
<br>

```html
<div>
  Bonjour <span>{{ myName }}</span>
  <input type="text" name="name" v-model="myName" />
</div>
```
<!-- .element: class="big-code"-->


##==##

<!-- .slide: class="with-code inconsolata " -->
# Explication syntaxique


__Syntaxe de l'interpolation__<br>
```html
<span>{{ name }}</span>
```
<!-- .element: class="medium-code" -->
<br><br>

__Syntaxe d'une propriété__<br>
```html
<button v-bind:disabled="!name">Sign-In</button>
```
<!-- .element: class="medium-code" -->
<br><br>

__Syntaxe de l'event__<br>
```html
<button v-on:click="signIn()" type="submit">
```
<!-- .element: class="medium-code" -->

##==##

<!-- .slide -->
# Interpolation et Expression
<br>

- Interpolation:
    - Se matérialise par les doubles accolades <br><br>
- Expression:
    - Uniquement dans le composant courant
    - Du JS => mais une seule expression

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Properties binding
<br>

```html
<img v-bind:src="dynamicUrl" alt="person-photo" with="100" height="100" />
<TodoItem v-bind:todo="todo" />
<TodoItem :todo="todo" />
<TodoItem v-bind="{ todo: todo }" />
```
<!-- .element: class="big-code"-->

Notes:
 - Le binding s'effectue sur une propriété
 - La cible du properties binding s'effectue sur l'attribut d'un élément ou attribut d'un composant

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Event Binding
<br>

```html
<button v-on:click="showAlert" type="button">Click me</button>
<TodoItem v-on:delete="removeTodoItem($event)" />
<TodoItem @delete="removeTodoItem" />
```
<!-- .element: class="big-code"-->

Notes:
 - De préférence utiliser la convention kebab case pour créer nos events custom
