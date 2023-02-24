<template>
    <div class="container"></div>
    <div class="container" v-motion-slide-visible-bottom v-motion></div>
    <div class="container" v-motion-slide-visible-bottom></div>
    <div class="container"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :variants="{ custom: { scale: 2 } }"
        :hovered="{ scale: 1.2 }"
        :delay="200"></div>
        <div class="container" ref="containerEl"></div>
</template>

<script setup>
import { useMotion } from '@vueuse/motion';
import { ref } from 'vue';
const containerEl = ref();
useMotion(containerEl, {
         initial:{ opacity: 0, y: 100 },
         visibleOnce:{opacity:1, y:0,}
})
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