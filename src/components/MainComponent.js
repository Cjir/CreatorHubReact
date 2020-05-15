import React, { Component } from 'react';
import Marketplace from './MarketplaceComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { MARKETPLACE } from '../shared/marketplace';
import { CREATORHUB } from '../shared/creatorhub';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatorhub: CREATORHUB,
            marketplace: MARKETPLACE,
        };
    }

    render() {
        
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                <Route path='/home' component={HomePage} />
                <Route part='/market' render={() => <Marketplace marketplace={this.state.marketplace} />} />
                <Redirect to='/home' />
                </Switch>
                <Footer />
            </div >
        );
    };
}

export default Main;