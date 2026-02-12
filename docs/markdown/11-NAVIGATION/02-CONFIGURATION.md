<!-- .slide -->

# Basic routing configuration

<br>

- <b>Path</b>: the route URL, can include dynamic segments: /people/:id<br><br>
- <b>Name</b>: the route name<br><br>
- <b>Component</b>: the component associated with the route<br><br>
- <b>Redirect</b>: path or name of the page to redirect to<br><br>
- <b>alias</b>: redirect without changing the URL

##==##

<!-- .slide: class="sfeir-basic-slide -->

# Advanced routing configuration

<br>

- <b>components</b>: object keyed by named views where the component should render<br><br>
- <b>meta</b>: data associated with the route<br><br>
- <b>children</b>: an array of child route definitions

##==##

 <!-- .slide: class="sfeir-basic-slide -->

# Guards

- Run before or after a route change<br><br>
- Globally on the router (beforeEach / afterEach)<br><br>
- On a specific route (beforeEnter)<br><br>
- On a component (onBeforeRouteUpdate, onBeforeRouteLeave)<br><br>
- Takes 3 arguments
- to (target route)
- from (previous route)
- next (continuation function)

Notes:

- https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards
- next can take multiple parameters:
  - false
  - path (string)
  - redirectObject
  - error
  - callback function

##==##

<!-- .slide: class="sfeir-basic-slide" -->

# Navigation strategies

<br>
<b>2 navigation strategies:</b>
<br><br>

- Hash:
  - default strategy (localhost/#/people) <br><br>

- Path et push state:
  - localhost/people
  - mode: history in the router config
  - requires a server-side rule
