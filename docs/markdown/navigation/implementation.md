<!-- .slide" -->
# Implémentation du ficher router.js
<br>

![h-900 center](assets/images/school/navigation/router_js.png)

##==##

<!-- .slide" -->
# Importation Vue Router dans l'instance Vue
<br>

![h-900 center](assets/images/school/navigation/router_in_instance.png)

##==##

<!-- .slide -->
# Balise obligatoire
<br><br>
La navigation se fait à l'aide de la balise router-view
<br><br><br>

![center](assets/images/school/navigation/router_view.png)


##==##

<!-- .slide -->
# Navigation programmatique (routing static)
<br><br>

- Récupération du routeur configuré => import router from 'router.js'<br><br>
- <b>Push:</b>
    - router.push('home') (nom de la route)
    - router.push({ path: 'home' }) (path de la route)
    - router.push({ name: 'home', params:{ id: '1234' }}) (router avec paramètres)
    - router.push({ path: 'home', query:{ id: '1234' }}) (route avec query paramètres)<br><br>
- <b>Replace</b>: remplace l'url courante, ne change pas de vue, historique inchangé<br><br>
- <b>Go(n)</b>: navigue dans l'historique
Notes:
 - Dans une instance Vue, vous pouvez accéder à l'instance du routeur via $router. Vous pouvez donc appeler this.$router.push.

##==##

<!-- .slide: class="two-column-layout" -->
# Navigation programmatique (router dynamique)
##--##
<br><br>
- Référence dans le template par $route.params<br><br>
- guard<br><br>
- props au composant:
    - <b>Réutilisable</b>
    - <b>Testable</b>

##--##

![h-300](assets/images/school/navigation/template_params.png)
![h-300](assets/images/school/navigation/guards.png)
![h-300](assets/images/school/navigation/props_router.png)
![h-300](assets/images/school/navigation/props_component.png)

##==##

<!-- .slide -->
# Navigation dans le template
<br><br><br>

![center](assets/images/school/navigation/router_templating.png)

