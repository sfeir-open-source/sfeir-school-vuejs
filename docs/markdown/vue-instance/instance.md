<!-- .slide: class="sfeir-basic-slide" -->
# L'instance
<br>
<span>Une instance est composée de trois grandes composantes</span><br>
<div class="flex-row">
    <div>
        <ul>
            <li>Un Constructeur</li><br>
            <li>Une Api</li><br>
            <li>Etendable</li>
        </ul>
    </div>
    <div>
        <div>
            <img src="assets/images/school/vue-instance/constructor.png">
        </div>
        <div>
            <img src="assets/images/school/vue-instance/extend.png">
        </div>
    </div>
</div>
Notes:
Le constructor peut prendre plusieurs options:
 - des sélecteurs
 - propriétes
 - method
 - computed

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les lifecycles
<span class="center"><strong>Cycle de vie d'une instance Vue</strong></span><br>
<div class="flex-row">
  <div>
      <ul>
          <li>Différentes méthode de cycle de vie<br>
              - created<br>
              - mounted<br>
              - beforeCreated<br>
          </li><br>
          <li>S'implémente direct dans les options de l'instance de vue</li><br>
      </ul>
  </div>
  <div>
      <img alt="h-500" src="assets/images/school/vue-instance/lifecycle.png">
  </div>
</div>


##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les propriétes
<div class="flex-row">
    <div>
        <ul>
            <li>Exposées dans l'objet data</li><br>
            <li>Réactives</li><br>
            <li>Propriétés d'instance:<br>
                - $el<br>
                - $data<br>
            </li>
        </ul>
    </div>
    <div>
        <div>
            <img src="assets/images/school/vue-instance/properties.png">
        </div>
        <div>
            <img src="assets/images/school/vue-instance/access_properties.png">
        </div>
    </div>
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les computed properties
<span class="center"><strong>Qu'est ce que c'est?</strong></span>
<div class="flex-row">
    <div>
        <ul>
            <li>Exposées dans l'objet computed</li>
            <li>Masque la logique de traitement (filtre)</li>
            <li>Utilisable dans le template</li>
            <li>Mise à jour quand les propriétes changent</li>
            <li>Logique Getter/Setter</li>
        </ul>
    </div>
    <div>
        <img src="assets/images/school/vue-instance/computed.png">
    </div>
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les méthodes
<span class="center"><strong>Qu'est ce que c'est? </strong></span>
<div class="flex-row">
    <div>
        <ul>
            <li>Exposé dans l'object method</li><br>
            <li>Utilisable dans le template</li><br>
            <li>Méthode d'instances<br>
              - render (creation v-node + createElement parameter)<br>
              - $on<br>
              - $emit<br>
            </li>
        </ul>
    </div>
    <div>
        <img alt="h-800" src="assets/images/school/vue-instance/methods.png">
    </div>
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les méthodes
<span class="center"><strong>Qu'est ce que c'est? </strong></span>
<div class="flex-row">
    <div>
        <ul>
            <li>S'implémente sur l'instance / dans une méthode</li><br>
            <li>Opérations Asynchrone</li><br>
            <li>Priviligier un computed properties<br>
            </li>
        </ul>
    </div>
    <div>
        <img alt="h-700" src="assets/images/school/vue-instance/watchers.png">
    </div>
</div>

##==##
<!-- .slide: class="sfeir-basic-slide" -->
# Combat entre computed watcher et method
<br><br><br>
<ul>
    <li>Une propriété computed est recalculée seulement quand ces dépendances changent</li><br>
    <li>Une méthode est rappelé à chaque fois qu'un élement change</li><br>
    <li>Un watcher est priviligié pour des actions plus complex(asynchrone) => un call à une api</li><br>
</ul>