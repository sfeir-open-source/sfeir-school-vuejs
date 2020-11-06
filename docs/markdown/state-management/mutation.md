<!-- .slide-->
# Les Mutations
- __Unique__ endroit ou l'on peut modifier le state
- Objet clé-valeur avec pour clé une fonction
- Cet object se trouve dans la propriété mutations du store
- Mutation déclenchée grâce au mot clé <b>commit</b>
- Action toujours <b>synchrone</b>
<br><br>

![h-400](assets/images/school/state-management/mutation.png)
![h-400](assets/images/school/state-management/mutation_implementation.png)
Notes:
Le payload d'une mutation peut etre de tout type (string, number, object, function)
