<!-- .slide: class="exercice" -->
# Exercice 2
## Exercice
<br>

- Dans le fichier <b>main.js</b>
    - Importez Vue
    - Importez Vue Material
    - Enregistrez un thème pour Vue Material
    - Indiquez à Vue que vous utilisez Material<br><br>
- Dans le fichier <b>index.html</b>
    - Supprimez l'import de vue
    - Affichez notre composant dans un composant md-card

Notes:
- Vue material "Getting Started" : https://vuematerial.io/getting-started/
- Vue material "Card" : https://vuematerial.io/components/card/
- Code pour la configuration du thème :
<pre>
import 'vue-material/dist/vue-material.css';

// Pour la configuration du thème
Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'grey',
    warn: 'red'
});
</pre>

##==##

<!-- .slide: class="exercice" -->
# Exercice 2
## Solution
<b>localhost:8080/step02_solution</b>
<!-- .element: class="full-center" -->

