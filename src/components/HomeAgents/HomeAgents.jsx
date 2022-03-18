import React from 'react';
import './style.scss';
import BFG from '../../assets/images/bg-mapHome.png';
import {NavLink} from "../NavBar/NavBarElements";


HomeAgents.propTypes = {
    
};

function HomeAgents(props) {
    return (
        <div className='wrapper-home-agent'>
            <h1>BẢN ĐỒ CỦA <br/> BẠN</h1>
            <h4>CHIẾN ĐẤU KHẮP THẾ GIỚI</h4>
            <p>
                Mỗi bản đồ đều là một sân chơi để bạn thỏa sức thể <br/> hiện tư duy sáng tạo của mình. Được xây dựng với mục <br/> đích phát triển chiến lược đội nhóm nhằm mang đến <br/> các trận đấu ngoạn mục và những khoảnh khắc xuất <br/> thần. Hãy tạo ra lối chơi đi vào lịch sử mà ai cũng <br/> muốn học hỏi.
            </p>
            <NavLink  to='/maps'>XEM TẤT CẢ BẢN ĐỒ</NavLink>
            <div className='home-agents'>
                <img src={BFG} alt="" />
            </div>
        </div>
    );
}

export default HomeAgents;