import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

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

    renderSelectedMarketplace(marketplace) {
        if (marketplace) {
            return (
                <Card>
                    <CardImg top src={marketplace.image} alt={marketplace.name} />
                    <CardBody>
                        <CardTitle><h5>{marketplace.title}</h5></CardTitle>
                        <CardText><p>{marketplace.description}</p></CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.marketplace.map(marketplace => {
            return (
                <div key={marketplace.id} className="col-md-5 m-1">
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
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedMarketplace(this.state.selectedMarketplace)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;