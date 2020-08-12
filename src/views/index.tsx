import React, { useState, useEffect } from 'react';
import { Avatar, Layout, Menu, Breadcrumb } from 'antd';
import { DesktopOutlined, EditOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { getNoticeConfig } from '../api';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    Redirect,
    useParams,
} from 'react-router-dom';

import { List } from './list';
import { Notice } from './notice';
import { Order } from './order';

import './index.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const Index = () => {
    const [ collapsed, setCollapsed ] = useState(false);
    const onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };

    let { pathname } = useLocation();

    // 你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它。而后面加参数则会使其在该参数发生变化时才调用副作用。
    // useEffect(
    //     () => {
    //         console.log(path);
    //     },
    //     [ path ],
    // );

    useEffect(
        () => {
            getNoticeConfig().then(r=>{
                console.log(r);
            })
            console.log(pathname);
        },
        [ pathname ],
    );
    const auth = {
        isAuthenticated: true,
        authenticate(cb: Function) {
            auth.isAuthenticated = true;
            setTimeout(cb, 100); // fake async
        },
        signout(cb: Function) {
            auth.isAuthenticated = false;
            setTimeout(cb, 100);
        },
    };
    const menus = [
        {
            label: '产品配置',
            key: 'sub1',
            children: [
                {
                    label: '产品管理',
                    key: '/list',
                },
                {
                    label: '公告发布',
                    key: '/notice',
                },
                {
                    label: '订单信息',
                    key: '/order',
                },
            ],
        },
        {
            label: '景区配置',
            key: 'sub2',
        },
    ];

    return auth.isAuthenticated ? (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    defaultOpenKeys={[ 'sub1' ]}
                    selectedKeys={[ pathname ]}
                    mode="inline"
                >
                    {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/list">景区配置</Link>
                    </Menu.Item> */}
                    {menus.map((menu) => (
                        <SubMenu key={menu.key} icon={<UserOutlined />} title={menu.label}>
                            {menu.children ? (
                                menu.children.map((item) => (
                                    <Menu.Item key={item.key}>
                                        <Link to={item.key}>{item.label}</Link>
                                    </Menu.Item>
                                ))
                            ) : (
                                ''
                            )}
                        </SubMenu>
                    ))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    {/* <Breadcrumb>
                        <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <UniHeader />
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/list" />
                            </Route>
                            <Route path="edit/:topicId">
                                <div>321312 </div>
                            </Route>
                            <Route path="/list">
                                <List />
                            </Route>
                            <Route path="/notice">
                                <Notice />
                            </Route>
                            <Route path="/order">
                                <Order />
                            </Route>
                            <Route path="*">
                                <Redirect
                                    to={{
                                        pathname: '/404',
                                        state: { from: pathname },
                                    }}
                                />
                            </Route>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by PFT</Footer>
            </Layout>
        </Layout>
    ) : (
        <Redirect
            to={{
                pathname: '/login',
                state: { from: pathname },
            }}
        />
    );
};

function UniHeader() {
    return (
        <div style={{ backgroundColor: '#fff', padding: 24 }}>
            <h2>美团系统商小程序</h2>
            <div flex="cross:center">
                <Avatar size={'large'} icon={<UserOutlined />} />
                <div>
                    景区名称<EditOutlined />
                </div>
            </div>
        </div>
    );
}
