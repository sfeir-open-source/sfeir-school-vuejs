# 15-veevalidate (dossier apps/15-veevalidate)

<br/>

L'objectif de ce workshop est de:
- valider un formulaire
- créer un validation custom
- utiliser veevalidate

<br/>

## Etape 1
<br/>

Dans le fichier vee-validate.config.ts, définissez les règles suivantes:
- required
- min,
- max,
- regex
- sfeirEmail respectant le pattern suivant: /^\w+.\w@sfeir.com$/

<br/>

Astuce:

Pour les 4 premières règles utilisez les règles déjà prédéfinies du package **vee-validate/rules**

Pour la règles sfeirEmail, c'est à vous de faire votre propre logique

<br/>

## Etape 2

Dans le composant Form, faites les transformation nécessaire pour utiliser le formulaire avec veevalidate.

Astuces:

```html
  <Field
          name="lastname"
          v-model="personForm.lastname"
          v-slot="{ value, handleChange, handleBlur, meta: { valid, touched } }"
          :rules="{ required: true, min: 2 }"
          :validateOnMount="true"
        >
          <n-input
            type="text"
            :value="(value as string)"
            :status="touched && !valid ? 'error' : 'success'"
            round
            size="large"
            placeholder="Lastname of the person"
            @update:value="handleChange"
            @blur="handleBlur"
          />
          <ErrorMessage v-if="touched" name="lastname" class="error-message" />
        </Field>
```

```html
<Form class="container-form" v-slot="{ meta: { valid: formValid } }"></Form>
```

<br/>

## Etape 3

<br/>

Désactiver le bouton save du composant Form si le formulaire est invalid

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 15-veevalidate
```

