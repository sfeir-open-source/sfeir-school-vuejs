# 12-forms (dossier apps/12-forms)

<br/>

L'objectif de ce workshop est:
- réaliser un formulaire simple sans validation
- utiliser des fonctionnalités un peu plus de naive-ui

<br/>

Dans le dossier _static se trouve le template du formulaire ainsi que le style du formulaire

<br/>

Dans le dossier components, un composant Form a été ajouté, il contient la structure javascript de base du 
formulaire à savoir:
- event savePerson
- event cancel
- la fonction save
- la fonction cancel

<br/>

Dans le composant People.vue, un bouton a été ajouté pour ouvrir une modal qui contiendra votre formulaire

Il contient aussi les fonctions de fermeture de la modal et d'ouverture de la modal

<br/>

## Etape 1:

<br/>

Dans le composant Form
- dans la partie template, copiez le contenue du fichier form.html
- dans la partie style, copiez le contenue du fichier form.css

<br/>

## Etape 2

Dans le composant Form, dans la partie script créer une variable réactive personForm. Cette variable devra contenir les champs suivant:
- id: initialisé à vide
- photo: initialisé à https://randomuser.me/api/portraits/lego/6.jpg
- firstname: initialisé à vide
- lastname: initialisé à vide
- email: initialisé à vide
- phone: initialisé à vide

Astuces:

```typescript
const personForm = reactive<PersonForm>({
  id: '',
  photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
  email: '',
  firstname: '',
  lastname: '',
  phone: ''
});
```

<br/>

## Etape 3

<br/>

Dans le composant Form, dans la partie template, réaliser le binding sur vos inputs.

Astuce:

Sur les composants n-input le binding s'effectue non pas via la directive v-model mais la directive v-model:value

```html
<n-input v-model:value=personForm.lastname />
```
<br/>

## Etape 5

<br/>

Dans le composant Form réagissez aux évènement click sur les boutons cancel et save

- lors du click sur le bouton cancel, la fonction cancel est appelé et émet l'event cancel
- lors du click sur le bouton save. la fonction save est appelé et émet l'event savePerson avec la valuer du formulaire

## Etape 6

<br/>

Dans le fichier people.composable, créer une méthode addPerson prenant en paramètre la valeur dui formulaire Person

L'url a appelé pour créer une personne est la suivante: http://localhost:9000/api/peoples avec la méthode POST

Pensez bien à exportez votre fonction

<br/>

## Etape 7

<br/>

Dans le composant People, réagissez aux events savePerson et cancel

<br/>

## Etape 8

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 12-forms
```
