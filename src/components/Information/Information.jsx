import React from 'react';
import "./style.scss";
import logoVal from "../../assets/images/logoVal.gif";
import anh2 from "../../assets/images/information/anh2.jpg";
import anh3 from "../../assets/images/information/anh3.jpg";
import anh4 from "../../assets/images/information/anh4.jpg";
import anh5 from "../../assets/images/information/anh5.jpg";
import GioiThieu from "../../assets/images/GioiThieu.mp4";

Information.propTypes = {
    
};

function Information(props) {
    return (
        <div className="information">
            <img style={{width:'100%', height:'800px'}} src={logoVal}/>

            <div className="d-flex justify-content-center align-items-center">

            </div>

            <div className="content">
                <h1 className="content_title">
                    Sơ lược về game Valorant
                </h1>
                <video preload='true' width="900px" controls>
                    <source src={GioiThieu} type='video/mp4'/>
                </video>
                <div className="desciption_content">
                    <p><strong>Valorant</strong> là tựa game FPS (game bắn súng góc nhìn thứ nhất nhiều người chơi) từng được biết đến với tên gọi Project A, được công bố lần đầu tiên vào tháng 10/2019, nằm trong series game mới của Riot Games – Cha đẻ của tựa game&nbsp;Liên Minh Huyền Thoại.</p>
                    <p>Điểm khác biệt lớn nhất của <strong>Valorant</strong> so với những tựa game FPS cùng thể loại như Overwatch hay Call of Duty, là dù cho giao tranh vẫn được định đoạt bằng những pha đấu súng thông thường, nhưng các nhân vật trong game đều sở hữu những bộ kỹ năng đặc trưng và Riot đã giới thiệu là khả năng sử dụng những nguyên tố tự nhiên kết hợp với các loại vĩ khí.</p>
                    <p>Chưa kể đây là một game free to play và như Riot đã giới thiệu trên trang web của mình rằng “Vũ khí tối thượng chính là trí tưởng tượng của bạn”. Điều này có thể khẳng định một điều <strong>Valorant</strong> đề cao về tính chiến thuật của người chơi. Một chiến thuật hiệu quả sẽ mang đến chiến thắng.</p>
                </div>
            </div>

            <div className="content">
                <h1 className="content_title">
                    Lối chơi mới lạ của Valorant
                </h1>
                <p>Đầu tiên, nhân vật trong game sẽ được gọi là <strong>Agents</strong>, giống như việc các tướng trong<strong> Liên Minh</strong> được gọi là Champions vậy. Người chơi sẽ được chọn nhân vật khi bắt đầu mỗi trận đấu. Nhân vật này sẽ theo người chơi suốt một game mà không thể thay đổi. Vậy nên bạn cần cân nhắc kỹ sẽ chọn nhân vật nào khi vào trận để đạt được lợi thế tối ưu.</p>
                <img  width="900px" src={anh5}/>
                <div className="desciption_content">
                    <p>Như mình đã đề cập bên trên, <strong>Riot</strong> đề cao tính sáng tạo và chiến thuật của người chơi để mang đến chiến thắng cho đội của mình. Cũng như Liên Minh Huyền Thoại, skin hay các hiệu ứng đặc biệt không mang lại bất cứ lợi thế nào trong game. Valorant đề cao kỹ năng cá nhân của người chơi và khả năng phối hợp với đồng đội nhiều hơn.</p>
                    <p>Chế độ chơi chính của <strong>Valorant</strong> sẽ chơi theo hình thứ đặt bom giống như trong Counter Strike. 10 người chơi sẽ chia thành 2 đội một bên công và một bên thủ. Bên công sẽ đặt một quả bom (trong game gọi là Spike) trên bản đồ. Nếu bên công bảo vệ thành công quả bom cho đến lúc bom nổ thì bên công thắng. Còn trường hợp nếu cả 5 thành viên của một đội chết hết thì đội đó hiển nhiên sẽ thua.</p>
                </div>
                <img className="img_content" width="900px" src={anh2}/>
                <div className="desciption_content">
                    <p>Game sẽ thi đấu theo thể thức BO25. Đội nào chiến thắng trước 13 trận sẽ là đội chiến thắng chung cuộc. Mỗi vòng chơi có thời gian là 1 phút 40 giây. Từ đây có thể thấy rằng nhịp độ trận đấu sẽ không quá nhanh khi mà bạn sẽ cần ít nhất khoảng 30 phút để hoàn thành một trận game.</p>
                    <p>Vào đầu game, mỗi nhân vật sẽ có ngay miễn phí một kỹ năng riêng, sau đó người chơi phải dùng tiền kiếm được để mua thêm 2 kỹ năng tiếp theo. Riêng chiêu cuối (hay còn gọi là ulti ấy) sẽ không mua được mà chỉ có thể có bằng cách kiếm điểm hạ gục trong trận đấu. Dù vậy, các kỹ năng này sẽ không phải là điểm chính giúp bạn chiến thắng mà chỉ là yếu tố phụ trợ cho khả năng bắn súng của chính người chơi.</p>
                </div>
                <img className="img_content" width="900px" src={anh3}/>
                <div className="desciption_content">
                    <p>Việc dùng vũ khí kết hợp với bộ kỹ năng riêng biệt của các nhân vật sẽ tạo ra nhiều đột biến trong trận đấu. Vàng và vũ khí còn dư trong trận trước sẽ được cộng dồn cho trận sau nếu vẫn chưa được sử dụng đến. Vì vậy việc tính toán hợp lý chiến thuật, đội bạn sẽ có thể mua được các loại vũ khí hay kỹ năng sớm, hoặc để dành lại đó, đôi khi cũng là một lợi thế trong trận đấu.</p>
                    <p>Game đồng thời cũng sẽ có chế độ đấu thường dành cho người chơi vui là chính và chế độ đấu hạng với tính cạnh tranh cao hơn dành cho các gamer nào muốn try-hard.</p>
                </div>
                <img  width="900px" src={anh4}/>
            </div>

            <div className="content">
                <h1 className="content_title">
                    Cấu hình game yêu cầu
                </h1>

                <div className="desciption_content">
                    <p>Cấu hình tối thiểu 30 FPS:</p>
                    <ul>
                        <li>Hệ điều hành: Window 7/8/10 64-Bit.</li>
                        <li>CPU: Intel Core 2 Duo E8400.</li>
                        <li>GPU: Intel HD 3000.</li>
                        <li>RAM: 4GB.</li>
                        <li>1GB VRAM.</li>
                    </ul>
                    <p>Cấu hình đề nghị – 60 FPS:</p>
                    <ul>
                        <li>Hệ điều hành: Windows 7/8/10 64-Bit.</li>
                        <li>CPU: Intel Core i3-4150.</li>
                        <li>GPU: GeForce GT 730.</li>
                        <li>RAM: 4GB.</li>
                        <li>1 GB VRAM.</li>
                    </ul>
                    <p>Cấu hình tối đa – Max setting 144+ FPS:</p>
                    <ul>
                        <li>Hệ điều hành: Windows 7/8/10 64-Bit.</li>
                        <li>CPU: Intel Core i5-4460 3.2 GHz.</li>
                        <li>GPU: GTX 1050 TI.</li>
                        <li>RAM: 4GB RAM.</li>
                        <li>1GB VRAM.</li>
                    </ul>
                    <p>Thật bất ngờ đúng không nào? Với mức cấu hình mà Riot đưa ra thì Valorant sẽ chơi được trên hầu hết tất cả các máy tính hiện có. Đây dường như là một chiến lượt thông minh để thu hút người chơi, giống như các họ đã làm với Liên Minh Huyền Thoại.</p>
                </div>
            </div>
        </div>
    );
}

export default Information;