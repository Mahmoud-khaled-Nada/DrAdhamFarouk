<template>
<v-card>
    <v-tabs v-model="tab" bg-color="#ff00" >
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          One
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
  

<script>
export default {
    data: () => ({
        drawer: null,
        tab: null,
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
        links: [
          'Dashboard',
          'Messages',
          'Profile',
          'Updates',
        ],
    }),
};
</script>
