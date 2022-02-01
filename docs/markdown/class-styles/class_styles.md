<!-- .slide: class="with-code inconsolata " -->
# Liaisons de classes 

__syntaxe Objet__<br>
```html
<div v-bind:class="{ active: isActive }"></div>
```
<!-- .element: class="medium-code" -->

__syntaxe Tableau__<br>
```html
<div v-bind:class="['default-class', errorClass, isActive ? activeClass : '']"></div>
```
<!-- .element: class="medium-code" -->


__Lier des classes à des composants__<br>
![h-500](assets/images/school/class-styles/class-component.png)

##==##

<!-- .slide: class="with-code inconsolata " -->
# Liaisons de style

__syntaxe Objet__<br>
```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
<!-- .element: class="medium-code" -->
<br>

__Valeur multiples__<br>
```html 
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```
<!-- .element: class="medium-code" -->
<br>

__syntaxe Tableau__<br>
```html
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```
<!-- .element: class="medium-code" -->
<br>
