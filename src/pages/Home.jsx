import React from 'react';
import PropTypes from 'prop-types';
import HomePro from '../components/HomePro/HomePro';
import Header from '../components/Header/Header';
Home.propTypes = {

};

function Home(props) {
    return (
        <>
            <Header/>
            <HomePro/>
        </>
    );
}

export default Home;