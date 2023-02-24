<template>
    <div class="container"></div>
    <div class="container" v-motion-slide-visible-bottom v-motion :initial="{ opacity: 0, y: 100 }"></div>
    <div class="container" v-motion-slide-visible-bottom></div>
    <div class="container"></div>
</template>

<script setup>

</script>

<style scoped>
.container {
width: 100px;
height: 100px;
margin: 300px auto 500px auto;
display: flex;
justify-content: center;
align-items: center;
background: #43b883;
border-radius: 10px;
}
</style>