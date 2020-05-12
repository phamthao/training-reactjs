import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ListEmployee from './Component/ListEmployee';
import DetailEmployee from './Component/DetailEmployee';

class Employee extends Component {

    componentDidMount = () => {
        this.props.getList();
    }

    render() {
        return (
            <div>
                <ListEmployee employees={this.props.employees}/> 
                <DetailEmployee employee={this.props.employee}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        employees: state.employees,
        employee: state.employee
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getList: () => {
            axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
                dispatch({ type: "SET_LIST", employees: res.data.data });
            })
            .catch(error => console.log(error));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);