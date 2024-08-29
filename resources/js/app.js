import "../css/app.css"
import "../../node_modules/flowbite/dist/flowbite.min.js"

import Layout from "@/Pages/Admin/AdminComponents/Layout.vue";
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`]
    page.default.layout = name.startsWith("Front/") ? undefined : Layout;
    return page
    
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})

// Service worker registration
// if("serviceWorker" in navigator) {
//   window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/sw.js')
//       .then(() => console.log('sw registered'))
//       .catch(err => console.log(err))
//   })
// }