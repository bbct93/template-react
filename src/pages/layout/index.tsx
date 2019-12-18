import React from "react";
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const menuData = [
    {
        menuName: '菜单 1',
        icon: 'user'
    },
    {
        menuName: '菜单 2',
        icon: 'video-camera'
    },
    {
        menuName: '菜单 3',
        icon: 'upload'
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
                                <Icon type={item.icon} />
                                <span className="nav-text">{item.menuName}</span>
                            </Menu.Item>)}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '24px 16px 0', }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360,height: '100%' }}>content</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            )

        }
}

