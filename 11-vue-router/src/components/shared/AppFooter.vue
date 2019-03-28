<template>
    <div>
        <h1>{{ title }}</h1>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            title: 'This is the Footer'
        }
    }
}
</script>

<style lang="scss" scoped>
    $border: 3px solid lightblue;

    div {
        border: $border;
    }
</style>
