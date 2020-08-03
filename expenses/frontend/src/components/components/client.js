import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, useRouteMatch, Switch } from 'react-router-dom';



class ClientList extends Component {

    render() {
        let { path, url } = useRouteMatch();
        return (
            <div className="client">
                <p className="client"> <Link
                    style={{ textDecoration: 'none', color: '#373737' }}
                    to={{
                        pathname: `/clients/${this.props.id}`,
                        state: {
                            name: this.props.name
                        }
                    }}>{this.props.name} </Link> </p>

            </div >
        )
    }
}

export default ClientList;