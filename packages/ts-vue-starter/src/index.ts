import { createApp } from 'vue'
import Idux from "./idux";

import App from './App.vue'

const app = createApp(App)

app.use(Idux).mount('#app')