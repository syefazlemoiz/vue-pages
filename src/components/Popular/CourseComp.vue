<template>
    <div className="my-4 border border-dark py-3 ps-3 bg-white position-relative">
        <div className="my-1">
            <span v-if="course.pro">
                <span className="small text-white bg-dark">PRO</span>
                &nbsp;
            </span>
            <span className="small">Course</span>
        </div>
        <div v-bind:className="getMargins(course.title.length)">
            <h5>{{course.title}}</h5>
            <li className="ms-3 small">&#9702; Beginner friendly, <strong>{{course.lessons}}</strong> lessons</li>
        </div>
        <span className="small fw-bold position-absolute bottom-0 end-0 px-2">{{course.tag}}</span>
    </div>
</template>

<script>

    export default {
        name:'CourseComp',
        props:{
            title:String
        },
        data(){
            return{
                course: this.getCourse()
            }
        },
        methods:{
            getCourse(){
                const data = require('../../assets/Data/popular.json');
                const course = data.course.find((obj)=>{return (obj.title == this.title)});
                return course;
            },
            getMargins(len){
                if(len <= 20){
                    return("mb-5 mt-2")
                }
                else{
                    return("mb-4 mt-2")
                }
            }

        }
    }
</script>