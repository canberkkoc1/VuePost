<template>
  <div class="hello">

    <CardOne></CardOne>
    <CardTwo></CardTwo>   
    
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardOne from '@/components/Cardone'
import CardTwo from '@/components/Cardtwo'


export default {
  name: "Home",

  components: {
  CardOne,
  CardTwo,

  },
  data() {
    return {
      
    };
  },
  mounted() {    this.$store.dispatch("loadPost");
    
    

  },
  computed: {
    ...mapState(["posts"]),
   
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/variables/_variables";

a{
  text-decoration: none;
  color:$text-color;
}
ul,li {
    list-style: none;   

}



</style>
