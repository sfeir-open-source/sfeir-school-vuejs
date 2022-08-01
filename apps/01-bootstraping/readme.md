# 01-bootstraping (dossier apps/01-bootstraping)

<br/>

L'objectif de ce workshop est de vous faire:
- créer une instance de Vue
- d'insérer cette instance dans la div ayant l'id #app
- d'afficher à l'intérieur de ce container la chaîne de caractère 'Hello and welcome {{ name }}'

<br/>

## Etape 1

<br/>

Dans le fichier main.ts, créez le code suivant

```typescript
import { createApp } from 'vue';

createApp({
  setup() {
    const name = 'SFEIR';
    return { name };
  }
}).mount('#app');
```

<br/>

## Etape 2
<br/>

Dans le fichier index.html, à l'intérieur du container #app, affichez la chaîne de caractère suivante: ''Hello and welcome {{ name }}'


Les doubles accolades ouvrantes et fermantes permettent d'interpoler une variable que nous retourne la fonction setup.

<br/>

## Etape 3
<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 01-bootstraping
```


