import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "antd";

AgentListLeft.propTypes = {
    
};

function AgentListLeft(props) {
    const { listAgents,setAgent} = props;


    return (
        <div>
            {listAgents.map((e)=> {
                if (e.id<=9) {
                    return (
                        <div className='agent'>
                            <Button type='link' onClick={()=>setAgent(e)} >{e.name}</Button>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default AgentListLeft;