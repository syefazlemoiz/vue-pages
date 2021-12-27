<template>
    <a href="" class="mx-1 small text-decoration-none text-dark">
        {{title}}
        <img v-if="img" src='../../assets/drop-arrow.png' width='25'/>
    </a>
</template>

<script>

export default ({
    name: 'Link',
    props: {
        title: String,
        img: Boolean
    }
})
</script>
