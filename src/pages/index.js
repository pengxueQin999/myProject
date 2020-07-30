import React, { Component } from 'react';

//antd UI框架
import {Layout,Menu,Breadcrumb} from 'antd'
import LeftMenu from '../component/LeftMenu';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';



const { Header, Content, Sider } = Layout;


class index extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    render() { 
        return ( 
            <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        {/* =========================动态展示的效果==================== */}
       <LeftMenu/>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {/* Route展示的内容 */}
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
         );
    }
}
 
export default index;