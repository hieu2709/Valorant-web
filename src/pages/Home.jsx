import React from 'react';
import HomePro from '../components/HomePro/HomePro';
import GameHomeOverView from "../components/HomeGameOverview/GameHomeOverView";
import HomeAgents from "../components/HomeAgents/HomeAgents";
import HomeMaps from "../components/HomeMaps/HomeMaps";
import Footer from "../components/Footer/Footer";
Home.propTypes = {

};

function Home() {
    return (
        <>
            <HomePro/>
            <GameHomeOverView/>
            <HomeMaps/>
            <HomeAgents/>
            <Footer/>
        </>
    );
}

export default Home;