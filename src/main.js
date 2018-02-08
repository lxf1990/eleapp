import Vue from 'vue'
import VueResource from 'vue-resource'
import moment from 'moment'
import app from './app'
import router from './router'
import './mock/mockServer' //引入加载模块
import './common/stylus/fonts.styl'

Vue.use(VueResource)
//注册
Vue.filter('date-string',function (value) {
   return moment(value).format('YYYY-MM-DD HH:mm:ss')
  //返回处理后的值

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render : h => h(app),
  router
})
