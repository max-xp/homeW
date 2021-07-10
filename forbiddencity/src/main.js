import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')


// router.beforeEach(function (to, from) {
//   console.log(to, from)
// });

router.beforeEach((to, from, next) => {
  console.log(to, from)
  console.log(localStorage['token']);
  if(to.matched.some(res=>res.meta.login_require)){//判断是否需要登录
    if (localStorage['token']) {
      next();
    }else{
      alert('需要登录');
      next({
        path:"/login"
      });
    }
  }else{
    next()
  }
  if (to.matched.length === 0) {  //如果未匹配到路由
    from.name ? next({ name: from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();    //如果匹配到正确跳转
  }
});