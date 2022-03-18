import React from 'react';
import Ascent from '../../assets/images/maps/ascent-featured.png';
import Bind from '../../assets/images/maps/bind-featured.png';
import Breeze from '../../assets/images/maps/breeze-featured_v1.png';
import Haven from '../../assets/images/maps/haven-featured.png';
import Icebox from '../../assets/images/maps/Icebox_transparentbg_for_Web.png';
import Split from '../../assets/images/maps/split-featured.png';
import Fracture from '../../assets/images/maps/Valorant_FRACTURE_Minimap_Alpha_web.png';
import "./style.scss";
import {Col, Row} from "antd";


function Maps() {
    return (
        <div className="mainBackground">

            <h1 className=''>BẢN ĐỒ</h1>
            <div className="map">
                <Row justify="center" align="middle">
                    <Col span={16} className="map-img">
                        <img src={Fracture} alt=""/>
                    </Col>

                    <Col span={8} className="map-info">
                        <h2 className="">FRACTURE</h2>
                        <p>Một khu vực nghiên cứu tối mật đã bị xẻ làm hai bởi một thí nghiệm radianite thất bại. Với những chiến lược phòng thủ đối lập như chính địa hình của bản đồ này, lựa chọn nằm ở chính bạn: đối mặt trực tiếp với những kẻ tấn công trên chính sân chơi của chúng hoặc cầm cự trước cuộc tấn công và giành chiến thắng.</p>
                    </Col>
                </Row>
            </div>

            <div className="map">
                <Row justify="center" align="middle">
                    <Col span={16} className="map-img">
                        <img src={Split} alt=""/>
                    </Col>

                    <Col span={8} className="map-info">
                        <h2 className="">Split</h2>
                        <p>Một khu vực nghiên cứu tối mật đã bị xẻ làm hai bởi một thí nghiệm radianite thất bại. Với những chiến lược phòng thủ đối lập như chính địa hình của bản đồ này, lựa chọn nằm ở chính bạn: đối mặt trực tiếp với những kẻ tấn công trên chính sân chơi của chúng hoặc cầm cự trước cuộc tấn công và giành chiến thắng.</p>
                    </Col>
                </Row>
            </div>

            <div className="map">
                <Row justify="center" align="middle">
                    <Col span={16} className="map-img">
                        <img src={Icebox} alt=""/>
                    </Col>

                    <Col span={8} className="map-info">
                        <h2 className="">Icebox</h2>
                        <p>Một khu vực nghiên cứu tối mật đã bị xẻ làm hai bởi một thí nghiệm radianite thất bại. Với những chiến lược phòng thủ đối lập như chính địa hình của bản đồ này, lựa chọn nằm ở chính bạn: đối mặt trực tiếp với những kẻ tấn công trên chính sân chơi của chúng hoặc cầm cự trước cuộc tấn công và giành chiến thắng.</p>
                    </Col>
                </Row>
            </div>

            <div className="map">
                <Row justify="center" align="middle">
                    <Col span={16} className="map-img">
                        <img src={Haven} alt=""/>
                    </Col>

                    <Col span={8} className="map-info">
                        <h2 className="">Haven</h2>
                        <p>Một khu vực nghiên cứu tối mật đã bị xẻ làm hai bởi một thí nghiệm radianite thất bại. Với những chiến lược phòng thủ đối lập như chính địa hình của bản đồ này, lựa chọn nằm ở chính bạn: đối mặt trực tiếp với những kẻ tấn công trên chính sân chơi của chúng hoặc cầm cự trước cuộc tấn công và giành chiến thắng.</p>
                    </Col>
                </Row>
            </div>

            <div className="map">
                <Row justify="center" align="middle">
                    <Col span={16} className="map-img">
                        <img src={Breeze} alt=""/>
                    </Col>

                    <Col span={8} className="map-info">
                        <h2 className="">Breeze</h2>
                        <p>Một khu vực nghiên cứu tối mật đã bị xẻ làm hai bởi một thí nghiệm radianite thất bại. Với những chiến lược phòng thủ đối lập như chính địa hình của bản đồ này, lựa chọn nằm ở chính bạn: đối mặt trực tiếp với những kẻ tấn công trên chính sân chơi của chúng hoặc cầm cự trước cuộc tấn công và giành chiến thắng.</p>
                    </Col>
                </Row>
            </div>

            <div className="map">
                <Row justify="center" align="middle">
                    <Col span={16} className="map-img">
                        <img src={Bind} alt=""/>
                    </Col>

                    <Col span={8} className="map-info">
                        <h2 className="">Bind</h2>
                        <p>Một khu vực nghiên cứu tối mật đã bị xẻ làm hai bởi một thí nghiệm radianite thất bại. Với những chiến lược phòng thủ đối lập như chính địa hình của bản đồ này, lựa chọn nằm ở chính bạn: đối mặt trực tiếp với những kẻ tấn công trên chính sân chơi của chúng hoặc cầm cự trước cuộc tấn công và giành chiến thắng.</p>
                    </Col>
                </Row>
            </div>

            <div className="map">
                <Row justify="center" align="middle">
                    <Col span={16} className="map-img">
                        <img src={Ascent} alt=""/>
                    </Col>

                    <Col span={8} className="map-info">
                        <h2 className="">Ascent</h2>
                        <p>Một khu vực nghiên cứu tối mật đã bị xẻ làm hai bởi một thí nghiệm radianite thất bại. Với những chiến lược phòng thủ đối lập như chính địa hình của bản đồ này, lựa chọn nằm ở chính bạn: đối mặt trực tiếp với những kẻ tấn công trên chính sân chơi của chúng hoặc cầm cự trước cuộc tấn công và giành chiến thắng.</p>
                    </Col>
                </Row>
            </div>

        </div>


    );
}

export default Maps;