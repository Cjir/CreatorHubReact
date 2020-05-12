import React, { Component } from 'react';
import { Card, CardImg} from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedComponent: null
        }
    };

    onComponentSelect(creatorhub) {
        this.setState({selectedComponent: creatorhub});
    }

    render() {
        const directory = this.props.creatorhub.map(creatorhub => {
            return (
                <div key={creatorhub.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg width="50%" src={creatorhub.image} alt={creatorhub.name} />
                            <h4>{creatorhub.description}</h4>
                    </Card>
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