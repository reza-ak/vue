import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

// import bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.rtl.min.css' // در بوت استرپ 5 rtl هم داریم

const app = createApp(App)
app.use(router)
app.mount('#app')
