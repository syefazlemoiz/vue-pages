<template>
    <div class="col-3">
        <div class="py-3">
            <Heading title="Languages" />
            <div v-for="(lang,index) in languages" v-bind:key="index">
                <Link :title="lang.title" />
            </div>            
        </div>

        <div class="py-3">
            <Heading title="Subjects" />
            <div v-for="(sub,index) in languages" v-bind:key="index">
                <Link :title="sub.title" />
            </div>
        </div>

        <div class="py-3">
            <a href="" class="d-block text-decoration-none text-dark"><small>Full Catalog</small></a>
        </div>

        <div class="py-3">
            <a href="" class="d-block text-decoration-none text-dark"><small>Where do I begin?</small></a>
        </div>
    </div>
</template>

<script>
import Heading from './Heading.vue'
import Link from './Link.vue'
import asideData from '../../assets/Data/aside.json'

export default {
    name:'Aside',
    components:{
        Heading,
        Link
    },
    data(){
        return{
            languages: asideData.languages,
            subjects: asideData.subjects
        }
    }
}
</script>