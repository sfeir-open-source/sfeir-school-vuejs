# Comment utiliser son store dans une application Vue 2

Heureusement que le créateur de la librairie nous as mis plein de helpers <br><br>
- __mapStores__ <br><br>
- __mapState / mapWritableState__ <br><br>
- __mapActions__ <br><br>

Notes: 
 - mapStores permet de destructurer plusieurs store et ainsi récupérer tous les getters et actions et ainsi éviter de mapper propriété par propriété
 - mapState permet de destructurer propriété par propriété du store
 - mapWritableState exactement la même chose que mapState mais on peut modifier le valeur de la propriété
 - mapActions permet de destructurer une action du store

##==##

<!--.slide: class="with-code inconsolata" -->
# Okeyyy, comment ça marche mapStores ?

```javascript
export default {
  computed: {
    ...mapStores(useUserStore, useCartStore)
  }
  created() {
    console.log(this.userStore);
    console.log(this.cartStore);
  } 
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Okeyyy, et comment ça marche mapState ?

```javascript
export default {
  computed: {
    ...mapState(useUserStore, ['name']),
    ...mapState(useUserStore, {
        lastname: 'lastName'
        name: (store) => store.name.toUpperCase() 
    })
  },
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Okeyyy, et comment ça marche mapActions ?

```javascript
export default {
  computed: {
    ...mapActions(useUserStore, ['setName']),
    ...mapActions(useUserStore, {
        setUserName: 'setName'
    })
  },
}
```
<!-- .element: class="big-code" -->



