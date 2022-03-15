import React from 'react';
import PropTypes from 'prop-types';
import HomePro from '../components/HomePro/HomePro';
import Header from '../components/Header/Header';
import GameHomeOverView from "../components/HomeGameOverview/GameHomeOverView";
Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <HomePro/>
            <GameHomeOverView/>
        </>
    );
}

export default Home;