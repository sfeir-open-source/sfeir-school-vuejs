<!-- .slide: class="sfeir-basic-slide" -->
# Implémentation du ficher router.js
<img alt="h-900 center" src="assets/images/school/navigation/router_js.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Importation Vue Router dans l'instance Vue
<img alt="h-900 center" src="assets/images/school/navigation/router_in_instance.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Balise obligatoire
<br><br>
<div>La navigation se fait à l'aide de la balise router-view</div><br><br>
<img alt="center" src="assets/images/school/navigation/router_view.png">

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Navigation programmatique (routing static)
<div>
    <ul>
        <li>Récuperation du router configuré => import router from 'router.js'</li><br>
        <li><strong>Push:</strong><br>
            <div>- router.push('home') (nom de la route)</div>
            <div>- router.push({ path: 'home' }) (path de la route)</div>
            <div>- router.push({ path: 'home', params:{ id: '1234' }})(router avec paramètres)</div>
            <div>- router.push({ path: 'home', query:{ id: '1234' }})(route avec query paramètres)</div>
        </li><br>
        <li><strong>Replace</strong> remplace l'url courant, ne change pas de vue, historique inchangé</li><br>
        <li><strong>Go(n) navigue dans l'historique</strong></li>
    </ul>
</div>

Notes: 
 - Dans une instance Vue, vous pouvez accéder à l'instance du routeur via $router. Vous pouvez donc appeler this.$router.push.

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Navigation programmatique (router dynamique)
<div class="flex-row">
    <div>
        <ul>
            <li>Référence dans le template par $route.params</li><br>
            <li>guard</li><br>
            <li>props au composant:<br>
                <div>- <strong>Réutilisable</strong</div>
                <div>- <strong>testable</strong></div>
            </li>
        </ul>
    </div>
    <div>
        <div><img alt="h-300" src="assets/images/school/navigation/template_params.png"></div>
        <div><img alt="h-300" src="assets/images/school/navigation/guards.png"></div>
        <div class="flex-row">
            <img alt="h-300" src="assets/images/school/navigation/props_router.png">
            <img alt="h-300" src="assets/images/school/navigation/props_component.png">
        </div>
    </div>
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Navigation dans le template
<br><br>
<img alt="center" src="assets/images/school/navigation/router_templating.png">