export default [
    {
        exact: true,
        path: '/hook',
        breadcrumb: 'hook',
        render: (props: any) => import(/* webpackChunkName: "article" */ './pages/hooks')  // 返回要加载的组件
    },
    {
        exact: true,
        path: '/',
        breadcrumb: '首页',
        render: (props: any) => import(/* webpackChunkName: "article" */ './pages/articles')  // 返回要加载的组件
    },
    {
        exact: true,
        path: '/game',
        breadcrumb: '游戏',
        render: (props: any) => import(/* webpackChunkName: "article" */ './pages/game')  // 返回要加载的组件
    },
    {
        exact: true,
        path: '/conditionalRendering',
        breadcrumb: '视频',
        render: (props: any) => import(/* webpackChunkName: "article" */ './pages/conditionalRendering')  // 返回要加载的组件
    },
]
