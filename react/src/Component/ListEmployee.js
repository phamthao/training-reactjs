import React from 'react';

function ListEmployee(props) {

    function onChange(e) {
        const employee = props.employees.find(employee => employee.id === e.target.value);
        if (typeof props.setEmployee === 'function') {
            props.setEmployee(employee);
        }
    }

    return (
        <header className="text-white text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <div className="form-group">
                            <select className="form-control" value={props.employeeId} onChange={onChange}>
                                {props.employees.map(employee => <option key={employee.id} value={employee.id}>{employee.employee_name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default ListEmployee;