<template>
  <div class="container">
    <Header />
    <div class="row">
      <Aside />
      <div class="col">
        <Quiz />
        <Popular />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Aside from './components/Aside/Aside.vue'
import Quiz from './components/Quiz/Quiz.vue'
import Popular from './components/Popular/Popular.vue'

export default {
  name: 'App',
  components: {
    Header,
    Aside,
    Quiz,
    Popular
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  body, header{
    background-color: #FFF0E5 !important;
  }

  h5, h4{
    font-weight: bold !important;
  }
  aside div a:hover{
    color: rgba(var(--bs-primary-rgb),var(--bs-text-opacity)) !important;
  }

  #quiz{
    background-color: #FFD300 !important;
  }
</style>