import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Ares from '../../assets/images/weapons/Ares.png';
import Bucky from '../../assets/images/weapons/Bucky.png';
import Bulldog from '../../assets/images/weapons/Bulldog.png';
import Classic from '../../assets/images/weapons/Classic.png';
import Frenzy from '../../assets/images/weapons/Frenzy.png';
import Ghost from '../../assets/images/weapons/Ghost.png';
import Guardian from '../../assets/images/weapons/Guardian.png';
import Judge from '../../assets/images/weapons/Judge.png';
import Operator from '../../assets/images/weapons/Operator.png';
import Phantom from '../../assets/images/weapons/Phantom.png';
import Sheriff from '../../assets/images/weapons/Sheriff.png';
import Shorty from '../../assets/images/weapons/Shorty.png';
import Spectre from '../../assets/images/weapons/Spectre.png';
import Stinger from '../../assets/images/weapons/Stinger.png';
import Vandal from '../../assets/images/weapons/Vandal.png';

Weapons.propTypes = {
    
};

function Weapons(props) {
    return (
        <div id='Weapons'>
            <h1>KHO VŨ KHÍ</h1>
            <div className='container'>
                <div className='card'>
                    <img src={Classic} alt=""/>
                    <div className='info'>
                        <h1>Classic.</h1>
                        <p>Chế độ chính bắn ra những phát đạn chính xác khi đứng yên, đi kèm với chế độ bắn siêu tốc dành cho các cuộc chạm trán tầm gần.</p>
                    </div>
                </div>

                <div className='card'>
                    <img src={Shorty} alt=""/>
                    <div className='info'>
                        <h1>Shorty.</h1>
                        <p>Một khẩu súng nòng ngắn linh hoạt cực kỳ lợi hại ở cự ly gần, nhưng chỉ có thể bắn hai phát trước khi cần nạp đạn. Có thể kết hợp tốt với các vũ khí tầm xa.</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='card'>
                    <img src={Frenzy} alt=""/>
                    <div className='info'>
                        <h1>Frenzy.</h1>
                        <p>Súng lục liên thanh hạng nhẹ cực đỉnh để vừa bắn vừa di chuyển. Có thể hơi khó kiểm soát do tốc độ bắn quá nhanh, vì vậy hãy thử xả đạn ở tầm trung nhé.</p>
                    </div>
                </div>

                <div className='card'>
                    <img src={Ghost} alt=""/>
                    <div className='info'>
                        <h1>Ghost.</h1>
                        <p>Ghost có độ chuẩn xác cao, kèm theo băng đạn cỡ lớn nếu bạn có chẳng may bắn trượt. Đối với mục tiêu ở xa đòi hỏi phải kiểm soát tốc độ bắn. Hãy bóp cò ngay khi bạn ngắm trúng mục tiêu nhé.</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='card'>
                    <img src={Sheriff} alt=""/>
                    <div className='info'>
                        <h1>Sheriff.</h1>
                        <p>Vòng xoay dễ cảm nhận của súng gây giật khá lớn và đòi hỏi phải thực sự thành thạo.</p>
                        <p>Sử dụng Sheriff đúng cách và tiễn đối thủ của bạn tới gặp tử thần.</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={Stinger} alt=""/>
                    <div className='info'>
                        <h1>Stinger</h1>
                        <p>Khẩu SMG này mạnh hơn ở tầm trung đến tầm xa so với các loại súng SMG khác, nhưng điểm yếu lại nằm ở tốc độ bắn và tính cơ động.</p>
                        <p>Băng đạn 20 viên sẽ dễ trở nên lãng phí vì độ giật khi bắn, nhưng có thể chí mạng ở tầm trung với ống ngắm ADS khi kiểm soát được cách bắn.</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <img src={Spectre} alt=""/>
                    <div className='info'>
                        <h1>Spectre.</h1>
                        <p>Một vũ khí đa năng có lực sát thương, tốc độ bắn và độ chính xác cao ở tầm gần và tầm trung.</p>
                        <p>Với khẩu súng này, bạn sẽ dễ dàng hạ gục đối thủ ở mọi ngóc ngách của bản đồ, và thậm chí có thể hạ gục kẻ thù ở khoảng cách xa nếu có kỹ năng ngắm ổn định.</p>
                    </div>
                </div>

                <div className='card'>
                    <img src={Bucky} alt=""/>
                    <div className='info'>
                        <h1>Bucky.</h1>
                        <p>Nặng nhưng ổn định, chế độ bắn chính của Bucky chủ yếu sử dụng cho các góc hẹp hoặc dùng khi giáp lá cà. Chế độ bắn phụ dành cho các mục tiêu ở tầm trung.</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <img src={Judge} alt=""/>
                    <div className='info'>
                        <h1>Judge.</h1>
                        <p>Khẩu Judge khá ổn định khi đứng yên, nhưng khi bắn nhanh sẽ trở nên bất ổn.</p>
                        <p>Chế độ bắn chính sẽ bắn nát mục tiêu ở tầm gần. Tuy nhiên để bắn trúng được mục tiêu cách xa hơn một chút, bạn sẽ cần có kỹ năng ngắm bắn khá chắc tay đấy.</p>
                    </div>
                </div>

                <div className='card'>
                    <img src={Ares} alt=""/>
                    <div className='info'>
                        <h1>Ares.</h1>
                        <p>Băng đạn lớn của khẩu Ares cũng có nghĩa là bạn sẽ vượt trội về hỏa lực để đàn áp hoặc gây sát thương lớn cho đối thủ.</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='card'>
                    <img src={Bulldog} alt=""/>
                    <div className='info'>
                        <h1>Bulldog.</h1>
                        <p>Một quái thú thực sự với chế độ bắn phụ dùng ngắm ADS và khạc từng loạt đạn chính xác vào bất cứ kẻ nào trong phạm vi từ tầm trung đến tầm xa.</p>
                    </div>
                </div>

                <div className='card'>
                    <img src={Guardian} alt=""/>
                    <div className='info'>
                        <h1>Guardian.</h1>
                        <p>Súng trường dành cho những tay thiện xạ đích thực. Nặng hơn và ít cơ động hơn so với các loại súng trường khác nhưng cực kỳ chính xác và uy lực. Dùng để săn các đối thủ ở khoảng cách trung bình đến xa.</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <img src={Phantom} alt=""/>
                    <div className='info'>
                        <h1>Phantom.</h1>
                        <p>Còn chần chờ gì mà không dùng chế độ bắn tự động để hạ thủ những kẻ địch ở gần, đối với những kẻ thù ở xa hơn, hãy cho chúng biết nỗi khiếp sợ của những loạt đạn ngắn. Hiệu quả nhất khi đứng yên để bắn.</p>
                    </div>
                </div>

                <div className='card'>
                    <img src={Vandal} alt=""/>
                    <div className='info'>
                        <h1>Vandal.</h1>
                        <p>Tuy nhiên, bắn liên tục sẽ kém ổn định hơn. Khẩu Vandal duy trì được mức sát thương cao ở tầm xa và sẽ tưởng thưởng cho những ai có khả năng nhắm bắn một phát trúng đầu mục tiêu.</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <img src={Operator} alt=""/>
                    <div className='info'>
                        <h1>Operator.</h1>
                        <p>Súng trường bắn tỉa nạp đạn bán tự động mạnh mẽ với ống ngắm hai chế độ. Không thật sự linh hoạt nhưng vô cùng uy lực, có thể tiêu diệt nhiều mục tiêu chỉ bằng một phát bắn xuyên táo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weapons;