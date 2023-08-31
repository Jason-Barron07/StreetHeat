<template>
  <div></div>

  <NavBarComp/>
  <router-view/>
</template>

<script>
import NavBarComp from '@/components/NavBarComp.vue';

export default {
        components:{
          NavBarComp
        }
      }


</script>

<style>

</style>
