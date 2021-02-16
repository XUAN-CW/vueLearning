import Vue from 'vue'
import App from './App.vue'
import router from './router'//导入 router

Vue.config.productionTip = false

new Vue({
  router,//添加 router 配置
  render: h => h(App)
}).$mount('#app')
