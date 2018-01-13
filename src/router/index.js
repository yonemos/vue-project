import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
//import HelloWorld from '@/components/HelloWorld'
import LayoutWorks from '@/components/layouts/Works' //作品ページの親テンプレートとして追加
import WorksTop from '@/components/WorksTop' //
import WorksDetail from '@/components/WorksDetail' //
import Contact from '@/components/Contact'
import About from '@/components/About'
import PageNotFound from '@/components/PageNotFound' //notfound

Vue.use(Router)

export default new Router({
    mode: 'history', //#にしないモード
    routes: [{
            //Top
            path: '/',
            name: 'Top',
            component: Top
        },


        { //作品ページまとめ
            path: '/works',
            component: LayoutWorks, //importで指定したところ

            children: [{ //作品一覧ページ
                    path: '/',
                    name: 'WorksTop',
                    component: WorksTop
                },
                { //作品詳細ページ
                    path: ':slug',
                    name: 'WorksDetail',
                    component: WorksDetail
                }
            ]

        },
        { //お問い合わせ
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        { //このサイトについて
            path: '/about',
            name: 'About',
            component: About

        },
        { //404ページのルーティング
            path: '*', //どのURLでもの意味のアスタリスク
            name: 'Not Found',
            component: PageNotFound,
            title: 'Not Found'
        }
    ]
})