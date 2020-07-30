import React, { Component } from 'react';
import { Layout } from 'antd';

import { Form, Input, Button } from 'antd';

import {inject,observer}from "mobx-react"



const { Header, Footer, Content } = Layout;

@inject('user')

@observer
class Logins extends Component {
    render() { 
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };
          const onFinish = values => {
            console.log('Success:', values);
            this.props.user.login()
            .then(data=>{
                console.log(data);
                this.props.history.push("/index")
            })
            .catch(err=>{
                console.log(err);
            })
          };
        
          const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
          };
        return ( 
            <Layout>
                <Header>班级管理系统</Header>
                <Content>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                        登录
                        </Button>
                    </Form.Item>
                </Form>
                </Content>
                <Footer>设计时间：2020-7-28</Footer>
            </Layout>
         );
    }
}
export default Logins;