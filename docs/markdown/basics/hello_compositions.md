<!-- .slide  -->
# Composition d'un simple Hello World
<br>
3 composantes : <br><br>

- Le fichier source de Vue Js <br><br>
- Un template <br><br>
- Un script de démarrage

Notes:
 - le fichier source de Vue js peut provenir de différentes sources Bower, CDN (google cloud storage source), npm (le plus commun)
 - Il existe deux types de sources (standalone = inclut le template compiler) et runtime (utilise uniquement les fonctions de render)

##==##

<!-- .slide -->
# Les sources
![center](assets/images/school/basics/source_exemple.png)

##==##

<!-- .slide -->
# Le script
Permet d'instancier une vue avec différentes options (ici __data__ pour exposer des datas).

On appelle __mount__  pour cibler l'élément où doit être placé la "vue"
<br>

![center](assets/images/school/basics/script_exemple.png)


##==##

<!-- .slide -->
# Le template
Le template Vue va se placer directement dans la page HTML :
<br><br>

![center h-700](assets/images/school/basics/template_exemple.png)

##==##

<!-- .slide -->
# Le template
Le template Vue peut se passer en option à l'instance de vue:
<br><br>

![center](assets/images/school/basics/template_option_instance_exemple.png)
