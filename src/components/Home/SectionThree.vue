<template>
  <div class="main-content">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <portfolio-me />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import PortfolioMe from "@/components/PortfolioComponent/PortfolioMe.vue"
export default {
  name: "SectionThree",
  components: {
    PortfolioMe,
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
</style>
