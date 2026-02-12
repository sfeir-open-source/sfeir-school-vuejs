<!-- .slide: class="transition bg-white" -->

# Validation

##==##

<!-- .slide -->

# Two approaches

<br><br>

- Template-driven form (validation is driven by the template): **vee-validate**<br><br>
- Model-driven form (validation is driven by the controller): **vuelidate** / **vee-validate**<br><br>
- **Warning**: these solutions are not officially supported by the Vue core team

Notes:

- vee-validate official documentation: https://baianat.github.io/vee-validate/
- vuelidate official documentation: https://vuelidate.netlify.com

##==##

<!-- .slide -->

# The different states of a control

<br>

- <b>pristine</b>: the user has not interacted with the control<br><br>
- <b>dirty</b>: the user has already interacted with the control<br><br>
- <b>touched</b>: the control has lost focus<br><br>
- <b>untouched</b>: the control has not lost focus<br><br>
- <b>valid</b>: the control is valid<br><br>
- <b>invalid</b>: the control is invalid
