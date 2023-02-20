<template>
    <div class="carousel pa-2 ma-2">
        <v-carousel cycle height="443" hide-delimiter-background show-arrows="hover">
            <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src"
                cover></v-carousel-item>
        </v-carousel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            images: [
                {
                    src: 'https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_02.jpg',
                },
                {
                    src: 'https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Cleft-lip-palate-_04.jpg',
                },
                {
                    src: 'https://doctoradham.com/blog/wp-content/uploads/2017/04/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Breast-Augmentation-_02-03.jpg',
                },
                {
                    src: 'https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Liposuction-_02.jpg',
                },
                {
                    src: 'https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Otoplasty-traumatic-_01.jpg'
                },
                {
                    src: 'https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Skin-Tumours-_03.jpg'
                },
            ],
        }
    },
}
</script>
<style lang="">

</style>
