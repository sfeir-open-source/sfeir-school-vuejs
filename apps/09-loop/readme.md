# 09-loop

<br/>

l'objectif de ce workshop est de:
- utiliser la directive v-for
- appliquer les concepts de routing acquis lors du précédent chapitre


<br/>

## Etape 1

<br/>

Dans le dossier views créez un nouveau composant People

<br/> 

## Etape 2

<br/>

Dans le composant People:
- dans la partie template copiez/coller la card (pensez à ne pas prendre le bouton)
- dans la partie script, récupérer la liste des peoples (inspirez vous du code du composant Home)
- dans la partie style, copiez/collé le style de card

<br />

## Etape 3

<br/>

Dans la partie template du composant People, utilisez la syntax v-for sur la card pour afficher une card par personne

<br/>

## Etape 4

<br/>

Dans le fichier router.ts, créez une nouvelle route qui doit afficher le composant People sur l'url /people

<br />

## Etape 5

<br/>

Dans le ficher App.vue, wrapper le lien vers la page People dans une balise RouterLink

En cliquant sur le lien vous devriez être redirigé vars le page People, où toutes les personnes sont représentées sous forme de card

<br/>

## Etape 6

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 08-routing
```
