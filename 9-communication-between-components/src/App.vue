<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <ParentComponent /> 
      </div>
    </div>
 
  </div>
</template>

<script>
import ParentComponent from './components/ParentComponent.vue'

export default {
  name: 'app',
  components: {
    ParentComponent
  }
}

/*
  Pass hardcoded data to child component

  Pass dynamic data to child component

  Show props in array way

  Usually though, you’ll want every prop to be a specific type of value. 
  In these cases, you can list props as an object, where the properties’ 
  names and values contain the prop names and types

  Accessing props in the child script
  We can access it like in dataobj
  We can also make some data required

  Link to official docs about props
  https://vuejs.org/v2/guide/components-props.html

  Pass data from child to parent using events

  Pass data from the child component to the parent by
  emmiting custom event
  .$emit() - this is a buid in method vuejs gives us. 
  We can use it in every component in every vue instance
  1st argument is name of the custom event
  2nd optional argument we can pass some data  

  Communication with callback functions from the 
  parent to the child

*/
</script>

<style>
</style>
