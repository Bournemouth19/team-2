import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react'
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class CustomerLayout extends React.Component{
    render(){
        return(
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Menu.Item key="1" style={{float: 'left'}}>nav 1</Menu.Item>
                    <Menu.Item key="4" style={{float: 'left'}}>nav 3</Menu.Item>
                    <Menu.Item key="5" style={{float: 'left'}}>nav 4s</Menu.Item>
                    <Menu.Item key="2" style={{float: 'right'}}><Link to="/login">log in</Link></Menu.Item>
                    <Menu.Item key="3" style={{float: 'right'}}><Link to="/signup">sign up</Link></Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                   
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
  
  }

  export default CustomerLayout