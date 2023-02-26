<template>
    <div class="foot-container">
        <v-container fluid>
            <v-row >
                <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
                    <h1>Hello my expensev</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, perferendis.</p>
                  <img src="http://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-_26-1.jpg">
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
                     <h1>Hello my expensev</h1>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, perferendis.</p>
                    <img src="http://doctoradham.com/blog/wp-content/uploads/2017/03/Dr-Adham-Farouk-Plastic-Surgery-Clinic-Alexandria-Egypt-_26-1.jpg">
                </v-col>
            </v-row>
        </v-container>

    <div class="text-center foot-icon">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
    </div>
        </div>
</template>
<script>
export default {
    data: () => ({
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    }),
};
</script>

<style scoped>
@import url("@/styles/footer/footer-style.css");
</style>