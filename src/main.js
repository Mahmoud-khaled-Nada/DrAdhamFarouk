/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Composables
import { createApp } from 'vue'
// Components
import App from './App.vue'
import store from './store';

// Plugins
import { registerPlugins } from '@/plugins'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

import { MotionPlugin } from '@vueuse/motion';

/* add icons to the library */
library.add(faUserSecret)

const app = createApp(App)
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.use(store)
    app.use(MotionPlugin)
registerPlugins(app)

app.mount('#app')

