import React, { Component } from 'react';
import Marketplace from './MarketplaceComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import BlogPages from './BloggerPageComponent';
import { MARKETPLACE } from '../shared/marketplace';
import { CREATORHUB } from '../shared/creatorhub';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BLOGFEED } from '../shared/blogfeed';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogfeed: BLOGFEED,
            creatorhub: CREATORHUB,
            marketplace: MARKETPLACE
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
                    <Route exact path='/market' render={() => <Marketplace marketplace={this.state.marketplace} />} />
                    <Route exact path='/blogpages' render={() => <BlogPages blogfeed={this.state.blogfeed} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div >
        );
    };
}

export default Main;