import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListEmployee } from '../state/actions/employee';

class Employee extends Component {
  componentWillMount() {
    this.props.getList();
  }

  componentDidMount() {
    document.title = 'Employee';
  }

  render() {
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

const mapStateToProps = (state) => ({
  list: state.employee.list,
});

const mapDispatchToProps = (dispatch) => ({
  getList: () => {
    dispatch(getListEmployee());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
