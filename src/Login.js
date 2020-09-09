import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import LoginStyles from './css/login.module.css'
import cx from 'classnames'

export default function Login(props) {

    return (
        <div className="container">
            <div class="row">
                <div class="col-12">
                    <form className={LoginStyles.formProfileUpdate}>
                        <h1 className="h3 mb-3 mt-4 font-weight-normal">Login</h1>
                        <label for="inputUsername" className="sr-only">Enter username</label>
                        <input type="username" id="inputUsername" className={cx(LoginStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Username" required autofocus/>
                        <label for="inputPassword" className="sr-only">Enter password</label>
                        <input type="password" id="inputPassword" className={cx(LoginStyles.formControl,"mb-3", "py-2", "pl-0")} placeholder="Enter Password" required autofocus/>
                        <button className={cx(LoginStyles.btnLogin, "btn", "btn-lg", "btn-primary", "btn-block", "mt-4")} type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
