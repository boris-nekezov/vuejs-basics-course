<template>
  <div id="app">
    {{ msg }}
    <AppHeader></AppHeader>
    <app-main></app-main>
    <AppFooter></AppFooter>
  </div>
</template>

<script>


import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'app',
  data: function() {
    return {
      msg: 'Some message!'
    }
  },
  components: {
    AppHeader: AppHeader,
    AppMain: AppMain,
    AppFooter: AppFooter
  }
}
/** Topics
  Don't use global components in medium or big apps.
  For more information:
  https://frontendsociety.com/why-you-shouldnt-use-vue-component-ff019fbcac2e

  Recomended way is to use locally registered components

  Components naming convention:
  When we give the components name we will use PaskalCase naming convention.
  Components (without App root component) name should start with prefix like:
  "App", abbrevation of the project name, or something else.
  Example:
  AppHeader
  or
  If the project name is "Some Company Name"
  ScmHeader.vue

  The new way of using data
  Try with data obj
  Show the new way

  Show the new ES6 suntax about methods in objects

  There must be one root element wrapping all els in
  component template (demostrate more root els)

  Folder structure:
  For small to medium size application is good 
  practise to put the components in components folder
  For large applications you should structure your 
  folders by feature like "shared folder" for header
  and footer and a "main" folder for main content 
  related components. You can also nest them.

  Show ES6 short syntax about equal key and value

  Show styles:
  Show styles scope and data attibute with deb tools
  Show how to write SASS/SCSS

  https://vuejs.org/v2/guide/components.html
  
 * */ 

</script>

<style>

</style>
