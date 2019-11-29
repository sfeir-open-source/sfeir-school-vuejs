<!-- .slide: class="sfeir-basic-slide" -->
# Webpack
<br>
<div class="flex-row configuration">
    <div>
        <ul>
            <li>Bundle en JavaScript</li><br>
            <li>Hot Reload</li><br>
        </ul>
    </div>
    <div>
        <img alt="h-700"  src="assets/images/school/tool/webpack.png">
    </div>
</div>
Notes:
- Au moment du build, webpack va pourvoir minifier le css, js et réaliser des bundles pour avoir une application la plus légère possible
- Hot Reload est une fonctionnalité présente grâce à la dépendance webpack dev server, il permet de rafraichir automatiquement les sources présentes dans le navigateur quand une mofification est faîte dans votre projet.

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Ecosystem Webpack pour Vue
<br>
<div class="flex-row configuration">
    <div>
        <ul>
            <li>Les commandes :<br>
                - npm run serve<br>
                - npm run build<br>
                - npm run test:unit<br>
                - npm run lint<br>
            </li><br>
            <li>
                Configuration :<br>
                 - dev, prod, int ...<br>
                 - fichier env avec l'extension .env<br>
            </li>
        </ul>
    </div>
    <div>
        <img src="assets/images/school/tool/vue_script_package.png">
    </div>
</div>

Notes:
Vue abstrait la conf webpack.<br>
Pour voir la conf webpack en clair :<br>
vue-cli-service inspect

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Le Material Design
<img alt="center h-900" src="assets/images/school/tool/material_design.png">
Notes:
 - Le Matérial Design sont des règles design. Ce sont des guidlines données par Google pour avoir une visualisation "arrondie" des choses

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Material Design dans notre TP
<br>
<ul>
    <li>Ce TP utilise des composants Material Design (ici vue-material)<br>
        - <span><strong>md-dialog</strong></span><br>
        - <span><strong>md-button</strong></span><br>
        - <span><strong>card-panel</strong></span><br>
        - <span><strong>...</strong></span>
    </li><br>
    <li>Pour l'utiliser => Vue.use(VueMaterial)</li><br>
    <li>Attention, il existe bien d'autres Framework Css, (Vuetify en est un exemple)</li>
</ul>

Notes:
Comparatif frameworks CSS pour vue :
https://www.npmtrends.com/vue-material-vs-vuetify-vs-bootstrap-vue-vs-element-ui-vs-buefy-vs-weui-vs-vulma

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Intégration simple vs single page application (spa)
<br>
<span><strong>A tout moment vous pouvez utiliser vos instances de vue (et vos composants)</strong></span><br><br>
<div>
    <ul>
        <li>directement dans votre application :<br>
            - inclure vos sources javascript dans votre page HTML
        </li><br>
        <li>en mode single page application :<br>
            - toute votre application est en Vue JS<br>
            - on utilise les outils propres à l'écosysteme de Vue (webpack + CLI)<br>
            - utilisation des imports et exports (ES6)<br>
        </li>
    </ul>
</div>
