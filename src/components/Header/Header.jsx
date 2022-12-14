import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'antd';
import './_header.scss';
import 'antd/dist/antd.css';
import { Bars, Nav, NavMenu } from "../NavBar/NavBarElements";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/images/logo.png'

Header.propTypes = {};

function Header(props) {
    return (
        <div className='header'>
            <Nav>
                <Col span={4}>
                    <NavLink to='/'>
                        <img src={Logo} style={{height:70}}/>
                    </NavLink>
                </Col>

                <Col span={20}>
                    <NavMenu>
                        <Col span={4}>
                            <NavLink to='/information' activeStyle className='text-link'>
                                GIỚI THIỆU
                            </NavLink>
                        </Col>
                        <Col span={4}>
                            <NavLink to='/agents' activeStyle className='text-link'>
                                ĐIỆP VIÊN
                            </NavLink>
                        </Col>
                        <Col span={4}>
                            <NavLink to='/maps' activeStyle className='text-link'>
                                BẢN ĐỒ
                            </NavLink>
                        </Col>
                        <Col span={4}>
                            <NavLink to='/weapons' activeStyle className='text-link'>
                                KHO VŨ KHÍ
                            </NavLink>
                        </Col>
                        <Col span={4}>
                            <NavLink to='/rate' activeStyle className='text-link'>
                                ĐÁNH GIÁ
                            </NavLink>
                        </Col>
                    </NavMenu>
                </Col>
            </Nav>
        </div>
    );
}

export default Header;