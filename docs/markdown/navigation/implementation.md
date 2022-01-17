<!-- .slide -->
# Navigation programmatique (routing static)
<br>

- Récupération du routeur configuré => import router from 'router.js'<br><br>
- __Push :__
    - router.push('home') (nom de la route)
    - router.push({ path: 'home' }) (path de la route)
    - router.push({ name: 'home', params:{ id: '1234' }}) (router avec paramètres)
    - router.push({ path: 'home', query:{ id: '1234' }}) (route avec query paramètres)<br><br>
- __Replace__ : remplace l'url courante, ne change pas de vue, historique inchangé<br><br>
- __Go(n)__ : navigue dans l'historique
Notes:
 - Dans une instance Vue, vous pouvez accéder à l'instance du routeur via $router. Vous pouvez donc appeler this.$router.push.

##==##

<!-- .slide: class="two-column-layout" -->
# Navigation programmatique (router dynamique)
##--##
<br><br>
- Référence dans le template par $route.params<br><br>
- Comportement dépendant de paramètres<br><br>
- props au composant:
    - __Réutilisable__
    - __Testable__

##--##

![h-300](assets/images/school/navigation/template_params.png)
![h-300](assets/images/school/navigation/code_params.png)
![h-300](assets/images/school/navigation/props_router.png)
![h-300](assets/images/school/navigation/props_component.png)

##==##

<!-- .slide -->
# Navigation dans le template
<br><br>

![center](assets/images/school/navigation/router_templating.png)

