import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Client extends Component {

    render() {
        return (
            <div className="channel">
                <h3 className="channel-link"> <Link
                    style={{ textDecoration: 'none', color: '#373737' }}
                    to={{
                        pathname: `/clients/${this.props.id}`,
                        state: {
                            name: this.props.name
                        }
                    }}>{this.props.name} </Link> </h3>


            </div>
        )
    }
}

export default Client;