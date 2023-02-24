<template>
    <section-one />
    <section-two />
    <section-three />
    <section-four />
</template>
<script>
import SectionOne from "@/components/Home/SectionOne.vue";
import SectionTwo from "@/components/Home/SectionTwo.vue";
import SectionThree from "@/components/Home/SectionThree.vue";
import SectionFour from "@/components/Home/SectionFour.vue";
export default {
  name:"home-in",
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour
   },

}
</script>
<style scoped>

</style>
