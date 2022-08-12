# 08-routing

<br/>

L'objectif de ce workshop est de:
- créer une configuration de routing
- enregistrer le routing dans une instance Vue
- Utiliser le RouterLink

<br/>

Un fichier router.ts a été crée dans le dossier views. Dans ce fichier se trouve uniquement un tableau de routes initialisé à vide.

<br/>

## Etape 1

<br/>

Dans le fichier router.ts, initialisez un tableau de route pour respecter les condition suivante:
- si l'utilisateur se retrouve sur un path vide, il doit être automatiquement redirigé vers le path: /home
- le path /home doit afficher le composant Home

Astuces: 

```typescript
createRouter({ history, routes})
```

<br/>

## Etape 2

<br/>

Dans le fichier main.ts, enregistrer votre routing

Astuces:

```typescript
createApp(App).use(router).mount('#app')
```

<br/>

## Etape 3

<br/>

Dans le composant App:
- implémentez le router-view avec la Suspense API
- wrappez l'image dans router-link qui quand on clique dessus renvoie sur la page Home

<br/>

# Etape 4

<br/>

Vérifiez votre travail en lançant la commande suivante:

```bash
npm start -- 08-routing
```
