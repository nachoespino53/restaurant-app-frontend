import React, { Component } from 'react';

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = event => {
        event.preventDefault();
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };


    render () {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <div className="box">
                                <h3 className="title has-text-grey">Login</h3>
                                <p className="subtitle has-text-grey">Please login to proceed.</p>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input"
                                                name="username"
                                                type="text"
                                                placeholder="Username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                                required
                                                autoFocus/>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input"
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
                            </div>
                                        </div>
            </div>
        </div>
    </section>
        )
    }
}  