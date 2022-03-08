import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import {Button} from "antd";

HomeGameOverview.propTypes = {

};

function HomeGameOverview(props) {
    return (
        <>
            <section>
                <div className='section-wrapper'>
                    <div className='home-game-overview_top-detail' ></div>
                    <div className='home-game-overview_detail-box' ></div>
                    <div className='home-game-overview_title-container'>
                        <h6 className=''>
                            <span className='scamble-text'>
                                <span className='text tagline-text'>VLRT PR0T0C0L</span>
                                <span className='text tagline-text'>MR0C - SWD - BR4</span>
                            </span>
                        </h6>
                        <h2 className=''>
                            <span>
                                CHÚNG TÔI LÀ VALORANT
                            </span>
                        </h2>
                    </div>
                    <div className='home-game-overview_content'>
                        <div className='copy-content'>
                            <h5 className='heading subtitle'>
                                THÁCH THỨC MỌI GIỚI HẠN
                            </h5>

                            <p className='copy description'>
                                <span>
                                    "Mang phong cách và trải nghiệm cá nhân tới đấu trường cạnh tranh toàn cầu. Bạn có 13 vòng đấu để tấn công và phòng thủ bằng kỹ năng đấu súng và tư duy chiến thuật sắc bén. Với chỉ 1 mạng mỗi vòng đấu, nhanh trí là yếu tố sẽ giúp bạn sống sót trước kẻ địch. Hãy tranh tài trong các chế độ Đấu Xếp Hạng, Đấu Thường, Sinh Tử và Spike Thần Tốc."
                                </span>
                            </p>

                            <Button
                                className=''
                                type='primary'
                            >
                                TÌM HIỂU TRÒ CHƠI
                            </Button>
                        </div>

                        <div className='media-content'>
                            <div className='game-overview-video'>
                                <div className='video-detail'></div>
                                <div className='video-content'>
                                    <video preload='true' muted loop autoPlay>
                                        <source src='https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltefd45731d8f9d9df/6217f2ea910a6c613c73168c/VALORANT_PLAY22_16x9_Target4_v005.mp4' type='video/mp4'/>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeGameOverview;