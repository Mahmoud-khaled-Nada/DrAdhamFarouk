<template>
    <section-one />
    <section-two />
    <section-three />
    <section-four />
    <section-five />
</template>
<script>
import SectionOne from "@/components/Home/SectionOne.vue";
import SectionTwo from "@/components/Home/SectionTwo.vue";
import SectionThree from "@/components/Home/SectionThree.vue";
import SectionFour from "@/components/Home/SectionFour.vue";
import SectionFive from "@/components/Home/SectionFive.vue";
export default{
name:"home-in",
  components: {
  SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive
},
}
</script>
<style scoped>

</style>
