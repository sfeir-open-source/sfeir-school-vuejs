# 02-naive-ui (dossier apps/02-naive-ui)

<br/>

L'objectif de ce workshop est de
- intégrer un librairies Design System commet Naive ui
- comprendre la syntax d'enregistrement d'un plugin Vue

<br/>

## Etape 1

Dans le fichier main.ts, importer la librairie Naive UI 

```typescript
import NaiveUI from 'naive-ui';
```

<br/>

## Etape 2
<br/>

Enregistrez cette librairie, comme un plugin Vue

```typescript
createApp().use(NaiveUI).mount('#app');
```

La fonction use permet d'enregistrer un plugin vue dans votre instance Vue. Ce plugin peut vous apporter des composables, des composants, des directives etc accessibles n'importe où dans votre application.

<br/>

## Etape 3
<br/>

Dans le fichier index.html, dans la div possédant l'id "app", affichez le message de bienvenue dans une card

Le code pour afficher une card est le suivant

```html
<n-card hoverable></n-card>
```
<br/>

## Etape 4

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 02-naive-ui
```
