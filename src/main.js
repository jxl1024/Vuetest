import Vue from "vue";
import App from "./App.vue";
// 导入从router文件夹下的index.js中export的VueRouter实例
// import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  // 把router 实例注入到 vue 根实例中,就可以使用路由了
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
