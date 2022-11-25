import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (

        <div className='container card col-md-8 mx-auto'>
            <Form className='login-form'
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <span className='fw-bold small pt-2'>Email</span>
                <Form.Item
                    name="email_mobile"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email or mobile number!',
                        },
                    ]}
                >
                    <Input size="large" />
                </Form.Item>
                <span className='fw-bold small pt-2'>Password</span>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password size="large" />
                </Form.Item>


                <Form.Item className='text-center'>
                    <Link to={'/'}>
                        <Button className='mt-5 pt-5' size="large" type="primary" htmlType="submit" >
                            Login
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login