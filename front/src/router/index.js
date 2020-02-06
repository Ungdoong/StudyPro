import Vue from 'vue'
import VueRouter from 'vue-router'

// 공통페이지
import appHeader from '@/components/common/Header'
import appFooter from '@/components/common/Footer'

// 인트로, 홈페이지
import intro from '@/views/Intro'
import home from '@/views/Home'

// 게시판
import board from '@/components/board/board'
import postContent from '@/components/board/post_content'
import postRegister from '@/components/board/post_register'

// 유저페이지
import user from '@/views/User'
import signup from '@/components/user/Signup'
import signupSuccess from '@/components/user/SignupSuccess'
import mypage from '@/components/user/Mypage'

// 스터디페이지
import study from '@/views/Study'
import studydetail from '@/components/studydetail/MainStudyDetail'
import workspace from '@/components/workspace/WorkSpace'

//쪽지함 접근(임시)
import msgbox from '@/components/user/messenger/MessageHome'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'intro',
        components: {
            header: null,
            default: intro,
            footer: null
        }
    },
    {
        path: '/home',
        name: 'home',
        components: {
            header: appHeader,
            default: home,
            footer: appFooter,
        }
    },
    {
        path: '/study',
        name: 'study',
        components: {
            header: appHeader,
            default: study,
            footer: appFooter
        }
    },
    {
        path: '/board/register',
        name: 'post_register',
        components: {
            header: appHeader,
            default: postRegister,
            footer: appFooter
        },
    },
    {
        path: '/board/:board',
        name: 'board',
        components: {
            header: appHeader,
            default: board,
            footer: appFooter
        },
        props: true,
        children: [
            {
                path: '?id=:post_id',
                name: 'post_id',
                component: postContent,
            }
        ]
        // props: (route) => ({
        //     board: route.board,
        //     post_id: route.post_id,
        // }),
    },
    {
        path: '/user',
        name: 'user',
        components: {
            header: appHeader,
            default: user,
            footer: appFooter
        },
        children: [{
                path: 'signup',
                component: signup
            },
            {
                path: 'signup/success',
                component: signupSuccess
            },
            {
                path: 'mypage',
                component: mypage
            }
        ]
    },
    {
        path: '/workspace/:id',
        name: 'workspace',
        components: {
            header: null,
            default: workspace,
            footer: null
        }
    },
    {
        path: '/study/studydetail/:id',
        name: 'studydetail',
        components: {
            header: appHeader,
            default: studydetail,
            footer: appFooter
        }
    },
    {
        path: '/msgbox',
        name: 'msgbox',
        components: {
            header: appHeader,
            default: msgbox,
            footer: appFooter
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: "active",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router