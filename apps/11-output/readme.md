# 11-output (dossier apps/11-output)

<br/>

L'objectif de workshop est de:
- créer une event emitter
- réagir à cet event emitter dans le composant parent

<br/>

## Etape 1

<br/>

Dans le composant Card:
- dans la partie script, définissez un emitter deletePerson qui émet l'id de la personne
- dans la partie script, créer une fonction deletePerson qui prend en paramètre l'id de la personne et qui émettra l'event deletePerson avec l'id de la personne
- dans la partie template, créer un event click sur le bouton delete qui appellera la fonction deletePerson de votre script

<br/>

## Etape 2

<br/>

Dans le composant Home:
- dans la partie template, réagissez à l'event personDelete en appelant la fonction randomPerson

<br/>

## Etape 4

<br/>

Dans le fichier person.composable, dans la fonction usePeople, créez une fonction deletePerson

Cette fonction prend en paramètre l'id de la personne à supprimer

L'API pour supprimer une personne est le suivant: http://localhost:9000/api/peoples/:id avec la méthode DELETE

Cette Endpoint retourne une liste de personne à jour

Pensez à bien retourner la fonction deletePerson

<br/>

## Etape 5 

<br/>

Dans le composant People.vue, réagissez à l'évent deletePerson en appelant la méthode deletePerson de votre composition

<br/>

## Etape 6

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 11-output
```


