import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListEmployee } from '../actions/Employee';

class Employee extends Component {
 
    componentWillMount() {
        this.props.getList();
    }

    componentDidMount() {
        document.title = 'Employee';
    }

    render() {
        console.log(this.props.list);
        
        return (
            <div>
                {!this.props.list.length ? 'Loading...' : (
                    <select defaultValue="3">
                        {Object.values(this.props.list).map((item, index) => <option key={index} value={item.id}>{item.employee_name}</option>)}
                    </select>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return {
        list: state.employee.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: () => {
            dispatch(getListEmployee())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);