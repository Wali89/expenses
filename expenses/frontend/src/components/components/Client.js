import React from 'react';
import './Client.scss';

const Client = props => (
    <>

        <div
            className="card-component"
            style={props.style || null}
            onClick={() => props.goToClientDetails(props.clientId)}

        >
            <h3>{props.name}</h3>
        </div>
    </>
);

export default Client;