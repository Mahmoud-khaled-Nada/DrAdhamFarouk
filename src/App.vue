<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"> </v-avatar>
        <v-btn v-for="(item, i) in items" :key="i" :value="item" :to="item.link" link active-color="9b51e0">
          <v-icon :icon="item.icon"></v-icon>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-btn>
        <v-spacer></v-spacer>
        <v-responsive max-width="260">
          <v-text-field density="compact" hide-details variant="solo"></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    <v-main class="all-main">
      <v-container fluid>
        <v-row>
          <v-col cols="11" style="margin: 0 auto;">
              <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "About Us", icon: "mdi-account", link: "/AboutUs" },
      {
        title: "Pictures Before & Sfter",
        icon: "mdi-check-circle",
        link: "/PicturesBeforeSfter",
      },
      {
        title: "Online Counseling",
        icon: "mdi-clipboard-text",
        link: "/OnlineCounseling",
      },
      { title: "Online Booking", icon: "mdi-book", link: "/OnlineBooking" },
      {
        title: "Guestbook",
        icon: "mdi-gesture-tap-button",
        link: "/Guestbook",
      },
      // { text: "", icon: "mdi-flag" },
    ],
    cruds: [
      ["English", "mdi-file-outline"],
      ["Arabic", "mdi-file-outline"],
    ],
  }),
};
</script>

<style scoped>
.all-main {
  background: #dcdce6;
  background-image: url('./assets/Background.png');
  margin: 0 auto;
}
</style>
