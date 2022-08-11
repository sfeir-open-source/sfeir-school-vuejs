# 07-http (dossier apps/http)

<br/>

L'objectif de ce workshop est de:
- utiliser axios
- comprendre comment récupérer une variable d'environnement grâce à vite
- comprendre comment utiliser la suspense api dans une app

<br />

Pour lancer le serveur de mock à la racine du projet lancez la commande suivante

```bash
npm run server
```

Le serveur tourne sur l'adresse suivante: http://localhost:9000/api

Dans le fichier .env, une variable d'environnement a été créé: VITE_BASE_API = "http://localhost:9000/api"

Pour récupérer cette variable d'environnement dans votre projet Vue, utiliser le code suivant:

```typescript
import.meta.env.VITE_BASE_API
```

<br/>


## Etape 1

<br/>

Dans le fichier people.composable.ts, modifier les méthodes **getPeople** et **getRandomPeople** pour utiliser l'api back

<br/>

## Etape 2

<br/>

Dans le composant Home, utilisez la notion du script async setup et top level await pour rendre ce composant asynchrone

Pour plus de rigueur dans votre code, pensez à wrapper vos await dans un try/catch

<br/>

## Etape 3

<br/>

Analysez le fichier App.vue. Observez comment est utiliser la notion de suspense API.

<br/>

# Etape 4

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 07-http
```







