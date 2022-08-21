# 03-sfc (dossier apps/03-sfc)

<br/>

L'objectif de ce workshop est de:
- réaliser une mono-fichier appelé aussi single file component
- bootstrapper une application sur un single file component

<br/>

Les sources nécessaires à créer le template et le style  de ce single file component se trouve dans le dossier src/_static

<br/>

## Etape 1

À la racine du dossier src, créer un fichier du nom de App.vue. Utilisez la syntax du script setup pour créer la structure du mono fichier.

<br/>

## Etape 2

<br/>

Dans la partie template du fichier App.vue, copiez le contenue du fichier app.html du dossier _static

Dans la partie style du fichier App.vue, copiez le contenue du ficher app.css du dossier _static

<br/>

## Etape 3

<br/>

Dans le fichier index.html, supprimez le contenue de la balise div ayant l'id app

<br/>

## Etape 4

<br/>

Dans le fichier main.ts, modifier la fonction createApp afin que votre application instancie composant App.vue et l'affiche au lancement de votre application

Astuce 

```typescript
createApp(App).mount('#app');
```

<br/>

## Etape 5

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 03-sfc
```
