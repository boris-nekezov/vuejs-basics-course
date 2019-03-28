
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

## 4. Create routes.js file and go there 

## 5. Create exported const which is arr holding our routes

## 6. Create our first route object

## 7. Set the path first that will lead to that page(component)
### 7.1 NOTE! the path for home page is set like this `path:''` because this the default page 

## 8. The next thing is the component we want to load

## 9. Import the component

## 10. Do that for all components

## 11. Go to `main.js` and import the `routes.js`

## 12. Create new const router which is `New VueRouter()`

## 13. We to pass an object in `VueRouter()`
 
## 14. And inside we pass routes using the ES6

## 15. Go to the vue instance and add router the same way

## 16. Now we need a place to render them
 
## 17. Go to App.vue choose where to render them with the `<router-view>` component which shipped in with Vue Router and tells load the component in this place

## 18. The "#" hash tag is the default set up that Vue Router uses. It's a style the you will see a lot in single page applicaitons due to a specific reason

## 19. If we want to make prettier we can remove the hash tag by setting the mode to history in VueRouter object

## 20. Let's set our links to navigate through our routes

## 21. Go to AppHeader.vue and adjust the navigation with route link

## 22. "to" tell to which component to load
  
## 23. Inspect the links

## 24. Show that it doesn't reload the page

## 25. Add the active class to the link by using active-class attribute

## 26. We pass the bootstrap "nav-link" as well

## 27. See how home is always active this is because when we have in the url "/" which leads to home component vue router add the active class automatically. To fix this we need to add "exact" to home router link. This mean add class when we have exact match of the url not just "/"

## 28. Put path * and redirect home to avoid wrong url entered by the user in routes.js

## 29. We can make changing the routes with transition animation go to App.vue and put router view in transition tag.

## 30. Set name of transition fade and how the styles. Set mode out-in - first the old page to disappear and to the add the new one.

