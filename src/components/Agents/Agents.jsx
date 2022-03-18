import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {Col, Row} from "antd";
import Astra from "../../assets/images/agents/Astra.png"

Agents.propTypes = {
    
};

function Agents(props) {
    return (
        <div>
            <h1>ĐIỆP VIÊN</h1>
            <Row>
                <Col span={6}>
                    <div>
                        <span>1</span>
                        <h1>BRIMSTONE</h1>
                    </div>
                    <div>
                        <span>2</span>
                        <h1>PHOENIX</h1>
                    </div>
                    <div>
                        <span>3</span>
                        <h1>SAGE</h1>
                    </div>
                    <div>
                        <span>4</span>
                        <h1>SOVA</h1>
                    </div>
                    <div>
                        <span>5</span>
                        <h1>VIPER</h1>
                    </div>
                    <div>
                        <span>6</span>
                        <h1>CYPHER</h1>
                    </div>
                    <div>
                        <span>7</span>
                        <h1>REYNA</h1>
                    </div>
                    <div>
                        <span>8</span>
                        <h1>KILLJOY</h1>
                    </div>
                    <div>
                        <span>9</span>
                        <h1>CHAMPER</h1>
                    </div>
                </Col>
                <Col span={12}>
                    <img src={Astra}/>
                </Col>
                <Col span={6}>
                    <div>
                        <span>10</span>
                        <h1>BREACH</h1>
                    </div>
                    <div>
                        <span>11</span>
                        <h1>OMEN</h1>
                    </div>
                    <div>
                        <span>12</span>
                        <h1>JETT</h1>
                    </div>
                    <div>
                        <span>13</span>
                        <h1>RAZE</h1>
                    </div>
                    <div>
                        <span>14</span>
                        <h1>SKYE</h1>
                    </div>
                    <div>
                        <span>15</span>
                        <h1>YORU</h1>
                    </div>
                    <div>
                        <span>16</span>
                        <h1>ASTRA</h1>
                    </div>
                    <div>
                        <span>17</span>
                        <h1>KAY/0</h1>
                    </div>
                    <div>
                        <span>18</span>
                        <h1>NEON</h1>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Agents;