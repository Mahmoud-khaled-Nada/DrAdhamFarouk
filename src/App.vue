<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" color="white" flat density="compact">
      <v-avatar color="grey-darken-1" size="32"></v-avatar>

      <v-spacer></v-spacer>

      <v-tabs centered color="grey-darken-2">
        <v-tab v-for="(item, i) in items" :key="i" :value="item" :to="item.link" link color="#0693e3">
          <!-- {{ link }} -->
          <v-icon :icon="item.icon"></v-icon>
          {{ item.title }}
          <!-- <v-list-item-title v-text="item.title"></v-list-item-title> -->
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="11" class="all-main">
            <!-- <v-main class="bg-grey-lighten-3"> -->
              <v-main>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
            <footer-lay />
          </v-main>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>

<script>
// import BtnComponent from "@/components/layout/BtnComponent.vue"
import FooterLay from "@/components/layout/FooterLay.vue"
export default {
  components: {
    // BtnComponent,
    FooterLay,
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "About Us", icon: "mdi-account", link: "/AboutUs" },
      { title: "Pictures Before & Sfter", icon: "mdi-check-circle", link: "/PicturesBeforeSfter" },
      { title: "Online Counseling", icon: "mdi-clipboard-text", link: "/OnlineCounseling" },
      { title: "Online Booking", icon: "mdi-book", link: "/OnlineBooking" },
      { title: "Guestbook", icon: "mdi-gesture-tap-button", link: "/Guestbook" },
      { title: "Log In", icon: "mdi-login", link: "/Login" },
      { title: "Register", icon: "mdi-gesture-tap-button", link: "/Register" },
      // { text: "", icon: "mdi-flag" },
    ],
    cruds: [
      ["English", "mdi-file-outline"],
      ["Arabic", "mdi-file-outline"],
    ],
  }),
}
</script>

<style scoped>
.all-main {
  margin: 0 auto;
}
</style>