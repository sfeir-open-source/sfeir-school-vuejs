<!-- .slide: class="tc-multiple-columns" -->

##++## class="with-code inconsolata"

# Data Binding with jQuery

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
$(document).ready(function () {
  var $input = $('input');
  var $span = $('#name');

  $input.keyup(function (event) {
    $span.text(event.target.value);
  });
});
```

<!-- .element: class="big-code"-->

##++##
