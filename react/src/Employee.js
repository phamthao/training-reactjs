import React, { Component } from 'react';
import axios from 'axios';
import ListEmployee from './Component/ListEmployee';
import DetailEmployee from './Component/DetailEmployee';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employee: {},
        };
        this.setEmployee = this.setEmployee.bind(this);
    }

    componentDidMount() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
                const employees = res.data.data;
                this.setState({ employees });
                this.setEmployee(employees[1]);
            })
            .catch(error => console.log(error));
        
    }

    setEmployee(data) {
        if (data.employee_age < 23 ) {
            data.employee_avatar = 'https://i.pinimg.com/736x/52/10/29/5210296c2f73746940c5a983839899ae.jpg';
        } else if (data.employee_age < 41) {
            data.employee_avatar = 'https://i.a4vn.com/2017/10/14/gai-xinh-de-thuong-nhat-the-gioi-gap-phat-dung-hinh-874b08.jpg';
        } else {
            data.employee_avatar = 'https://vtv1.mediacdn.vn/k:2015/1-201503276641020150327065925-1427513559594/chan-dung-nguoi-gia-va-tre-em-viet-tuyet-dep-cua-nhiep-anh-gia-phap.jpg';
        }

        this.setState({ employee: data });
    }

    render() {
        return (
            <div>
                <ListEmployee employees={this.state.employees} employeeId={this.state.employee.id} setEmployee={this.setEmployee}/>
                <DetailEmployee employee={this.state.employee}/>
            </div>
        );
    }
}

export default Employee;
