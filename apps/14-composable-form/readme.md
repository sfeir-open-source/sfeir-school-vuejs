# 14-composable-form (dossier apps/14-composable-form)

<br/>

L'objectif de workshop est de:
- appliquer le concept de composition
- mettre en place une architecture propre et scalable
- structurer son code pour alléger son composant

<br/>

## Etape 1

<br/>

Dans le dossier créer un fichier person-form.composable qui export une fonction usePersonForm qui prend en paramètre une personne

<br/>

## Etape 2

<br/>

Dans la fonction usePersonForm:
- déplacez le code de personForm se trouvant dans le composant Form et adaptez le
- déplacer les méthode savePerson et updatePersonById du composable usePeople
- retourner les fonctions et le personForm

<br/>

## Etape 3

- adaptez le composant Form pour qu'il utilise le composable usePersonForm
- adaptez le composant People pour qu'il utilise le composable  usePersonForm
- adaptez le composant Update pour qu'il utilise le composable usePersonForm

<br/>

## Etape 4

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 14-composable-form
```


