<template>
    <div class="foot-container">
        <v-container fluid>
            <v-row>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
              <h1 class="foot-title">Addresses And Phones</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
                quas harum? Atque eius quaerat fuga sint molestiae illo corrupti
                vitae voluptatibus. Dicta rerum est delectus perspiciatis nemo nihil
                autem! Doloremque?
              </p>
              <br />
              <p> <span class="foot-color">Email:  </span>www.AdhamFarouk.com</p>
              <p> <span class="foot-color">Phone:  </span>+02010054873</p>
              <p> <span class="foot-color">Website: </span> Dr. Adham Farouk | Plastic Surgery Clinic</p>
                </v-col>
                <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3411.490118224282!2d29.948356115143607!3d31.234852781464955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDE0JzA1LjUiTiAyOcKwNTcnMDIuMCJF!5e0!3m2!1sen!2seg!4v1677520717003!5m2!1sen!2seg"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
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
@import url("@/styles/InformationMe.css");
</style>