import React from 'react';


const Card = props => (
    <>
        <div
            className="card-component"
            style={props.style || null}
            onClick={() => props.goToClientDetails(props.clientId)}
        >
            {props.children}
        </div>
    </>
);

export default Card;