import React, { Component } from 'react';

class DetailEmployee extends Component {

    render() {
        return (
            <section className="testimonials text-center bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <img className="img-fluid rounded-circle mb-3" src={this.props.employee.employee_avatar} alt="" />
                                <h5>{this.props.employee.employee_name}</h5>
                                <p className="font-weight-light mb-0">{this.props.employee.employee_age} years old</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailEmployee;