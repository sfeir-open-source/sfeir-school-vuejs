<!-- .slide: class="two-column-layout" -->
# L'instance
##--##
<br><br><br><br>

Une instance Vue est une fonction prenant un objet de configuration: <br/><br/>
- un composant Vue <br/><br/>
- un objet de configuration Vue (option API ou Composition API) <br/><br/>

##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>

```typescript
createApp(APP)
```
<!-- .element: class="big-code"-->

<br/><br/>

```typescript
createApp({ setup( return { name: 'SFEIR'})})
```
<!-- .element: class="big-code"-->

<br/><br/>

```typescript
createApp({ data() { return { name: 'SFEIR'}}})
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="two-column-layout" -->
# Les cycle de vie

##--##
<br><br><br>

- Différentes méthodes de cycle de vie
    - setup
    - omMounted
    - onUnMounted<br><br>
- Fonction prenant une fonction de callback s'implémentant directement dans la fonction de setup

##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br><br><br>

```typescript
createApp({
  setup() {
    onMounted(() => {
      console.log('Here on mounted hook lifecycle');
    })
  }
})
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Les propriétés reactive

##--##
<br><br><br>
- Seul variable que Vue track pour rendre la vue <br/><br/>
- ref / reactive (peuvent être utilisé en dehors d'une instance de vue)<br/><br/>
- variables qui sont des proxys en Javascript

##--##
<!-- .slide: class="sfeir-basic-slide with-code"-->
<br/><br/>

```typescript
createApp({
  setup() {
    const name = ref('SFEIR');
    const user = reactive({ 
      name: 'SFEIR',
      country: 'LUXEMBOURG'
    });
  }
})
```
<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="two-column-layout" -->
# Les computed properties
<br>

##--##
<br/><br/><br/><br/>

- Fonction __computed__ prenant une fonction de callback <br/><br/>
- Masque la logique de traitement (filtre) <br/><br/>
- Utilisable dans le template <br/><br/>
- Réévalué lorsqu'une propriété réactive change <br/><br/>
- Logique Getter/Setter

##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

<br/><br/><br/><br/>

```typescript
createApp({
  setup() {
    const name = ref('SFEIR');
    const country = ref('LUXEMBOURG');
    const company  = computed(() => `${name.value} ${country.value}`);
    return { company }
  }
})
```
<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="two-column-layout" -->
# Les méthodes

##--##
<br><br><br><br>

- __fonctions__ appartenant à la fonction setup (doivent être retournée) <br/><br/>
- Utilisables dans le template

##--##
<br/><br/><br/>

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
```typescript
createApp({
  setup() {
    function showAlert(): void {
      alert('You will leave the page');
    }
    return {
      showAlert
    }
  }
})
```
<!-- .element: class="medium-code" -->

##==##

<!-- .slide: class="two-column-layout" -->
# Les watchers
<br>

##--##
<br><br><br><br>

- S'implémente directement dans la fonction setup <br/><br/>
- Opérations Asynchrone <br/><br/>
- Privilégier une computed properties

##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

<br/><br/>

```typescript
createApp({
  setup() {
    const id = ref(1234);
    watch(id, () => {
      fetch('http://random-user/com/user')
        .then(response => response.json())
        .then(console.log)
    })
  }
})
```
<!-- .element: class="medium-code"-->

##==##

<!-- .slide -->
# Combat entre computed, watcher et methods
<br><br>

- Une propriété computed est recalculée seulement quand ses dépendances changent<br><br>
- Une méthode est rappelée à chaque fois qu'un élément change<br><br>
- Un watcher est privilégié pour des actions plus complexes (asynchrone) => un call à une api
