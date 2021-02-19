import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import { Form, Input, Button, message } from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons'
import {reqLogin} from '../../api/index.js'
import logo from './img/logo.jpg'
import './less/index.less'
import Admin from '../admin'
export default class Login extends Component {
    onFinish = async(values) => {
        // console.log('Success:', values)
        const {username,password}=values
        // 发post请求，获取id 匹配密码 ，进入login
        const result=await reqLogin(username,password)
            if(result.status){
                message.error(result.msg,2)
            }else{
                message.success('登陆成功');
                // 然后跳转到admin组件上面
                <Link to='http://127.0.0.1:3000/admin'/>
                
            }
    }

    onFinishFailed=(errorInfo)=>{
        console.log('Failed:', errorInfo);
        console.log('密码必须是8为以上');
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
                    <Form
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
                            {required: true,message: '-Please input your username!'},
                            {pattern:/\w{4,20}/,message: '-Username must be between 4 and 20 characters',
                            // validate:(rule=[{required: true,
                            //     message: 'username must be between 4 and 20 characters',}], value) => {
                            //       console.log(value.values)
                            //     }
                          },
                        ]}
                        >
                            <Input prefix={<UserOutlined />} 
                            placeholder='Username'
                            />
                        </Form.Item>

                        <Form.Item
                            // label="Password"
                            name="password"
                            placeholder='Password'
                            rules={[
                            {required: true,message: '-Please input your password!'},                       
                            // {pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/,message: '-Password must contain at least one number,one lowercase,one Uppercase and a special pattern'},
                            // {min:8,message: '-Password/ must be 8 characters or more!'}
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder='Password'/>
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
  
