# 06-composable (dossier apps/06-composable)

<br/>

L'objectif de ce workshop est de:
- comprendre comment fonctionne la composition api
- réaliser une fonction de composition
- l'utiliser dans son composant Home

<br/>

## Etape 1

<br/>

Analyser le dossier composable et particulièrement le fichier people.composable.

Une fonction est déjà exporté avec la bonne convention de nommage.

<br/>

## Etape 2

<br/>

Avant la fonction usePeople, créez une référence people initialisée à un tableau vide.

Astuce:

```typescript
import { Person } from '@/models/person.model';

const people = ref<Array<People>>([]);

export function usePeople() {}
```

<br />

## Etape 3

<br/>

Dans la fonction usePeople, créer
- une fonction getPeople qui permet de setter notre référence de people avec le tableau de personne
- une fonction randomPeople qui permet de renvoyer une personne de manière random


Astuces: Aidez vous de la logique qui se trouve dans votre composant Home

Veillez à ce que la fonction usePeople, retourne:
- la reference people
- la fonction getPeople
- la fonction getRandomPeople

<br/>

## Etape 4

<br/>

Dans le composant Home, utilisez votre composition 'usePeople', pour supprimer la logique business réalisé dans ce composant.

<br/>

## Etape 5

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 06-composable
```




