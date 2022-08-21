<!-- .slide: class="two-column-layout" -->
# Vite
##--##
<br><br>

- Bundle en Javascript<br><br>
- Hot reload <br/><br/>
- no code <br/><br/>
- configuration with rollup plugins
##--##
![h-700](assets/images/school/tool/logo-with-shadow.png)

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Ecosystem Vite pour Vue

<br><br>

- les commandes <br/><br/>
    - npm run dev
    - npm run build
    - npm run lint<br><br>
- Configuration<br/><br>
    - dev, prod, int ...
    - fichier env avec l'extension .env

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Cette formation utilise la lib design Naive UI
![h-900 center](assets/images/school/tool/naive-ui.png)

##==##

<!-- .slide -->
# Naive UI dans notre formation
<br>

- Cette formation utilise des composants Naive UI
    - <b>n-card</b>
    - <b>n-button</b>
    - <b>n-page-header</b>
    - <b>...</b><br><br>
- Pour l'utiliser -> Vue.use(naive)<br><br>
- Attention, il existe bien d'autres Framework Css, (Element Plus en est un exemple)


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
    - on utilise les outils propres à l'écosystème de Vue (Vite + ecosystem plugins)
    - utilisation des imports et exports (ES6)
