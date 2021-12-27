<template>
    <div className="my-4 border border-dark py-3 ps-3 bg-white position-relative">
        <div className="my-1">
            <span v-if="career.pro">
                <span className="small text-white bg-dark">PRO</span>
                &nbsp;
            </span>
            <span className="small">Career Path</span>
        </div>
        <div className="mb-5">
            <h5>{{career.title}}</h5>
            <li className="ms-3 small">&#9702; Beginner friendly, <strong>{{career.lessons}}</strong> lessons</li>
        </div>
        <div className="d-flex justify-content-center my-1"><img v-bind:src="career.img" style="width:80%" /></div>
        <span className="small fw-bold position-absolute bottom-0 end-0 px-2">{{career.tag}}</span>
    </div>
</template>

<script>

    export default {
        name:'CareerComp',
        props:{
            title:String
        },
        data(){
            return{
                career : this.getCareer()
            }
        },
        methods:{
            getCareer(){
                const data = require('../../assets/Data/popular.json');
                const career = data.career.find((c)=>{
                    return (c.title == this.title);
                })
                return career;
            }
        }
    }
</script>