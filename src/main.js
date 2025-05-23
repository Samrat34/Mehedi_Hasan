import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faServer, faPalette, faArrowUp, faMoon, faSun, faBars, faTimes, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faPenRuler } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faImages } from '@fortawesome/free-solid-svg-icons'
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
  faLocationDot,
  faVuejs,
  faGears,
  faDatabase,
  faPenRuler,
  faLaptopCode,
  faCloud,
  faScrewdriverWrench,
  faUserAstronaut,
  faRocket,
  faPaperPlane,
  faPhoneAlt,
  faMapMarkerAlt,
  faImages

)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

AOS.init({
  duration: 1000,
  once: true,
  offset: 100
})