<!-- .slide: class="two-column-layout" -->
# Data Binding in Pure JS

##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

```html
<html>
  Bonjour <span id="name"></span>
  <input type="text" />
</html>
```
<!-- .element: class="big-code"-->

##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->

```javascript
window.onLoad = function() {
  var span = document.querySelector('#name');
  var input = document.getElementsByTagName('input')[0];

  input.onkeyup = function() {
    if(span.textContent || span.textContent === '') {
      span.textContent = input.value;
    }
  }
}
```
<!-- .element: class="big-code"-->


