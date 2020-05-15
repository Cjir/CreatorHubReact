import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

class MarketInfo extends Component {

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
        if (this.props.marketplace) {
            return (
                <div className="row">
                    {this.renderSelectedMarketplace(this.props.marketplace)}
                </div>
            );
        }
        return <div />;
    }
};

export default MarketInfo;