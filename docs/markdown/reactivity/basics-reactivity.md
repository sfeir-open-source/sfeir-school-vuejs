<!-- .slide: class="sfeir-basic-slide"-->

# La fonction setup

- Fonction de setup d'un composant Vue <br/></br>
- Appelé avant tout lifecycle <br></br>
- Prend deux paramètres:
    - props (propriété d'un composant)
    - context (le context du composant vue)

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Déclarer des variables réactives avec Ref

- **ref** --> crée une variable réactive simple <br/><br/>
- Accès à la valeur de la référence par la propriété **value** <br/></br>
- Possibilité de déclarer une ref en dehors de la fonction setup <br/><br/><br/>

```typescript
const name = ref('SFEIR');
const agence: Ref<string> = ref('Luxembourg');
const trainingDate = ref<Date>(new Date())
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
# Déclarer des objets réactif avec Reactive

- **reactive** --> crée un objet réactive (toutes les propriété deviennent réactive)<br/><br/>
- Accès à la valeur de chaque propriété de l'objet grâce à la dot notation <br/><br/>
- Possibilité de déclarer un objet réactif en dehors de la fonction setup <br/><br/>
- **Attention**: déstructurer votre objet réactive fait perdre la réactivité <br/><br/><br/>


```typescript
const company = reactive({ name: 'SFEIR', location: 'LUXEMBOURG' });
const user = reactive<{ name: string, username: string}>({
  name: 'John',
  age: 29
})
```
<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="sfeir-sfeir-basic-slide with-code"-->
# Fonction réactif utile dans la vie de tous les jours

- **toRefs**: permet de déstructurer un object réactif<br/><br/>
- **toRaw**: permet de transformer un objet réactif en plain objet<br/><br/>
- **unRef**: permet de supprimer la réactif d'une variable simple <br/><br/><br/>

```typescript
const age: number = unRef(ref(29));
const { name, location } = toRefs(reactive({ name: 'SFEIR', location: 'LUXEMBOURG'}));
console.log(name.value) // SFEIR
const company = toRaw(reactive({ name: 'SFEIR', location: 'LUXEMBOURG'}))
console.log(company) // { name: 'SFEIR', location: 'LUXEMBOURG'}
```
<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code"-->
# Deep Dive dans les fonctions ref et reactive

- les fonctions ref et reactive retourne des proxys. <br/><br/><br/>

```typescript
function ref(value) {
  return {
    get value() {
      track(refObject, 'value')
      return value
    },
    set value(newValue) {
      value = newValue
      trigger(refObject, 'value')
    }
  }
}
```
<!-- .element: class="medium-code"-->
