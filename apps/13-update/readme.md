# 13-update (dossier apps/12-forms)

<br/>

L'objectif de ce workshop est de:
- pouvoir modifier les informations d'une personne
- renforcer la notion de routing
- réutiliser le formulaire de création d'une personne pour en faire un formulaire d'update

<br/>

Dans le dossier views, un squelette du compose Update a été réalisé.

<br/>

## Etape 1

<br/>

Dans le fichier router, créer une nouvelle route /people/:id qui affichera le composant Update

Pensez à bien setter la propriété props à true, pour pouvoir récupérer l'id de la personne en propriété du composant Update.

<br/>

## Etape 2

<br/>

Dans le fichier, people.composable créer une fonction getPersonById prenant en paramètre l'id de la personne, et renvoyant une personne

L'url à utiliser est la suivante: http://localhost:9000/api/peoples/:id

Pensez à bien  retourner cette fonction.

<br/>

## Etape 3

<br/>

Dans le composant Update:
- dans la partie script récupérez la personne courante
- dans la partie template, appelez le composant Form en lui passant en paramètre person (afficher uniquement le composant si la personne courant est définie)

<br />

## Etape 4

<br/>

Dans le composant Form, faites les adaptation nécessaire pour faire fonctionner le formulaire en mode update et en mode create

Astuces:

Pensez à récupérer la propriété person qui peut être optionnelle :)

<br/>

## Etape 5

<br/>

Dans le fichier people.composable, créez une fonction updatePersonById qui prend en paramètre le formulaire de la personne modifié

L'url à utiliser est la suivante: http://localhost:9000/api/peoples/:id

Pensez à bien  retourner cette fonction.

<br/>

## Etape 6

<br/>

Dans le composant Update, réagissez aux event savePerson et cancel

- savePerson doit modifier la personne et retourner sur la page précédente
- cancel doit retourner sur la page précédente

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 13-update
```
