import React from 'react';
import { Card, CardImg } from 'reactstrap';

function RenderMarketplaceItem({marketplace}) {
    return (
        <Card>
            <CardImg width="50%" src={marketplace.image} alt={marketplace.name} />
        </Card>
    )
}

function Marketplace(props) {

    const directory = props.marketplace.map(marketplace => {
        return (
            <div key={marketplace.id} className="col-md-3">
                <RenderMarketplaceItem marketplace={marketplace}/>
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


export default Marketplace;