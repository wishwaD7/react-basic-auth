import React, { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/Auth'
import api from '../../Service/API'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        console.log(values);

        setLoading(true)
        try {
            await api.post("/api/v1/authenticate/login", {
                email: values.email, password: values.password
            }).then(res => {
                if (res.status === 200) {
                    dispatch(login(res.data.access_token))
                    setLoading(false)
                    message.success('Welcome!');
                    navigate('/')
                }
            })
        } catch (error) {
            setLoading(false)
            message.error(error.response.data.error)
        }
    }

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
                    name="email"
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
                    {/* <Link to={'/'}> */}
                    <Button className='mt-5 pt-5' size="large" type="primary" htmlType="submit" >
                        Login
                    </Button>
                    {/* </Link> */}
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login