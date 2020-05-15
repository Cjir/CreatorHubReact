import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import MarketInfo from './MainComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMarketplace: null
        }
    };

    onMarketplaceSelect(marketplace) {
        this.setState({ selectedMarketplace: marketplace });
    }

    render() {
        const directory = this.props.marketplace.map(marketplace => {
            return (
                <div key={marketplace.id} className="col-md-3">
                    <Card onClick={() => this.onMarketplaceSelect(marketplace)}>
                        <CardImg width="50%" src={marketplace.image} alt={marketplace.name} />
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                    {MarketInfo}
                </div>

            </div>
        );
    }
}

export default Directory;