<!-- .slide: class="with-code inconsolata" -->

# Using the Axios library

<br>

```javascript
axios.get(url, optionsObject);

axios.post(url, data, optionsObject);

axios.put(url, data, optionsObject);

axios.delete(url, optionsObject);
```

<!-- .element: class="big-code" -->

Notes:

- Axios is one library among many; it is not an official Vue.js library.
- You could replace Axios with RxJS if you want, or use it alongside Axios.

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Handling responses (classic method)

<br><br>

```typescript
axios
  .get('https://jsonplaceholder.com/todos')
  .then(response => response.data)
  .catch(error => {
    throw error;
  });
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="sfeir-basic-slide with-code inconsolata" -->

# Handling responses (async/await)

<br>

```typescript
async function getData(): Promise<Person> {
  const person = (await axios.get<Person>('https://jsonplaceholder.com/users/1')).data;
  return person;
}
```

<!-- .element: class="big-code"-->
