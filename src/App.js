import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { MARKETPLACE } from './shared/marketplace'

class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            marketplace: MARKETPLACE
        }
    }
    render() {
        return (
            <div className="App">
                <Navbar>
                <div className="container">
                    <Directory marketplace={this.state.marketplace} />
                </div>
                </Navbar>
            </div>
        );
    }
}

export default App;