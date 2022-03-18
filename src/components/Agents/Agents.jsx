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

Agents.propTypes = {

};

const initAgents = [Astra,Breach, Brimstone, Jett, Chamber, Cypher, KAYO, KillJoy, Sage, Yoru,Neon, Viper, Sova, Omen, Phoenix, Raze, Skye, Reyna]

function Agents(props) {

    const [agent, setAgent] = useState(Astra);
    return (
        <div>
            <h1>ĐIỆP VIÊN</h1>
            <Row>
                <Col span={6} className='list-agents'>
                    <div className='agent'>
                        <span>1</span>
                        <Button type='link' onClick={()=>setAgent(Brimstone)}>BRIMSTONE</Button>
                    </div>
                    <div className='agent'>
                        <span>2</span>
                        <Button type='link' onClick={()=>setAgent(Phoenix)}>PHOENIX</Button>
                    </div >
                    <div className='agent'>
                        <span>3</span>
                        <Button type='link' onClick={()=>setAgent(Sage)}>SAGE</Button>
                    </div>
                    <div className='agent'>
                        <span>4</span>
                        <Button type='link' onClick={()=>setAgent(Sova)}>SOVA</Button>
                    </div >
                    <div className='agent'>
                        <span>5</span>
                        <Button type='link' onClick={()=>setAgent(Viper)}>VIPER</Button>
                    </div >
                    <div className='agent'>
                        <span>6</span>
                        <Button type='link' onClick={()=>setAgent(Cypher)}>CYPHER</Button>
                    </div>
                    <div className='agent'>
                        <span>7</span>
                        <Button type='link' onClick={()=>setAgent(Reyna)}>REYNA</Button>
                    </div>
                    <div className='agent'>
                        <span>8</span>
                        <Button type='link' onClick={()=>setAgent(KillJoy)}>KILLJOY</Button>
                    </div>
                    <div className='agent'>
                        <span>9</span>
                        <Button type='link' onClick={()=>setAgent(Chamber)}>CHAMPER</Button>
                    </div>
                </Col>
                <Col span={12}>
                    <img src={agent}/>
                </Col>
                <Col span={6} className='agiments'>
                    <div className='agent'>
                        <span>10</span>
                        <Button type='link' onClick={()=>setAgent(Breach)}>BREACH</Button>
                    </div>
                    <div className='agent'>
                        <span>11</span>
                        <Button type='link' onClick={()=>setAgent(Omen)}>OMEN</Button>
                    </div>
                    <div className='agent'>
                        <span>12</span>
                        <Button type='link' onClick={()=>setAgent(Jett)}>JETT</Button>
                    </div>
                    <div className='agent'>
                        <span>13</span>
                        <Button type='link' onClick={()=>setAgent(Raze)}>RAZE</Button>
                    </div>
                    <div className='agent'>
                        <span>14</span>
                        <Button type='link' onClick={()=>setAgent(Skye)}>SKYE</Button>
                    </div>
                    <div className='agent'>
                        <span>15</span>
                        <Button type='link' onClick={()=>setAgent(Yoru)}>YORU</Button>
                    </div>
                    <div className='agent'>
                        <span>16</span>
                        <Button type='link' onClick={()=>setAgent(Astra)}>ASTRA</Button>
                    </div>
                    <div className='agent'>
                        <span>17</span>
                        <Button type='link' onClick={()=>setAgent(KAYO)}>KAY/0</Button>
                    </div>
                    <div className='agent'>
                        <span>18</span>
                        <Button className='Button' style={{color:'red'}} type='link' onClick={()=>setAgent(Neon)}>NEON</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Agents;