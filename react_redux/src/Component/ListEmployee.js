import React from 'react';
import { connect } from 'react-redux';

function ListEmployee(props) {

    function onChange(e) {
        props.setDetail(e.target.value);
    }

    return (
        <header className="text-white text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <div className="form-group">
                            <select className="form-control" onChange={onChange}>
                                <option key={0} value={0}>Please choice</option>
                                {props.employees.map(employee => <option key={employee.id} value={employee.id}>{employee.employee_name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setDetail: (employee_id) => {
            dispatch({ type: "SET_DETAIL", employee_id })
        }
    }
}

export default connect(null, mapDispatchToProps)(ListEmployee);