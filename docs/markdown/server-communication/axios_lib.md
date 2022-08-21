<!-- .slide: class="with-code inconsolata" -->
# Usage de la librairie Axios
<br>

```javascript
axios.get(url, optionsObject)

axios.post(url, data, optionsObject)

axios.put(url, data, optionsObject)

axios.delete(url, optionsObject)
```
<!-- .element: class="big-code" -->
Notes:
- Axios est une librairie parmis tant d'autre, ce n'est pas une librairie officille de Vue JS.
- On peut penser à remplacer Axios par RxJs si on le souhaite, ou l'ajouter en complémentarité.

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Gestion des retours (méthode classique)
<br><br>

```typescript
axios.get('https://jsonplaceholder.com/todos')
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->
# Gestion des retours (méthode async/await)
<br>

```typescript
async function getData(): Promise<Person> {
  const person = (await axios.get<Person>('https://jsonplaceholder.com/users/1')).data
  return person
};
```
<!-- .element: class="big-code"-->
