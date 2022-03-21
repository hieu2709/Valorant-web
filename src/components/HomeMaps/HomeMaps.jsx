import React from 'react';
import "./style.scss";
import abc from "../../assets/images/agents/Omen.png";
import {NavLink} from "../NavBar/NavBarElements";
import {Col, Row} from "antd";

HomeMaps.propTypes = {
    
};

function HomeMaps(props) {
    return (
        <div id='HomeMaps'>
            <div className='home_agent_page'>
                <Row>
                    <Col span={10}>
                        <img className='abc' src={abc} />
                    </Col>
                    <Col span={14}>
                        <div className="content">
                            <h1>ĐIỆP VỤ CỦA BẠN</h1>
                            <h4>VŨ KHÍ TỐI THƯỢNG CHÍNH LÀ TRÍ SÁNG TẠO CỦA BẠN.</h4>
                            <p>Ngoài việc trang bị súng đạn, hãy chọn cho mình một Đặc Vụ có kỹ năng phù hợp để giúp bạn tỏa sáng trong những màn đấu súng. Không có Đặc Vụ nào giống nhau, mỗi cá nhân đều là độc nhất.</p>
                            <NavLink  to='/agents'>XEM TẤT CẢ ĐIỆP VIÊN</NavLink>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HomeMaps;