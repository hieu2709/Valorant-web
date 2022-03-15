import React from 'react';
import PropTypes from 'prop-types';
import Ascent from '../../assets/images/maps/ascent-featured.png';
import Bind from '../../assets/images/maps/bind-featured.png';
import Breeze from '../../assets/images/maps/breeze-featured_v1.png';
import Haven from '../../assets/images/maps/haven-featured.png';
import Icebox from '../../assets/images/maps/Icebox_transparentbg_for_Web.png';
import Split from '../../assets/images/maps/split-featured.png';
import Fracture from '../../assets/images/maps/Valorant_FRACTURE_Minimap_Alpha_web.png';
import "./style.css";

Maps.propTypes = {
    
};

function Maps(props) {
    return (
        <div className="mainBackground">
            <div className="container d-flex flex-wrap justify-content-center">
                <div className={`col-6 mt-5 mb-5 mobileSizing`}>
                    <div className="d-flex justify-content-center">
                        <img src={Fracture} alt="" className='mapSize'/>
                    </div>
                    <h2 className={`text-center mt-3 mapNameFont`}>FRACTURE</h2>
                </div>

                <div className={`col-6 mt-5 mb-5 mobileSizing`}>
                    <div className="d-flex justify-content-center">
                        <img src={Breeze} alt="" className='mapSize' />
                    </div>
                    <h2 className='text-center mt-3 mapNameFont'>BREEZE</h2>
                </div>

                <div className='col-6 mt-5 mb-5'>
                    <div className="d-flex justify-content-center">
                        <img src={Icebox} alt="" className='mapSize' />
                    </div>
                    <h2 className='text-center mt-3 mapNameFont'>ICEBOX</h2>
                </div>

                <div className='col-6 mt-5 mb-5'>
                    <div className="d-flex justify-content-center">
                        <img src={Bind} alt="" className='mapSize' />
                    </div>
                    <h2 className='text-center mt-3 mapNameFont'>BIND</h2>
                </div>

                <div className='col-6 mt-5 mb-5'>
                    <div className="d-flex justify-content-center">
                        <img src={Haven} alt="" className='mapSize' />
                    </div>
                    <h2 className='text-center mt-3 mapNameFont'>HAVEN</h2>
                </div>

                <div className='col-6 mt-5 mb-5'>
                    <div className="d-flex justify-content-center">
                        <img src={Split} alt="" className='mapSize' />
                    </div>
                    <h2 className='text-center mt-3 mapNameFont'>SPLIT</h2>
                </div>

                <div className='col-6 mt-5 mb-5'>
                    <div className="d-flex justify-content-center">
                        <img src={Ascent} alt="" className='mapSize' />
                    </div>
                    <h2 className='text-center mt-3 mapNameFont'>ASCENT</h2>
                </div>
            </div>
        </div>
    );
}

export default Maps;