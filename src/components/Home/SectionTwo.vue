<template>
  <div class="main-content">
      <div class="body">
          <v-container fluid>
              <div class="backgro-infor">
              <img class="triangle-one" src="../../assets/triangle.png">
          </div>
              <v-row>
                  <v-col cols="12" md="7" lg="7" xl="7">
                      <carouse-image v-motion-pop/>
                  </v-col>
                  <v-col cols="12" md="5" lg="5" xl="5">
                      <specialization-in v-motion-pop/>
                  </v-col>
              </v-row>
          </v-container>
      </div>
  </div>
</template>
<script>
import CarouseImage from "@/components/Home/HomeComponent/CarouseImage.vue"
import SpecializationIn from "@/components/Home/HomeComponent/SpecializationIn.vue"
export default {
  name: "SectionTwo",
  components:{
      CarouseImage,
      SpecializationIn
  },
  data() {
      return {
          colors: [
              'indigo',
              'warning',
              'pink darken-2',
              'red lighten-1',
              'deep-purple accent-4',
          ],
          show: false,
      }
  },
};
</script>
<style scoped>
@import "@/styles/InformationMe.css";
@import "@/styles/Portfolio.css";
</style>
