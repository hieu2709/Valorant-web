import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button} from 'antd';
import './_header.scss';
import 'antd/dist/antd.css';

Header.propTypes = {

};

function Header(props) {
    return (
        <div id='header-page'>            
            <div  className='header'>
                <Row justify='center' align='middle'>
                    <Col span={4}>
                    </Col>
                    <Col span={20}>
                        <Row>
                            <Col span={4}>
                                <div className='trang-chu'>
                                    <a className='a-trang-chu'>
                                        <p>
                                            TRANG CHỦ
                                        </p>
                                    </a>
                                </div>
                            </Col>
                            <Col span={4}>
                                <div className='trang-chu'>
                                    <a className='a-trang-chu'>
                                        <p>
                                            ĐIỆP VIÊN
                                        </p>
                                    </a>
                                </div>
                            </Col>
                            <Col span={4}>
                                <div className='trang-chu'>
                                    <a className='a-trang-chu'>
                                        <p>
                                            BẢN ĐỒ
                                        </p>
                                    </a>
                                </div>
                            </Col>
                            <Col span={4}>
                                <div className='trang-chu'>
                                    <a className='a-trang-chu'>
                                        <p>
                                            KHO VŨ KHÍ
                                        </p>
                                    </a>
                                </div>
                            </Col>
                            <Col span={4}>
                                <div className='trang-chu'>
                                    <a className='a-trang-chu'>
                                        <p>
                                            ĐÁNH GIÁ
                                        </p>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default Header;