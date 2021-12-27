<template>
    <section className="py-3">
            <h4>Most Popular</h4>
            <div className="row">
                <div className="col">
                    <LanguageComp title="Python"></LanguageComp>
                    
                    <CourseComp title="Learn HTML"></CourseComp>

                    <CourseComp title="Learn Python 3"></CourseComp>

                    <LanguageComp title="JavaScript"></LanguageComp>

                    <CourseComp title="Learn Java"></CourseComp>
                </div>

                <div className="col">
                    <CareerComp title="Front-End Developer"></CareerComp>

                    <LanguageComp title="Data Science"></LanguageComp>

                    <CareerComp title="Full-Stack Developer"></CareerComp>
                </div>

                <div className="col">
                    <CourseComp title="Learn JavaScript"></CourseComp>

                    <LanguageComp title="Web Development"></LanguageComp>

                    <CareerComp title="Data Scientist"></CareerComp>

                    <CourseComp title="Welcome to Codecademy"></CourseComp>
                </div>
            </div>
        </section>
</template>

<script>
/*



*/

import CourseComp from '../Popular/CourseComp.vue'
import CareerComp from '../Popular/CareerComp.vue'
import LanguageComp from '../Popular/LanguageComp.vue'

export default{
    name:'Popular',
    components:{
        CourseComp,
        CareerComp,
        LanguageComp
    }
}
</script>
