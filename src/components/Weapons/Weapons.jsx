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
                    <span>
                        Classic
                    </span>
                </div>

                <div className='card'>
                    <img src={Shorty} alt=""/>
                    <span>Shorty</span>
                </div>

                <div className='card'>
                    <img src={Frenzy} alt=""/>
                    <span>Frenzy</span>
                </div>

                <div className='card'>
                    <img src={Ghost} alt=""/>
                    <span>Ghost</span>
                </div>

                <div className='card'>
                    <img src={Sheriff} alt=""/>
                    <span>Sheriff</span>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <img src={Stinger} alt=""/>
                    <span>Stinger</span>
                </div>

                <div className='card'>
                    <img src={Spectre} alt=""/>
                    <span>Spectre</span>
                </div>

                <div className='card'>
                    <img src={Bucky} alt=""/>
                    <span>Bucky</span>
                </div>

                <div className='card'>
                    <img src={Judge} alt=""/>
                    <span>Judge</span>
                </div>

                <div className='card'>
                    <img src={Ares} alt=""/>
                    <span>Ares</span>
                </div>
            </div>
            <div className='container'>
                <div className='card'>
                    <img src={Bulldog} alt=""/>
                    <span>Bulldog</span>
                </div>

                <div className='card'>
                    <img src={Guardian} alt=""/>
                    <span>Guardian</span>
                </div>

                <div className='card'>
                    <img src={Phantom} alt=""/>
                    <span>Phantom</span>
                </div>

                <div className='card'>
                    <img src={Vandal} alt=""/>
                    <span>Vandal</span>
                </div>

                <div className='card'>
                    <img src={Operator} alt=""/>
                    <span>Operator</span>
                </div>
            </div>
        </div>
    );
}

export default Weapons;