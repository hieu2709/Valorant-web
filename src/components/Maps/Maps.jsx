import React, {useState} from 'react';
import Ascent from '../../assets/images/maps/ascent-featured.png';
import Bind from '../../assets/images/maps/bind-featured.png';
import Breeze from '../../assets/images/maps/breeze-featured_v1.png';
import Haven from '../../assets/images/maps/haven-featured.png';
import Icebox from '../../assets/images/maps/Icebox_transparentbg_for_Web.png';
import Split from '../../assets/images/maps/split-featured.png';
import Fracture from '../../assets/images/maps/Valorant_FRACTURE_Minimap_Alpha_web.png';
import "./style.scss";
import {Col, Row} from "antd";
import MapInfor from "./MapInfor";


const listMaps = [
    {
        id: 1,
        url: Ascent,
        name: "ASCENT",
        info: "",
    },
    {
        id: 2,
        url: Bind,
        name: "BIND",
        info: "",
    },
    {
        id: 3,
        url: Breeze,
        name: "BREEZE",
        info: "",
    },
    {
        id: 4,
        url: Haven,
        name: "HAVEN",
        info: "",
    },
    {
        id: 5,
        url: Icebox,
        name: "ICEBOX",
        info: "",
    },
    {
        id: 6,
        url: Split,
        name: "SPLIT",
        info: "",
    },
    {
        id: 7,
        url: Fracture,
        name: "FRACTURE",
        info: "",
    },
];

function Maps() {

    const [map, setMap] = useState(listMaps[0]);
    return (
        <div className="mainBackground">
            <h1 className=''>BẢN ĐỒ</h1>
            <MapInfor listMaps={listMaps}/>
        </div>


    );
}

export default Maps;