import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "antd";

AgentInfo.propTypes = {

};

function AgentInfo(props) {
    const {agent} = props;
    return (
        <div>
            <Row align='top' justify='center'>
                <Col span={12}>
                    <img src={agent.url}/>
                </Col>
                <Col span={12}
                     style={{fontSize:"20px", paddingRight:"200px", paddingTop:"50px"}}
                >
                    <div style={{border:"2px solid #FFFFFF", width:"500px", height:"400px", borderRadius:"12px", background:"#f5d140"}}>
                        <h1>
                            {agent.name}
                        </h1>
                        <p>
                            {agent.info}
                        </p>
                    </div>

                </Col>
            </Row>

        </div>
    );
}

export default AgentInfo;