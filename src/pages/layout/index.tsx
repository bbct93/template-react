import React from "react";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Link } from "react-router-dom";

const menuData = [
    {
        menuName: 'Article',
        icon: 'user',
        link: '/'
    },
    {
        menuName: 'Game',
        icon: 'video-camera',
        link: '/game'
    },
    {
        menuName: 'Video',
        icon: 'upload',
        link: '/video'
    },
    {
        menuName: 'Hooks',
        icon: 'upload',
        link: '/hook'
    }
];

export default class App extends React.Component<any,any>{
        render() {
            return (
                <Layout style={{height:'100vh'}}>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            {menuData.map((item,index) => <Menu.Item key={index}>
                                <Link to={item.link}>
                                    <Icon type={item.icon} />
                                    <span className="nav-text">{item.menuName}</span>
                                </Link>
                            </Menu.Item>)}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0', }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360,height: '100%' }}>{this.props.children}</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            )

        }
}

