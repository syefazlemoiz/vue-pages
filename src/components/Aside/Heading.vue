<template>
    <h5 class="py-2">
        <a href="" class="text-decoration-none text-dark">
            {{title}} 
            <img src="../../assets/up-arrow.png" width="25"/>
        </a>
    </h5>
</template>

<script>


export default{
    name:'Heading',
    props:{
        title:String
    }
}
</script>
