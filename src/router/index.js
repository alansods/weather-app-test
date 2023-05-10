import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SavedLocations from '../views/SavedLocations.vue'
import WeatherViewer from '../views/WeatherViewer/WeatherViewer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city/:location',
    name: 'WeatherViewer',
    component: WeatherViewer
  },
  {
    path: '/saved-locations',
    name: 'SavedLocations',
    component: SavedLocations
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
