import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

    function RenderSelectedMarketplace({marketplace}) {
        if (marketplace) {
            return (
                <div className="col-md-3">
                    <Card>
                        <CardImg top src={marketplace.image} alt={marketplace.name} />
                        <CardBody>
                            <CardTitle><h5>{marketplace.title}</h5></CardTitle>
                            <CardText><p>{marketplace.description}</p></CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        return <div />;
    }

    function MarketInfo(props) {
        if (props.marketplace) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderSelectedMarketplace marketplace={props.marketplace} />
                    </div>
                </div>
            );
        }
        return <div />;
    }


export default MarketInfo;