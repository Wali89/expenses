import React from 'react';
import './Card.scss';

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