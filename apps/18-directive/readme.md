# 18-directive (dossier apps/18-directives)

<br/>

L'objectif de ce workshop est de:
- comprendre comment créer une directive
- comprendre quel hook utiliser pour réaliser sa logique
- comprendre comment importer et utiliser une directive

<br/>

## Etape 1

<br/>

Créez un dossier directives.

Dans ce dossier, créer un fichier manager.ts

<br/>

## Etape 2

Dans le fichier manager.ts, créez une directive qui permet de changer de couleur le nom de la person s'il est manager.

Informations complémentaire: on souhaite mettre la couleur suivante: '#70c0e8'

Astuces:

```typescript
el.style.color = '#70c0e8'
```

<br/>

## Etape 3

<br/>

Dans le composant Card: 
- importez votre directive
- utilisez la pour afficher le prénom et le nom de la personne dans une couleur différente

<br/>

## Etape 4

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 18-directive
```

