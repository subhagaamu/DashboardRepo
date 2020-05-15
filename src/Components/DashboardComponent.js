import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import EmployeeRowComponent from './EmployeeRowComponent';

 class DashboardComponent extends React.Component {
    componentDidMount(){
        var fileName= "Dashboard.json"
        axios.post('http://localhost:8080/readJsonFile',{fileName} )
        .then(response =>{
            this.props.dispatch({
                type:'FETCH_EMPLOYEE',
                Employee:response.data.user
            });

        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
            <table className="table table-striped table-bordered table-hover ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.Employee.map((Employees,index) => <EmployeeRowComponent Employee={Employees} key={index} />)}
                </tbody>
            </table>
            </div>
        )

    }
}

const mapStateToProps =(state) =>{
    return{
        Employee:state 
    }
};

export default connect(mapStateToProps)(DashboardComponent);