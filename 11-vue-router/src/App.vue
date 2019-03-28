<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>Vue Router</h1>
        <h2>{{ title }}</h2>
        <app-header></app-header>

        <!-- begin main content -->
        <app-home />
        <page-about />
        <page-projects />
        <page-contact />
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
import PageProjects from './components/pages/PageProjects.vue';
import PageContact from './components/pages/PageContact.vue';

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
    AppFooter: AppFooter,
    AppHome,
    PageAbout,
    PageProjects,
    PageContact,
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
