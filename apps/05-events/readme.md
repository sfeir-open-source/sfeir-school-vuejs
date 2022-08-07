# 05-events (dossier apps/05-events)

<br/>

L'objectif de ce workshop est de:
- réaliser un event binding lors d'un click sur un bouton
- réaliser une fonction random permettant d'afficher une autre personne
- comprendre comment modifier la valuer d'une référence


<br/>

Un bouton random a été ajouté dans le composant Home. Ce bouton random doit permettre d'afficher une nouvelle personne lorsque l'on clique dessus.

<br/>

## Etape 1

<br/>

Dans la partie script de votre composant Home, créer une fonction randomPeople. Cette fonction doit permettre d'afficher une autre personne au hasard.

Astuces:

```typescript
Math.floor(Math.random() * PEOPLE.length
```

<br/>

## Etape 2

<br/>

Dans la partie template du composant Home, réalisez un binding sur l'event click du bouton random pour faire en sorte d'appeler la fonction randomPeople
quand l'utilisateur clique sur ce bouton.

<br/>

## Etape 3

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 05-events
```


