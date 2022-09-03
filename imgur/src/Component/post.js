import React from "react";
import './Nav.css'

class Posts extends React.Component {
    state = {
        post: []
    }
    componentDidMount() {
        fetch('https://api.facthunt.in/fostergem/v1/post/list/public#', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(result => {
            return result.json();
        }).then(final_result => {
            this.setState({
                post: final_result.content
            })
            //   console.log(final_result.content);
        })
    }
    render() {
        console.log(this.state.post);
        return (
            <div>
                <br /><br/>
                <div className='container pad'>
                    <div className="row">
                        {this.state.post.map(result => {
                            return (
                                <div className="col-lg-3 col-md-4 col-sm-8">
                                    <div className='card card-size'>
                                        <img src={result.coverImageUrl}></img>
                                        <div className='card-body'>
                                            <p>{result.title}</p>
                                            <div className="row">
                                                <div className="col-4">
                                                    <i className="fa fa-arrow-up">{result.approvedBy}</i>
                                                </div>
                                                <div className="col-4">
                                                    <i className="fa fa-comment"></i>
                                                </div>
                                                <div className="col-4">
                                                    <i class="fa fa-eye"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        )
    }
}

export default Posts;