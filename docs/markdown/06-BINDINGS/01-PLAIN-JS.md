<!-- .slide: class="tc-multiple-columns" -->

##++## class="with-code inconsolata"

# Data Binding in Pure JS

<br/><br/>

```html
<html>
  Bonjour
  <span id="name"></span>
  <input type="text" />
</html>
```

<!-- .element: class="big-code"-->

##++##

##++## class="with-code inconsolata"

<br/><br/><br/><br/>

```javascript
window.onLoad = function () {
  var span = document.querySelector('#name');
  var input = document.getElementsByTagName('input')[0];

  input.onkeyup = function () {
    if (span.textContent || span.textContent === '') {
      span.textContent = input.value;
    }
  };
};
```

<!-- .element: class="big-code"-->

##++##
