import React from 'react';
import {
    Card, CardHeader, CardBody, CardImg, CardTitle, CardText
} from 'reactstrap';


function RenderBlogFeed({blogfeed}) {
    return (
        <Card className="my-2">
            <div className="row no-gutters">
                <div className="col-md-3">
                <CardImg width="50%" src={blogfeed.image} alt={blogfeed.name} />
                </div>
                <div class="col-md-9">
                <CardBody>
                    <CardTitle href='/'>
                        <h4>{blogfeed.title}</h4>
                    </CardTitle>
                    <CardText>
                        <p classname="d-none d-sm-block">{blogfeed.description}</p>
                        <p><small className="text-muted">{blogfeed.time}</small></p>
                    </CardText>
                </CardBody>
            </div>
            </div>
        </Card>
    )
}

function BlogPages(props) {

    const blogCard = props.blogfeed.map(blogfeed => {
        return (
            <div key={blogfeed.id}>
                <RenderBlogFeed blogfeed={blogfeed}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {/* LEFT COLUMN */}
                {/* <!-- Post, Upload, write --> */}
                <div className="col-xs-12 col-sm-6 col-md-3 mt-2 order-sm-6 order-md-1">
                    <Card>
                        <CardHeader tag="h5">
                            Ideas Begin here
                        </CardHeader>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <a href="/">
                                    Sale your Creation
                                    </a>
                            </li>
                            <li className="list-group-item">
                                <a href="/">
                                    Write a blog
                                    </a>
                            </li>
                            <li className="list-group-item">
                                <a href="/">
                                    Video Update
                                    </a>
                            </li>
                        </ul>
                    </Card>

                    {/* <!-- searching div --> */}
                    <div class="row py-2">
                        <div class="col">
                            <Card>
                                <CardHeader tag="h5">
                                    Shop
                                </CardHeader>
                                {/* <!-- Shop form --> */}
                                <li class="list-inline-item">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                </li>
                            </Card>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <Card>
                                <CardHeader tag="h5">CreatorsTV</CardHeader>

                                <CardBody>

                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner text-center">
                                            <div class="carousel-item active">
                                                <iframe title="VideoOne" width="200" height="150" src="https://www.youtube.com/embed/odhh4sInQW0"></iframe>
                                            </div>
                                            <div class="carousel-item">
                                                <iframe title="VideoTwo" width="200" height="150" src="https://www.youtube.com/embed/X1uaOtiJ9Vc"></iframe>
                                            </div>
                                            <div class="carousel-item">
                                                <iframe title="VideoThree" width="200" height="150" src="https://www.youtube.com/embed/ivNIpLdzh7M"></iframe>
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
                    {/* <!-- Closing Left Column --> */}
                
                <div className="col order-sm-12 col-sm-6">
                    {blogCard}
                </div>

            </div>
            <h4>TEST</h4>
        </div>
    );
}

export default BlogPages;