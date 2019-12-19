
export default [
    {
        exact: true,
        path: '/',
        breadcrumb: '首页',
        render: (props: any) => {
            import('./pages/articles')
        }
    },
    // {
    //     exact: true,
    //     path: '/addArticle',
    //     breadcrumb: '添加文章',
    //     render: (props: any) => {
    //         import('./pages/addAritcles')
    //     }
    // }
]