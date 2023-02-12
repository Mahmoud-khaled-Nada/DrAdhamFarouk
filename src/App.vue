<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-sheet color="grey-lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>
        <h3 class="name">
          <span class="name-1">Dr.</span><span class="name-2">A</span>DHAM
          <span class="name-2">F</span>AROUK
        </h3>
      </v-sheet>
      <v-divider> </v-divider>

      <v-list density="compact">
        <v-list-subheader>REPORTS</v-list-subheader>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          :to="item.link"
          link
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Languages"></v-list-item>
          </template>
          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-tabs centered color="grey-darken-2">
        <v-tab>
          <v-btn
            :prepend-icon="
              theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
            "
            @click="onClick"
          >
            Toggle Theme</v-btn
          >
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
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

  /**
   *
   */
};
</script>

<style scoped>
.name {
  color: #9980fa;
}

.name-1 {
  margin-right: 10px;
  font-size: 15px;
}

.name-2 {
  font-size: 25px;
  font-weight: 700;
}
</style>
