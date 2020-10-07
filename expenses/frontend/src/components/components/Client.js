import React from 'react';
import { Breakpoint } from 'react-socks';
import './ClientList.scss'

const Client = props => (
    <>
        <Breakpoint client>

            <div className="client-component">
                <h1 className="client-name">{props.name}</h1>
            </div>

        </Breakpoint>
    </>
)

export default Client