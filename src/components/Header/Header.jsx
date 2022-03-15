import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button} from 'antd';
import './_header.scss';
import 'antd/dist/antd.css';
import {Bars, Nav, NavMenu} from "../NavBar/NavBarElements";
import {NavLink} from "react-router-dom";

Header.propTypes = {};

function Header(props) {
    return (
        <div className='header'>
            <Nav>
                <Col span={4}>
                    <NavLink to='/'>
                        <img src="" alt='logo'/>
                        {/*{require('../../images/logo.svg')}*/}
                    </NavLink>
                </Col>

                <Col span={20}>
                    <NavMenu>
                        <Col span={4}>
                            <NavLink to='/' activeStyle className='text-link'>
                                TRANG CHỦ
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


        // <div id='header-page'>
        //     <div  className='header'>
        //         <Row justify='center' align='middle'>
        //             <Col span={4}>
        //             </Col>
        //             <Col span={20}>
        //                 <Row>
        //                     <Col span={4}>
        //                         <div className='trang-chu'>
        //                             <a className='a-trang-chu' href="/">
        //                                 <p>
        //                                     TRANG CHỦ
        //                                 </p>
        //                             </a>
        //                         </div>
        //                     </Col>
        //                     <Col span={4}>
        //                         <div className='trang-chu'>
        //                             <a className='a-trang-chu' href='/weapons'>
        //                                 <p>
        //                                     ĐIỆP VIÊN
        //                                 </p>
        //                             </a>
        //                         </div>
        //                     </Col>
        //                     <Col span={4}>
        //                         <div className='trang-chu'>
        //                             <a className='a-trang-chu'>
        //                                 <p>
        //                                     BẢN ĐỒ
        //                                 </p>
        //                             </a>
        //                         </div>
        //                     </Col>
        //                     <Col span={4}>
        //                         <div className='trang-chu'>
        //                             <a className='a-trang-chu'>
        //                                 <p>
        //                                     KHO VŨ KHÍ
        //                                 </p>
        //                             </a>
        //                         </div>
        //                     </Col>
        //                     <Col span={4}>
        //                         <div className='trang-chu'>
        //                             <a className='a-trang-chu'>
        //                                 <p>
        //                                     ĐÁNH GIÁ
        //                                 </p>
        //                             </a>
        //                         </div>
        //                     </Col>
        //                 </Row>
        //             </Col>
        //
        //         </Row>
        //     </div>
        // </div>
    );
}

export default Header;