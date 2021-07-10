
//  1 没有得路由跳转到404页面
//  2 次页面是否需要登录
//  3 如果页面需要登录 并且没有登录的状态 返回登录页面


import Vue from 'vue'
import Router from 'vue-router'


import login from '../view/login'
import home from '../view/home'
import goods from '../view/goods'
import notOpen from '../view/notOpen'

Vue.use(Router)

//虚拟dom

export default new Router({
    // mode:'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                footShow: true,
                login:false
            }
        },
        {
            path: '/home',
            name: 'index',
            component: home,
            meta: {
                footShow: true,
                login_require: true
            }
        },
        {
            path: '/goods',
            name: 'goods',
            component: goods,
            meta: {
                footShow: true,
                login_require: false
            }
        },
        {
            path: '*',
            component: notOpen,
            meta: {
                footShow: false // true显示，false隐藏
            }

        }
    ],

})

// Router.beforeEach((to, from) => {
// })