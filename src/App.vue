<template>
  <v-app :theme="theme">
      <v-app-bar>
          <v-spacer>
              <v-tabs v-model="tab" color="#9b51e0">
                <div>
                  <h3 class="name">
          <span class="name-1">Dr.</span><span class="name-2">A</span>DHAM
          <span class="name-2">F</span>AROUK
        </h3>
                </div>
                  <v-tab v-for="(item, i) in items" :key="i" :value="item" :to="item.link" link
                      active-color="primary">
                      <v-icon :icon="item.icon"></v-icon>
                      <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-tab>
                  <!-- <v-list>
                      <v-list-group value="Actions">
                          <template v-slot:activator="{ props }">
                              <v-list-item v-bind="props" title="Languages"></v-list-item>
                          </template>
                          <v-list-item v-for="([title, icon], i) in cruds" :key="i" :value="title" :title="title"
                              :prepend-icon="icon"></v-list-item>
                      </v-list-group>
                  </v-list> -->
              </v-tabs>
          </v-spacer>
          <v-sheet elevation="6">
            <!-- <v-btn
        :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick" ></v-btn> -->
    </v-sheet>
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


