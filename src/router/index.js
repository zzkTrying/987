import VueRouter from "vue-router";
const routes = [
    {
        path:'/',
        name:'login',
        component:()=>import('../components/LoginComponent.vue'),
    },
    {
        path:'/Index',
        name:'index',
        component:()=>import('../components/IndexComponent.vue'),
        children:[
            {
                path:'/Home',
                name:'home',
                meta:{
                    title:'首页'
                },
                component:()=>import('../components/HomeComponent.vue')
            },
            {
                path:'/Admin',
                name:'admin',
                meta:{
                    title:'管理员管理'
                },
                component:()=>import('../components/admin/AdminManage.vue')
            },
            {
                path:'/User',
                name:'user',
                meta:{
                    title:'用户管理'
                },
                component:()=>import('../components/user/UserManage.vue')
            },
            {
                path:'/Storage',
                name:'storage',
                meta:{
                    title:'仓库管理'
                },
                component:()=>import('../components/storage/StorageManage.vue')
            },
            {
                path:'/Goodstype',
                name:'goodstype',
                meta:{
                    title:'物品分类管理'
                },
                component:()=>import('../components/goodstype/GoodstypeManage.vue')
            },
            {
                path:'/Goods',
                name:'goods',
                meta:{
                    title:'物品分类管理'
                },
                component:()=>import('../components/goods/GoodsManage.vue')
            },
            {
                path:'/Record',
                name:'record',
                meta:{
                    title:'物品分类管理'
                },
                component:()=>import('../components/record/RecordManage.vue')
            },

        ]
    },

]

const router = new VueRouter({
    mode:'history',
    routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push=function push(to) {
    return VueRouterPush.call(this,to).catch(err=>err)
}


export default router;