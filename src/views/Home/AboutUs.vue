<template>
    <div class="main-conntentccc">
        <v-row>
            <v-col cols="12" sm="6">
                <v-hover v-slot="{ isHovering, props }" open-delay="200">
                    <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto"
                        height="200" max-width="200" v-bind="props">
                        <!--  -->
                        <img src="https://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-Gynaecomastia-_01.jpg">
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12" sm="6">
                <v-hover v-slot="{ isHovering, props }" open-delay="200">
                    <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto"
                        height="200" max-width="200" v-bind="props">
                        <!--  -->
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12" sm="6">
                <v-hover v-slot="{ isHovering, props }" open-delay="200">
                    <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto"
                        height="200" max-width="200" v-bind="props">
                        <!--  -->
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12" sm="6"> <v-hover v-slot="{ isHovering, props }" open-delay="200">
                    <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" class="mx-auto"
                        height="200" max-width="200" v-bind="props">
                        <!--  -->
                    </v-card>
                </v-hover></v-col>
        </v-row>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.v-card.on-hover.v-theme--dark {
    background-color: rgba(#FFF, 0.8)
}

.v-card.on-hover.v-theme--dark.v-card__text {
    color: #000
}
</style>