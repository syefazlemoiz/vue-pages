<template>
    <div v-bind:style="{backgroundImage:'url(' + Lang.bg + ')', backgroundPosition:Lang.align}" className="my-4 border border-dark py-5 px-3">
        <div className="bg-white py-2 px-3">
            <span>Explore All</span>
            <h5>{{Lang.title}}</h5>
        </div>
    </div>
</template>

<script>

    export default{
        name:'LanguageComp',
        props:{
            title:String
        },
        data(){
            return{
                Lang: this.getLang()
            }
        },
        methods:{
            getLang(){
                const data = require('../../assets/Data/popular.json');
                const lang = data.language.find((l)=>{
                    return (l.title == this.title);
                })
                return lang;
            }
        }
    }
</script>
