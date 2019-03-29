<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>Vue Router</h1>
        <h2>{{ title }}</h2>
        <app-header></app-header>

        <!-- begin main content -->
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
        <!-- end main content -->

        <AppFooter></AppFooter>
      </div>
    </div>
  </div>
</template>

<script>

// Shared 
import AppHeader from './components/shared/AppHeader.vue';
import AppFooter from './components/shared/AppFooter.vue';


export default {
  name: 'app',
  data() {
    return {
      title: 'This is some title'
    }
  },
  components: {
    // AppHeader: AppHeader,
    AppHeader,
    AppFooter: AppFooter
  }
}
 
</script>

<style lang="scss">
  $border: 3px solid gray;

  div {
      border: $border;
      padding: 10px;
      margin: 10px;
  }
  
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
  }
</style>
