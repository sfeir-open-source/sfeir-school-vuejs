<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<h1>Step 02</h1>
<ul>
    <li>Dans le fichier <strong>main.js</strong><br>
        - Importez Vue<br>
        - Importez Vue Material<br>
        - Enregistrez un thème pour Vue Material<br>
        - Indiquez à Vue que vous utilisez Material
    </li>
    <li>Dans le fichier <strong>index.html</strong><br>
        - Supprimez l'import de vue<br>
        - Affichez notre composant dans un composant md-card
    </li>
</ul>

Notes
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

<!-- .slide: class="sfeir-bg-blue exercice" -->
## Solution
<br><br>
<span class="full-center"><strong>localhost:8080/step02_solution</strong></span>

