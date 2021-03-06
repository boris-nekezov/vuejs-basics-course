# Team Viewer

# Facebook: Борис Некезов

# boris.nekezov@gmail.com

# Link to my blog:
https://borisnekezov.wordpress.com/

# Link to bootstrap:
https://getbootstrap.com/docs/4.3/components/forms/


# Pull or download new version of the repository

## github.com/boris-nekezov/vuejs-basics-course

#  1.Folder structure review:

##  `src` folder is the most important. Here we write our vuejs code

##  `babel.config.js` - babel is transpiler which allow us to write es6 and then it transpile it in es5

##  `public\index.html` - is the file that is actually get served. This the file will be shown at the end. This file is edited by vuejs. 

#  `dist` folder - this is the folder containing all builded assests for production mode.

### `NOTE!!!` You won't see dist folder in development mode because in development mode assets are builded in the memory of the pc.

##  `package.json` - file manage all the dependencies. Vue-loader is important since it allows us to use these single file templates

## `.vue` files - single file template. This a special kind of file and the new way of making components to outsource every component in separate file with `.vue` extention.

# 2. Don't use global components in medium or big apps.

## For more information:

### https://frontendsociety.com/why-you-shouldnt-use-vue-component-ff019fbcac2e

## `Recomended way is to use locally registered components`

# 3. Components naming convention:

## When we give the components name we will use PaskalCase naming convention.

## Components (without App root component) name should start with prefix like: "App", abbrevation of the project name, or something else.

### Example: `AppHeader.vue`
    
### If the project name is "Some Company Name" `ScmHeader.vue`

#  4. The new way of using data
## Try with data obj
## Show the new way

# 5. Show the new ES6 syntax about methods in Vue Instance
## Give example with data

# 6. There must be one root element wrapping all els in component template.
## Demostrate what happens when we have more than 1.

# 7. Folder structure:

## For small to medium size application is good practise to put the components in components folder.

## For large applications you should structure your folders by feature like "shared folder" for header and footer and a "main" folder for main content related components. You can also nest them.

# 7. Show ES6 short syntax about equal key and value

# 8. Show styles:
    
## Show styles scope and data attibute with dev tools
## Show how to write SASS/SCSS

## See AppHeader.vue and AppFooter.vue

## Capsulate the styles with the `scoped` attributes. If you add it the style will apply only within this component file.

### `scope` attribute creates custom data attributes and use it as selector for the elements in the component where it was added.

### Checkout with the inspector the header

```html
<div data-v-667c54d4=""><h1 data-v-667c54d4="">This is the header</h1></div>
```

```css
div[data-v-667c54d4] {
    border: 3px solid lightgreen;
}
```

## Link to docs: https://vuejs.org/v2/guide/components.html
  
