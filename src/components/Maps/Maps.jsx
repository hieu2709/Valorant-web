import React, {useState} from 'react';
import Ascent from '../../assets/images/maps/ascent-featured.png';
import Bind from '../../assets/images/maps/bind-featured.png';
import Breeze from '../../assets/images/maps/breeze-featured_v1.png';
import Haven from '../../assets/images/maps/haven-featured.png';
import Icebox from '../../assets/images/maps/Icebox_transparentbg_for_Web.png';
import Split from '../../assets/images/maps/split-featured.png';
import Fracture from '../../assets/images/maps/Valorant_FRACTURE_Minimap_Alpha_web.png';
import "./style.scss";
import {Col, Row} from "antd";
import MapInfor from "./MapInfor";


const listMaps = [
    {
        id: 1,
        url: Ascent,
        name: "ASCENT",
        info: "Một khu vực nghiên cứu tối mật đã bị xẻ làm hai bởi một thí nghiệm radianite thất bại. Với những chiến lược phòng thủ đối lập như chính địa hình của bản đồ này, lựa chọn nằm ở chính bạn: đối mặt trực tiếp với những kẻ tấn công trên chính sân chơi của chúng hoặc cầm cự trước cuộc tấn công và giành chiến thắng.",
    },
    {
        id: 2,
        url: Bind,
        name: "BIND",
        info: "2 khu vực đặt bom, không có đường mid. Người chơi chỉ có 2 lựa chọn: trái hoặc phải. Cả 2 khu đều có lối đi trực diện dành cho bên tấn công cùng 2 điểm dịch chuyển tức thời 1 chiều giúp việc đánh úp dễ dàng hơn.",
    },
    {
        id: 3,
        url: Breeze,
        name: "BREEZE",
        info: "Hãy chiêm ngưỡng vẻ đẹp của những tàn tích lịch sử hoặc các hang động ven biển tại thiên đường nhiệt đới này. Nhưng hãy luôn đề phòng nhé bởi bạn sẽ phải đối mặt với những pha đấu súng tầm xa và chiến đấu trong các khu vực rộng lớn.",
    },
    {
        id: 4,
        url: Haven,
        name: "HAVEN",
        info: "Nằm bên dưới một tu viện bị lãng quên, nơi những âm thanh vang trời từ những cuộc đụng độ giữa các Điệp Viên khét tiếng nhằm kiểm soát 3 khu vực đặt bom không ngừng vang lên. Tuy rằng có nhiều khu vực cần kiểm soát hơn nhưng bên phòng thủ có thể tận dụng các công trình để tạo dựng những pha tiến công mạnh mẽ.",
    },
    {
        id: 5,
        url: Icebox,
        name: "ICEBOX",
        info: "Sân đấu tiếp theo sẽ là một khu khai quật bí mật đã bị nuốt chửng bởi băng giá của Vương Quốc. Hai khu vực đặt spike được bọc kín bởi tuyết và kim loại sẽ đòi hỏi người chơi phải chiến đấu thật tinh tế để giành quyền kiểm soát. Hãy tận dụng tốt những dây đu để tạo lợi thế và khiến đối thủ không kịp trở tay.",
    },
    {
        id: 6,
        url: Split,
        name: "SPLIT",
        info: "Nếu muốn đi xa, bạn sẽ phải leo lên cao. 2 khu vực đặt bom được tách rời bởi 1 khu trung tâm trên cao, nơi mà các điệp viên có thể di chuyển nhanh bằng 2 dây leo. Mỗi khu đều có 1 tòa tháp mờ ảo - là vị trí rất quan trọng để nắm quyền kiểm soát. Hãy để ý tới kẻ địch ở phía trên trước khi tất cả mọi thứ bị thổi bay lên trời.",
    },
    {
        id: 7,
        url: Fracture,
        name: "FRACTURE",
        info: "Một sân chơi mở phù hợp với các trận chiến nhỏ để giành vị trí trọng yếu, được chia thành hai khu vực đặt bom. Mỗi khu đều có cửa sập chống bom kiên cố - một khi đã sập, chỉ có thể phá cửa hoặc tìm lối đi khác. Hãy gắng sức chiến đấu để giữ được quyền kiểm soát bản đồ.",
    },
];

function Maps() {

    const [map, setMap] = useState(listMaps[0]);
    return (
        <div className="mainBackground">
            <h1 className=''>BẢN ĐỒ</h1>
            <MapInfor listMaps={listMaps}/>
        </div>


    );
}

export default Maps;