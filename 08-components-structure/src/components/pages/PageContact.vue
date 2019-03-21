<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'contact',
    data(){
        return {
            title: 'This is the contact page!'
        }
    }
}
</script>

<style lang="scss" scoped>
    $border: 5px solid purple;
    
    div {
        border: $border;
    }
</style>