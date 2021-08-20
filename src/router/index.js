import Vue from "vue";
import VueRouter from "vue-router";
// 导入Home组件
import Home from "../views/Home.vue";

// 告诉Vue使用VueRouter
Vue.use(VueRouter);

// 定义路由，这里是定义了路由数组
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 导入About组件
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // 重定向
  {
    path: "/",
    redirect: "/home",
  },
];

// 创建router对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。
const router = new VueRouter({
  // 完整写法  第一个routes是VueRouter里面定义的参数，冒号后面的routes是上面定义的变量
  // 假如上面定义路由变量改为 const routesTest，则完整写法为：routes: routesTest
  // routes: routes,
  routes, // routes: routes的简写
});

// 导出路由
export default router;
