<template>
    <div class="main-content">
        <div class="headr">
            <v-sheet class="pa-2 ma-2">
                <div class="first-infor">
                    <img
                        src="https://doctoradham.com/blog/wp-content/uploads/2017/03/cropped-cropped-Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-_20-1-2.jpg" />
                    <div class="text-i nfor">
                        <h2>Dr. Adham Farouk</h2>
                        <h3>Plastic Surgery Clinic</h3>
                        <h3>www.AdhamFarouk.com</h3>
                        <h3>www.AdhamFarouk.com</h3>
                        <h3>www.AdhamFarouk.com</h3>
                    </div>
                </div>
                <div class="infor">
                    <h3>Clinic’s Scope includes</h3>
                    <p>
                        Aesthetic Surgery: Rhinoplasty – Otoplasty – Eyelids Surgery
                        Breast Surgery: Reduction – Augmentation – Lifting – Reconstructing – Gynecomastia
                        Body Sculpting: Abdominoplasty – Arm Lift – Thighs Lift – Body Lift – Liposuction – Fat
                        injection
                        Congenital Anomalies: Cleft lip – Maxillo-Facial – Ear – Nose – Hand – Foot – Genitalia
                        Hand Surgery: Injuries – Tumors – Infections – Re-plantation
                        Burn: Treatment of Burn – Post-burn Deformities
                        Injuries: Face – Skin and Soft tissues all over the body – Scar removal
                        Tumors: Face – Skin and Soft tissues all over the body
                    </p>
                </div>
            </v-sheet>
            <v-sheet class="pa-2 ma-2">
                <div class="sconde-infor">
                    <img
                        src="http://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-_38.jpg" />
                    <p>
                        Plastic Surgery means restoration of the natural form of human
                        body. The extensive field of Plastic Surgery intervenes with the<br />
                        boundaries of other fields of science and art
                    </p>
                </div>
            </v-sheet>
        </div>
        <div class="body">
        <v-container fluid>
            <v-row >
                <v-col cols="7" xs="12" sm="12" md="7" lg="7" xl="7">
                        <div class="carousel pa-2 ma-2">
                            <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
                                <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src"
                                    cover></v-carousel-item>
                            </v-carousel>
                        </div>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="5" lg="5" xl="5">
                    <v-sheet class="ma-2 pa-2">
                        <div class="">

                            <video controls width="600" height="400" autoplay loop muted
                                poster="imgs/home/cover-speed-website.png">
                                <source
                                    src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Promo-01-trans02-music01-1.mp4"
                                    type="video/mp4">
                                <track src="my_file_en.vtt" kind="subtitles" srclang="en" label="English">
                            </video>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
        </div>
        <!-- <div class="body">
            <div class="carousel">
                <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
                    <v-carousel-item v-for="(item, i) in images" :key="i" :src="item.src" cover></v-carousel-item>
                </v-carousel>
            </div>
            <div class="">

                <video controls width="600" height="400" autoplay loop muted poster="imgs/home/cover-speed-website.png">
                    <source src="https://doctoradham.com/blog/wp-content/uploads/2017/04/Promo-01-trans02-music01-1.mp4"
                        type="video/mp4">
                    <track src="my_file_en.vtt" kind="subtitles" srclang="en" label="English">
                </video>
            </div>
        </div> -->
    </div>
</template>
<script>
// import d from "../../javascript/InformationMe.js";
export default {
    name: "InformationMe",
    data() {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            images: [
                {
                    src: 'https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_02.jpg',
                },
                {
                    src: 'http://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_07.jpg" data-description=" " class="portfolio-group1-2 portfolio_responsive_lightbox" data-groupid="1-2"><img alt="Rhinoplasty" data-title=" Dr Adham Farouk Plastic Surgery Clinic Alexandria Egypt Rhinoplasty _07" src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_07.jpg" class="watermark" data-src="" data-imgsrc="http://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_01.jpg',
                },
                {
                    src: 'src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Rhinoplasty-_01.jpg"',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },

            ],
        }
    },
};
</script>
<style scoped>
@import "../../styles/InformationMe.css";
</style>
