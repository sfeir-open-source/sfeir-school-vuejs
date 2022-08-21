# 19-state-management (dossier apps/19-state-management)

<br/>

Un composant search a été rajouté dans le composant People. Ce composant s'utilise avec v-model

Dans le composable people, une nouvelle variable search a été ajouté.

L'objectif de ce workshop est de
- transformer le composable people avec la fonction setup de création d'un store Pinia
- filter la liste des personnes en fonction du critère de rechercher

<br/>

## Etape 1

<br/>

Dans le fichier main.ts, enregistrez Pinia

## Etape 2

<br/>

Dans le fichier person.composable.ts, implémentez la logique de votre store.

Pensez à utiliser les computedRef pour filtrer votre liste en fonction d'une variable réactive

<br/>

## Etape 3

<br/>

Adaptez les fichiers qui sont impactés par cette transformation

<br/>

## Etape 4

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 19-state-management
```
