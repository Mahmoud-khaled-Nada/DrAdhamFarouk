<template>
    <div class="main-content">
        <div class="headr">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" xs="12" sm="12" md="4" lg="6" xl="6">
                        <v-sheet class="pa-2 ma-2">
                            <div class="first-infor">
                                <img
                                    src="https://doctoradham.com/blog/wp-content/uploads/2017/03/cropped-cropped-Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-_20-1-2.jpg" />
                                <div class="text-i nfor">
                                    <h2>Dr. Adham Farouk</h2>
                                    <h3>Plastic Surgery Clinic</h3>
                                    <h3>www.AdhamFarouk.com</h3>
                                </div>
                                <div class="backgro-infor">
                                    <img class="img-one" src="../../assets/circle2.png" alt="">
                                    <img class="img-two" src="../../assets/dots.png" alt="">
                                    <img class="img-theer" src="../../assets/square2.png" alt="">
                                </div>
                            </div>
                            <div class="infor">
                                <clinics-scope />
                            </div>
                        </v-sheet>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="8" lg="6" xl="6">
                        <plastic-surgery />
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="body">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" xs="12" sm="12" md="7" lg="6" xl="6">
                        <carouse-image />
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="5" lg="6" xl="6">

                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script>
import PlasticSurgery from "@/components/home-component/PlasticSurgery.vue"
import ClinicsScope from "@/components/home-component/ClinicsScope.vue"
import CarouseImage from "@/components/home-component/CarouseImage.vue"
export default {
    name: "InformationMe",
    components:{
        PlasticSurgery,
        ClinicsScope,
        CarouseImage
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
@import "../../styles/InformationMe.css";
</style>
