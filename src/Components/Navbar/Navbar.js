import { Row, Col } from 'antd'
import React from 'react'
// import { Image } from 'antd'
import { Link } from 'react-router-dom'
import './Navbar.css'


// import Logo from './../../logo.svg'

function Navbar() {
    return (
        <nav className="sticky-top bg-blue p-3">
            <div className=''>
                <Row>
                    <Col span={8}> <h2 className='ant-drawer-body'>Login React App</h2></Col>
                    <Col span={16}>
                        <div className='ant-drawer-body' >
                            <ul className='list-inline no-bullets' >
                                <li className='list-inline-item'><Link to="/" className='navbarlink'>Home</Link></li>
                            </ul>
                        </div></Col>
                </Row>
            </div>
        </nav>
    )
}

export default Navbar