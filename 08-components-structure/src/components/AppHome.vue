<template>
    <div>
        <h1>{{ title }}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur minima libero earum iste dolores magni facilis sint aliquam ipsam dolor.</p>
    </div>
</template>

<script>
export default {
    name: 'about',
    data(){
        return {
            title: 'This is the Home page!'
        }
    }
}
</script>

<style lang="scss" scoped>
    $border: 5px solid green;
    
    div {
        border: $border;
    }
</style>
