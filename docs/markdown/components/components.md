<!-- .slide: class="sfeir-basic-slide" -->
# Un arbre de composants
<br><br>
<div class="inline-flex">
    <div>
        <ul>
            <li>Une application Vue Js est une composition de composants</li><br>
            <li>Les enfants sont ajoutés au parent s'ils sont dans le template parent</li><br>
            <li>Tout composant doit être déclaré dans l'objet "components"</li><br>
        </ul>
    </div>
    <div>
        <img alt="h-400" src="assets/images/school/components/child_component.png">
    </div>
</div>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Créer un composant / composant global
<br><br>
<ul>
    <li>Utilisation de Vue.component(tagname, optionObject)</li><br>
    <li>Options identiques à celles de l'instance</li><br>
    <li>Attention, l'option "data" doit être une fonction retournant un objet</li><br>
</ul>

##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Créer un composant / composant monofichier
<br><br>
<div class="inline-flex">
    <div class="half">
        <ul>
            <li>Pourquoi ? <br>
             - nom unique non obligatoire<br>
             - template sous forme de chaîne de caractères<br>
             - absence de support css<br>
             - pas de système de build<br>
            </li><br>
            <li>
                Tous dans un même fichier
            </li><br>
            <li>Plugin Webpack déjà présent</li>
        <ul>
    </div>
    <div>
        <img alt="h-900" src="assets/images/school/components/mono_fichier.png">
    </div>
</div>

