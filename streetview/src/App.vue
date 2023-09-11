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

</style>
