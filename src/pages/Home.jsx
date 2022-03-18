import React from 'react';
import PropTypes from 'prop-types';
import HomePro from '../components/HomePro/HomePro';
import Header from '../components/Header/Header';
import GameHomeOverView from "../components/HomeGameOverview/GameHomeOverView";
import HomeAgents from "../components/HomeAgents/HomeAgents";
Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <HomePro/>
            <GameHomeOverView/>
            <HomeAgents/>
        </>
    );
}

export default Home;