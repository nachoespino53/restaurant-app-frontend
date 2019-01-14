import React, { Component } from 'react';

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    render () {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <div className="box">
                                <h3 className="title has-text-grey">Login</h3>
                                <p className="subtitle has-text-grey">Please login to proceed.</p>
                                    <form>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-large" type="email" placeholder="Your Email" autoFocus="" />
                                            </div>
                                        </div>

                                            <div className="field">
                                                <div className="control">
                                                    <input className="input is-large" type="password" placeholder="Your Password" />
                                                </div>
                                                </div>
                                                <div className="field">
                                                    <label className="checkbox">
                                                        <input type="checkbox" /> Remember me
                                                    </label>
                                                </div>
                                                    <button className="button is-block is-info is-large is-fullwidth">Login</button>
                                    </form>
                            </div>
                                        </div>
            </div>
        </div>
    </section>
        )
    }
}  