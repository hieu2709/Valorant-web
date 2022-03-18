import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {Button, Col, Row} from "antd";
import Astra from "../../assets/images/agents/Astra.png"
import Breach from "../../assets/images/agents/Breach.png"
import Brimstone from "../../assets/images/agents/Brimstone.png"
import Jett from "../../assets/images/agents/Jett.png"
import Cypher from "../../assets/images/agents/Cypher.png"
import Chamber from "../../assets/images/agents/Chamber.png"
import KAYO from "../../assets/images/agents/KAYO.png"
import Sage from "../../assets/images/agents/Sage.png"
import Yoru from "../../assets/images/agents/Yoru.png"
import Neon from "../../assets/images/agents/Neon.png"
import KillJoy from "../../assets/images/agents/KillJoy.png"
import Viper from "../../assets/images/agents/Viper.png"
import Sova from "../../assets/images/agents/Sova.png"
import Omen from "../../assets/images/agents/Omen.png"
import Phoenix from "../../assets/images/agents/Phoenix.png"
import Raze from "../../assets/images/agents/Raze.png"
import Skye from "../../assets/images/agents/Skye.png"
import Reyna from "../../assets/images/agents/Reyna.png"
import AgentInfo from "./AgentInfo";
import AgentListLeft from "./AgentListLeft";

Agents.propTypes = {

};

const listAgents = [
    {
        id: 1,
        name: "BRIMSTONE",
        url: Brimstone,
        info: "Gia nhập từ nước Mỹ xa xôi, kho vũ khí từ quỹ đạo của Brimstone luôn đảm bảo lợi thế cho đồng đội của mình. Những chiêu thức mang lại tính năng bổ trợ chính xác và có tầm sử dụng xa khiến Brimstone xứng đáng là 1 sĩ quan lục quân vô địch.",
    },
    {
        id: 2,
        name: "PHOENIX",
        url: Phoenix,
        info: "Đến từ Vương Quốc Anh, sức mạnh của Phoenix nằm ở lối chiến đấu của anh, với khả năng thiêu đốt cả chiến trường bằng bom mù và bom xăng. Phoenix luôn tỏa sáng dù là phối hợp tác chiến cùng đồng đội hay chiến đấu độc lập.",
    },
    {
        id: 3,
        name: "SAGE",
        url: Sage,
        info: "Đến từ Trung Quốc, Sage luôn đảm bảo cho mình và đồng đội được an toàn ở bất cứ nơi đâu cô đến. Với khả năng hồi sinh đồng đội đã ngã xuống và đẩy lùi những cuộc tấn công dữ dội, cô là hậu phương vững chắc cho đồng đội trong những trận giao tranh khốc liệt.",
    },
    {
        id: 4,
        name: "SOVE",
        url: Sova,
        info: "Sinh ra nơi mùa đông ngự trị vĩnh cửu tại nước Nga, Sova có khả năng tìm kiếm, đánh dấu và tiêu diệt đối thủ một cách hiệu quả và chính xác. Sở hữu cây cung đặc chế và những kỹ năng trinh sát hiểm hóc, con mồi của Sova sẽ chẳng bao giờ có thể trốn thoát.",
    },
    {
        id: 5,
        name: "VIPER",
        url: Viper,
        info: "Là một nhà hóa học người Mỹ, Viper sử dụng một loạt các thiết bị hóa học độc hại để kiểm soát chiến trường và hạn chế tầm nhìn của đối thủ. Nếu kẻ địch không bị tiêu diệt bởi chất độc thì cũng mất mạng bởi tâm thuật của cô.",
    },
    {
        id: 6,
        name: "CYPHER",
        url: Cypher,
        info: "Là một người dò tin đến từ Ma-rốc, với hệ thống giám sát tinh vi của mình, Cypher có thể theo dõi mọi di chuyển của đối thủ. Mọi bí mật đều sẽ bị phát hiện. Mọi bước đi đều sẽ bị phát giác. Không gì có thể lọt khỏi mắt của Cypher",
    },
    {
        id: 7,
        name: "REYNA",
        url: Reyna,
        info: "Được tôi luyện ngay giữa Mexico, Reyna luôn áp đảo trong các giao tranh đơn lẻ và trở nên mạnh mẽ hơn với mỗi đối thủ bị cô hạ gục. Sức mạnh của cô chỉ bị giới hạn bởi kỹ năng cá nhân, cũng là điều khiến cô bị lệ thuộc nhiều vào phong độ thi đấu của người chơi.",
    },
    {
        id: 8,
        name: "KILLJOY",
        url: KillJoy,
        info: "Một thiên tài từ nước Đức. Với hàng loạt những sáng chế độc đáo, Killjoy hoàn toàn có khả năng thống lĩnh chiến trường. Ngoài việc sở hữu thiết bị có sát thương khủng, kỹ năng làm suy yếu đối thủ từ các robot sẽ giúp cô chặn đứng mọi kẻ địch chỉ trong tích tắc.",
    },
    {
        id: 9,
        name: "CHAMBER",
        url: Chamber,
        info: "Với vẻ ngoài lịch lãm và trang bị tối tân, chuyên gia vũ khí Chamber đến từ nước Pháp sẽ truy quét đối thủ bằng sự chính xác tuyệt đối. Anh có thể tận dụng kho vũ khí chuyên biệt của mình để giữ vững chiến tuyến, bắn hạ kẻ địch từ xa với phương án dự phòng hoàn hảo dành cho mọi kế hoạch tác chiến.",
    },
    {
        id: 10,
        name: "BREACH",
        url: Breach,
        info: "Breach, gã Thụy Điển với thân hình đầy máy móc, có thể bắn ra các luồng năng lượng động học mạnh mẽ tới mục tiêu và mở đường xuyên qua lãnh địa của đối phương. Với sát thương đáng kể cùng khả năng gây rối, Breach luôn đảm bảo đồng đội chiếm được thế thượng phong khi giao chiến.",
    },
    {
        id: 11,
        name: "OMEN",
        url: Omen,
        info: "Tựa như bóng ma của ký ức, Omen sử dụng bóng tối để chiến đấu. Khả năng khống chế tầm nhìn và dịch chuyển tức thời của hắn khiến mọi đối thủ phải hoang mang tột độ do không biết có thể bị tấn công bất cứ lúc nào từ bất cứ nơi đâu.",
    },
    {
        id: 12,
        name: "JETT",
        url: Jett,
        info: "Đến từ Hàn Quốc, với phong cách chiến đấu nhanh nhẹn và huyền ảo, Jett có thể thực hiện những pha tấn công liều lĩnh đến bất ngờ. Thoắt ẩn thoắt hiện trong các cuộc giao tranh, cô ra đòn chặn đứng đối thủ trước khi chúng kịp hiểu chuyện gì xảy ra.",
    },
    {
        id: 13,
        name: "RAZE",
        url: Raze,
        info: "Raze là một hiện tượng đến từ Brazil với cá tính nổi bật và những khẩu súng cực bự. Với lối chơi bùng nổ, cô là lựa chọn hoàn hảo trong việc ép đối phương phải ra khỏi nơi ẩn nấp và dọn sạch đối thủ trong những địa hình chật hẹp với một liều “thuốc nổ” hạng nặng.",
    },
    {
        id: 14,
        name: "SKYE",
        url: Skye,
        info: "Đến từ nước Úc hoang dã, Skye cùng các tinh linh của mình luôn đột phá dũng mãnh trong những lãnh địa nguy hiểm. Với dàn tạo vật phong phú có nhiệm vụ quấy rối kẻ địch cùng khả năng hồi máu, cô sẽ luôn đảm bảo an toàn cho đồng đội và cho phép họ thỏa sức chiến đấu ở phong độ cao nhất.",
    },
    {
        id: 15,
        name: "YORU",
        url: Yoru,
        info: "Đến từ Nhật Bản, Yoru có khả năng xé toang thực tại để xâm nhập vào hàng ngũ của địch mà không bị phát hiện. Với kỹ năng vừa để đánh lừa vừa để tấn công kẻ địch, con mồi của Yoru sẽ chẳng bao giờ biết được chúng bị ai hạ gục.",
    },
    {
        id: 16,
        name: "ASTRA",
        url: Astra,
        info: "Astra, đặc vụ người Ghana, chuyên tận dụng năng lượng của vũ trụ để định hình trận chiến theo ý muốn. Với khả năng điều khiển thể tinh vân của bản thân và tài năng bao quát chiến thuật xuất chúng, cô ấy luôn đi trước đối thủ của mình 10 bước.",
    },
    {
        id: 17,
        name: "KAYO",
        url: KAYO,
        info: "KAY/O là một cỗ máy chiến tranh được chế tạo vì 1 mục đích duy nhất: vô hiệu hóa kẻ thù. Khả năng áp chế kỹ năng của kẻ địch khiến chúng không thể phản kháng chắc chắn sẽ mang đến lợi thế lớn cho KAY/O và đồng đội khi giao tranh.",
    },
    {
        id: 18,
        name: "NEON",
        url: Neon,
        info: "Neon, một Đặc Vụ người Phillipines với kỹ năng phóng về phía trước với tốc độ chóng mặt, bắn ra các chùm bức xạ điện sinh học nhanh như chính cách cơ thể cô ấy tạo ra nó. Cô luôn xông lên trước để tìm kẻ thù khi chúng chưa kịp trở tay, để rồi hạ gục chúng trong chớp mắt.",
    },
]

const listAgentsLeft = ["Brimstone","Phoenix", "Sage", "Sova", "Viper", "Reyna", "KillJoy", "Chamber"]
function Agents(props) {

    const [agent, setAgent] = useState(listAgents[0]);

    const chooseAgent = (x) => {
        setAgent(listAgents[x]);
    }
    return (
        <div>
            <h1>ĐIỆP VIÊN</h1>
            <Row>
                <Col span={4} className='list-agents'>
                    {/*<AgentListLeft listAgentsLeft={listAgentsLeft} />*/}
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(0)}>BRIMSTONE</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(1)}>PHOENIX</Button>
                    </div >
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(2)}>SAGE</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(3)}>SOVA</Button>
                    </div >
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(4)}>VIPER</Button>
                    </div >
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(5)}>CYPHER</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(6)}>REYNA</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(7)}>KILLJOY</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(8)}>CHAMPER</Button>
                    </div>
                </Col>
                <Col span={16}>
                    <AgentInfo agent={agent}/>
                </Col>
                <Col span={4} className='agiments'>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(9)}>BREACH</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(10)}>OMEN</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(11)}>JETT</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(12)}>RAZE</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(13)}>SKYE</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(14)}>YORU</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(15)}>ASTRA</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(16)}>KAY/0</Button>
                    </div>
                    <div className='agent'>
                        <Button type='link' onClick={()=>chooseAgent(17)}>NEON</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Agents;