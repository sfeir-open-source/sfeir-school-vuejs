<!-- .slide: class="sfeir-basic-slide" -->
# Les Mutations
<br>
<ul>
    <li><strong>Unique</strong> endroit ou l'on peut modifier le state</li>
    <li>Object de clés-valeurs avec pour clé une fonction</li>
    <li>Cet object se trouve dans la propriété mutations du store</li>
    <li>Mutation déclénchée grâce au mot clé <strong>commit</strong></li>
    <li>Action toujours <strong>synchrone</strong</li>
</ul><br><br>
<div class="center">
    <img alt="h-400" src="assets/images/school/state-management/mutation.png">
    <img alt="h-400" src="assets/images/school/state-management/mutation_implementation.png">
</div>
Notes:
Le payload d'une mutation peut etre de tout type (string, number, object, function)
