import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faServer, faPalette, faArrowUp, faMoon, faSun, faBars, faTimes, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'

library.add(
  faGithub,
  faLinkedin,
  faFacebook,
  faDiscord,
  faCode,
  faDatabase,
  faServer,
  faPalette,
  faArrowUp,
  faMoon,
  faSun,
  faBars,
  faTimes,
  faPhone,
  faEnvelope,
  faLocationDot
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

AOS.init({
  duration: 1000,
  once: true,
  offset: 100
})