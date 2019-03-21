<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'about',
    data(){
        return {
            title: 'This is the about page!'
        }
    }
}
</script>

<style lang="scss" scoped>
    $border: 5px solid red;
    
    div {
        border: $border;
    }
</style>