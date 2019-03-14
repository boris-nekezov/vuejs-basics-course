<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="alert alert-primary">
          <h1>This is parent component</h1>
          <child-component 
            passHardcodedData="This is harcoded data passed to child component!" 
            :dataToChild="title"
            :requiredStr="stringThatIsRequired"
            :passStrWithDefault="stringWithDefault"
            @dataWasSentToParent="storedData = $event"
            :textToChild="text"
            :passFun="callbackFun"/>
                  
            <hr>      
            <p>Stored data is: {{ storedData }}</p>
            
            <hr>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  name: 'app',
  data(){
    return {
      title: 'This is dynamic data passed to child component!',
      stringThatIsRequired: 'This string will be required in the child component!',  
      stringWithDefault: 'This is property with some text!',
      storedData: '',
      text: 'This is passed to child component the will be changed by a callback function passed from the parent component!'
    };
  },
  
  methods: {
    callbackFun(){
      return this.text = 'This is communication with callback function!';
    }
  },

  components: {
    ChildComponent
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
