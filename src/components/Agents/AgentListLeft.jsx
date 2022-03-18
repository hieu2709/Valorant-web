import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "antd";

AgentListLeft.propTypes = {

};

function AgentListLeft(props) {
    const {listAgentsLeft, chooseAgent} = props;
    return (
        <div>
            {/*{listAgentsLeft.map((x) => (*/}
            {/*    <div key={x.id} className='agent'>*/}
            {/*        <Button type='link' onClick={()=>chooseAgent(1)} >{x}</Button>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
}

export default AgentListLeft;