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

const app = createApp(App).use(store)

registerPlugins(app)

app.mount('#app')

