import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {NavLink} from "../NavBar/NavBarElements";

GameHomeOverView.propTypes = {};

function GameHomeOverView(props) {
    return (
        <div className='sectionOne'>
            <div className=''>
                <h6 className='tag-line-module'>
                    <span className='scamble-text'>
                        <span className='text tagline-text'>VLRT PR0T0C0L</span>
                        <span className='text tagline-text'>MR0C - SWD - BR4</span>
                    </span>
                </h6>
                <h2 className='bigFont'>
                       VALORANT - THÁCH THỨC MỌI GIỚI HẠN
                </h2>
            </div>

            <div className='d-flex justify-content-around flex-wrap' >
                <div className='col-4 ml-4 mb-5 gameInfo'>
                    <div className='mt-5 col-9 marginTop'>
                        <p className='smallFont fadeIn regSizing col-8 text-content'>
                            Mang phong cách và trải nghiệm cá nhân tới đấu trường cạnh tranh toàn cầu. Bạn có 13 vòng
                            đấu để tấn công và phòng thủ bằng kỹ năng đấu súng và tư duy chiến thuật sắc bén. Với chỉ 1
                            mạng mỗi vòng đấu, nhanh trí là yếu tố sẽ giúp bạn sống sót trước kẻ địch. Hãy tranh tài
                            trong các chế độ Đấu Xếp Hạng, Đấu Thường, Sinh Tử và Spike Thần Tốc.
                        </p>
                    </div>
                </div>
                <div className='col-6'>
                    <video preload='true' muted loop autoPlay style={{width: 800, marginTop: 80}}>
                        <source
                            src='https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4'
                            type='video/mp4'/>
                    </video>
                </div>
            </div>
            <NavLink  to='/information'>TÌM HIỂU TRÒ CHƠI</NavLink>
        </div>
    );
}

export default GameHomeOverView;