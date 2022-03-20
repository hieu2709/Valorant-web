import React from 'react';
import "./style.scss";
import long from "../../assets/images/home/long.png";
import abc from "../../assets/images/agents/Omen.png";
import {NavLink} from "../NavBar/NavBarElements";

HomeMaps.propTypes = {
    
};

function HomeMaps(props) {
    return (
        <div id='HomeMaps'>
            <div className='home_agent_page'>
                <div className='img_agent'>
                    <img className='long' src={long} />
                </div>
                <NavLink  to='/agents'>XEM TẤT CẢ ĐIỆP VIÊN</NavLink>
                <img className='abc' src={abc} />
            </div>
        </div>
    );
}

export default HomeMaps;