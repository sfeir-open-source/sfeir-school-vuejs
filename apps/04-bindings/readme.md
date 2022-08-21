# 04-bindings (dossier apps/04-bindings)

<br/>

L'objectif de ce workshop est de:
- créer un nouveau component Home
- comprendre comment fonctionne l'imbrication de composant
- réaliser un binding


<br/>

Les sources nécessaires à créer le template et le style du composant Home se trouve dans le dossier src/_static

<br/>

## Etape 1

<br/>

Dans le fichier Home.vue: 

- copiez le contenue du fichier _static/home.html dans la partie template du composant Home.vue
- copiez le contenue du fichier _static/home.css dans la partie style du composant Home.vue
- importez le tableau des People se trouvant dans le fichier _static/people.ts dans la partie script

<br/>

Astuce: 

```typescript
import { PEOPLE } from '@/_static/people';
```

<br/>

## Etape 2

<br/>

Dans le fichier Home.vue, réalisez le binding, pour ce faire:

- créez une ref person ayant pour valeur le premier élément du tableau PEOPLE
- dans la partie template, à l'aide de l'interpolation et du binding d'attributs, affichez les informations de la personne

<br/>

Astuce:

```typescript
import { PEOPLE } from '@/_static/people';
import { ref } from 'vue';
import type { Person } from '@/models/person';

const [firstPerson] = PEOPLE;
const person = ref<Person>(firstPerson);
```

<br />

## Etape 3

Dans le fichier App.vue, appelez votre composant Home.vue dans une balise main

<br />

Astuce

```html
<main>
 <Home/>
</main>
```

<br/>

## Etape 4

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 04-bindings
```

