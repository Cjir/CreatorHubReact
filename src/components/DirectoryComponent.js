import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creatorhub: [
                {
                    id: 0,
                    name: 'Creator Hub Logo',
                    image: 'assets/images/creatorhublt.png',
                    description: 'Marketplace, blogg, a hub for Creation'
                }
            ]
        }
    };

    render() {
        const directory = this.state.creatorhub.map(creatorhub => {
            return (
                <div key={creatorhub.id} className="col">
                    <img src={creatorhub.image} alt={creatorhub.name} />
                    <h4>{creatorhub.description}</h4>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory