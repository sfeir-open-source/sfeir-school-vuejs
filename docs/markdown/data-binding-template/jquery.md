<!-- .slide: class="two-column-layout" -->
# Data Binding with jQuery
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
<!--- .slide: class="sfeir-basic-slide with-code inconsolata"-->

```javascript
$(document).ready(function() {
  var $input = $('input');
  var $span= $('#name');

  $input.keyup(function(event) {
    $span.text(event.target.value);
  });
});
```
<!-- .element: class="big-code"-->
