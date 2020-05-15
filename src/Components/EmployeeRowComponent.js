import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux'

class EmployeeRowComponent extends React.Component {

    render() {

        return (
            <tr>
       
                <td>{this.props.Employee.id}</td>
                <td>{this.props.Employee.name}</td>
                <td>{this.props.Employee.age}</td>
                <td>{this.props.Employee.gender}</td>
                <td>{this.props.Employee.email}</td>
                <td>{this.props.Employee.phoneNo}</td>
            </tr>

        )

    }

}

export default connect()(EmployeeRowComponent);