import { createApp } from 'vue'
import App from './App.vue'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCartShopping, faClock, faEnvelope, faLocationDot, faMagnifyingGlass, faPhoneVolume, faQuoteLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram, faPinterestP, faSquareFacebook, faSquareGooglePlus, faSquarePinterest, faSquareTwitter, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faLocationDot, faEnvelope, faClock, faFacebookF, faTwitter, faInstagram, faPinterestP, faMagnifyingGlass, faCartShopping, faQuoteLeft,
    faPhoneVolume, faUser, faSquareGooglePlus, faSquareFacebook, faSquareTwitter, faSquarePinterest, faCopyright)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
