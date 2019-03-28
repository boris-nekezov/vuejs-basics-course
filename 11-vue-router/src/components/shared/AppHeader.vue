<template>
    <div>
        <h1>{{ title }}</h1>
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
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
