<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>Components in depth</h1>
        <p>{{ someProp }}</p>
        <app-header></app-header>

        <!-- begin main content -->
        <app-home></app-home>
        <page-about /> 
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

// Pages 
import AppHome from './components/AppHome.vue';
import PageAbout from './components/pages/PageAbout.vue';


export default {
  name: 'app',
  // data: function(){
  //   return  {
  //    someProp: 'Some prop!'
  //   }
  // },
  data(){
    return  {
     someProp: 'Some prop!'
    }
  },
  components: {
    // AppHeader: AppHeader,
    AppHeader,
    AppHome,
    PageAbout,
    AppFooter,
  }

}
 

</script>

<style>

</style>
