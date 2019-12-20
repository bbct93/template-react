export default [
    {
        exact: true,
        path: '/',
        breadcrumb: '首页',
        render: (props: any) =>
            import(/* webpackChunkName: "article" */ './pages/articles')
    },
]
