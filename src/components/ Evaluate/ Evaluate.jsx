import React from 'react';
import "./style.scss";
import Anh from  "../../assets/images/information/valorant_mobile_announced.jpg";


function Evaluate(props) {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="evaluate">
                <h3 style={{color: "#ff4654", fontSize:"50px",left:0, right: 0, margin:"auto", paddingLeft:"200px", paddingTop:"30px", paddingBottom:"30px"}}><strong>Đánh giá Vanlorant</strong></h3>
                <p><strong>Ưu điểm:</strong></p>
                <ul><li>Game nhẹ nhàng, không đòi hỏi cấu hình quá cao nên người chơi có thể dễ dàng tiếp cận.</li><li>Gameplay không quá khó để bắt nhịp, chỉ cần trải qua vài lần tập luyện là có thể chiến game.</li></ul>
                <p><strong>Nhược điểm:&nbsp;</strong></p>
                <ul><li>Đồ họa chưa thật sự bắt mắt.&nbsp;</li><li>Sự chênh lệch giữa các Agent vẫn còn có sự chênh lệch khá lớn.</li><li>Vẫn chưa có nhà phát hành tại Việt Nam, nên game thủ Việt lại phải đi chơi ké ở các sever khác.</li><li>Đã xuất hiện tình trạng hack.</li></ul>
                <img src={Anh} width="800px"/>
                <h3><strong>Tổng kết</strong></h3>
                <p>Vanlorant là cái tên tiếp theo gia nhập vào cuộc đua thể loại FPS, Riot vẫn giữ đúng với phong độ của mình, dù sinh sau đẻ muộn nhưng Riot vẫn làm cho Vanlorant có sức hút không hề kém cạnh với các ông lớn trên thị trường. Ngay tại thời điểm ra mắt, Valorant đã nhận được lượng lớn người chơi tải về.&nbsp;</p>
                <p>Bước đầu thuận lợi nhưng liệu rằng trong tương lai Vanlorant có thể đi được xa và đặt được những thành công hay không thì vẫn phải chờ những nước đi tiếp theo của Riot. Hy vọng Vanlorant sẽ đem lại làn gió mới cho thị trường game FPS, và như bao bài viết về các tựa game FPS khác, mình vẫn đang chờ xem Riot sẽ làm như nào để có thể khống chế được nạn hacker muôn thuở khiến cho biết bao game thủ lắc đầu ngao ngán.&nbsp;</p>
            </div>
        </div>
    );
}

export default Evaluate;