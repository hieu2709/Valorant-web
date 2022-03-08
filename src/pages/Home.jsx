import React from 'react';
import PropTypes from 'prop-types';
import HomePro from '../components/HomePro/HomePro';
import Header from '../components/Header/Header';
import HomeGameOverview from "../components/HomeGameOverview/HomeGameOverview";
Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <Header/>
            <HomePro/>
            <HomeGameOverview/>
        </>
    );
}

export default Home;