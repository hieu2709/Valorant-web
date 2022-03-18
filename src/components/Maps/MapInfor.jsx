import React from 'react';
import {Col, Row} from "antd";

function MapInfor(props) {
    const {listMaps} = props;
    return (
        <div>
            {listMaps.map((e)=>(
                <div className="map">
                    <Row justify="center" align="middle">
                        <Col span={16} className="map-img">
                            <img src={e.url} alt=""/>
                        </Col>

                        <Col span={8} className="map-info">
                            <div>
                                <h2 className="">{e.name}</h2>
                                <p>
                                    {e.info}
                                </p>
                            </div>

                        </Col>
                    </Row>
                </div>
            ) )}
        </div>
    );
}

export default MapInfor;