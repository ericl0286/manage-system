import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons'
import logo from './img/logo.jpg'
import './less/index.less'

export default class Admin extends Component {
    onFinish = (values) => {
        console.log('Success:', values) //发请求
    }

    onFinishFailed=(errorInfo)=>{
        console.log('Failed:', errorInfo);
    }

    render() {
        
        return (
            <div className='pages_admin'>
                <header className='topbar'>
                    <img src={logo} alt="logo"/>
                    <h1>A Crazy Sneakerhead is on the Wayyyy...</h1>
                </header>
                <section className='login'>
                    <h2>用户登录</h2>
                    <Form ref={c=>this.age=c}
                        name="basic"
                        // initialValues={{
                        //     remember: true,
                        // }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item 
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                        >
                            <Input prefix={<UserOutlined />} 
                            placeholder='Username'/>
                        </Form.Item>

                        <Form.Item
                            // label="Password"
                            name="password"
                            placeholder='Password'
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder='Username'/>
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit" className='login_button'>
                            Sign In
                            </Button>
                        </Form.Item>
                        </Form>
                </section>
            </div>
        )
    }
}
  
