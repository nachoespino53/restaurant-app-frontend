import React, { Component } from 'react';
import { backendAPI } from '../App';

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = event => {
        event.preventDefault();
        this.fetchLogin();
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    // Fetch call to API

    fetchLogin = () => {
        console.log(this.state)
        fetch(`${backendAPI()}/api/v1/login`, {
            method: "POST",
            headers: {"Accept": "application/json", "Content-Type": "application/json"},
            body: JSON.stringify({user: this.state})
        }).then(res => res.json())
        .then(json => {
            if(json.jwt) {
                localStorage.setItem("token", json.jwt)
            }
        })
        .catch(error => console.error(error))
    };

    errorCheck = () => {

    };

    render () {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                        {/* Box */}
                            <div className="box">
                                <h3 className="title has-text-grey">Login</h3>
                                <p className="subtitle has-text-grey">Please login to proceed.</p>
                                {/* Login Form */}
                                <form onSubmit={this.handleSubmit}>
                                {/* Username */}
                                    <div className="field">
                                        <div className="control">
                                            <input className="input"
                                            id="inputUsername"
                                            name="username"
                                            type="text"
                                            placeholder="Username"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            required
                                            autoFocus/>
                                        </div>
                                    </div>
                                {/* Password */}
                                    <div className="field">
                                        <div className="control">
                                            <input className="input"
                                            id="inputPassword"
                                            name='password'
                                            type="password"
                                            placeholder="Password"
                                            onChange={this.handleChange}
                                            value={this.state.password}
                                            required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                    <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
                                </form>
                                {/* /Login Form */}
                            </div>
                        {/* Box */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}  