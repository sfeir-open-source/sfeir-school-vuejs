<!-- .slide: class="two-column-layout" -->
# Data Binding in Pure JS

##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>

```html
<html>
  Bonjour <span id="name"></span>
  <input type="text" />
</html>
```
<!-- .element: class="medium-code"-->

##--##
<!-- .slide: class="sfeir-basic-slide with-code inconsolata"-->
<br/><br/>

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
<!-- .element: class="medium-code"-->


