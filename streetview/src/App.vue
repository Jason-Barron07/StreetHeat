<template>
  <NavBarComp/>
  
  <main>
    <router-view/>
  </main>
  <FooterComp/>
</template>

<script>
import NavBarComp from '@/components/NavBarComp.vue';
import FooterComp from '@/components/FooterComp.vue'
export default {
        components:{
          NavBarComp,
          FooterComp
        }
      }


</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2C3E50;
}

</style>
