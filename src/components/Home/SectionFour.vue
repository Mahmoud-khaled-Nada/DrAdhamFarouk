<template>
    <div class="main-content">
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <services-me />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import ServicesMe from "@/components/PortfolioComponent/ServicesMe.vue"
export default {
    name: "SectionThree",
    components: {
        ServicesMe,
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
