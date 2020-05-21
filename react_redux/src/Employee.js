import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ListEmployee from './components/ListEmployee';
import DetailEmployee from './components/DetailEmployee';
import { setList } from './state/actions'

class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentDidMount = () => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(res => {
                const employees = res.data.data;
                this.setState({ ...this.state, employees });
            })
            .catch(error => console.log(error));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.employees) {
            this.props.setList(this.state.employees);
        }
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
        setList: (employees) => {
            dispatch(setList({employees: employees}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);