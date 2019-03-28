
#  Steps:

### Vue Router link - https://router.vuejs.org/

##  1. Install vuejs router
 
```sh
    npm install vue-router
```

## 2. Import Vue Router 

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
```

## 3. Use Vue Router - add it to the application

```js
Vue.use(VueRouter)
```

## 4. Create `routes.js` file and go there 

## 5. Create exported const `routes` which is an array holding our routes

### 5.1 Usually when we have vue router application we outsource the page(components) in a new folder called `views` which is on the same level as `components` folder

### 5.2 Create new folder `views`

### 5.3 Them we move all inner pages(components) from the last lecture there and rename them without prefixes:

- AppHome.vue
- PageAbout.vue
- PageContact.vue
- PageProjects.vue

### 5.4 Delete folder pages

### 5.5 Delete imports, registrations and calls of that components

## 6. Create our first route object - begin with about page

## 7. Set the path first that will lead to that page(component)

### For example for page about is `path:'/about'`

### 7.1 NOTE! the path for home page is set like this `path:''` because this the default page 

## 8. The next thing is the component we want to load

## 9. Import the component

## 10. Do that for all components

## 11. Go to `main.js` and import the `routes.js` and since we named a constant there we have to use the syntax with curly braces

```js
import { routes } from routes;
```

## 12. Create new const router which is `New VueRouter()`

## 13. We to pass an object in `VueRouter()`
 
## 14. And inside we pass routes using the ES6

```js
const router = new VueRouter({
  routes: routes
});
```

## 15. Go to the vue instance and add router the same way

```js
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

## 16. Now we need a place to render them
 
## 17. Go to App.vue choose where to render them with the `<router-view>` component which shipped in with Vue Router and tells load the component in this place

## 17.1 Test it in the url if the view loads

## 18. The "#" hash tag is the default set up that Vue Router uses. It's a style the you will see a lot in single page applications

## 19. However if we want to make prettier we can remove the hash tag by setting the mode to history in VueRouter object

```js
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});
```

## 20. Let's set our links to navigate through our routes

## 21. Go to AppHeader.vue and adjust the navigation with `<router-link>`

## 22. "to" tell to which component to load
  
## 23. Inspect the links

## 24. Show that it doesn't reload the page

## 25. Add the active class to the link by using active-class attribute

## 26. We pass the bootstrap "nav-link" as well

## 27. See how home is always active this is because when we have in the url "/" which leads to home component vue router add the active class automatically. To fix this we need to add "exact" to home router link. This mean add class when we have exact match of the url not just "/"

## 28. Put path * and redirect home to avoid wrong url entered by the user in routes.js

```js
{ path: '*', redirect: '/' }
```

## 29. We can make changing the routes with transition animation go to App.vue and put router view in transition tag.

## 30. Set name of transition fade and how the styles. Set mode out-in - first the old page to disappear and to the add the new one.

# Prepare for project presentation:

## After you finish your project create a repository in github and upload it then send me link to your repository at 4th of April before 17:00 so I have time to download and install them. 

## Send link to repositories on boris.nekezov@gmail.com

# Make demostration with git how to create repository and add it
