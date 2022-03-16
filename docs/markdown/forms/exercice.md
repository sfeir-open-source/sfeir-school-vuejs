<!-- .slide: class="exercice" -->
# Exercice 10-form
## Exercice
<br>

- Créez un composant monofichier Form.vue<br><br>
- Appelez ce composant dans People.vue<br><br>
- Propagez les events cancel et save au People.vue<br><br>
- Implémentez la méthode add dans People.vue au moment de l'event save (POST /peoples)<br><br>
Notes:
 - Api à utiliser pour sauvegarder une personne => POST http://localhost:9000/api/peoples/ (pensez à implémenter une méthode create dans le fichier service people)

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 10-form
 ## Solution
 **10-form-solution**
 <!-- .element: class="full-center" -->

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 11-update
 ## Exercice
 <br>

 - Créez un composant monofichier Update (dans le dossier views)<br><br>
 - Mettez à jour le ficher router.js (#/edit/:id)<br><br>
 - Réalisez la navigation vers l'update au click sur l'icône pencil de CardPanel.vue<br><br>
 - Utilisez le $route.params pour récupérer l'id d'une personne (Update.vue)<br><br>
Notes:
 - Pensez à créer une methode fecthOne dans le people service
 - api à utiliser http://localhost:9000/api/peoples/:id (GET)

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 11-update (suite)
 ## Exercice
 <br>

 - Utilisez Form.vue dans Update.vue<br><br>
 - Passez la personne récupérée au composant Form.vue (props)<br><br>
 - Créez une computed method editMode qui return true comme valeur quand on est dans le cas d'un update<br><br>
 - Ajoutez un header à Form.vue qui ne s'affiche que si editMode est true<br><br>
 - Propagez l'event save dans Update.vue pour modifier une personne
Notes:
 - s'il y a une personne alors editMode true, si pas de personne editMode false (formulaire de création)
 - Pensez à créer une méthode update dans le fichier people service
 - api:  http://localhost:9000/api/peoples/:id (PUT)

 ##==##

 <!-- .slide: class="exercice" -->
 # Exercice 11-update
 ## Solution
 **11-update-solution**
 <!-- .element: class="full-center" -->
