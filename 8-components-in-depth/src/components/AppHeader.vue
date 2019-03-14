<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            title: 'This is the Header'
        }
    }
}
</script>

<style scoped>
div {
    border: 1px solid orange;
}
</style>

