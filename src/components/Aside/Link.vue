<template>
    <a href="" class="py-2 d-block text-decoration-none text-dark">
        <small>
            {{title}}
        </small>
    </a>
</template>

<script>

    export default {
        name: 'Link',
        props:{
            title:String
        }
    }
</script>
