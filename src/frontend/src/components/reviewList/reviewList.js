import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ReviewList extends Component {

    render(){
        return(
            <div className="reviewList center">
                <table>
                    <thead>
                        <tr>
                            <th>{this.props.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reviews.map((review) => {
                            return (
                            <tr>
                                <td>
                                    <Link to={`/review/${review.id}`}>
                                        {`Rating:${review.rating}/5 \n ${review.text} \n`}
                                    </Link>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ReviewList;