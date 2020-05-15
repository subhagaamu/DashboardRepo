import React from 'react'
import Axios from 'axios';
import DashboardComponent from './DashboardComponent';
export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            nameError: false,
            pwdError: false,
            loginbutton: false
        }
    }
    handleChange(e) {
        // this.setState({ nameError: false, pwdError: false })
        var name = e.target.name;
        var value = e.target.value
        this.setState({ [name]: value })
        switch (name) {
            case "userName":
                this.setState({ nameError: false })
                var regEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
                var verify = regEmail.test(value)
                if (verify === false) {
                    this.setState({ nameError: true })
                    return;
                }
                break;
            case "password":
                this.setState({ pwdError: false })
                var length = value.length;
                console.log(1)
                if (length !== 9) {
                    this.setState({ pwdError: true })
                }
                break;
            default:
                break;
        }

    }
    handleLogin(e) {
        e.preventDefault();
        var fileName = "Dashboard.json";
        Axios.post('http://localhost:8080/readJsonFile', { fileName }).then((res) => {
            console.log(res.data);
            this.setState({ jsonData: res.data })
            var jsonData = this.state.jsonData;
            var userDetails = jsonData.Login;
            var userName = userDetails.map((user) => user["username"])
            var password = userDetails.map((user) => user["password"])
            console.log(userName)
            console.log(password)
            console.log(this.state.userName)
            console.log(this.state.password)
            if (userName.toString() == this.state.userName && password.toString() == this.state.password) {
                this.setState({ loginbutton: true })
                return;
            }
            else {
                alert("invalid user")
            }
        })
    }
    render() {
        return (
            <div >
                {!this.state.loginbutton && <form className="arrangeForm" onSubmit={(e) => this.handleLogin(e)} autoComplete="off">
                    <div className="form-group ">
                        <label><b>User Name:</b></label>
                        <input type='text' className="form-control" name="userName" onBlur={(e) => this.handleChange(e)} placeholder="UserName" />
                    </div>
                    {this.state.nameError && <div className="alert alert-danger">Please enter valid User Name</div>}
                    <div className="form-group">
                        <label><b>Password:</b></label>
                        <input type='password' className="form-control" name="password" onBlur={(e) => this.handleChange(e)} placeholder="password" />
                    </div>
                    {this.state.pwdError && <div className="alert alert-danger">Password length should be 9 & contain letters and numbers</div>}
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={this.state.userName === "" || this.state.password === "" || this.state.pwdError || this.state.nameError} onClick={(e) => { this.handleLogin(e) }}>Login </button>
                    </div>
                </form>}
                {this.state.loginbutton &&
                    <DashboardComponent></DashboardComponent>}
            </div>
        )
    }
}