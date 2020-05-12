import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { CREATORHUB } from './shared/creatorhub'

class App extends Component {
    constructor (props) {
        super (props);
        this.state = {
            creatorhub: CREATORHUB
        }
    }
    render() {
        return (
            <div className="App">
                <Navbar>
                <div className="container">
                    <Directory creatorhub={this.state.creatorhub} />
                </div>
                </Navbar>
            </div>
        );
    }
}

export default App;