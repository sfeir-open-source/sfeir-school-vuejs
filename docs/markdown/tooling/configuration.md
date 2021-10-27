<!-- .slide: class="two-column-layout" -->
# Webpack
##--##
<br><br>

- Bundle en Javascript<br><br>
- Hot reload
##--##
![h-700](assets/images/school/tool/webpack.png)

Notes:
- Au moment du build, webpack va pourvoir minifier le css, js et réaliser des bundles pour avoir une application la plus légère possible
- Hot Reload est une fonctionnalité présente grâce à la dépendance webpack dev server, il permet de rafraichir automatiquement les sources présentes dans le navigateur quand une mofification est faîte dans votre projet.

##==##

<!-- .slide: class="two-column-layout" -->
# Ecosystem Webpack pour Vue

##--##
<br><br>

- les commandes
    - npm run serve
    - npm run build
    - npm run test:unit
    - npm run lint<br><br>
- Configuration
    - dev, prod, int ...
    - fichier env avec l'extension .env

##--##
<br><br>

![](assets/images/school/tool/vue_script_package.png)

Notes:
Vue abstrait la conf webpack.<br>
Pour voir la conf webpack en clair :<br>
vue-cli-service inspect

##==##

<!-- .slide" -->
# Intégration simple vs single page application (spa)
<br><br>
__A tout moment vous pouvez utiliser vos instances de vue (et vos composants)__
<br><br>

- directement dans votre application
    - inclure vos sources javascript dans votre page HTML<br><br>
- en mode single page application
    - toute votre application est en Vue JS
    - on utilise les outils propres à l'écosysteme de Vue (webpack + CLI)
    - utilisation des imports et exports (ES6)
