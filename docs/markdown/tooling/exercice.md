<!-- .slide: class="sfeir-bg-pink exercice" -->
## Exercice
<ul>
    <li>Dans le fichier <strong>main.js</strong><br>
        - Importez Vue<br>
        - Importez Vue Material<br>
        - Enregistrez un theme pour Vue Material<br>
        - Indiquez à Vue que vous utiliser Material
    </li>
    <li>Dans le fichier <strong>index.html</strong><br>
        - Supprimer l'import de vue<br>
        - Afficher notre composant dans un composant md-card
    </li>
</ul>

Notes
- Vue material "Getting Started" : https://vuematerial.io/getting-started/
- Vue material "Card" : https://vuematerial.io/components/card/
- Code pour la configuration du thème :
<pre>
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

