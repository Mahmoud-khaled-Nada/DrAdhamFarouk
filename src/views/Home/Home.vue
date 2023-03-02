<template>
    <section-one />
    <section-two />
    <section-three />
</template>
<script>
import SectionOne from "@/components/Home/SectionOne.vue";
import SectionTwo from "@/components/Home/SectionTwo.vue";
import SectionThree from "@/components/Home/SectionThree.vue";
export default{
name:"HomePage",
  components: {
  SectionOne,
    SectionTwo,
    SectionThree,
},
}
</script>
<style scoped>

</style>
