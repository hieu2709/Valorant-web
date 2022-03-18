import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "antd";



function AgentListRight(props) {
    const { listAgents,setAgent} = props;


    return (
        <div>
            {listAgents.map((e)=> {
                if (e.id>9 && e.id <=18) {
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

export default AgentListRight;