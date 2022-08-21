# 10-props (dossier apps/10-props)

<br/>

L'objectif de ce workshop est de:
- centraliser la card dans un composant partager
- utiliser la notion de props pour envoyer des donnés à ce composant partager
- appuyer la notion d'arbre de composants 

<br/>

## Etape 1

<br/>

Créez un dossier components à la racine du dossier src

Dans ce dossier créez un composant Card.vue

<br/>

## Etape 2

<br/>

Dans le composant Card:
- partie template, copiez/collez le template de la card
- partie script: définissez une props person
- partie style: copiez/collez le style de card (attention le style ne doit pas être scoper)

<br/>

## Etape 4

<br/>

Dans le composant Home, appelez votre composant Card en lui passant en propriété la personne

Dans le composant People, appelez votre composant Card avec la directive v-for et en lui passant en propriété une personne

Astuces

```html
<Card v-for="person in peoples" :key="person.id" :person="person" />
```

<br/>

## Etape 5

<br/>

Nettoyez vos composant en supprimant le style inutile

<br/>

## Etape 6

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 10-props
```
