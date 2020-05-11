import React, { Component } from 'react';

class ListEmployee extends Component {

    onChange(e) {
        const employee = this.props.employees.find(employee => employee.id === e.target.value);
        if (typeof this.props.setEmployee === 'function') {
            this.props.setEmployee(employee);
        }
    }

    render() {
        return (
            <header className="text-white text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <div className="form-group">
                                <select className="form-control" value={this.props.employeeId} onChange={this.onChange.bind(this)}>
                                    {this.props.employees.map(employee => <option key={employee.id} value={employee.id}>{employee.employee_name}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default ListEmployee;