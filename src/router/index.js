import Vue from 'vue'
import Router from 'vue-router'
import TimePicker from '@/components/TimePicker'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TimePicker',
      component: TimePicker
    }
  ]
})
