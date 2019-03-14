<template>
  <div class="alert alert-success">
    <h1>This is child component</h1>
    <hr>
    <h1>{{ passHardcodedData }}</h1>
    <h2>{{ printProp() }}</h2>
    <h3>{{ requiredStr }}</h3>
    <h3>{{ passStrWithDefault }}</h3>
    
    <hr>
    
    <button class="btn btn-primary"
      @click="sentToParent">Send data from child component to parent component</button>

    <hr>

    <button class="btn btn-primary"
      @click="passFun()">Execute passed callback function</button>   
    <br><br>
    <p>{{ textToChild }}</p> 
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data(){
    return {
      dataToParent: 'This is a string that is send via emitting custom event'
    }
  },

  // props: ['passHardcodedData', 'dataToChild'],
  
  props: {
    passHardcodedData: String,
    dataToChild: String,
    requiredStr: {
      type: String,
      required: true
    },
    passStrWithDefault: {
      type: String,
      default: 'This is the default string'
    },
    textToChild: {
      type: Function,
      required: true
    },
    passFun: {
      type: Function,
      required: true
    },

  },

  methods: {
    printProp(){
      return this.dataToChild;
    },
    sentToParent(){
      this.$emit('dataWasSentToParent', this.dataToParent);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
