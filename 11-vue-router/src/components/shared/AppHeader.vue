<template>
    <div>
        <h1>{{ title }}</h1>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <router-link 
                    class="nav-link"
                    to="/"
                    active-class="active"
                    exact>Home</router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    class="nav-link"
                    to="/contact"
                    active-class="active">Contact</router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    class="nav-link"
                    to="/projects"
                    active-class="active">Projects</router-link>
            </li>
            <li class="nav-item">
                <router-link 
                    class="nav-link"
                    to="/about"
                    active-class="active">About</router-link>
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            title: 'This is the header'
        }
    }
}
</script>

<style lang="scss" scoped>
    $border: 3px solid lightgreen;

    div {
        border: $border;
    }
</style>
